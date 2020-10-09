from PIL import Image
import math
import os

im = Image.open("rabbit.png")
img_width, img_height = im.size
crop_width, crop_height = 28, 28
delta_width, delta_height = 10, 10
save_dir = "tmp/"

amount_of_crops_in_width = math.floor(img_width / delta_width)
amount_of_crops_in_height = math.floor(img_height / delta_height)
total_crops = amount_of_crops_in_width * amount_of_crops_in_height

counter = 0

for d_w in range(0, img_width, delta_width):
    for d_h in range(0, img_height, delta_height):
        box = (d_w, d_h, d_w + crop_width, d_h + crop_height)
        try:
            a = im.crop(box)
            clrs = a.getcolors()
            if len(clrs) > 1:
                #a.save(os.path.join(save_dir, "IMG-%d-%d.png" % (d_w, d_h)))
                counter += 1
        except:
            print("failed to crop")
            pass

print("cropped %d images!" % counter)
