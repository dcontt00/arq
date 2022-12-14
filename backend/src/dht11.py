import Adafruit_DHT
import time


class DHT11:
    def __init__(self, pin: int) -> None:
        self.DHT_SENSOR = Adafruit_DHT.DHT11
        self.DHT_PIN = pin

    def read(self):
        humidity, temperature = Adafruit_DHT.read_retry(self.DHT_SENSOR, self.DHT_PIN)
        return humidity, temperature

    def read_str(self):
        humidity, temperature = self.read()
        return "Temp={0:0.1f}*C  Humidity={1:0.1f}%".format(temperature, humidity)


if __name__=="__main__":
    dht11 = DHT11(18)
    print("DHT11: " + dht11.read_str())
