import time
import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BCM)

rel=4
GPIO.setup(rel,GPIO.OUT)

#GPIO.output(rel, GPIO.LOW)
time.sleep(2)
GPIO.output(rel, GPIO.HIGH)
GPIO.cleanup()
