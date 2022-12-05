import time
from picamera2 import Picamera2, Preview
import os

PIC_PATH = "../data/pic/"


class Camera:
    def __init__(self) -> None:
        if not os.path.exists("../data/pics"):
            os.makedirs("../data/pics")
        picam2 = Picamera2()
        preview_config = picam2.create_preview_configuration(main={"size": (800, 600)})
        picam2.configure(preview_config)

        picam2.start_preview(Preview.QTGL)
        picam2.start()

    def take_picture(self) -> None:
        return picam2.capture()

    def save_picture(self) -> None:
        picam2.capture(PIC_PATH + "test.jpg")
