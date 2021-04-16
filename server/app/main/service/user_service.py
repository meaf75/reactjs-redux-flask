from typing import Dict
from app.main import db
from app.main.model.user import User
import jwt
from ..config import key
from .application_events_service import save_new_event
from werkzeug.local import LocalProxy


def save_new_user(data: Dict[str,str]) -> Dict[str,str]:
    """
    Store user into database
    """

    # Check if user exist
    email = data['mail']
    username = data['username']
    user = User.query.filter((User.mail == email) | (User.username == username)).first()

    response_object = {
        'status': 0,
        'message': '',
        'error_message': '',
        'data': {}
    }

    if user:
        repeated_value = email if user.mail == email else username
        repeated_key = 'email' if user.mail == email else 'username'

        # User exist, do not continue
        response_object['status'] = 409
        response_object['error_message'] = 'User with {0} [{1}] already exist'.format(repeated_key, repeated_value)

        return response_object

    # Create user
    new_user = User(
        name=data['name'],
        lastname=data['lastname'],
        mail=email,
        username=username,
        password=data['password']
    )
    # new_user.password = data['password']

    db.session.add(new_user)
    db.session.commit()

    serialized_user = new_user.serialize()

    response_object['status'] = 201
    response_object['message'] = 'User created'
    response_object['data'] = {
        'user': serialized_user,
        'token': generate_auth_token_for_user(new_user)
    }

    save_new_event('[REGISTER] User with id [{0}] has been registered'.format(serialized_user['id']))

    return response_object


def generate_auth_token_for_user(user: User) -> str:

    # generate the auth token
    token = jwt.encode({
        'username': user.username,
        'sub': user.id
    }, key)

    return token.decode('UTF-8')


def get_user_id_from_token(request: LocalProxy) -> str:
    """
    The token must be validated before call this function
    :param request: request to get token
    :return: user id from sub property in the token
    """

    token = request.headers.get('Authorization')
    payload = jwt.decode(token, key)

    return payload['sub']


def get_user_by_email(email: str) -> User:
    return User.query.filter_by(mail=email).first()


def get_user_by_id(_id: int) -> User:
    return User.query.filter_by(id=_id).first()
