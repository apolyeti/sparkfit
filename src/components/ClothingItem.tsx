import type { SparkFitImage } from "@utils/types";
import Image from "next/image";
import { useState } from "react";
import Modal from "@components/Clothing.Modal";

interface ClothingItemProps {
    image: SparkFitImage;
}

export default function ClothingItem({ image }: ClothingItemProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center no-line">
            <div
                className="card"
                onClick={() => setIsModalOpen(true)}
            >
                <div className="image-container">
                    <Image src={image.data} alt={`${image.name} submitted by user`} width={200} height={200} />
                </div>
                <p>{image.name}</p>
            </div>

            {isModalOpen && <Modal image={image} onClose={() => setIsModalOpen(false)} />}
        </div>
    );
}
