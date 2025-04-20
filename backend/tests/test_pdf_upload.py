import io
from werkzeug.datastructures import FileStorage
import os
from app.models import User, Document
from app import db



def login_user(client):
    test_user = User(username="testuser")
    test_user.set_password("password")
    db.session.add(test_user)
    db.session.commit()
    response = client.post(
        "/index",
        data={"username": "testuser", "password": "password"},
        follow_redirects=True,
    )
    assert response.status_code == 200

    return client

def test_upload_pdf_valid(client, app):
    app.config['WTF_CSRF_ENABLED'] = False
    

    with app.app_context():
        client = login_user(client)
        # Path to the test file inside the test_data folder
        file_path = os.path.join(os.path.dirname(__file__), 'test_data', 'test.pdf')

        # Open the file in binary read mode
        with open(file_path, 'rb') as f:
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
        
    
        # Make the POST request to the upload route
        upload_response =  client.post("/admin", data=data, content_type='multipart/form-data')

    # Get the JSON response using get_json()
        response_data = upload_response.get_json()
    
    # Ensure the response data is not None before accessing
        assert response_data is not None  # Ensure the response is valid JSON
    
    # Check the JSON message
        assert upload_response.status_code == 200
        assert response_data["message"] == "File 'test.pdf' uploaded successfully!"


def test_upload_pdf_dup(client, app):
    app.config['WTF_CSRF_ENABLED'] = False
    

    with app.app_context():
        client = login_user(client)
        # Path to the test file inside the test_data folder
        file_path = os.path.join(os.path.dirname(__file__), 'test_data', 'Dna.pdf')

        # Open the file in binary read mode
        with open(file_path, 'rb') as f:
            # Create a FileStorage object from the file content
            pdf_file = FileStorage(
                stream=io.BytesIO(f.read()),
                filename="Dna.pdf",
                content_type="application/pdf",
            )

        # Prepare the data dictionary with the file for upload
        data = {
            "pdf_file": (io.BytesIO(pdf_file.read()), "Dna.pdf"),
        }

        # Make the POST request to the upload route First time
        upload_response = client.post("/admin", data=data, content_type='multipart/form-data')

        # Open the file again in binary read mode
        with open(file_path, 'rb') as f2:
            # Create a FileStorage object from the file content
            pdf_file2 = FileStorage(
                stream=io.BytesIO(f2.read()),
                filename="Dna.pdf",
                content_type="application/pdf",
            )
        
        # Prepare the data dictionary with the file for upload
        data = {
            "pdf_file": (io.BytesIO(pdf_file2.read()), "Dna.pdf"),
        }
        
    
        # Make the POST request to the upload route Second time
        upload_response_2 = client.post("/admin", data=data, content_type='multipart/form-data')

    # Get the JSON response using get_json()
        response_data = upload_response_2.get_json()
    
    # Ensure the response data is not None before accessing
        assert response_data is not None  # Ensure the response is valid JSON
    
    # Check the JSON message
        assert upload_response_2.status_code == 409
        assert response_data["error"] == "A document named 'Dna.pdf' already exists."