def test_chat_message_valid(client):
    # Test sending a valid message to the chat route
    response = client.post(
        "/chat",
        json={
            "message": "Hello, chatbot!",
            "conversationHistory": [],
            "doc_toggle": False,
        },
    )

    # Check for status code and response
    assert response.status_code == 200
    json_data = response.get_json()
    assert "response" in json_data
    assert json_data["response"] != ""
    assert json_data["response"] != None


def test_chat_message_missing(client):
    # Test sending a request with no message
    response = client.post("/chat", json={})

    # Check for status code and error response
    assert response.status_code == 400
    json_data = response.get_json()
    assert "error" in json_data
    assert json_data["error"] == "Message is required"


def test_no_history(client):
    # Test sending a request with no doc_toggle
    response = client.post("/chat", json={"message": "Hello, chatbot!"})

    # Check for status code and error response
    assert response.status_code == 400
    json_data = response.get_json()
    assert "error" in json_data
    assert json_data["error"] == "conversationHistory is required"


def test_no_doc_toggle(client):
    # Test sending a request with no doc_toggle
    response = client.post(
        "/chat", json={"message": "Hello, chatbot!", "conversationHistory": []}
    )

    # Check for status code and error response
    assert response.status_code == 400
    json_data = response.get_json()
    assert "error" in json_data
    assert json_data["error"] == "doc_toggle is required"

