from flask import Flask, jsonify, request
from datetime import datetime, timedelta
from dateutil.parser import parse
import pytz
import os

app = Flask(__name__, static_folder="./build", static_url_path="/")
app.secret_key = os.environ["APP_SECRET_KEY"]


@app.route("/api/reservations", methods=["POST"])
def make_reservation():
    start_time = parse(request.get_json()["startTime"])
    end_time = parse(request.get_json()["endTime"])
    first_appointment_time = start_time + (
        datetime.min.replace(tzinfo=pytz.UTC) - start_time
    ) % timedelta(minutes=30)
    current = first_appointment_time
    times = []
    while current < end_time:
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
    app.run(host="0.0.0.0", debug=True)
