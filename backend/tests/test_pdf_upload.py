import io
from werkzeug.datastructures import FileStorage
import os
from app.models import User, Document
from app import db

def test_upload_pdf_valid(client, app):
    app.config['WTF_CSRF_ENABLED'] = False;
    client.post("/index", data={"username": "testuser", "password": "password"})
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
    client = User.query.filter_by(username="admin").first()
    
    # Make the POST request to the upload route
    upload_response = client.post("/upload", data=data, follow_redirects=True)

    # Get the JSON response using get_json()
    response_data = upload_response.get_json()
    
    # Ensure the response data is not None before accessing
    assert response_data is not None  # Ensure the response is valid JSON
    
    # Check the JSON message
    assert upload_response.status_code == 200
    assert response_data["message"] == "File 'test.pdf' uploaded successfully!"