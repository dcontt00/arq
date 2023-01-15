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
        print("Creating Thread: temperature_thread")
        self.temp_thread = threading.Thread(target=self.temp_function, args=(self,), daemon="true")
        print("Created Thread: temperature_thread")
        print("Creating Thread: irrigation_thread")
        self.irrig_thread = threading.Thread(target=self.irrigation_function, args=(self,), daemon="true")
        print("Created Thread: irrigation_thread")
        print("Creating Thread: light_thread")
        self.light_thread = threading.Thread(target=self.light_function, args=(self,), daemon="true")
        print("Created Thread: light_thread")
        self.temp_thread.start()
        self.irrig_thread.start()
        self.light_thread.start()


    def temp_function(self, name="temperature_thread"):
        print("Running Thread: temperature_thread")
        fans = Relay(4)  # id=1
        dh11 = DHT11(18)
        while(True):
            print("#temperature_thread")
            control_data = self.database.get_control_data()
            humidity, temperature = dh11.read()
            print("Input Data: Humidity=%f,  Temperature=%f"%(humidity, temperature))

            if(humidity > control_data["humidity"] or temperature > control_data["temperature"]):
                fans.on()
                time.sleep(30)
            else:
                fans.off()
                time.sleep(200)

            print("Result: %i"%(fans.status(),))

    def irrigation_function(self, name="irrigation_thread"):
        print("Running Thread: irrigation_thread")
        pump = Relay(17)  # id=2
        soilMoisture = SoilMoisture()
        while(True):
            print("#irrigation_thread")
            control_data = self.database.get_control_data()
            soil_list = soilMoisture.read()
            avgMoisture = (soil_list[0] + soil_list[1])/2
            print("Input Data: Soil Moisture 1=%f,  Soil Moisture 2= %f"%(soil_list[0], soil_list[1]))


            if(avgMoisture < control_data["soil_moisture"]):
                print("Pump On")
                pump.on()
                time.sleep(10)
                print("Pump Off")
                pump.off()
            
            time.sleep(200)

    def light_function(self, name="light_thread"):
        print("Running Thread: light_thread")
        light = Relay(27)  # id=3
        light_sensor = LightSensor(23)
        while(True):
            print("#light_thread")
            if(light_sensor.read() == 1):
                light.off()
                time.sleep(30)
            else:
                light.on()
                time.sleep(200)
            print("Light Status: %i"%(light.status(),))
            