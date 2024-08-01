"use client";
import                                   "@styles/dashboard.css";
import { useDropzone }              from "react-dropzone";
import { useCallback }              from "react";
import { classifySparkFitImages }   from "@/utils/helpers";

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
            // Check if the file is an image
            if (!file.type.match('image.*')) {
                return;
            }
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
                <p className="dropzone-footer">
                    accepted file types: .jpg, .jpeg, .png
                    </p>
            </div>
        </>
    );
}