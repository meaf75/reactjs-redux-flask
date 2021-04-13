from .. import db


class ApplicationEvent(db.Model):
    __tablename__ = 'application_events'
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(150), nullable=False)
    creation_date = db.Column(db.TIMESTAMP, server_default=db.func.current_timestamp(), nullable=False)

    def __init__(self, description: str):
        self.description = description
