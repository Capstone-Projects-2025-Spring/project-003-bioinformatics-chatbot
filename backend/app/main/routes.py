from flask import render_template
from app.main import bp
from app.models import User
from app import db


@bp.route("/", methods=["GET"])
@bp.route("/index", methods=["GET"])
def index():
    """
    Author: Troy Witmer
    Date: 02/06/2025
    Description: Sample route, currently index endpoint.
    """

    # how to make a simple query
    user = User.query.filter_by(username="admin").first()
    if not user:
        user = User(username="admin")
        user.set_password("password")
        db.session.add(user)
        db.session.commit()

    return render_template("main/index.html", user=user)
