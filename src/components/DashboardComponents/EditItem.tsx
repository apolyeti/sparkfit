"use client";

import Image                from "next/image";
import { useState }         from "react";
import { SparkFitImage }    from "@/utils/types";

interface EditItemProps extends React.HTMLProps<HTMLDivElement> {
    image: SparkFitImage;
    handleDelete : (image: SparkFitImage) => void;
    handleEdit: (updatedImage: SparkFitImage) => void;
    setSelectedImage: (image: SparkFitImage) => void;
}

export default function EditItem({ image, handleDelete, handleEdit, setSelectedImage }: EditItemProps) {

    const [color, setColor] = useState(image.color || "");
    const [fabric, setFabric] = useState(image.fabric || "");
    const [fit, setFit] = useState(image.fit || "");
    const [category, setCategory] = useState(image.category || "");
    const [otherCategory, setOtherCategory] = useState("");


    const handleUpdate = () => {
        const updatedImage: SparkFitImage = {
            ...image,
            color,
            fabric,
            fit,
            category
        };
        setSelectedImage(updatedImage);
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="modal-header text-center">
                Edit Item
            </h1>
            <Image 
                src={image.data_url}
                alt={image.file_name}
                width={100} height={100}
                style={{width: "auto", height: "auto"}}
                className="p-4"
            />
            <input 
                className="clothing-input"
                placeholder="Category" 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                onBlur={handleUpdate}
            />

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
            <button className="save-btn" onClick={() => handleEdit(image)}>
                Save
            </button>
            <button className="delete-btn" onClick={() => handleDelete(image)}>
                Delete
            </button>
        </div>
    )
}