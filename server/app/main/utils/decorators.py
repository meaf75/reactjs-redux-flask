from typing import Callable
from functools import wraps
from flask import request
import jwt
from ..config import key


def token_required(f) -> Callable:
    @wraps(f)
    def decorated(*args, **kwargs):

        token = request.headers.get('Authorization')

        # Check token exist
        if not token:
            return {'error': 'Auth token is required'}, 401

        # Validate token
        try:
            payload = jwt.decode(token, key)

            # all is ok
            return f(*args, **kwargs)
        except jwt.ExpiredSignatureError:
            return {'error': 'Signature expired. Please log in again.'}, 401
        except jwt.InvalidTokenError:
            return {'error': 'Invalid token. Please log in again.'}, 401

    return decorated
