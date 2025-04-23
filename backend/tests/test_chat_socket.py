from langchain_core.runnables import Runnable
from typing import Iterator, Optional, Any

# Define a MockLLM class that simulates a language model's streaming behavior
class MockLLM(Runnable):
    def invoke(self, inputs, config=None, **kwargs):
        return "This won't be used."  # This method is not utilized for streaming test

    def stream(self, inputs, config: Optional[Any] = None, **kwargs: Optional[Any]) -> Iterator[str]:
        # Simulate streaming chunks of data (e.g., paragraphs of text)
        yield "BioInformatics combines biology and computer science."
        yield "It helps analyze DNA sequences and protein structures."

# Test case for when there is no 'message' in the chat request
def test_handle_chat_with_no_message(app, socketio_client):
    # Emit a 'chat' event with no 'message' field
    socketio_client.emit("chat", {"conversationHistory": []})

    # Retrieve the messages received from the server
    received = socketio_client.get_received()

    # Extract the error messages to validate the response
    error_msgs = [msg["args"][0]["error"] for msg in received if msg["name"] == "error"]

    # Assert that the expected error message is present
    assert "Message is required" in error_msgs


# Test case for when there is no 'conversationHistory' in the chat request
def test_handle_chat_with_no_conversation(app, socketio_client):
    # Emit a 'chat' event with no 'conversationHistory' field
    socketio_client.emit("chat", {"message": "Hello"})

    # Retrieve the messages received from the server
    received = socketio_client.get_received()

    # Extract the error messages to validate the response
    error_msgs = [msg["args"][0]["error"] for msg in received if msg["name"] == "error"]

    # Assert that the expected error message is present
    assert "conversationHistory is required" in error_msgs


# Test case for when the message and history are valid but no document is found
def test_handle_chat_with__message_and_history_no_doc(app, socketio_client, monkeypatch):
    # Mock query_database to return a document with low confidence (score < 0.5)
    def mock_query_database(query):
        class MockDoc:
            def __init__(self, content):
                self.page_content = content
        return [(MockDoc("BioInformatics is the study of biological data."), 0.1)]  # Low score

    # Patch the query_database function with the mock
    monkeypatch.setattr("app.main.routes.query_database", mock_query_database)
    
    # Emit a valid 'chat' event
    socketio_client.emit(
        "chat",
        {"conversationHistory": [], "message": "Hello"},
    )

    # Retrieve the messages received from the server
    received = socketio_client.get_received()

    # Extract the 'chunk' messages to check for the 'No document found' response
    chunk = [msg["args"][0]["chunk"] for msg in received if msg["name"] == "chunk"]

    # Assert that the "No document found" message is included in the chunks
    assert "No document found" in chunk


# Test case for when the message and history are valid and a document is found
def test_handle_chat_with__message_and_history_doc(monkeypatch, socketio_client):
    # Step 1: Mock query_database to return a document with a high confidence score (>= 0.5)
    def mock_query_database(query):
        class MockDoc:
            def __init__(self, content):
                self.page_content = content
        return [(MockDoc("BioInformatics is the study of biological data."), 0.95)]  # High score

    # Patch the query_database function with the mock
    monkeypatch.setattr("app.main.routes.query_database", mock_query_database)

    # Step 2: Create a mock LLM to simulate streaming text chunks
    mock_llm = MockLLM()  # This will simulate chunked response
    monkeypatch.setattr("app.main.routes.llm", mock_llm)
        
    # Step 3: Emit the chat message via socket
    socketio_client.emit(
        "chat",
        {
            "message": "Tell me about BioInformatics.",
            "conversationHistory": [
                {"sender": "User", "text": "Hi"},
                {"sender": "Chatbot", "text": "Hello"},
            ],
        },
    )

    # Step 4: Retrieve and check the received messages
    received = socketio_client.get_received()

    # Extract chunks and the final 'done' status
    chunks = [msg["args"][0]["chunk"] for msg in received if msg["name"] == "chunk"]
    done_status = [msg["args"][0]["status"] for msg in received if msg["name"] == "done"]
    
    # Assert that the correct chunks are received
    assert "BioInformatics combines biology and computer science." in chunks
    assert "It helps analyze DNA sequences and protein structures." in chunks

    # Assert that the "done" status is marked as "complete" at the end
    assert "complete" in done_status