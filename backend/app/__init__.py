from flask import Flask, request
from config import Config


def create_app(config_class=Config):
    """
    Author: Troy Witmer
    Date: 02/06/2025
    Description: function that sets up all app dependencies, and blueprints, called when
    initializing the app
    """
    app = Flask(__name__)
    app.config.from_object(config_class)

    from app.main import bp as main_bp

    app.register_blueprint(main_bp)

    return app
