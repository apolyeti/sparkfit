import type { SparkFitImage } from "@utils/types";
import Image from "next/image";
import { useState } from "react";

interface ClothingItemProps {
    key: string; // for mapping
    image: SparkFitImage;
}

const Modal = ({ image, onClose }: { image: SparkFitImage; onClose: () => void }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={onClose}>Close</button>
                <Image src={image.data} alt={`${image.name} in modal`} width={500} height={500} />
            </div>
        </div>
    );
};

export default function ClothingItem({ image }: ClothingItemProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center">
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
