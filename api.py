from flask import Flask, jsonify, request
from datetime import datetime, timedelta
from dateutil.parser import parse
import os

app = Flask(__name__, static_folder="./build", static_url_path="/")
app.secret_key = os.environ["APP_SECRET_KEY"]


@app.route("/api/reservations")
def get_reservations():
    start = datetime.combine(datetime.today(), datetime.min.time())
    end = datetime.combine(datetime.today(), datetime.max.time())
    current = start
    times = []
    while current < end:
        times.append(current)
        current = current + timedelta(minutes=30)
    return jsonify(times)


@app.route("/api/reservations", methods=["POST"])
def make_reservation():
    date = parse(request.get_json()["date"])
    start_time = parse(request.get_json()["startTime"]).time()
    end_time = parse(request.get_json()["endTime"]).time()
    interval_start = datetime.combine(date, start_time)
    first_appointment_time = interval_start + (
        datetime.min - interval_start
    ) % timedelta(minutes=30)
    interval_end = datetime.combine(date, end_time)
    current = first_appointment_time
    times = []
    while current < interval_end:
        times.append(current)
        current = current + timedelta(minutes=30)
    return jsonify(times)


# production site
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def index(path):
    return app.send_static_file("index.html")


if __name__ == "__main__":
    # TODO: make debug mode depend on whether we are in production or not
    app.run(host="0.0.0.0", debug=True)
