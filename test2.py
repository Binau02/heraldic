from PIL import Image


sizex, sizey = 10, 10
shape = Image.new("RGBA", (sizex, sizey), (0, 0, 0, 0))


shape.putpixel((0, 0), (255, 0, 0))

print(shape.getpixel((1, 1)))

shape.show()