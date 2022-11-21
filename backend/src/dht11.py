import time
import board
import adafruit_dht
import psutil


class DHT11:
    def __init__(self) -> None:
        self.DHT_SENSOR = adafruit_dht.DHT11
        self.DHT_PIN = 17

    def read(self):
        humidity, temperature = Adafruit_DHT.read_retry(self.DHT_SENSOR, self.DHT_PIN)
        return humidity, temperature

    def read_str(self):
        humidity, temperature = self.read()
        return "Temp={0:0.1f}*C  Humidity={1:0.1f}%".format(temperature, humidity)
