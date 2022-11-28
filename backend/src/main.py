from flask import Flask, jsonify, request, send_file
from dht11 import DHT11
from time import sleep
from light_sensor import LightSensor
from relay import Relay
from soil_moisture import SoilMoisture
from database import Database
import RPi.GPIO as GPIO

GPIO.cleanup()
relay1 = Relay(2)
relay2 = Relay(3)
relay3 = Relay(4)
soilMoisture1 = SoilMoisture(14)
soilMoisture2 = SoilMoisture(15)
dh11 = DHT11(18)
light_sensor = LightSensor(23)

db = Database()

MINS_TO_UPDATE = 1

app = Flask(__name__)


@app.route("/")
def hello_world():
    return {"message": "Hello World"}


@app.route("/data")
def get_data():
    """Gets data from all sensors

    Returns:
        dict: containing temperature, humidity, soil_moisture.
            Example:{"temperature": 20.0,"humidity": 50.0,"soil_moisture": 0}
    """

    temperature, humidity = dh11.read()
    soil_moisture = soilMoisture.read()
    # temperature, humidity, soil_moisture = test_data()

    return {
        "temperature": temperature,
        "humidity": humidity,
        "soil_moisture": soil_moisture,
    }


@app.route("/data/historical")
def get_historical_data():
    """Gets historical data from all sensors from the database

    Returns:
        dict: historical data
    """
    return {"data": db.get_data()}


def periodic_data():
    """get data from sensors and add it to the database"""
    while True:
        """temperature, humidity = dh11.read()
        soil_moisture = soilMoisture.read()"""
        temperature, humidity, soil_moisture = test_data()
        db.add_data(temperature, humidity, soil_moisture)
        sleep(MINS_TO_UPDATE * 60)


def test_data():
    return 20.0, 50.0, 0


""" periodic_data() """
if __name__ == "__main__":
    app.run(debug=True, port=8000)
