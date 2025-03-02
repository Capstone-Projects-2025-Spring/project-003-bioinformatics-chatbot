from flask import Flask, request
from flask_cors import CORS
from langchain_ollama import OllamaEmbeddings
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from langchain_postgres.vectorstores import PGVector

# the two functions we call when initalizing app db and migrations
db = SQLAlchemy()
migrate = Migrate()
vector_db = PGVector(
    embeddings=OllamaEmbeddings(model="llama3.2", base_url="http://ollama:11434"),
    collection_name='vectorized_docs',
    connection=Config.SQLALCHEMY_DATABASE_URI,
    use_jsonb=True,
    )


def create_app(config_class=Config):
    """
    Author: Troy Witmer
    Date: 02/06/2025
    Description: function that sets up all app dependencies, and blueprints, called when
    initializing the app
    param:config_class : configuration variables for the app
    """
    app = Flask(__name__)
    CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})
    app.config.from_object(config_class)
    
    # initializing the database for the app
    db.init_app(app)
    # initalizing the database migrations for the app
    migrate.init_app(app, db)

    from app.main import bp as main_bp

    app.register_blueprint(main_bp)

    return app
