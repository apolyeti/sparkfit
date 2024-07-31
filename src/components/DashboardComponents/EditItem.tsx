"use client";

import Image from "next/image";
import { useState } from "react";
import { SparkFitImage } from "@/utils/types";
import { deleteClothing } from "@/utils/helpers";
import { useSession } from "next-auth/react";

interface ClothesEntryProps extends React.HTMLProps<HTMLDivElement> {
    image: SparkFitImage;
    onUpdate: (updatedImage: SparkFitImage) => void;
    handleDelete : (image: SparkFitImage) => void;
}

export default function EditItem({ image, onUpdate, handleDelete }: ClothesEntryProps) {

    const [color, setColor] = useState(image.color || "");
    const [fabric, setFabric] = useState(image.fabric || "");
    const [fit, setFit] = useState(image.fit || "");
    const [category, setCategory] = useState(image.category || "");
    const [otherCategory, setOtherCategory] = useState("");
    const { data: session } = useSession();


    const handleUpdate = () => {
        const updatedImage: SparkFitImage = {
            ...image,
            color,
            fabric,
            fit,
            category: category === "other" ? otherCategory : category
        };
        onUpdate(updatedImage);
    }

    const handleNameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setCategory(value);
        if (value !== "other") {
            handleUpdate();
        }
    }

    const handleOtherCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOtherCategory(e.target.value);
    }

    const handleOtherNameBlur = () => {
        if (category === "other") {
            handleUpdate();
        }
    }

    const email = session?.user?.email;

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-xl">
                Edit Item
            </h1>
            <Image 
                src={image.data_url}
                alt={image.file_name}
                width={100} height={100}
                style={{width: "auto", height: "auto"}}
                className="p-4"
            />
            <div>
                <select
                    value={category}
                    onChange={handleNameChange}
                    className="clothing-select"
                >
                    <option value="category">{image.category}</option>
                    <option value="other">Other</option>
                </select>
                {category === "other" && (
                    <input
                        className="clothing-input"
                        placeholder="Enter name"
                        value={otherCategory}
                        onChange={handleOtherCategoryChange}
                        onBlur={handleOtherNameBlur}
                    />
                )}
            </div>

            <div>
            <input
                    className="clothing-input"
                    placeholder="Color" 
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    onBlur={handleUpdate}
                />
                <input
                    className="clothing-input"
                    placeholder="Fabric" 
                    value={fabric}
                    onChange={(e) => setFabric(e.target.value)}
                    onBlur={handleUpdate}
                />
                <input 
                    className="clothing-input"
                    placeholder="Fit" 
                    value={fit}
                    onChange={(e) => setFit(e.target.value)}
                    onBlur={handleUpdate}
                />
            </div>
            <button className="save-btn">
                Save
            </button>
            <button className="delete-btn" onClick={() => handleDelete(image)}>
                Delete
            </button>
        </div>
    )
}