
import time
import serial
ser = serial.Serial(
    port='/dev/serial0',
    baudrate=115200,
)

while 1:
    x = ser.readline()
    print(x)
