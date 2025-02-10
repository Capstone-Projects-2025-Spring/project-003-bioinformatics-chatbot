from flask import render_template
from app.main import bp


@bp.route("/", methods=["GET"])
@bp.route("/index", methods=["GET"])
def index():
    """
    Author: Troy Witmer
    Date: 02/06/2025
    Description: Sample route, currently index endpoint.
    """
    return render_template("main/index.html")
