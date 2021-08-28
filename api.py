from flask import Flask, jsonify
import os

app = Flask(__name__, static_folder="./build", static_url_path="/")
app.secret_key = os.environ["APP_SECRET_KEY"]

# production site
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def index(path):
    return app.send_static_file("index.html")


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