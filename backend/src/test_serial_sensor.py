
import time
import serial
ser = serial.Serial(
    port='/dev/serial0',
    baudrate=115200,
)

while 1:
	if (ser.in_waiting > 0):
		x = ser.readline().decode('utf-8').rstrip()
		print(x.split('/'))
