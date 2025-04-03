from flask import Flask
from flask_cors import CORS
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from langchain_postgres.vectorstores import PGVector
from langchain_core.embeddings import DeterministicFakeEmbedding
from flask_login import LoginManager

# load_dotenv()
# print(os.getenv("SESSION_SECRET_KEY"))

# the two functions we call when initalizing app db and migrations
db = SQLAlchemy()
migrate = Migrate()
login_manager = LoginManager()


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

    # app.secret_key = os.getenv("SESSION_SECRET_KEY")
    # app.config['SESSION_PERMANENT'] = True

    # initializing the database for the app
    db.init_app(app)
    # initalizing the database migrations for the app
    migrate.init_app(app, db)

    login_manager.init_app(app)

    app.vector_db = PGVector(
        embeddings=DeterministicFakeEmbedding(size=4096),
        collection_name="vectorized_docs",
        connection=app.config["SQLALCHEMY_DATABASE_URI"]
    )

    # Change llama 3 to 3.1
    # app.vector_db = PGVector(
    #     embeddings=OllamaEmbeddings(model="llama3.1", base_url="http://ollama:11434", num_ctx=4096, repeat_last_n=128, temperature=0.4, top_k=20, top_p=0.7, repeat_penalty=1.3, tfs_z=2.0),
    #     collection_name="vectorized_docs",
    #     connection=app.config["SQLALCHEMY_DATABASE_URI"]
    # )


    from app.main import bp as main_bp

    app.register_blueprint(main_bp)

    return app


@login_manager.user_loader
def load_user(user_id):
    from app.models import User

    return User.query.get(int(user_id))

