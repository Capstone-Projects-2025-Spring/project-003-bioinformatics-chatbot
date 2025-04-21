from app import socketio

def test_handle_chat_with_no_message(app, client):
    test_client = socketio.test_client(app)
    print(test_client.is_connected())
    test_client.emit("chat", {"conversationHistory": []})
    received = test_client.get_received()
    print(received)
    error_msgs = [msg["args"][0]["error"] for msg in received if msg["name"] == "error"]
    assert "Message is required" in error_msgs

# def test_handle_chat_with_no_conversation(client):
#     client.emit("chat", {"message": "Hello"})
#     received = client.get_received()
#     error_msgs = [msg["args"][0]["error"] for msg in received if msg["name"] == "error"]
#     assert "conversationHistory is required" in error_msgs