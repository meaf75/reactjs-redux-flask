from app.main import db
from app.main.model.application_events import ApplicationEvent


def save_new_event(event_msg: str) -> bool:
    """
    Store a new event, like login or user create into database
    """

    new_application_event = ApplicationEvent(event_msg)

    db.session.add(new_application_event)
    db.session.commit()

    return True

