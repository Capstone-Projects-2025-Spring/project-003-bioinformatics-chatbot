from app.models import User
from app import db


def test_testing(client):
    """
    Author: Troy Witmer
    Description: simple testing route that checks the "/" route and sees if title is in the html response
    """
    response = client.get("/")
    assert b"title" in response.data


def test_user_table(app):
    """
    Author: Troy Witmer
    Description: Test route to assure User table exists
    """
    with app.app_context():
        assert User.query.count() == 0


def test_user_table_with_user(app):
    with app.app_context():
        user = User(username="test")
        db.session.add(user)
        db.session.commit()

        assert User.query.count() == 1
        assert User.query.filter_by(username="test").first()


def test_user_table_password(app):
    with app.app_context():
        user = User(username="test")
        db.session.add(user)
        db.session.flush()
        user.set_password("test")
        db.session.add(user)
        db.session.commit()

        user = User.query.filter_by(username="test").first()

        assert user.ccheck_password("test")
        assert not user.check_password("hello")
