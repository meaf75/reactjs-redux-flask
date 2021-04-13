from flask_restplus import Resource, Namespace
from flask import request
from cerberus import Validator
from ..service.user_service import save_new_user, get_user_id_from_token, get_user_by_id
from app.main.utils.decorators import token_required

user_namespace = Namespace('api/users', description='Operations related to the users')

postSchema = {
    'mail': {
        'type': 'string',
        'regex': '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$',
        'required': True,
        'minlength': 6,
        'maxlength': 150
    },
    'name': {
        'type': 'string',
        'required': True,
        'minlength': 4,
        'maxlength': 150
    },
    'lastname': {
        'type': 'string',
        'required': True,
        'minlength': 4,
        'maxlength': 150
    },
    'username': {
        'type': 'string',
        'required': True,
        'minlength': 6,
        'maxlength': 150
    },
    'password': {
        'type': 'string',
        'required': True,
        'minlength': 6,
        'maxlength': 150
    },
}


@user_namespace.route('/')
class UserCollection(Resource):

    @staticmethod
    @user_namespace.param('Authorization', 'valid auth Token')
    @token_required
    def get():
        """
        Get user based on the provided auth token
        :return: user if jwt is valid
        """

        user_id = get_user_id_from_token(request)
        user = get_user_by_id(user_id)

        # No need to validate if user exist, an auth token cannot be created without the user

        return {'data': user.serialize()}

    @staticmethod
    @user_namespace.doc(params={'name': 'miguel', 'lastname': 'alba', 'mail': 'meaf75@mail.com', 'username': 'meaf75', 'password': '123'})
    @user_namespace.response(201, 'User created.')
    def post():
        """
        Create new user
        """

        if not request.json:
            return {'error': 'data must be provided'}

        # Verify request content
        data = request.json
        v = Validator(postSchema)
        v.validate(data)

        if v.errors:
            return v.errors

        result = save_new_user(data)

        return result, result['status']
