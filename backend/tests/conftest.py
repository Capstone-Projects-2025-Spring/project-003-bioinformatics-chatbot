import sys
import os

# Add the project root directory to Python path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from config import TestingConfig
import pytest
from app import create_app, db
from sqlalchemy.sql import text


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
