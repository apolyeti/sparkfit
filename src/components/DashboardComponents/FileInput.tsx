"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "@styles/dashboard.css";
import { classifySparkFitImages } from "@/utils/helpers";

interface FileInputProps {
    children?: React.ReactNode;
}

export default function FileInput({ children }: FileInputProps) {
    const onDrop = useCallback(((acceptedFiles : File[]) => {
        const formData = new FormData();
        const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

        acceptedFiles.forEach((file) => {
            formData.append("files", file);
        });

        const results = fetch(`${API_URL}/clothes/classify`, {
            method: "POST",
            body: formData,
        }).then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
        
    }), []);

    const {getRootProps, getInputProps} = useDropzone({onDrop});
    // make sure the text is in the very center and large
    return (
        <div {...getRootProps()} className="dropzone text-center text-2xl">
            <input {...getInputProps()} />
            {children}
        </div>
    );
}