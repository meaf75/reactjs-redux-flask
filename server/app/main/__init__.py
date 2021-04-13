from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from .config import config_by_name

db = SQLAlchemy()
flask_bcrypt = Bcrypt()


def create_app(config_type: str):
    # setup app
    app = Flask(__name__)

    # Add app configurations from "config" file
    app.config.from_object(config_by_name[config_type])

    # Add app reference to the database
    db.init_app(app)

    # Init library, for some reason needs a reference to the app
    flask_bcrypt.init_app(app)

    return app
