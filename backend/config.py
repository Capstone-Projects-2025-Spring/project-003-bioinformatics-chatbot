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
