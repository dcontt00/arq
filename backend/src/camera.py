import time
from picamera2 import Picamera2
import os

PIC_PATH = "../data/pic/"
if not os.path.exists("../data/pics"):
    os.makedirs("../data/pics")

picam2 = Picamera2()
config = picam2.create_still_configuration()
picam2.configure(config)
picam2.start()


def take_picture() -> None:
    return picam2.capture()


def save_picture() -> None:
    picam2.capture_file(PIC_PATH + "test.jpg")


def stop() -> None:
    picam2.stop()
