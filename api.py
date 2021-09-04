from flask import Flask, jsonify, request
from sqlalchemy import func
from datetime import datetime, timedelta
from dateutil.parser import parse
from model import db, connect_to_db, Reservation
import pytz
import os

app = Flask(__name__, static_folder="./build", static_url_path="/")
app.secret_key = os.environ["APP_SECRET_KEY"]


@app.route("/api/reservations/book", methods=["POST"])
def make_reservation():
    appointment_start = parse(request.get_json()["startTime"])
    username = request.get_json()["username"]
    try:
        existing_reservations_for_user = (
            Reservation.query.filter(
                func.date(Reservation.start_time) == appointment_start.date()
            )
            .filter_by(username=username)
            .all()
        )
        if len(existing_reservations_for_user) > 0:
            return jsonify(
                {
                    "success": False,
                    "error": "User already has an appointment on this day",
                }
            )
        new_reservaton = Reservation(username=username, start_time=appointment_start)
        db.session.add(new_reservaton)
        db.session.commit()
        return jsonify({"success": True})
    except Exception as e:
        return jsonify({"success": False, "error": e})


@app.route("/api/reservations", methods=["POST"])
def search_reservation():
    start_time = parse(request.get_json()["startTime"])
    end_time = parse(request.get_json()["endTime"])
    first_appointment_time = start_time + (
        datetime.min.replace(tzinfo=pytz.UTC) - start_time
    ) % timedelta(minutes=30)
    current = first_appointment_time
    times = []
    while current < end_time:
        # TODO: query the database outside the loop for all possible times
        existing_reservation = Reservation.query.filter(
            func.date(Reservation.start_time) == current
        ).first()
        if not existing_reservation:
            times.append(current.isoformat())
        current = current + timedelta(minutes=30)
    return jsonify(times)


# production site
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def index(path):
    return app.send_static_file("index.html")


if __name__ == "__main__":
    # TODO: make debug mode depend on whether we are in production or not
    connect_to_db(app)
    app.run(host="0.0.0.0", debug=True)
