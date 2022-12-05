from flask import Flask, jsonify, request, send_file
from time import sleep
from database import Database
import os
from picamera2 import Picamera2
from dht11 import DHT11
from light_sensor import LightSensor
from relay import Relay
from soil_moisture import SoilMoisture
from camera import save_picture
import time
import RPi.GPIO as GPIO

relay1 = Relay(2)
# relay2 = Relay(3)
# relay3 = Relay(4)
soilMoisture1 = SoilMoisture(14)
soilMoisture2 = SoilMoisture(15)
dh11 = DHT11(18)
light_sensor = LightSensor(23)


db = Database()

MINS_TO_UPDATE = 1
PIC_PATH = "../data/pics/"
if not os.path.exists("../data/pics"):
    os.makedirs("../data/pics")
app = Flask(__name__)


@app.route("/")
def hello_world():
    return {"message": "Hello World"}


@app.route("/data", methods=["GET"])
def get_data():
    """Gets data from all sensors

    Returns:
        dict: containing temperature, humidity, soil_moisture.
            Example:{"temperature": 20.0,"humidity": 50.0,"soil_moisture": 0}
    """
    temperature, humidity = dh11.read()
    soil_moisture1 = soilMoisture1.read()
    soil_moisture2 = soilMoisture2.read()
    relay_1 = relay1.status()
    # relay_2 = relay2.status()
    # relay_3 = relay3.status()
    light = light_sensor.read()

    """ (
        humidity,
        light,
        relay_1,
        relay_2,
        relay_3,
        soil_moisture1,
        soil_moisture2,
        temperature,
    ) = test_data() """

    return {
        "temperature": temperature,
        "humidity": humidity,
        "soil_moisture1": soil_moisture1,
        "soil_moisture2": soil_moisture2,
        "relay1": relay_1,
        # "relay2": relay_2,
        # "relay3": relay_3,
        "light": light,
    }


@app.route("/relay", methods=["POST"])
def toggle_relay():
    data = request.get_json()
    id = int(data["id"])
    if id == 1:
        relay1.toggle()
    elif id == 2:
        relay2.toggle()
    else:
        relay3.toggle()

    return {"message": f"Relay {id} toggled"}


@app.route("/data/historical")
def get_historical_data():
    """Gets historical data from all sensors from the database

    Returns:
        dict: historical data
    """
    return {"data": db.get_data()}


@app.route("/image")
def get_image():
    date = time.strftime("%Y-%m-%d_%H:%M:%S")
    os.system(f"libcamera-jpeg -o {PIC_PATH}{date}.jpg")

    return send_file(PIC_PATH + f"{date}.jpg", mimetype="image/jpg")


def periodic_data():
    """get data from sensors and add it to the database"""
    while True:
        """temperature, humidity = dh11.read()
        soil_moisture = soilMoisture.read()"""
        temperature, humidity, soil_moisture = test_data()
        db.add_data(temperature, humidity, soil_moisture)
        sleep(MINS_TO_UPDATE * 60)


def test_data():
    return 20.0, 0, "Relay: Off", "Relay: Off", "Relay: Off", 0, 0, 24


""" periodic_data() """
if __name__ == "__main__":
    app.run(debug=True, port=8000)
GPIO.cleanup()
