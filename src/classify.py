# importing required libraries

from tensorflow import keras
import numpy as np
import os 
from pathlib import Path

# importing model
modelPath = os.path.join(Path(os.path.realpath("__file__")).parent.parent, "assets/model/hand_gesture_classify_model.h5")
model = keras.models.load_model(modelPath)

def classify(loc):
    img = keras.preprocessing.image.load_img(loc, target_size=(224, 224))
    img = keras.preprocessing.image.img_to_array(img)
    img = img.reshape(1,224,224,3)
    img = keras.applications.imagenet_utils.preprocess_input(img)
    preds = model.predict(img)
    
    mapping = {
    0:3, # lizard = 3
    1:5, # none = 5
    2:1, # paper = 1
    3:0, # rock = 0
    4:2, # scissors = 2
    5:4, # spock = 4 
    }
    
    return mapping[np.argmax(preds)]

if __name__ == "__main__":
    x=classify("F:/projects/Qiskit_Hackathon_IITR_2021/assets/captures/snap.png")
    print(x)
