from langchain_core.runnables import Runnable
from typing import Iterator, Any, Optional
import time
import threading

# Define a mock LLM that simulates a stream of output chunks
class MockLLM(Runnable):
    def invoke(self, inputs, config=None, **kwargs):
        return "This won't be used."  # Not used in streaming test

    def stream(self, inputs: Any, config: Optional[Any] = None, **kwargs) -> Iterator[str]:
        # Yield 5 chunks with a delay between each, simulating real-time output
        for i in range(5):
            time.sleep(0.1)  # Allows time for cancel() to trigger
            yield f"Chunk {i+1}"

def test_cancel_chat_session(app, socketio_client, monkeypatch):
    """
    Tests whether the 'cancel' event stops an active chat session from fully completing.
    """

    # Mock `query_database` to return one valid document
    def mock_query_database(query):
        class MockDoc:
            def __init__(self, content):
                self.page_content = content
        return [(MockDoc("This is a mock document about DNA."), 0.9)]

    # Patch database and LLM in the route handlers
    monkeypatch.setattr("app.main.routes.query_database", mock_query_database)
    monkeypatch.setattr("app.main.routes.llm", MockLLM())

    # Background thread emits a 'cancel' event shortly after chat starts
    def emit_cancel():
        time.sleep(0.3)  # Delay long enough to allow 2-3 chunks to be streamed
        socketio_client.emit("cancel")  # Simulate user hitting cancel button

    threading.Thread(target=emit_cancel).start()

    # Send initial chat request with conversation history and message
    socketio_client.emit(
        "chat",
        {
            "conversationHistory": [
                {"sender": "User", "text": "What is DNA?"},
                {"sender": "Chatbot", "text": "DNA is..."},
            ],
            "message": "Tell me more about DNA replication",
        },
    )

    # Retrieve messages sent from server to client
    received = socketio_client.get_received()

    # Separate out 'chunk' and 'done' events
    chunks = [msg["args"][0]["chunk"] for msg in received if msg["name"] == "chunk"]
    done_status = [msg["args"][0]["status"] for msg in received if msg["name"] == "done"]

    # ✅ Assertions
    # - Should get at least one chunk, but not all five (cancel was triggered mid-stream)
    # - Should NOT receive a "done" signal, since the stream was interrupted
    assert len(chunks) > 1 and len(chunks) < 5
    assert not done_status