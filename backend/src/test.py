from dht11 import test_dht11
from light_sensor import test_light_sensor
from soil_moisture import test_soil_moisture
from time import sleep
from relay import test_relay


while True:
    try:
        test_dht11()
        test_light_sensor()
        test_soil_moisture()
        test_relay()
        print()
        sleep(3)
    except KeyboardInterrupt:
        break
