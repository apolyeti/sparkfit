"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "@styles/dashboard.css";

interface FileInputProps {
    children?: React.ReactNode;
}

export default function FileInput({ children }: FileInputProps) {
    const onDrop = useCallback(((acceptedFiles : File[]) => {
        const formData = new FormData();

        acceptedFiles.forEach((file) => {
            formData.append("files", file);
        });

        const apiURL = process.env.NEXT_PUBLIC_API_URL || "NO API URL FOUND";

        fetch(`${apiURL}/clothes/classify`, {
            method: "POST",
            body: formData,
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
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