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
        self.ser.write(b'\ 0x01')
        moisture_read = self.ser.readline().decode("utf-8").rstrip().split("/")
        moisture_read = [int(x) for x in moisture_read]
        moisture_read = [100-((x-200)/(650-200))*100 for x in moisture_read]
        return moisture_read

    def read_str(self) -> str:
        moisture_read = self.read()
        return f"Soil Moisture 1: {moisture_read[0]}\n" + f"Soil Moisture 2: {moisture_read[1]}"

if __name__=="__main__":
    soil_moisture = SoilMoisture()
    print("Soil Moisture: " + soil_moisture.read_str())
