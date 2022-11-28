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

    def read_str(self) -> str:
        status = "Dry"
        if self.read() == 0:
            status = "Wet"
        return f"Soil Moisture: {status}"


def test_soil_moisture(pin):
    soil_moisture = SoilMoisture(pin)
    print("Soil Moisture: " + soil_moisture.read_str())
