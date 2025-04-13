import os
import io
from werkzeug.datastructures import FileStorage
from app.models import Document, User
from app import db
from sqlalchemy import select

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


def upload_test_document(client, app):
    """
    Helper function to upload a test document.
    Returns the uploaded document object.
    """
    app.config['WTF_CSRF_ENABLED'] = False
    
    with app.app_context():
        client = login_user(client)
        # Path to the test file inside the test_data folder
        file_path = os.path.join(os.path.dirname(__file__), 'test_data', 'test.pdf')

        # Open the file in binary read mode and create a FileStorage object
        with open(file_path, 'rb') as f:
            pdf_file = FileStorage(
                stream=io.BytesIO(f.read()),
                filename="test.pdf",
                content_type="application/pdf",
            )

        # Prepare the data dictionary with the file for upload
        data = {"pdf_file": (pdf_file, "test.pdf")}

        # Make the POST request to the upload route
        response = client.post("/upload", data=data, content_type='multipart/form-data', follow_redirects=True)
        assert response.status_code == 200, f"Upload failed: {response.json}"

        return db.session.query(Document).filter_by(document_name="test").first()
    

def test_download_document_success(client, app):
    """
    Test that a pdf document can be downloaded.
    """
    
    uploaded_doc = upload_test_document(client, app)
    item_id = uploaded_doc.id
    
    response = client.get(f"/download/{item_id}")


    with app.app_context():
        
        
        assert response.status_code == 200
        assert response.mimetype == "application/pdf"
        assert response.headers["Content-Disposition"].startswith("attachment;")
        assert f"{uploaded_doc.document_name}.{uploaded_doc.document_type}" in response.headers["Content-Disposition"]
        assert isinstance(response.data, bytes)
        assert len(response.data) > 0

def test_download_document_not_found(client, app):
    """
    Test that a pdf document that does not exist returns an error.
    """
    non_existent_id = 9999
        
    response = client.get(f"/download/{non_existent_id}")
        
    assert response.status_code == 404
    assert not response.json["success"], "Response should indicate failure"
    assert response.json["message"] == f"Item {non_existent_id} not found"

def test_download_document_internal_error(client, app, monkeypatch):
    """
     Simulates an internal DB error during download to ensure proper 500 response.
    Expected: 500 Internal Server Error
    """

    def faulty_get(*args, **kwargs):
        raise Exception("Simulated DB failure")

    
    uploaded_doc = upload_test_document(client, app)
    assert uploaded_doc is not None, "Failed to retrieve uploaded document"

    item_id = uploaded_doc.id

    with app.app_context():
        
        monkeypatch.setattr(db.session, "query", lambda *a, **k: type("MockQuery", (), {"get": faulty_get})())

        response = client.get(f"/download/{item_id}")

        assert response.status_code == 500, f"Expected 500, but got {response.status_code}"
        assert not response.json["success"], "Response should indicate failure"
        assert response.json["message"] == "Failed to download document"
        