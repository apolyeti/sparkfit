"use client";
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import "@styles/dashboard.css";
import { classifySparkFitImages } from "@/utils/helpers";
import ClothesModal from "@components/ClothesModal";
import Image from "next/image";

import type { SparkFitImage } from "@utils/types";

interface FileInputProps {
    setImages: (images: SparkFitImage[]) => void;
    setModalOpen: (open: boolean) => void;
    children?: React.ReactNode;
}

export default function FileInput({ setImages, setModalOpen, children }: FileInputProps) {

    const onDrop = useCallback(((acceptedFiles : File[]) => {
        const formData = new FormData();
        const API_URL = process.env.NEXT_PUBLIC_API_URL || "";


        acceptedFiles.forEach((file) => {
            const reader = new FileReader();
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

    // make sure the text is in the very center and large
    return (
        <>
            <div {...getRootProps()} className="dropzone text-center text-2xl">
                <input {...getInputProps()} />
                {children}
            </div>
            {/* <ClothesModal isOpen={modalOpen} onClose={closeModal}>
                {images.map((image) => (
                    <div key={image.file_name}>
                        <Image src={image.data} alt={image.file_name} width={100} height={100}/>
                        <div>
                            {image.names.map((name) => (
                                <span key={name}>{name}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </ClothesModal> */}
        </>
    );
}