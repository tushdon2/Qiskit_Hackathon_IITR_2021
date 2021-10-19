import eel
import classify as cl
import quantum_rng as qng
import os
from pathlib import Path

eel.init('web')

@eel.expose
def getRandomNumber():
    num = qng.random_number()
    print("getRandomNumber",num)
    return num

@eel.expose
def classify():
    imgName = "snap.jpg"
    dir = os.path.join(Path(os.path.realpath("__file__")).parent.parent, "assets\\captures")
    if not os.path.exists(dir): os.makedirs(dir)

    num = cl.classify(os.path.join(dir, imgName))
    print("classify", num)
    return num

eel.start('index.html')