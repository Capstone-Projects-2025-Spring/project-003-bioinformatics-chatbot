from app.models import User


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
