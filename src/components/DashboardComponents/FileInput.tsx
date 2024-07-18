"use client";
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import "@styles/dashboard.css";
import { classifySparkFitImages } from "@/utils/helpers";
import ClothesModal from "@components/ClothesModal";
import Image from "next/image";

import type { SparkFitImage } from "@utils/types";

interface FileInputProps {
    children?: React.ReactNode;
}

export default function FileInput({ children }: FileInputProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const [images, setImages] = useState<SparkFitImage[]>([]);

    const onDrop = useCallback(((acceptedFiles : File[]) => {
        const formData = new FormData();
        const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

        acceptedFiles.forEach((file) => {
            formData.append("files", file);
        });
        
        classifySparkFitImages(formData)
            .then((result) => {
                console.log(result);
                setImages(result);
                setModalOpen(true);
            })
        
    }), []);

    const {getRootProps, getInputProps} = useDropzone({onDrop});

    const closeModal = () => {
        setModalOpen(false);
    }

    // make sure the text is in the very center and large
    return (
        <>
            <div {...getRootProps()} className="dropzone text-center text-2xl">
                <input {...getInputProps()} />
                {children}
            </div>
            <ClothesModal
                isOpen={modalOpen}
                onClose={closeModal}
            >
                <h2>
                    Uploaded Images
                </h2>
                <div className="images-container">
                    {images.map((file, index) => (
                        <div key={index} className="image-item">
                            <Image
                                src={file.file_name}
                                alt={file.name}
                            />
                            <p>{file.name}</p>
                        </div>
                    ))}
                </div>
            </ClothesModal>
        </>
    );
}