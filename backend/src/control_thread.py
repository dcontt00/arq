import logging

import threading

import time

from database import Database
from dht11 import DHT11
from light_sensor import LightSensor
from soil_moisture import SoilMoisture
from relay import Relay
import RPi.GPIO as GPIO


class Control_thread():
    def __init__(self) -> None:
        self.control_thread = x = threading.Thread(target=self.control_function, args=(self, "control_thread",), daemon="true")
        self.control_thread.start()
    def control_function(self, name):
        fans = Relay(4)  # id=1
        pump = Relay(17)  # id=2
        light = Relay(27)  # id=3
        soilMoisture = SoilMoisture()
        dh11 = DHT11(18)
        light_sensor = LightSensor(23)
        
        

        
        pass
