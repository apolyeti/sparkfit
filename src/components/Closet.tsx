"use client";

import ClothingItem from "@components/ClothingItem";
import type { SparkFitImage } from "@utils/types";
import { useState, useEffect } from "react";


interface ClosetProps {
    images: SparkFitImage[];
}

export default function Closet({images} : ClosetProps){

    
    return (
        <>
            <div className="closet-container">
                <div className="image-grid">
                    {images.map((image) => (
                        <ClothingItem key={image.name} image={image} />
                    ))}
                </div>
            </div>
        </>
    )
}