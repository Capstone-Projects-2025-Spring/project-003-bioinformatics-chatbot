def test_chat_message_valid(client):
    # Test sending a valid message to the chat route
    response = client.post("/chat", json={"message": "Hello, chatbot!"})

    # Check for status code and response 
    assert response.status_code == 200
    json_data = response.get_json()
    assert "response" in json_data
    assert json_data["response"] == "You're connected to chat!"

