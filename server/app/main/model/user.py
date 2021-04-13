from .. import db, flask_bcrypt


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), nullable=False)
    lastname = db.Column(db.String(150), nullable=False)
    mail = db.Column(db.String(150), unique=True, nullable=False)
    username = db.Column(db.String(150), nullable=False)
    hashed_password = db.Column(db.String(150), nullable=False)

    @property
    def password(self):
        raise AttributeError('password: write-only field')

    @password.setter
    def password(self, password):
        self.hashed_password = flask_bcrypt.generate_password_hash(password).decode('utf-8')

    def check_password(self, password: str) -> bool:
        return flask_bcrypt.check_password_hash(self.password, password)

    def serialize(self, with_password=False):
        """Return object data in easily serializable format"""
        result = {
            'id': self.id,
            'name': self.name,
            'lastname': self.lastname,
            'mail': self.mail,
            'username': self.username,
        }

        if with_password:
            result['hashed_password'] = self.hashed_password

        return result

    def check_password(self, password: str) -> bool:
        return flask_bcrypt.check_password_hash(self.hashed_password, password)
