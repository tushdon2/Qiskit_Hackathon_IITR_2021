import eel
import classify as cl
import qrng
import os
from pathlib import Path

eel.init('web')

@eel.expose
def getRandomNumber(numbers = 5):
    lst = []
    for i in range(4 * numbers):
        lst.append(qrng.random_number())
    return lst

@eel.expose
def classify():
    imgName = "snap.jpg"
    dir = os.path.join(Path(os.path.realpath("__file__")).parent.parent, "assets/captures")
    if not os.path.exists(dir): os.makedirs(dir)

    return cl.classify(os.path.join(dir, imgName))

eel.start('index.html')