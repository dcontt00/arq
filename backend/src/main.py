from fastapi import FastAPI
from database import create_db_file
from dht11 import DHT11
from soil_moisture import SoilMoisture

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/data")
async def get_data():
    """Gets data from all sensors

    Returns:
        _type_: _description_
    """
    create_db_file()

    return {"message": "Hello World"}


@app.get("/data/historical")
async def get_historical_data():
    """Gets historical data from all sensors from the database

    Returns:
        dict: historical data
    """
    return {"message": "Hello World"}


def periodic_data():
    """get data from sensors and add it to the database"""

    pass
