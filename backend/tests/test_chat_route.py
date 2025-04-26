from langchain_core.runnables import RunnableLambda


def test_chat_message_valid(client, app, monkeypatch):
    # Mock query_database to return one valid document
    def mock_query_database(query):
        class MockDoc:
            def __init__(self, content):
                self.page_content = content

        return [(MockDoc("This is a mock document about BioInformatics."), 0.95)]

    monkeypatch.setattr("app.main.routes.query_database", mock_query_database)

    # Wrap a simple lambda in a Runnable
    mock_llm = RunnableLambda(
        lambda inputs: (
            "This is a mocked LLM response based on the provided BioInformatics document."
        )
    )

    monkeypatch.setattr("app.main.routes.llm", mock_llm)

    # Make POST request to /chat with message and empty conversation history
    response = client.post(
        "/chat",
        json={
            "message": "Tell me about BioInformatics.",
            "conversationHistory": [],
            "doc_toggle": False,
            "stored_context": "This is stored context.",
        },
    )

    # Validate the response
    assert response.status_code == 200
    json_data = response.get_json()
    assert "response" in json_data
    assert (
        "This is a mocked LLM response based on the provided BioInformatics document."
        in json_data["response"]
    )


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

def test_no_stored_context(client):
    # Test sending a request with no doc_toggle
    response = client.post("/chat", json={"message": "Hello, chatbot!", "conversationHistory": [], "doc_toggle": False})

    # Check for status code and error response
    assert response.status_code == 400
    json_data = response.get_json()
    assert "error" in json_data
    assert json_data["error"] == "stored context is required"