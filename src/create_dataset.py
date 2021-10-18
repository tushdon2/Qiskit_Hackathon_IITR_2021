import cv2
import os
from pathlib import Path
import sys

dirPath = os.path.join(Path(__file__).parent.parent, "assets/data/")
componentName = sys.argv[1]
datasetSize = int(sys.argv[2])
componentPath = os.path.join(dirPath, componentName)

if (not os.path.exists(componentPath)):
    print("The {} directory does not exist. Creating the required directories...\n".format(componentPath))
    os.makedirs(componentPath)

initialItems = len(os.listdir(componentPath))

cap = cv2.VideoCapture(0)
cap.set(cv2.CAP_PROP_FRAME_WIDTH, 1280)
cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 720)

toStart = False
total = 0

while True:
    isCapturing, frame = cap.read()
    if not isCapturing: continue
    if total == datasetSize: break

    cv2.rectangle(frame, (100, 100), (600, 600), (255, 255, 255), 2)

    if toStart:
        usermoveImage = frame[100:600, 100:600]
        total += 1
        save_path = os.path.join(componentPath, '{}.jpg'.format(initialItems + total))
        cv2.imwrite(save_path, usermoveImage)
        
    font = cv2.FONT_HERSHEY_SIMPLEX
    cv2.putText(frame, "Collected {} images...".format(total), (5, 50), font, 0.7, (255, 0, 255), 2, cv2.LINE_AA)
    
    cv2.imshow("Dataset Creation", frame)

    k = cv2.waitKey(200)
    if k == ord(' '): toStart = not toStart

print("{} image(s) saved to {}\n".format(total, componentPath))
cap.release()
cv2.destroyAllWindows()