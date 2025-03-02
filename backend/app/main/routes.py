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
    form = LoginForm()

    if form.validate_on_submit():
        if form.username.data == "admin" and form.password.data == "admin":
            user = User.query.filter_by(username="admin").first()
            if not user:
                user = User(username="admin")
                user.set_password("password")
                db.session.add(user)
                db.session.commit()
            
            return render_template("main/admin.html", user=user)
        else:
            return render_template("main/index.html", form=form, error="Invalid username or password") 

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
            if uploaded_file.mimetype != 'application/pdf' or not uploaded_file.filename.lower().endswith('.pdf'):
                return jsonify({"error": "Invalid file type. Only PDFs are allowed."}), 400

            # Instance of Document model created
            new_document = Document(
                document_name = uploaded_file.filename.split(".")[0], # Name of the file without the extenstion
                document_type = uploaded_file.filename.split(".")[-1],  # Splits the name by "." and gets the ending (Will always be .pdf, but does worke for any file type)
                file_contents = uploaded_file.read() # This is the binary data of the pdf file
                )
            # Storing the document into the database
            db.session.add(new_document)
            db.session.commit()
            
                


            # Pretend processing complete and return success
            return jsonify({"message": f"File '{uploaded_file.filename}' uploaded successfully!"}), 200

        else:
            return jsonify({"error": "Invalid form data. Please ensure all fields are filled correctly."}), 400

    # If it's a GET request, render the upload.html template
    return render_template("main/upload.html", form=form)

@bp.route("/chat", methods=["POST"])
def chat_message():
    try:
        data = request.get_json()
        user_message = data.get("message")

        if not user_message:
            return jsonify({"error": "Message is required"}), 400

        # Store messages in a list (this might need to change)
        messages = []

        # Store the message in messages list
        messages.append({"type": "Question", "text": user_message})

        return jsonify({"response": "You're connected to chat!"}), 200

    except Exception as e:
        return jsonify({"error": "An internal server error occurred"}), 500

@bp.route('/logout')
# Redirect to login page
def logout():
    return redirect(url_for('main.index'))  

@bp.route("/chat_response", methods=["POST"])
def chat_response():
    # WHEN TESTING, THERE STILL NEEDS TO BE A JSON OBJECT PASSED IN, EVEN WITH THE DEFAULT MESSAGE
    """
        {
            "message": "Why is the sky blue?"
        }
    """
    try:
        # Use the service name 'ollama' as the host
        client = Client(host='http://ollama:11434')
        
        data = request.get_json()
        if not data or "message" not in data:
            return jsonify({"error": "Missing 'message' field in request body"}), 400

        user_message = data["message"]
        # user_message = data.get("message", "Why is the sky blue? Please give a short") # Hard-coded message for testing

        # Get response from Ollama
        response = client.chat(model="llama3.2", messages=[
            {"role": "user", "content": user_message}
        ])

        # Extract the response message
        llm_response = response.message['content']
        print(llm_response, flush=True)
        
        return jsonify({"response": llm_response})

    except Exception as e:
        print(f"Error: {str(e)}", flush=True)
        return jsonify({
            "error": f"An error occurred: {str(e)}"
        }), 500