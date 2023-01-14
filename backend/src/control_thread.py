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
        self.database = Database()
        self.temp_thread = threading.Thread(target=self.temp_function, args=(self,), daemon="true")
        self.irrig_thread = threading.Thread(target=self.irrigation_function, args=(self,), daemon="true")
        self.light_thread = threading.Thread(target=self.light_function, args=(self,), daemon="true")
        self.temp_thread.start()
        self.irrig_thread.start()
        self.light_thread.start()


    def temp_function(self, name="temperature_thread"):
        while(True):
            control_data = self.database.get_control_data()
            fans = Relay(4)  # id=1
            dh11 = DHT11(18)
            humidity, temperature = dh11.read()

            if(humidity > control_data["humidity"] or temperature > control_data["temperature"]):
                fans.on()
            else:
                fans.off()
        pass

    def irrigation_function(self, name="irrigation_thread"):
        while(True):
            control_data = self.database.get_control_data()
            pump = Relay(17)  # id=2
            soilMoisture = SoilMoisture()
            soil_list = soilMoisture.read()
            avgMoisture = (soil_list[0] + soil_list[1])/2

            if(avgMoisture < control_data["soil_moisture"]):
                pump.on()
                time.sleep(10)
                pump.off()
            
            time.sleep(1200)

    def light_function(self, name="light_thread"):
        while(True):
            light = Relay(27)  # id=3
            light_sensor = LightSensor(23)
            if(light_sensor.read()):
                light.off()
            else:
                light.on()
            