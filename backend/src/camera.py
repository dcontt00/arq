import time
from picamera2 import Picamera2
import os
from PIL import Image

PIC_PATH = "../data/pics/"
if not os.path.exists("../data/pics"):
    os.makedirs("../data/pics")
picam2 = Picamera2()
config = picam2.create_still_configuration()
picam2.configure(config)


def save_picture() -> None:
    date = time.strftime("%Y-%m-%d_%H:%M:%S")

    picam2.start()

    picam2.capture_file(PIC_PATH + f"{date}.jpg")
    im = Image.open(PIC_PATH + f"{date}.jpg")
    im.rotate(180).save(PIC_PATH + f"{date}.jpg")
    return PIC_PATH + f"{date}.jpg"


if __name__ == "__main__":
    picam2.start()

    np_array = picam2.capture_array()
    print(np_array)
    picam2.capture_file("demo.jpg")
    im = Image.open("demo.jpg")
    im.rotate(180).save("demo.jpg")
    picam2.stop()
