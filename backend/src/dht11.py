import board
import adafruit_dht


class DHT11:
    def __init__(self, pin: int) -> None:
        self.DHT_PIN = pin
        self.sensor = adafruit_dht.DHT11(board.D18, use_pulseio=False )

    def read(self):
        temperature = self.sensor.temperature
        humidity = self.sensor.humidity
        return humidity, temperature

    def read_str(self):
        humidity, temperature = self.read()
        return "Temp={0:0.1f}*C  Humidity={1:0.1f}%".format(temperature, humidity)


if __name__ == "__main__":
    dht11 = DHT11(18)
    print("DHT11: " + dht11.read_str())
