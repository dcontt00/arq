import time
import RPi.GPIO as GPIO

PIN = 21


class SoilMoisture:
    def __init__(self) -> None:
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(PIN, GPIO.IN)

    def read(self) -> int:
        """_summary_

        Returns:
           int: 0 is wet and 1 is dry
        """
        return GPIO.input(PIN)
