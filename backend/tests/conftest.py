import sys
import os

# Add the project root directory to Python path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from flask import current_app
from config import TestingConfig
import pytest
from app import create_app, db, socketio
from sqlalchemy.sql import text
from time import sleep
from sqlalchemy import delete


@pytest.fixture()
def app():
    """
    Author: Troy Witmer
    Dadte: 02/20/2025
    Description: pytest fixture to create a fresh application and database (sqlite in memory)
    for each test. then removes drops all db after test.
    """
    app = create_app(config_class=TestingConfig)

    with app.app_context():
        db.create_all()
        db.session.execute(text("CREATE EXTENSION IF NOT EXISTS vector"))

    yield app

    with app.app_context():
        db.drop_all()


@pytest.fixture()
def client(app):
    """
    Author: Troy Witmer
    Date: 02/20/2025
    Description: pytest fixture to create a sample client ()
    """
    return app.test_client()


# @pytest.fixture()
# def socketio_client(app, client):
#     with client:
#         test_client = socketio.test_client(app, flask_test_client=client)
#         assert test_client.is_connected(), "SocketIO client failed to connect"
#         yield test_client
#         test_client.disconnect()

@pytest.fixture()
def clean_vector_db(app):
    """
    Fixture to ensure a clean vector database before and after the test.
    """
    with app.app_context():
        vector_db = current_app.vector_db
        db.session.execute(delete(vector_db.EmbeddingStore))  # Clear embeddings
        db.session.commit()
    yield
    with app.app_context():
        db.session.execute(delete(vector_db.EmbeddingStore))  # Clean up after test
        db.session.commit()
