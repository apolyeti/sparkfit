"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "@styles/dashboard.css";

interface FileInputProps {
    children?: React.ReactNode;
}

export default function FileInput({ children }: FileInputProps) {
    const onDrop = useCallback(((acceptedFiles : File[]) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader();

            reader.onerror = () => {
                console.log("Error reading file");
            }
            
            reader.onabort = () => {
                console.log("File reading aborted");
            }

            reader.onload = () => {
                const binaryStr = reader.result;
                console.log(binaryStr);
            }

            reader.readAsArrayBuffer(file);
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