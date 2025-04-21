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
    app.config["WTF_CSRF_ENABLED"] = False

    with app.app_context():
        client = login_user(client)
        # Path to the test file inside the test_data folder
        file_path = os.path.join(os.path.dirname(__file__), "test_data", "test.pdf")

        # Open the file in binary read mode and create a FileStorage object
        with open(file_path, "rb") as f:
            pdf_file = FileStorage(
                stream=io.BytesIO(f.read()),
                filename="test.pdf",
                content_type="application/pdf",
            )

        # Prepare the data dictionary with the file for upload
        data = {"pdf_file": (pdf_file, "test.pdf")}

        # Make the POST request to the admin route

        response =  client.post("/admin", data=data, content_type='multipart/form-data')
        assert response.status_code == 200, f"Upload failed: {response.json}"
        assert "document" in response.json


        return db.session.query(Document).filter_by(document_name="test").first()


def test_delete_valid_document(client, app):
    """
    ✅ Tests successful deletion of an existing document and its embeddings.
    """
    uploaded_doc = upload_test_document(client, app)

    item_id = uploaded_doc.id

    response = client.delete(f"/delete/{item_id}")
    assert response.status_code == 200, f"Delete failed: {response.json}"
    assert response.json["success"], "Delete request did not return success"

    with app.app_context():
        vector_db = app.vector_db
        deleted_doc = db.session.query(Document).filter_by(id=item_id).first()
        assert deleted_doc is None, "Document was not deleted"

        embedding_exists_after = db.session.execute(
            select(vector_db.EmbeddingStore).where(
                vector_db.EmbeddingStore.id.like(
                    f"%{uploaded_doc.document_name}.{uploaded_doc.document_type}%"
                )
            )
        ).fetchone()
        assert embedding_exists_after is None, "Embeddings were not deleted"


def test_delete_non_existent_document(client):
    """
    ❌ Tests deletion of a non-existent document.
    Expected: 404 Not Found
    """
    non_existent_id = 9999
    response = client.delete(f"/delete/{non_existent_id}")

    assert response.status_code == 404, f"Expected 404, but got {response.status_code}"
    assert not response.json["success"], "Response should indicate failure"


def test_delete_database_error(client, app, monkeypatch):
    """
    ❌ Simulates a database error to ensure proper rollback and 500 response.
    Expected: 500 Internal Server Error
    """

    def faulty_commit():
        raise Exception("Simulated DB failure")

    uploaded_doc = upload_test_document(client, app)
    assert uploaded_doc is not None, "Failed to retrieve uploaded document"

    item_id = uploaded_doc.id

    with app.app_context():
        monkeypatch.setattr(
            db.session, "commit", faulty_commit
        )  # Force DB commit to fail

        response = client.delete(f"/delete/{item_id}")

        assert (
            response.status_code == 500
        ), f"Expected 500, but got {response.status_code}"
        assert not response.json["success"], "Response should indicate failure"

        # Ensure document was not deleted due to rollback
        doc_exists = db.session.query(Document).filter_by(id=item_id).first()
        assert doc_exists is not None, "Document should not be deleted after rollback"

