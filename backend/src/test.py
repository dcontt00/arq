from dht11 import test_dht11
from light_sensor import test_light_sensor
from soil_moisture import test_soil_moisture
from time import sleep
from relay import test_relay
import RPi.GPIO as GPIO

GPIO.cleanup()

while True:
    try:
        #test_dht11(17)
        #test_light_sensor()
        #test_soil_moisture(21)
        #test_relay(4)
        print()
        sleep(3)
    except KeyboardInterrupt:
        break
