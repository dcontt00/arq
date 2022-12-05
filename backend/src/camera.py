import time
from picamera2 import Picamera2, Preview
import os

PIC_PATH = "../data/pic/"


class Camera:
    def __init__(self) -> None:
        if not os.path.exists("../data/pics"):
            os.makedirs("../data/pics")
        self.picam2 = Picamera2()
        config = self.picam2.create_still_configuration()
        self.picam2.configure(config)
        self.picam2.start()

    def take_picture(self) -> None:
        return self.picam2.capture()

    def save_picture(self) -> None:
        self.picam2.capture_file(PIC_PATH + "test.jpg")

    def stop(self) -> None:
        self.picam2.stop()
