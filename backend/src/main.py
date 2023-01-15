from flask import (
    Flask,
    jsonify,
    request,
    send_file,
    send_from_directory,
    render_template,
)
from flask_cors import CORS


from time import sleep
from database import Database
import os
import time
from logger import getLogger
import io
from base64 import encodebytes
from PIL import Image


# Raspberry Libraries
from picamera2 import Picamera2
from dht11 import DHT11
from light_sensor import LightSensor
from soil_moisture import SoilMoisture
from relay import Relay
import RPi.GPIO as GPIO
from control_thread import Control_thread

log = getLogger(__name__)
GPIO.setmode(GPIO.BCM)

fans = Relay(4)  # id=1
pump = Relay(17)  # id=2
light = Relay(27)  # id=3
soilMoisture = SoilMoisture()
dh11 = DHT11(18)
light_sensor = LightSensor(23)


db = Database()

control_threads = Control_thread()

MINS_TO_UPDATE = 1
PIC_PATH = "../data/pics/"
if not os.path.exists("../data/pics"):
    os.makedirs("../data/pics")
    
app = Flask(__name__, static_folder="../../frontend/build")
CORS(app)


def toggle_relay(pin: int):
    if pin == 1:
        status = fans.toggle()
        # status = 0
    elif pin == 2:
        status = pump.toggle()
        # status = 0
    else:
        status = light.toggle()
        # status = 0

    return status


@app.route("/api")
def hello_world():
    return {"message": "Hello World"}


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve(path):
    if path != "" and os.path.exists(app.static_folder + "/" + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, "index.html")


@app.route("/api/data", methods=["GET"])
def get_data():
    """Gets data from all sensors

    Returns:
        dict: containing temperature, humidity, soil_moisture.
            Example:{"temperature": 20.0,"humidity": 50.0,"soil_moisture": 0}
    """
    humidity, temperature = dh11.read()
    print(0)
    soil_moisture1 = soilMoisture.read()[0]
    print(1)
    soil_moisture2 = soilMoisture.read()[1]
    print(2)
    fans_status = fans.status()
    print(3)
    pump_status = pump.status()
    print(4)
    light_status = light.status()
    print(5)
    light_sensor_value = light_sensor.read()
    print(6)
    """ temperature, humidity = 0, 0
    soil_moisture1 = 0
    soil_moisture2 = 0
    fans_status = 0
    pump_status = 0
    light_status = 0
    light_sensor_value = 0 """

    return {
        "temperature": temperature,
        "humidity": humidity,
        "soil_moisture1": soil_moisture1,
        "soil_moisture2": soil_moisture2,
        "fans": fans_status,
        "pump": pump_status,
        "light": light_status,
        "light_sensor": light_sensor_value,
    }


@app.route("/api/relay", methods=["POST"])
def post_relay_toggle():

    data = request.get_json()
    id = int(data["id"])
    status = toggle_relay(id)

    return {"message": status}


@app.route("/api/data/historical")
def get_historical_data():
    """Gets historical data from all sensors from the database

    Returns:
        dict: historical data
    """
    return {"data": db.get_data()}


@app.route("/api/image")
def get_image():
    date = time.strftime("%Y-%m-%d_%H:%M:%S")
    os.system(f"libcamera-still --immediate -o {PIC_PATH}{date}.jpg")
    return {"data":f"{date}.jpg"}

@app.route("/api/images/<path:path>")
def send_report(path):
    return send_from_directory("../data/pics", path)
    
def get_response_image(image_path):
    pil_img = Image.open(image_path, mode="r")  # reads the PIL image
    byte_arr = io.BytesIO()
    pil_img.save(byte_arr, format="JPG")  # convert the PIL image to byte array
    encoded_img = encodebytes(byte_arr.getvalue()).decode("ascii")  # encode as base64
    return encoded_img


@app.route("/api/images")
def get_all_images():
    images_list = os.listdir(PIC_PATH)
    encoded_images = [get_response_image(PIC_PATH + x) for x in images_list]
    return jsonify({"result": encoded_images})


def periodic_data():
    """get data from sensors and add it to the database"""
    while True:
        temperature, humidity = dh11.read()
        soil_moisture = soilMoisture.read()
        """ temperature, humidity, soil_moisture = test_data() """
        db.add_data(temperature, humidity, soil_moisture)
        sleep(MINS_TO_UPDATE * 60)


def test_data():
    return 20.0, 0, "Relay: Off", "Relay: Off", "Relay: Off", 0, 0, 24


""" periodic_data() """
if __name__ == "__main__":
    try:
        app.run(debug=True, port=8000)
    except KeyboardInterrupt:
        GPIO.cleanup()
        pass
