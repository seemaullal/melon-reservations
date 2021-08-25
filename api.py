from flask import Flask, jsonify
from secrets import APP_SECRET_KEY

app = Flask(__name__)
app.secret_key = APP_SECRET_KEY

@app.route("/api/test-data")
def test_data():
    return jsonify(
        [
            "thing1",
            "thing2",
            "thing3",
        ]
    )


if __name__ == "__main__":
    # TODO: make debug mode depend on whether we are in production or not
    app.run(host="0.0.0.0", debug=True)