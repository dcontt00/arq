from fastapi import FastAPI
from dht11 import DHT11
from time import sleep

# from soil_moisture import SoilMoisture
from database import Database

app = FastAPI()
dh11 = DHT11()
# soilMoisture = SoilMoisture()
db = Database()

MINS_TO_UPDATE = 1


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/data")
async def get_data():
    """Gets data from all sensors

    Returns:
        dict: containing temperature, humidity, soil_moisture.
            Example:{"temperature": 20.0,"humidity": 50.0,"soil_moisture": 0}
    """

    """ temperature, humidity = dh11.read()
    soil_moisture = soilMoisture.read() """
    temperature, humidity, soil_moisture = test_data()

    return {
        "temperature": temperature,
        "humidity": humidity,
        "soil_moisture": soil_moisture,
    }


@app.get("/data/historical")
async def get_historical_data():
    """Gets historical data from all sensors from the database

    Returns:
        dict: historical data
    """
    return db.get_data()


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


periodic_data()
