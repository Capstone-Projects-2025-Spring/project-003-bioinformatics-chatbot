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

    # how to make a simple query, "from user select first where username is admin"
    user = User.query.filter_by(username="admin").first()
    # if user returns as None we create the admin user. (this is just an example we should crate a py script to do this upon docker build)
    if not user:
        user = User(username="admin")
        user.set_password("password")
        db.session.add(user)
        db.session.commit()

    # rendering a template and passing in the user as user
    return render_template("main/index.html", user=user)
