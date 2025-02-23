import os
from dotenv import load_dotenv





basedir = os.path.abspath(os.path.dirname(__file__))
load_dotenv(os.path.join(basedir, ".env"))


class Config:
    """
    Author: Troy Witmer
    Date: 02/06/2025
    Description: Config File for the flask app, will be the entrypoint for all
    env variables and other app configuration
    """
    
    SECRET_KEY = os.environ.get("SECRET_KEY") or "you-will-never-guess"
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URI")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    


class TestingConfig(Config):
    """
    Author: Troy Witmer
    Date: 02/20/2025
    Description: Config File for app in testing configuration, called in pytest creation

    param:Config the class above to get all its keys, we add some extra and override some in here
    """

    TESTING = True
    SQLALCHEMY_DATABASE_URI = "sqlite://"
