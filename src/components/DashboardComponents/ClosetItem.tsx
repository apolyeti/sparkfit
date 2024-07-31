import type { SparkFitImage } from "@/utils/types";
import Image from "next/image";

interface ClothesItemProps {
    image: SparkFitImage;
}

export default function ClothesItem({ image }: ClothesItemProps) {
    return (
        <div className="clothes-item">
            <Image 
                src={image.data_url} 
                alt={image.file_name} 
                width={200} height={200} 
                className="clothes-image"
                priority
            />
            <p>
                {image.category}
            </p>
        </div>
    );
}
