import time
import RPi.GPIO as GPIO

#GPIO setup -- pin 29 as moisture sensor input
GPIO.setmode(GPIO.BOARD)
GPIO.setup(29,GPIO.IN)

try:
    while True:
        if (GPIO.input(29))==0:
            print('Wet')
        elif (GPIO.input(29))==1:
            print('Dry')
        time.sleep(.25)

finally:
    #cleanup the GPIO pins before ending
    GPIO.cleanup()