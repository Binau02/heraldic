from PIL import Image
import sys

colors = {
  "azur": ((0, 0, 255), (0, 0, 255)),
  "gueules": ((255, 0, 0), (255, 0, 0)),
  # "sable": ((0, 0, 0), (85, 85, 85)),
  "sinople": ((0, 193, 0), (0, 255, 0)),
  "pourpre": ((138, 54, 94), (123, 48, 84)),
  "or": ((255, 230, 0), (134, 121, 0)),
  # "argent": ((255, 255, 255), (85, 85, 85)),
  "orangé": ((255, 127, 0), (170, 85, 0)),
  "carnation": ((255, 213, 192), (99, 82, 74))
}

SIZE = 0

sys.setrecursionlimit(99999)


def luminosite(pixel):
  r, g, b = pixel
  l = int(0.2126*r + 0.7152*g + 0.0722*b)
  return (l, l, l)


def contours(image, s = 20):
  sizex, sizey = image.size
  img = Image.new("RGB", (sizex, sizey), (255, 255, 255))

  for i in range(1, sizex-1):
    for j in range(1, sizey-1):
      G = luminosite(image.getpixel((i-1, j)))
      D = luminosite(image.getpixel((i+1, j)))
      H = luminosite(image.getpixel((i, j-1)))
      B = luminosite(image.getpixel((i, j+1)))
      v = abs(G[0] - D[0]) + abs(H[0] - B[0])
      # img.putpixel((i, j), (v, v, v))
      if v > s:
        img.putpixel((i, j), (0, 0, 0))

  return img


def correct_colors(img):
  if isinstance(img, str):
    img = Image.open(img)

  sizex, sizey = img.size

  global SIZE
  if SIZE > 0:
    scale_percent = SIZE / sizex
    width = int(sizex * scale_percent)
    height = int(sizey * scale_percent)
    dim = (width, height)
    img = img.resize(dim)

    sizex, sizey = img.size

  colored_img = Image.new("RGB", (sizex, sizey), (0, 0, 0))
  for i in range(sizex):
    for j in range(sizey):
      colored_img.putpixel((i, j), find_color(img.getpixel((i, j)))[1])

  colored_img.show()
  shapes = []
  x = 0
  y = 0
  end = False
  # while not end:
  #   test = False
  #   for shape in shapes:
  #     if shape[0].getpixel((x, y)) != (0, 0, 0, 0):
  #       test = True
  #   if colored_img.getpixel((x, y)) == (0, 0, 0):
  #     test = True
  #   if not test:
  #     shape = Image.new("RGBA", (sizex, sizey), (0, 0, 0, 0))
  #     shapes.append(find_shape(colored_img, (x, y), shape, colored_img.getpixel((x, y)), 0))
  #     if shapes[-1][1] > 500:
  #       shapes[-1][0].show()
  #   x += 1
  #   if x == sizex:
  #     x = 0
  #     y += 1
  #     if y == sizey:
  #       end = True
  visited = [[False for i in range(sizey)] for j in range(sizex)]
  shapes = []
  for i in range(sizex):
    for j in range(sizey):
      x, y = i, j
      test_visited = visited[x][y]
      if not test_visited:
        shape = Image.new("RGBA", (sizex, sizey), (0, 0, 0, 0))
        color = colored_img.getpixel((x, y))
        path = []
        first = True
        count = 0
        
        while len(path) > 0 or first:
          # if not first:
          #   print(x, y, path[-1])
          # if count > 1000:
          #   print(x, y, path[-1], count)
          # if x < 0 or y < 0:
          #   print(x, y, path[-1], count)
          #   shape.show()
          # if count > 86:
          #   print(x, y, path, count)
            # shape.show()
          # print(x, y, path, count)
          # shape.show()
          # if not first and abs(path[-1][1][0]-x) + abs(path[-1][1][1]-y) > 1:
          #   print(x, y, path, count)
          #   shape.show()
          first = False
          way = 1
          # if x == 499 and y == -551 or x == 498 and y == -550:
          #   shape.show()
          # if count % 100 == 0:
          #   shape.show()
          if colored_img.getpixel((x, y)) == color and not visited[x][y]:
            shape.putpixel((x, y), color)
            visited[x][y] = True
            count += 1
            path.append([">", (x, y)])
            # if count > 14 and count%10 == 0:
            #   shape.show()
          else:
            if path[-1][0] == ">":
              x -= 1
              path[-1][0] = "v"
            elif path[-1][0] == "v":
              y -= 1
              path[-1][0] = "<"
            elif path[-1][0] == "<":
              x += 1
              path[-1][0] = "^"
            else:
              y += 1
              # print("drop false", x, y, path, count)
              path.pop()
              way = 0

          if way == 1:
            if path[-1][0] == ">":
              if x == sizex - 1:
                path[-1][0] = "v"
              else:
                x += way
            if path[-1][0] == "v":
              if y == sizey - 1:
                path[-1][0] = "<"
              else:
                y += way
            if path[-1][0] == "<":
              if x == 0:
                path[-1][0] = "^"
              else:
                x -= way
            if path[-1][0] == "^":
              # print(path[-1][0])
              if y == 0:
                # print("drop deplacement", x, y, path, count)
                path.pop()
              else:
                y -= way
          # shape.show()
        shapes.append((shape, count))
        if count > 1000:
          shape.show()


def find_shape(img, coords, shape, color, count):
  x, y = coords
  if color != img.getpixel((x, y)):
    return shape, count

  sizex, sizey = shape.size
  count += 1
  shape.putpixel(coords, color)
  # shape.show()
  if x != 0:
    if shape.getpixel((x-1, y)) == (0, 0, 0, 0):
      shape, count = find_shape(img, (x-1, y), shape, color, count)
  if y != 0:
    if shape.getpixel((x, y-1)) == (0, 0, 0, 0):
      shape, count = find_shape(img, (x, y-1), shape, color, count)
  if x != sizex-1:
    if shape.getpixel((x+1, y)) == (0, 0, 0, 0):
      shape, count = find_shape(img, (x+1, y), shape, color, count)
  if y != sizey-1:
    if shape.getpixel((x, y+1)) == (0, 0, 0, 0):
      shape, count = find_shape(img, (x, y+1), shape, color, count)
  return shape, count




def find_color(rgb):
  global colors

  sum_rgb = int(rgb[0]) + int(rgb[1]) + int(rgb[2])
  if sum_rgb < 250 and max(rgb[:2])-min(rgb[:2]) < 50:
    # return colors["sable"]
    return "sable", (0, 0, 0)

  if sum_rgb > 700:
    return "argent", (255, 255, 255)

  if rgb[2] > 127 and rgb[0] < 127:
    return "azur", (0, 0, 255)

  if rgb[0] > 215 and rgb[1] > 200 and rgb[2] < 150:
    return "or", (255, 230, 0)

  if rgb[1]/sum_rgb > 0.4 and rgb[1] > rgb[0]:
    return "sinople", (0, 193, 0)
  
  if rgb[0]/sum_rgb > 0.6:
    return "gueules", (255, 0, 0)

  best_score = 999999
  best_color = None

  for name, code in colors.items():
    score = 0
    for i in range(3):
      # score += abs(code[0][i] - rgb[i])
      score += abs(code[1][i] - rgb[i]/sum_rgb*255)
    if score <= best_score:
      best_score = score
      best_color = (name, code[0])
  
  # if best_color[0] == "carnation":
  #   print(rgb)
  #   print(rgb[1]/sum_rgb)
  return best_color


# for i in range(5):
#   correct_colors("img/blason"+str(i)+".png")

correct_colors("img/blason1.png")

# print(find_color((99, 137, 244)))
