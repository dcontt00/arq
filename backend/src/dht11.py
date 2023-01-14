import dht11


class DHT11:
    def __init__(self, pin: int) -> None:
        self.DHT_PIN = pin
        self.sensor = dht11.DHT11(pin=14)

    @property
    def sensor(self):
        return self.sensor

    def read(self):
        result = self.sensor.read()
        humidity = result.humidity
        temperature = result.temperature

        return humidity, temperature

    def read_str(self):
        result = self.sensor.read()
        humidity = result.humidity
        temperature = result.temperature
        return "Temp={0:0.1f}*C  Humidity={1:0.1f}%".format(temperature, humidity)


if __name__ == "__main__":
    dht11 = DHT11(18)
    print("DHT11: " + dht11.read_str())
