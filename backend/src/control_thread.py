import logging

import threading

import time

from database import Database
from dht11 import DHT11
from light_sensor import LightSensor
from soil_moisture import SoilMoisture
from relay import Relay
from logger import getLogger
import RPi.GPIO as GPIO


class Control_thread():
    def __init__(self) -> None:
        self.log = getLogger(__name__)
        self.database = Database()
        self.log.info("Creating Thread: temperature_thread")
        self.temp_thread = threading.Thread(target=self.temp_function, args=(self,), daemon="true")
        self.log.info("Created Thread: temperature_thread")
        self.log.info("Creating Thread: irrigation_thread")
        self.irrig_thread = threading.Thread(target=self.irrigation_function, args=(self,), daemon="true")
        self.log.info("Created Thread: irrigation_thread")
        self.log.info("Creating Thread: light_thread")
        self.light_thread = threading.Thread(target=self.light_function, args=(self,), daemon="true")
        self.log.info("Created Thread: light_thread")
        self.temp_thread.start()
        self.irrig_thread.start()
        self.light_thread.start()


    def temp_function(self, name="temperature_thread"):
        fans = Relay(4)  # id=1
        dh11 = DHT11(18)
        self.log.info("Running Thread: temperature_thread")
        while(True):
            try:
                self.log.info("#temperature_thread")
                control_data = self.database.get_control_data()
                humidity, temperature = dh11.read()
                self.log.info("Input Data: Humidity=%f,  Temperature=%f"%(humidity, temperature))

                if(humidity > control_data["humidity"] or temperature > control_data["temperature"]):
                    fans.on()
                    time.sleep(30)
                else:
                    fans.off()
                    time.sleep(200)

                self.log.info("Result: %i"%(fans.status(),))
            except Exception as e:
                self.log.info("Error in temperature_thread")
                self.log.info(e)
                fans.is_off()

    def irrigation_function(self, name="irrigation_thread"):
        pump = Relay(17)  # id=2
        soilMoisture = SoilMoisture()
        self.log.info("Running Thread: irrigation_thread")
        while(True):
            try:
                self.log.info("#irrigation_thread")
                control_data = self.database.get_control_data()
                soil_list = soilMoisture.read()
                avgMoisture = (soil_list[0] + soil_list[1])/2
                self.log.info("Input Data: Soil Moisture 1=%f,  Soil Moisture 2= %f"%(soil_list[0], soil_list[1]))

                if(avgMoisture < control_data["soil_moisture"]):
                    self.log.info("Pump On")
                    pump.on()
                    time.sleep(10)
                    self.log.info("Pump Off")
                    pump.off()
                
                time.sleep(200)
            except Exception as e:
                self.log.info("Error in irrigation_thread")
                self.log.info(e)
                pump.off()

            
    def light_function(self, name="light_thread"):
        
        light = Relay(27)  # id=3
        light_sensor = LightSensor(23)
        self.log.info("Running Thread: light_thread")
        while(True):
            try:
                self.log.info("#light_thread")
                if(light_sensor.read() == 0):
                    light.off()
                    time.sleep(30)
                else:
                    light.on()
                    time.sleep(200)
                self.log.info("Light Status: %i"%(light.status(),))
            except Exception as e:
                self.log.info("Error in light_thread")
                self.log.info(e)
                light.off()