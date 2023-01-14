import dht11
from dht11 import DHT11
import RPi.GPIO as GPIO


class DHT11Sensor:
    def __init__(self, pin: int) -> None:
        GPIO.setwarnings(False)
        GPIO.setmode(GPIO.BCM)
        GPIO.cleanup()
        self.DHT_PIN = pin
        self.sensor = DHT11(pin=self.DHT_PIN)

    @property
    def sensor(self):
        return self.sensor

    def read(self):
        result = self.sensor.read()
        humidity = result.humidity
        temperature = result.temperature

        return temperature, humidity

    def read_str(self):
        result = self.sensor.read()
        humidity = result.humidity
        temperature = result.temperature
        return "Temp={0:0.1f}*C  Humidity={1:0.1f}%".format(temperature, humidity)


if __name__ == "__main__":
    dht11 = DHT11Sensor(18)
    print("DHT11: " + dht11.read_str())
