from flask import Flask
from flask_cors import CORS
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from langchain_postgres.vectorstores import PGVector
from langchain_core.embeddings import DeterministicFakeEmbedding
from langchain_ollama import OllamaEmbeddings
from flask_socketio import SocketIO
from flask_login import LoginManager
from langchain_ollama.llms import OllamaLLM

# load_dotenv()
# print(os.getenv("SESSION_SECRET_KEY"))

# the two functions we call when initalizing app db and migrations
db = SQLAlchemy()
migrate = Migrate()
login_manager = LoginManager()
socketio = SocketIO(
    cors_allowed_origins="http://localhost:5173", async_mode="threading"
)  # Use gevent async mode
llm = OllamaLLM(model="llama3.2", base_url="http://ollama:11434")


def create_app(config_class=Config):
    """
    Author: Troy Witmer
    Date: 02/06/2025
    Description: function that sets up all app dependencies, and blueprints, called when
    initializing the app
    param:config_class : configuration variables for the app
    """

    app = Flask(__name__)
    # PLEASE MODIFY BELOW THIS COMMENT LINE LIKE THIS { origins": "http://YOUR_HOSTING_MACHINE_IP:5173 } 
    CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})
    app.config.from_object(config_class)

    # app.secret_key = os.getenv("SESSION_SECRET_KEY")
    # app.config['SESSION_PERMANENT'] = True

    # initializing the database for the app
    db.init_app(app)
    # initalizing the database migrations for the app
    migrate.init_app(app, db)

    login_manager.init_app(app)
    # Initialize SocketIO
    """
    app.vector_db = PGVector(
        embeddings=DeterministicFakeEmbedding(size=4096),
        collection_name="vectorized_docs",
        connection=app.config["SQLALCHEMY_DATABASE_URI"]
    )
    """

    app.vector_db = PGVector(
        embeddings=OllamaEmbeddings(
            model="mxbai-embed-large",
            base_url="http://ollama:11434",
        ),
        collection_name="vectorized_docs",
        connection=app.config["SQLALCHEMY_DATABASE_URI"],
    )

    from app.main import bp as main_bp

    app.register_blueprint(main_bp)
    socketio.init_app(app)

    return app


@login_manager.user_loader
def load_user(user_id):
    from app.models import User

    return User.query.get(int(user_id))
