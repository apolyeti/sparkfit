"use client";

import { useState, useEffect } from "react";
import FileInput from "@components/FileInput/FileInput";
import Closet from "@components/Closet";
import type { SparkFitImage } from "@utils/types";

export default function HomeWrapper() {
    const [images, setImages] = useState<SparkFitImage[]>([]);

    const loadImages = () => {
        const storedImages = localStorage.getItem("images");
        if (storedImages) {
            setImages(JSON.parse(storedImages));
        }
    };

    useEffect(() => {
        loadImages();
    }, []);

    const addImage = (image: SparkFitImage) => {
        const updatedImages = [...images, image];
        setImages(updatedImages);
        localStorage.setItem("images", JSON.stringify(updatedImages));
    };

    return (
        <div className="flex flex-col items-center justify-center">

            <div className="mt-8">
                <FileInput addImage={addImage} />
            </div>
            <div className="mt-8 w-full">
                <Closet images={images} />
            </div>
        </div>
    );
}
