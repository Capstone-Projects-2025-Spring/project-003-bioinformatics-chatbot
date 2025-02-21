from config import TestingConfig
import pytest
from app import create_app, db


@pytest.fixture()
def app():
    """
    Author: Troy Witmer
    Date: 02/20/2025
    Description: pytest fixture to create a fresh application and database (sqlite in memory)
    for each test. then removes drops all db after test.
    """
    app = create_app(config_class=TestingConfig)

    with app.app_context():
        db.create_all()

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
