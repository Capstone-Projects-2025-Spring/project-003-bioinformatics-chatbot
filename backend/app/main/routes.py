from io import BytesIO
from flask import jsonify, render_template, redirect, send_file, url_for, request, session
from app.main import bp
from app.models import User
from app import db
from flask import current_app
from app.models import Document

from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_core.messages import HumanMessage, AIMessage
from langchain_ollama.llms import OllamaLLM
from langchain_community.chat_message_histories import ChatMessageHistory

import ollama
from ollama import chat
from ollama import ChatResponse
from ollama import Client

from app.main.forms import LoginForm, PDFUploadForm
from app.doc_parsers.process_doc import process_doc
from app.doc_indexer.retrieve_document import query_database
from sqlalchemy import delete
from sqlalchemy.exc import SQLAlchemyError


from flask_login import login_required, current_user, logout_user, login_user

"""
Places for routes in the backend
"""

llm = OllamaLLM(model="llama3.2", base_url="http://ollama:11434")


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
   # fetch all document from database
    documents = db.session.query(Document).all()

    form = LoginForm()
    # Check for correct password/username
    if form.validate_on_submit():

        user = User.query.filter_by(username=form.username.data).first()
        if user and user.check_password(form.password.data):
            login_user(user)
            # Render admin page if login is successful
            return redirect(url_for("main.admin"))

        else:
            # return error to index page
            return render_template(
                "main/index.html", form=form, error="Invalid username or password", documents=documents
            )
    # Pass the forms here.
    return render_template("main/index.html", form=form, documents=documents)


@bp.route("/admin", methods=["GET", "POST"])
@login_required
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

    form = PDFUploadForm()
    # fetch all document from database
    documents = db.session.query(Document).all()

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
            existing_document = (
                db.session.query(Document)
                .filter_by(document_name=file_name, document_type=file_type)
                .first()
            )

            if existing_document:
                return (
                    jsonify({
                        "error": f"A document named '{uploaded_file.filename}' already exists."
                    }),
                    409,
                )

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
                jsonify({
                    "message": f"File '{uploaded_file.filename}' uploaded successfully!", "document": {
                        "id": new_document.id,
                        "name": file_name,
                        "type": file_type,
                        "size": len(new_document.file_contents)
                        }
                        }),
                200,
            )
        else:
            return (
                jsonify({
                    "error": "Invalid form data. Please ensure all fields are filled correctly."
                }),
                400,
            )

    documents = db.session.query(Document).all()
    return render_template("main/admin.html", user=current_user, documents=documents, upload_form=form)


@bp.route("/delete/<int:item_id>", methods=["DELETE"])
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
            return (
                jsonify({"success": False, "message": f"Item {item_id} not found"}),
                404,
            )

        vector_db = current_app.vector_db

        # Delete associated embeddings (case-sensitive match)
        db.session.execute(
            delete(vector_db.EmbeddingStore).where(
                vector_db.EmbeddingStore.id.like(
                    f"%{document.document_name}.{document.document_type}%"
                )
            )
        )
        # Delete the document itself
        db.session.delete(document)

        # Commit the transaction
        db.session.commit()

        return (
            jsonify(
                {"success": True, "message": f"Item {item_id} deleted successfully"}
            ),
            200,
        )

    except Exception as e:
        db.session.rollback()  # Rollback changes on failure
        return jsonify({'success': False, 'message': 'Failed to delete item', 'error': str(e)}), 500
    
@bp.route("/download/<int:item_id>", methods=["GET"])
def download_document(item_id):
    """
    Downloads a document from the database.

    This endpoint:
      - Fetches the document with the given `item_id`.
      - Gets the binary file content for the PDF file.
      - Uses the document_type and the document_name to get the full file name.

    Args:
        item_id (int): The unique identifier of the document to download.

    Returns:
        Response (File): The PDF file,
                         or an error if the document is not found/the download fails.
    """
    try:
        # Retrieve the document by ID
        document = db.session.query(Document).get(item_id)

        # Send an error if the document could not be found
        if not document:
            return jsonify({'success': False, 'message': f'Item {item_id} not found'}), 404

        # Gets the fullname by combining the name and the type
        filename = f"{document.document_name}.{document.document_type}"
        
        # Sends the document with the proper name and the content of the file for download
        return send_file(
            BytesIO(document.file_contents),
            mimetype="application/pdf",
            download_name=filename,
            as_attachment=True
        )

    except Exception as e:
        return jsonify({'success': False, 'message': 'Failed to download document', 'error': str(e)}), 500



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

"""
@bp.route("/upload", methods=["GET", "POST"])
@login_required  # Ensure user is logged in to access this route
def upload_pdf():
   
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
            file_name = uploaded_file.filename.rsplit(".", 1)[
                0
            ]  # Name without extension
            file_type = uploaded_file.filename.rsplit(".", 1)[
                -1
            ]  # File extension (should be 'pdf')

            # Check if a document with the same name and type already exists
            existing_document = (
                db.session.query(Document)
                .filter_by(document_name=file_name, document_type=file_type)
                .first()
            )

            if existing_document:
                return (
                    jsonify(
                        {
                            "error": f"A document named '{uploaded_file.filename}' already exists."
                        }
                    ),
                    409,
                )

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
                        ,"redirect_url": url_for("main.upload_pdf")
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
    else:
        return render_template("main/upload.html", form=form)

    """

@bp.route("/chat", methods=["POST"])
def chat_message():
    try:
        data = request.get_json()

        if not data or "message" not in data:
            return jsonify({"error": "Message is required"}), 400

        if not data or "conversationHistory" not in data:
            return jsonify({"error": "conversationHistory is required"}), 400
        
        if not data or "doc_toggle" not in data:
            return jsonify({"error": "doc_toggle is required"}), 400

        user_message = data["message"]

        history = ChatMessageHistory()

        for chat in data["conversationHistory"]:
            if chat["sender"] == "User":
                history.add_user_message(chat["text"])
            elif chat["sender"] == "Chatbot":
                history.add_ai_message(chat["text"])
        print("Chat History:", history.messages, flush=True)

        # Getting the documentation (chunks) based on the query
        Documents = query_database(user_message)

        # Mock the scores only if in testing mode
        if current_app.config.get("TESTING", False):
            Documents = [(doc, 0.9) for doc, _ in Documents]  # Override scores to 0.9

        for doc, score in Documents:
            print(f"Score: {score}")
            print("---")

        # Filter documents with similarity score ≥ 0.90
        filtered_docs = [(doc, score) for doc, score in Documents if score >= 0]

        # If doc_toggle is set to False, return the response regardless of document context
        if data["doc_toggle"] is True:
            filtered_docs = [(doc, score) for doc, score in Documents if score >= 0.5]
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

        # Joining the filtered chunks together
        context = "\n\n---\n\n".join([doc.page_content for doc, _ in filtered_docs])

        # Using the LLM to generate a response based on the context and user message
        # Defined prompt template that is used when sending the LLM each query, to help refine answers

        system_message = (
            "You are a Retrieval Augmented Generation (RAG) model.\n"
            "You have access to a large set of documents regarding various subjects in BioInformatics.\n"
            "You are not allowed to make up information.\n"
        )

        if data["doc_toggle"] is True:
            system_message += (
                "You are not allowed to answer questions that are not in the context.\n"
                "You are only to answer questions based on the provided context.\n"
                "If a question is not in the context, you should say 'I don't know'.\n"
            )
        
        system_message += (
            "Please give all responses in markdown (.md) format.\n" # Markdown format for better readability
            "---\n"
            "Context:\n{context}\n" # Insert relevent documents as 'context'
            "---",
        )

        prompt_template = ChatPromptTemplate.from_messages(
            [
                ("system", system_message), # System message to set the context
                MessagesPlaceholder(variable_name="history"), # Insert conversation history
                ("human", "{user_message}"), # Insert user query
            ]
        )

        chain = prompt_template | llm

        response = chain.invoke(
            {
                "context": context,
                "history": history.messages,
                "user_message": user_message,
            }
        )

        # Print the filtered documents
        print("Chunks:")
        for doc, score in filtered_docs:
            print(f"Document content: {doc.page_content}")
            print(f"Score: {score}")
            print("---")

        print(f"Response: {response}", flush=True)

        return jsonify({"response": response})

    except Exception as e:
        print(f"Error: {str(e)}", flush=True)
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500


from flask import request, flash, redirect, render_template, url_for
from werkzeug.security import check_password_hash, generate_password_hash

@bp.route("/change_password", methods=["POST"])
@login_required
def change_password():
    data = request.get_json()

    current = data.get("old_password")
    new = data.get("new_password")

    if not current or not new:
        return jsonify({"success": False, "message": "Missing required fields."}), 400

    if not check_password_hash(current_user.password_hash, current):
        return jsonify({"success": False, "message": "Current password is incorrect."}), 400

    if new == current:
        return jsonify({"success": False, "message": "New password cannot be the same as the current password."}), 400

    current_user.password_hash = generate_password_hash(new)
    db.session.commit()

    return jsonify({"success": True, "message": "Password changed successfully."}), 200


@bp.route("/logout")
@login_required  # Ensure user is logged in to access this route
# Redirect to login page
def logout():
    logout_user()  # Log out the current user
    db.session.commit()
    return redirect(url_for("main.index"))


from app.doc_parsers.parse_pdf import DATA_PATH, load_documents
from app.doc_parsers.parse_pdf import split_documents
from app.doc_indexer.index_doc import index_and_add_to_db
from app.doc_indexer.retrieve_document import query_database


@bp.route("/test_indexing", methods=["GET"])
def test_indexing():
    documents = load_documents(DATA_PATH)
    chunks = split_documents(documents)
    index_and_add_to_db(chunks)
    doc = query_database("cell cycle")
    print(doc)

    return {"awesome": "it works :)", "doc": f"{doc[0][0].page_content}"}, 200
