import sys
from rembg import remove
from PIL import Image

def main():
    input_path = "public/images/avanza.jpg"
    output_path = "public/images/avanza-nobg.png"
    
    print(f"Processing {input_path}...")
    try:
        input_img = Image.open(input_path)
        output_img = remove(input_img)
        output_img.save(output_path)
        print(f"Successfully saved transparent image to {output_path}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == '__main__':
    main()
