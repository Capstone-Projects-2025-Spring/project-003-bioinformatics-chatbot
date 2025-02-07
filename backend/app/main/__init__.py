from flask import Blueprint

"""
initialization for the blueprint main
"""


bp = Blueprint("main", __name__)

from app.main import routes
