import type { SparkFitImage } from "@utils/types";
import Image from "next/image";

interface ClothingItemProps {
    image: SparkFitImage;
}

export default function ClothingItem({ image }: ClothingItemProps) {

    return (
        <div className="flex flex-col items-center justify-center no-line">
            <div
                className="card"
            >
                <div className="image-container">
                    <Image src={image.data} alt={`${image.name} submitted by user`} width={200} height={200} />
                </div>
                <p>{image.name}</p>
            </div>
        </div>
    );
}
