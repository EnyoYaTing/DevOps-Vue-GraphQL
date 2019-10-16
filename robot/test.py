from pymongo import MongoClient
import gridfs
import imageio
import glob

db = MongoClient().gridfs_test
fs = gridfs.GridFS(db)
filename = "/Users/dacozai/start.png"

datafile = open(filename,"rb");
thedata = datafile.read()
im = fs.put(thedata, filename="testimage")
fd = fs.find({"filename":"testimage"})

filename2 = "/Users/dacozai/startttt.png"
for elem in fd:
    with open(filename2, 'wb') as f:
        f.write(elem.read())
