import time
import RPi.GPIO as GPIO


class SoilMoisture:
    def __init__(self, pin) -> None:
        self._pin = pin
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(pin, GPIO.IN)

    @property
    def pin(self) -> int:
        return self._pin

    def read(self) -> int:
        """_summary_

        Returns:
           int: 0 is wet and 1 is dry
        """
        return GPIO.input(self.pin)


def test_soil_moisture():
    soil_moisture = SoilMoisture(pin=17)
    while True:
        print(soil_moisture.read())
        time.sleep(1)
