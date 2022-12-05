import RPi.GPIO as GPIO
from time import sleep


class Relay:
    def __init__(self, pin) -> None:
        self._pin = pin
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(pin, GPIO.OUT)
        GPIO.output(pin,GPIO.HIGH)

    @property
    def pin(self) -> int:
        return self._pin

    def on(self) -> None:
        GPIO.output(self.pin, GPIO.HIGH)

    def off(self) -> None:
        GPIO.output(self.pin, GPIO.LOW)

    def toggle(self) -> None:
        if self.is_off():
            self.on()
        else:
            self.off()

    def is_on(self) -> bool:
        return GPIO.input(self.pin) == GPIO.HIGH

    def is_off(self) -> bool:
        return GPIO.input(self.pin) == GPIO.LOW

    def status(self) -> str:
        status = "Off"
        if self.is_on():
            status = "On"
        return f"Relay: {status}"


def test_relay(pin):
    relay = Relay(pin)
    print("RELAY: Encendido")
    relay.on()
    sleep(3)
    relay.off()
    print("RELAY: Apagado")
