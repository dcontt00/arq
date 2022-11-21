import time
import RPi.GPIO as GPIO

PIN = 21


# GPIO setup -- pin 29 as moisture sensor input
GPIO.setmode(GPIO.BOARD)
GPIO.setup(PIN, GPIO.IN)


try:
    while True:
        if (GPIO.input(PIN)) == 0:
            print("Wet")
        elif (GPIO.input(PIN)) == 1:
            print("Dry")
        time.sleep(0.25)

finally:
    # cleanup the GPIO pins before ending
    GPIO.cleanup()
