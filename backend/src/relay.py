import RPi.GPIO as GPIO
from time import sleep


class Relay:
    def __init__(self, pin) -> None:
        self._pin = pin
        GPIO.setup(pin, GPIO.OUT)

    @property
    def pin(self) -> int:
        return self._pin

    def on(self) -> None:
        GPIO.output(self.pin, GPIO.LOW)

    def off(self) -> None:
        GPIO.output(self.pin, GPIO.HIGH)

    def toggle(self) -> None:
        if self.is_off():
            self.on()
            return 1
        else:
            self.off()
            return 0

    def is_on(self) -> bool:
        return GPIO.input(self.pin) == GPIO.LOW

    def is_off(self) -> bool:
        return GPIO.input(self.pin) == GPIO.HIGH

    def status(self) -> str:
        status = 0
        if self.is_on():
            status = 1
        return status


def test_relay(pin):
    relay = Relay(pin)
    print("RELAY: Encendido")
    relay.on()
    sleep(3)
    relay.off()
    print("RELAY: Apagado")


if __name__ == "__main__":
    test_relay(4)
    test_relay(17)
    test_relay(27)
