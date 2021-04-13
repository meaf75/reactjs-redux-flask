import os
from flask_migrate import Migrate, MigrateCommand
from flask_script import Manager
from app.main.model import user, application_events

from app import blueprint
from app.main import create_app, db

app = create_app(os.getenv('BACKEND_MODE') or 'dev')
app.register_blueprint(blueprint)

app.app_context().push()

manager = Manager(app)

migrate = Migrate(app, db)

manager.add_command('db', MigrateCommand)


@manager.command
def run():
    app.run()


if __name__ == "__main__":
    manager.run()
