from app import socketio, db
from app.models import User
from werkzeug.datastructures import FileStorage
from time import sleep
import os
import io


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
    return client


def test_handle_chat_with_no_message(app, socketio_client):
    socketio_client.emit("chat", {"conversationHistory": []})

    received = socketio_client.get_received()
    error_msgs = [msg["args"][0]["error"] for msg in received if msg["name"] == "error"]
    assert "Message is required" in error_msgs


def test_handle_chat_with_no_conversation(app, socketio_client):
    socketio_client.emit("chat", {"message": "Hello"})
    received = socketio_client.get_received()
    error_msgs = [msg["args"][0]["error"] for msg in received if msg["name"] == "error"]
    assert "conversationHistory is required" in error_msgs


def test_handle_chat_with__message_and_history_no_doc(app, socketio_client):
    socketio_client.emit(
        "chat",
        {"conversationHistory": [], "message": "Hello"},
    )
    received = socketio_client.get_received()
    chunk = [msg["args"][0]["chunk"] for msg in received if msg["name"] == "chunk"]
    assert "No document found" in chunk


def test_handle_chat_with__message_and_history_doc(app, client, socketio_client):
    app.config["WTF_CSRF_ENABLED"] = (
        False  # In testing envionment, no need for CSRF_TOKEN
    )
    with app.app_context():
        with client:
            client = login_user(client)
            file_path = os.path.join(os.path.dirname(__file__), "test_data", "Dna.pdf")
            with open(file_path, "rb") as f:
                # Create a FileStorage object from the file content
                pdf_file = FileStorage(
                    stream=io.BytesIO(f.read()),
                    filename="Dna.pdf",
                    content_type="application/pdf",
                )
            data = {
                "pdf_file": (io.BytesIO(pdf_file.read()), "Dna.pdf"),
            }
            response = client.post(
                "/admin", data=data, content_type="multipart/form-data"
            )

    socketio_client.emit(
        "chat",
        {
            "conversationHistory": [
                {"sender": "User", "text": "hi"},
                {"sender": "Chatbot", "text": "hi"},
            ],
            "message": "Tell me about DNA",
        },
    )
    received = socketio_client.get_received()
    chunks = [msg["args"][0]["chunk"] for msg in received if msg["name"] == "chunk"]
    assert chunks
    assert len(chunks) >= 1
    assert any((chunk.strip() and chunk != "No document found") for chunk in chunks)
