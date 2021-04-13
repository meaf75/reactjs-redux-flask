from flask_restplus import Resource, Namespace
from flask import request
from cerberus import Validator
from ..service.user_service import get_user_by_email, generate_auth_token_for_user
from ..service.application_events_service import save_new_event

auth_namespace = Namespace('api', description='Operations related to users auth')

loginSchema = {
    'mail': {
        'type': 'string',
        'regex': '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$',
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


class AuthCollection(Resource):

    @staticmethod
    @auth_namespace.param('mail', 'user email')
    @auth_namespace.param('password', 'user password')
    def post():
        """
        Auth user, login
        :return: jwt & user data
        """

        if not request.json:
            return {'error': 'data must be provided'}

        # Verify request content
        data = request.json
        v = Validator(loginSchema)
        v.validate(data)

        if v.errors:
            return v.errors

        user = get_user_by_email(data['mail'])

        error_msg = ''
        event_msg = ''
        error_code = -1

        if not user:
            error_msg = 'user not found'
            event_msg = '[Not Found] Login attempt, user not found [{0}]'.format(data['mail'])
            error_code = 404

        if not user.check_password(data['password']):
            error_msg = 'Invalid password'
            event_msg = '[Login attempt] invalid password for user [{0}]'.format(data['mail'])
            error_code = 401

        # Check for error and save
        if error_code != -1:
            save_new_event(event_msg)
            return {'error': error_msg}, error_code

        # Generate token to send
        token = generate_auth_token_for_user(user)

        save_new_event('[Login] user with id [{0}] logged in'.format(user.id))

        return {
            'user': user.serialize(),
            'auth_token': token
        }


auth_namespace.add_resource(AuthCollection, '/login', methods=['POST'])
