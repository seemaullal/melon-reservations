from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
import os
db = SQLAlchemy()


class Reservation(db.Model):
    __tablename__ = "users"

    reservation_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    username = db.Column(db.String)
    start_time = db.Column(db.DateTime)

    # ratings = a list of Rating objects

    def __repr__(self):
        return f"<User username={self.username} start_time={self.start_time}>"

def connect_to_db(flask_app, db_uri, echo):
    flask_app.config["SQLALCHEMY_DATABASE_URI"] = db_uri
    flask_app.config["SQLALCHEMY_ECHO"] = echo
    flask_app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.app = flask_app
    db.init_app(flask_app)

    print("Connected to the db!")


if __name__ == "__main__":
    from api import app

    # Call connect_to_db(app, echo=False) if your program output gets
    # too annoying; this will tell SQLAlchemy not to print out every
    # query it executes.
    echo_on = os.environ.get('ENV', '') == 'development'
    db_uri = os.environ['DATABASE_URL'].replace('postgres', 'postgresql')

    connect_to_db(app, db_uri, echo_on)