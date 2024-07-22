import type { SparkFitImage } from "@/utils/types";
import Image from "next/image";
import {useState} from "react";

interface ClothesEntryProps extends React.HTMLProps<HTMLDivElement> {
    image: SparkFitImage;
    onUpdate: (updatedImage: SparkFitImage) => void;
}


export default function ClothesEntry({ image, onUpdate }: ClothesEntryProps) {

    const [color, setColor] = useState(image.color || "");
    const [fabric, setFabric] = useState(image.fabric || "");
    const [fit, setFit] = useState(image.fit || "");
    const [category, setCategory] = useState(image.category || "");
    const [otherCategory, setOtherCategory] = useState("");

    const handleUpdate = () => {
        const updatedImage : SparkFitImage = {
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

    return (
        <div className="flex flex-col items-center">
            <Image 
                src={image.data_url} 
                alt={image.file_name} 
                width={50} height={50}
                style={{width: "auto", height: "auto"}}
            />
             <div>
                <select
                    value={category}
                    onChange={handleNameChange}
                    className="clothing-select"
                >
                    {image.predicted_classes.map((name) => (
                        <option key={name} value={name}>{name}</option>
                    ))}
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
            <span>
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
            </span>
        </div>
    );
}