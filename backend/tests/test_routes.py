import json
from unittest.mock import patch

# from conftest import client
# from app.main.routes import chat_response
import pytest


def test_chat_response_success(client):
    client.post("/index", data={"username": "testuser", "password": "password"})
    with patch("app.main.routes.Client.chat") as mock_chat:
        mock_chat.return_value.message = {
            "content": "The sky is blue because of MAGIC!"
        }

        response = client.post("/chat", json={"message": "Why is the sky blue?", "conversationHistory": []})

        assert response.status_code == 200

        data = json.loads(response.data)
        assert "response" in data
        assert data["response"] == "The sky is blue because of MAGIC!"


def test_chat_response_no_message(client):
    response = client.post("/chat", json={})
    assert response.status_code == 400
    data = json.loads(response.data)
    assert "error" in data
    assert data["error"] == "Message is required"

