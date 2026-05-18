from PIL import Image, ImageDraw

def process_image(input_path, output_path):
    # Open image and convert to RGBA
    img = Image.open(input_path).convert("RGBA")
    
    # We will flood fill the top-left corner (0,0) which is definitely background
    # using a unique temporary color (e.g., magenta)
    temp_color = (255, 0, 255, 255)
    
    # We use a threshold to tolerate slight shadow differences on the white background
    # 20 threshold means it will fill #FFFFFF down to #EBEBEB
    ImageDraw.floodfill(img, xy=(0, 0), value=temp_color, thresh=30)
    
    # Also flood fill other corners just in case they are isolated
    width, height = img.size
    ImageDraw.floodfill(img, xy=(width-1, 0), value=temp_color, thresh=30)
    ImageDraw.floodfill(img, xy=(0, height-1), value=temp_color, thresh=30)
    ImageDraw.floodfill(img, xy=(width-1, height-1), value=temp_color, thresh=30)
    
    # Now replace all temp_color with transparent pixels
    datas = img.getdata()
    newData = []
    for item in datas:
        if item == temp_color:
            newData.append((255, 255, 255, 0)) # transparent
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Saved {output_path}")

process_image("public/images/avanza.jpg", "public/images/avanza-nobg2.png")
