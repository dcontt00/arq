import time
import RPi.GPIO as GPIO


class LightSensor:
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
           int: 0 no light, 1 light
        """
        if GPIO.input(self.pin) == 0:
            return 1
        else:
            return 0

    def read_str(self) -> str:
        status = "No Light"
        print(self.read())
        if self.read() == 0:
            status = "Light"
        return f"Light Sensor: {status}"


if __name__ == "__main__":
    light_sensor = LightSensor(23)
    print("Light Sensor: " + light_sensor.read_str())
