import RPi.GPIO as GPIO


class Relay:
    def __init__(self, pin) -> None:
        self._pin = pin
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(pin, GPIO.OUT)

    @property
    def pin(self) -> int:
        return self._pin

    def on(self) -> None:
        GPIO.output(self.pin, GPIO.HIGH)

    def off(self) -> None:
        GPIO.output(self.pin, GPIO.LOW)

    def is_on(self) -> bool:
        return GPIO.input(self.pin) == GPIO.HIGH

    def is_off(self) -> bool:
        return GPIO.input(self.pin) == GPIO.LOW

    def read_str(self) -> str:
        status = "Off"
        if self.is_on():
            status = "On"
        return f"Relay: {status}"


def test_relay(pin):
    relay = Relay(pin)
    relay.on()
    print(relay.read_str())
    relay.off()
    print(relay.read_str())
