from config import TestingConfig
import pytest
from app import create_app, db


@pytest.fixture()
def app():
    app = create_app(config_class=TestingConfig)

    with app.app_context():
        db.create_all()

    yield app

    with app.app_context():
        db.drop_all()
