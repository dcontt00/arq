import time
import board
import adafruit_dht


class DHT11Sensor:
    def __init__(self, pin: int) -> None:

        self.DHT_PIN = pin
        self._sensor = adafruit_dht.DHT11(board.D18)

    @property
    def sensor(self):
        return self._sensor

    def read(self):
        humidity = self.sensor.humidity
        temperature = self.sensor.temperature

        return humidity, temperature

    def read_str(self):
        result = self.read()
        temperature = result[1]
        humidity = result[0]
        return "Temp={0:0.1f}*C  Humidity={1:0.1f}%".format(temperature, humidity)


if __name__ == "__main__":
    dht11_sensor = DHT11Sensor(18)
    print("DHT11: " + dht11_sensor.read_str())
