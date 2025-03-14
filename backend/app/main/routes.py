from flask import jsonify, render_template, redirect, url_for, request
from app.main import bp
from app.models import User
from app import db
from app.models import Document

import ollama
from ollama import chat
from ollama import ChatResponse
from flask import request, jsonify
from ollama import Client

from app.main.forms import LoginForm, PDFUploadForm
from app.doc_parsers.process_uploaded_file import process_uploaded_file

"""
Places for routes in the backend
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

            # how to make a simple query

            user = User.query.filter_by(username="admin").first()
            if not user:
                user = User(username="admin")
                user.set_password("password")
                db.session.add(user)
                db.session.commit()

            # Render admin page if login is successful
            return render_template("main/admin.html", user=user)
        else:
            # return error to index page
            return render_template(
                "main/index.html", form=form, error="Invalid username or password"
            )

    # Pass the forms here.

    return render_template("main/index.html", form=form)


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


            #Process the upload file to the parser and index 
            process_uploaded_file(uploaded_file)

            # Pretend processing complete and return success
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
        
        user_message = data["message"]

        # Store the message in messages list
        response = client.chat(
            model="llama3.2", messages=[{"role": "user", "content": user_message}]
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
