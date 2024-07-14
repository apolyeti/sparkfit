import type { SparkFitImage } from "@utils/types";
import Image from "next/image";

interface ClothingItemProps {
  key: string; // for mapping
  image: SparkFitImage;
}

export default function ClothingItem({ image }: ClothingItemProps) {
  return (
    <div className="card">
      <div className="image-container">
        <Image
          src={image.data}
          alt={`${image.name} submitted by user`}
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
      <p>{image.name}</p>
    </div>
  );
}
