import time
import serial


class SoilMoisture:
    def __init__(self) -> None:
        self.ser = serial.Serial(port='/dev/serial0',baudrate=115200)

    def read(self) -> list:
        """_summary_

        Returns:
           int: 0 is wet and 1 is dry
        """
        moisture_read = self.ser.readline().decode("utf-8").rstrip().split("/")
        moisture_read = [int(x) for x in moisture_read]
        return moisture_read

    def read_str(self) -> str:
        moisture_read = self.read()
        return f"Soil Moisture 1: {moisture_read[1]}\n" + f"Soil Moisture 2: {moisture_read[2]}"


def test_soil_moisture(pin):
    soil_moisture = SoilMoisture(pin)
    print("Soil Moisture: " + soil_moisture.read_str())
