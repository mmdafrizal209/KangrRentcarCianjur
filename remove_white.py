from PIL import Image

def remove_white_bg(input_path, output_path, tolerance=50):
    img = Image.open(input_path)
    img = img.convert("RGBA")
    datas = img.getdata()

    newData = []
    for item in datas:
        # Check if pixel is close to white
        if item[0] >= 255 - tolerance and item[1] >= 255 - tolerance and item[2] >= 255 - tolerance:
            newData.append((255, 255, 255, 0)) # transparent
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Saved to {output_path}")

remove_white_bg("public/images/avanza.jpg", "public/images/avanza-nobg.png")
