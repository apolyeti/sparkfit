import { useState } from "react";
import Image from "next/image";
import { SparkFitImage } from "@utils/types";

interface ModalProps {
    image: SparkFitImage;
    onClose: () => void;
}

const Modal = ({ image, onClose }: ModalProps) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded shadow-lg relative">
                <button onClick={onClose} className="absolute top-0 right-0 m-4">Close</button>
                <Image src={image.data} alt={image.name + " in modal"} width={500} height={500} />
            </div>
        </div>
    );
}

export default Modal;