import time
import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BCM)

rel=21
GPIO.setup(rel,GPIO.OUT)



while True:
    try:
        if GPIO.input(rel)==GPIO.HIGH: # Esta apagado
            GPIO.output(rel,GPIO.LOW)
            print("Encendido")
        else: # Esta encendido
            GPIO.output(rel,GPIO.HIGH)
            print("Apagado")
        time.sleep(3)
    except KeyboardInterrupt:
        GPIO.cleanup()
        break
        print("Fin")
