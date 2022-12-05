import time
from picamera2 import Picamera2
import os

PIC_PATH = "../data/pics/"
if not os.path.exists("../data/pics"):
    os.makedirs("../data/pics")


def save_picture() -> None:
    date = time.strftime("%Y-%m-%d_%H:%M:%S")
    picam2 = Picamera2()
    try:

        config = picam2.create_still_configuration()
        picam2.configure(config)
        picam2.start_and_capture_file(PIC_PATH + f"{date}.jpg")
    finally:
        picam2.stop()
    return PIC_PATH + f"{date}.jpg"
