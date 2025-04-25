import re
import os
import io
from app.models import User
from app import db
from werkzeug.datastructures import FileStorage
from unittest.mock import patch

# from app import app


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


@patch("app.doc_indexer.retrieve_document.query_database")
def test_md(mock_query_database, client, app):
    # When the database returns a similarity score, override it to avoid 'no doc found'
    # mock_query_database.return_value = [
    #     ("Mocked document content about DNA", 0.9),
    # ]
    # Add document to database for use in testing
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
    response = client.post(
        "/chat", json={"message": "Tell me about DNA", "conversationHistory": [],  "doc_toggle": False, "stored_context": ""}
    )
    content = response.get_data(as_text=True)
    content = content.strip()
    content = content.replace("\r\n", "\n")  # Normalize line endings
    print(repr(content))
    md_format = False
    patterns = [
        r"^\s*#+\s",                    # Headers (allow leading spaces)
        r"(\*\*|__)(.*?)\1",            # Bold text
        r"(\*|_)(.*?)\1",               # Italic text
        r"!?\[(.*?)\]\((.*?)\)",        # Images and links
        r"`(.*?)`",                     # Inline code
        r"^-{3,}$",                     # Horizontal rules
        r"^\s*[-*\+]\s",                # Lists
        r">",                           # Blockquotes
        r"^\s*\d+\.\s",                 # Numbered lists
        r"^```",                        # Fenced code blocks
        r"^\|(.+)\|$",                  # Tables
        r"\$\$(.*?)\$\$|\$(.*?)\$",     # Inline or block math
        r"<[^>]+>",                     # HTML tags
    ]
    for pattern in patterns:
        if re.search(pattern, content, re.M):
            md_format = True
            break
    assert md_format == True
    # try:
    #     html = markdown.markdown(content)
    # except Exception as e:
    #     pytest.fail(f"Markdown conversion failed: {e}")
    # assert response.status_code == 200
