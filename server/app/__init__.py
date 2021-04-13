from flask import Blueprint
from flask_restplus import Api

# Controllers
from .main.controller.user import user_namespace
from .main.controller.auth import auth_namespace

blueprint = Blueprint('controller', __name__)

# API
api = Api(blueprint,
          title='FLASK RESTPLUS API BOILER-PLATE WITH JWT',
          version='1.0',
          description='a boilerplate for flask restplus web service'
          )

api.add_namespace(user_namespace)
api.add_namespace(auth_namespace)
