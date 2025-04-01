from flask import jsonify, render_template, redirect, url_for, request, session
from app.main import bp
from app.models import User
from app import db
from flask import current_app
from app.models import Document

from langchain.prompts import ChatPromptTemplate

import ollama
from ollama import chat
from ollama import ChatResponse
from flask import request, jsonify
from ollama import Client

from app.main.forms import LoginForm, PDFUploadForm
from app.doc_parsers.process_doc import process_doc
from app.doc_indexer.retrieve_document import query_database
from sqlalchemy import delete
from sqlalchemy.exc import SQLAlchemyError
"""
Places for routes in the backend
"""

# test

PROMPT_TEMPLATE = """
Answer this question based only on the following text:
{context}
---

Conversation history:
{chat_history}

User's current question:
{question}

---
Answer the question in details and give me quotes based on the above context
"""


@bp.route("/", methods=["GET", "POST"])
@bp.route("/index", methods=["GET", "POST"])
def index():
    """
    Author: Troy Witmer
    Date: 02/06/2025
    Description: Sample route, currently index endpoint.

    Author: Justin Truong
    Date: 02/12/2025
    Description: Added a admin login.

    """

    # login form
    form = LoginForm()

    # Check for correct password/username
    if form.validate_on_submit():
        if form.username.data == "admin" and form.password.data == "admin":


           
            # Render admin page if login is successful
            return redirect(url_for('main.admin'))
        else:
            # return error to index page
            return render_template(
                "main/index.html", form=form, error="Invalid username or password"
            )

    # Pass the forms here.

    return render_template("main/index.html", form=form)

@bp.route('/admin')
def admin():
    """
    Direct to the admin dashboard with List document UI

    """

    # how to make a simple query
    user = User.query.filter_by(username="admin").first()
    if not user:
        user = User(username="admin")
        user.set_password("password")
        db.session.add(user)
        db.session.commit()

    # fetch all document from database
    documents = db.session.query(Document).all()
    
    return render_template("main/admin.html", user=user, documents=documents)

@bp.route('/delete/<int:item_id>', methods=['DELETE'])
def delete_item(item_id):
    """
    Deletes a document and its associated vector embeddings from the database.

    This endpoint:
      - Deletes the document with the given `item_id`.
      - Removes related embeddings from the `EmbeddingStore`, where the `id` contains `document_name` (case-sensitive).
      - Ensures transactional integrity by rolling back in case of failure.

    Args:
        item_id (int): The unique identifier of the document to delete.

    Returns:
        Response (JSON): A success message if deletion is successful, 
                         or an error message with appropriate HTTP status codes.
    """
    try:
        # Retrieve the document by ID
        document = db.session.query(Document).get(item_id)

        if not document:
            return jsonify({'success': False, 'message': f'Item {item_id} not found'}), 404

        vector_db = current_app.vector_db

        # Delete associated embeddings (case-sensitive match)
        db.session.execute(
            delete(vector_db.EmbeddingStore).where(vector_db.EmbeddingStore.id.like(f"%{document.document_name}.{document.document_type}%"))
        )
        # Delete the document itself
        db.session.delete(document)

        # Commit the transaction
        db.session.commit()

        return jsonify({'success': True, 'message': f'Item {item_id} deleted successfully'}), 200

    except Exception as e:
        db.session.rollback()  # Rollback changes on failure
        return jsonify({'success': False, 'message': 'Failed to delete item', 'error': str(e)}), 500

@bp.route("/test", methods=["GET"])
def test():
    """
    A route to test the flask and react connection and database query for admin.
    """
    # Once I log in as an admin, the user (admin) should be returned
    user = User.query.filter_by(username="admin").first()
    if user:
        return jsonify({"message": f"Hello: {user.username}"}), 200
    else:
        return jsonify({"message": "No one is here :()."}), 200


@bp.route("/upload", methods=["GET", "POST"])
def upload_pdf():
    """
    Handles PDF uploads, for now I'm just pretend processing the file and returning success if processed.
    Keith will implement the actual database storage (done).
    """
    form = PDFUploadForm()

    if request.method == "POST":  # Handle form submission
        if form.validate_on_submit():
            uploaded_file = form.pdf_file.data

            # Check if a file was uploaded
            if not uploaded_file:
                return jsonify({"error": "No file uploaded"}), 400

            # Check if the uploaded file is a PDF (MIME type and file extension)
            if (
                uploaded_file.mimetype != "application/pdf"
                or not uploaded_file.filename.lower().endswith(".pdf")
            ):
                return (
                    jsonify({"error": "Invalid file type. Only PDFs are allowed."}),
                    400,
                )

            # Extract file name and type
            file_name = uploaded_file.filename.rsplit(".", 1)[0]  # Name without extension
            file_type = uploaded_file.filename.rsplit(".", 1)[-1]  # File extension (should be 'pdf')

            # Check if a document with the same name and type already exists
            existing_document = db.session.query(Document).filter_by(
                document_name=file_name, document_type=file_type
            ).first()

            if existing_document:
                return jsonify({"error": f"A document named '{uploaded_file.filename}' already exists."}), 409

            # Create new document instance
            new_document = Document(
                document_name=file_name,
                document_type=file_type,
                file_contents=uploaded_file.read(),  # Store binary PDF data
            )
            
            # Storing the document into the database
            db.session.add(new_document)
            db.session.commit()
            # Process the upload doc to the parser and index
            process_doc(new_document)
            
            
            return (
                jsonify(
                    {
                        "message": f"File '{uploaded_file.filename}' uploaded successfully!"
                    }
                ),
                200,
            )

        else:
            return (
                jsonify(
                    {
                        "error": "Invalid form data. Please ensure all fields are filled correctly."
                    }
                ),
                400,
            )

    # If it's a GET request, render the upload.html template
    return render_template("main/upload.html", form=form)


@bp.route("/chat", methods=["POST"])
def chat_message():
    try:
        client = Client(host="http://ollama:11434")

        data = request.get_json()

        if not data or "message" not in data:
            return jsonify({"error": "Message is required"}), 400
        
        if not data or "conversationHistory" not in data:
            return jsonify({"error": "conversationHistory is required"}), 400
        
        user_message = data["message"]
        history = data["conversationHistory"]
         # Getting the documentation (chunks) based on the query

        Documents = query_database(user_message)

        # Filter documents with similarity score ≥ 0.90
        filtered_docs = [(doc, score) for doc, score in Documents if score >= 0.90]

        # If no document meets the threshold, return a message to the frontend
        if not filtered_docs:
            return (
                jsonify(
                    {
                        "response": "No document found",
                        "message": "No relevant information available.",
                    }
                ),
                200,
            )

        prompt_template = ChatPromptTemplate.from_template(PROMPT_TEMPLATE)
        prompt = prompt_template.format(context= filtered_docs, chat_history = history, question = user_message)
        
        print(prompt)

        # Print the filtered documents
        print("Chunks:")
        for doc, score in filtered_docs:
            print(f"Document content: {doc.page_content}")
            print(f"Score: {score}")
            print("---")

        # Joining the filtered chunks together
        chunks = "\n\n---\n\n".join([doc.page_content for doc, _ in filtered_docs])

        # Formatting the question so that the LLM has proper context for the question
        prompt = f"{chunks}\n\nUser question: {user_message}"

        # Store the message in messages list
        response = client.chat(
            model="llama3.2", messages=[{"role": "user", "content": prompt}]
        )

        llm_response = response.message["content"]
        print(llm_response, flush=True)

        return jsonify({"response": llm_response})

    except Exception as e:
        print(f"Error: {str(e)}", flush=True)
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500


@bp.route("/logout")
# Redirect to login page
def logout():
    return redirect(url_for("main.index"))