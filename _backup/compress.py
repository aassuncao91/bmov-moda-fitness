from PIL import Image
import os

BASE = "C:/Users/alexo/OneDrive/Desktop/Claudinho/Landing page/images"
OUT  = "C:/Users/alexo/OneDrive/Desktop/Claudinho/Landing page/images_web"

targets = {
  "leggings/Conjunto Aura/IMG_7711.JPG.jpeg": "leggings/IMG_7711.jpg",
  "leggings/Conjunto Aura/IMG_7720.JPG.jpeg": "leggings/IMG_7720.jpg",
  "leggings/Conjunto Aura/IMG_7730.JPG.jpeg": "leggings/IMG_7730.jpg",
  "leggings/Conjunto Aura/IMG_7740.JPG.jpeg": "leggings/IMG_7740.jpg",
  "leggings/Conjunto Aura/IMG_8591.JPG.jpeg": "leggings/IMG_8591.jpg",
  "leggings/Conjunto Aura/IMG_7712.JPG.jpeg": "leggings/IMG_7712.jpg",
  "leggings/Conjunto Aura/IMG_7713.JPG.jpeg": "leggings/IMG_7713.jpg",
  "dryfit/Camisa/IMG_0714.JPG.jpeg": "dryfit/IMG_0714.jpg",
  "dryfit/Camisa/IMG_0717.JPG.jpeg": "dryfit/IMG_0717.jpg",
  "dryfit/Camisa/IMG_0720.JPG.jpeg": "dryfit/IMG_0720.jpg",
  "dryfit/Camisa/IMG_0723.JPG.jpeg": "dryfit/IMG_0723.jpg",
  "dryfit/Camisa/IMG_0715.JPG.jpeg": "dryfit/IMG_0715.jpg",
  "dryfit/Regata/IMG_0729.JPG.jpeg": "dryfit/IMG_0729.jpg",
  "dryfit/Regata/IMG_0730.JPG.jpeg": "dryfit/IMG_0730.jpg",
}

MAX_W, MAX_H = 900, 1200

for src_rel, dst_rel in targets.items():
    src = os.path.join(BASE, src_rel)
    dst = os.path.join(OUT, dst_rel)
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    img = Image.open(src)
    img.thumbnail((MAX_W, MAX_H), Image.LANCZOS)
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGB")
    img.save(dst, "JPEG", quality=82, optimize=True)
    orig = os.path.getsize(src) // 1024
    new  = os.path.getsize(dst) // 1024
    print(f"  {dst_rel}: {orig}KB -> {new}KB")

print("Concluido!")
