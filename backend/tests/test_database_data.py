import io
from app.models import Document
from app import db
from app.models import User
from werkzeug.datastructures import FileStorage
import os

import pypdf 


        
def test_content_file(client, app):
    app.config["WTF_CSRF_ENABLED"] = (
        False  # In testing envionment, no need for CSRF_TOKEN
    )
    with app.app_context():
        test_user = User(username="testuser")
        test_user.set_password("password")
        db.session.add(test_user)
        db.session.commit()
        client.post("/index", data={"username": "testuser", "password": "password"})
        # Path to the test file inside the test_data folder
        file_path = os.path.join(os.path.dirname(__file__), "test_data", "test.pdf")

        # Open the file in binary read mode
        with open(file_path, "rb") as f:
            # Create a FileStorage object from the file content
            pdf_file = FileStorage(
                stream=io.BytesIO(f.read()),
                filename="test.pdf",
                content_type="application/pdf",
            )

        # Prepare the data dictionary with the file for upload
        data = {
            "pdf_file": (io.BytesIO(pdf_file.read()), "test.pdf"),
        }

        # Post request testing the /uplouad route
        response = client.post("/upload", data=data, content_type="multipart/form-data")

        # Making sure that document was moved into database sucessfully
        assert response.status_code == 200

        # Getting the information of the test.pdf and checking to see if the type is correct and the data

        uploaded_file = Document.query.filter_by(document_name="test").first()
        assert uploaded_file.document_type == "pdf"

        # Extracts text from a PDF given its binary content
        with io.BytesIO(uploaded_file.file_contents) as file:
            reader = pypdf.PdfReader(file)
            text = ""
            for page in reader.pages:

                # Handle cases where extract_text() returns None
                text += page.extract_text() or ""  
            extracted_text = text.strip()
        
        assert extracted_text == "I like candy"


def test_validation(client, app):
    # Disable CSRF for testing purposes
    app.config["WTF_CSRF_ENABLED"] = False

    with app.app_context():
        test_user = User(username="testuser")
        test_user.set_password("password")
        db.session.add(test_user)
        db.session.commit()
        client.post("/index", data={"username": "testuser", "password": "password"})
        # Testing for no document uploaded
        data = {}
        response = client.post("/upload", data=data, content_type="multipart/form-data")

        #  Making sure the error is being sent
        assert response.status_code == 400
        # Error message
        assert (
            b"Invalid form data. Please ensure all fields are filled correctly."
            in response.data
        )

