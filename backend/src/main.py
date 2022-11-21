from fastapi import FastAPI
from dht11 import DHT11

# from soil_moisture import SoilMoisture
from database import Database

app = FastAPI()
dh11 = DHT11()
# soilMoisture = SoilMoisture()
db = Database()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/data")
async def get_data():
    """Gets data from all sensors

    Returns:
        _type_: _description_
    """

    """ temperature, humidity = dh11.read()
    soil_moisture = soilMoisture.read() """
    temperature = 22
    humidity = 0.56
    soil_moisture = 1

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

    pass
