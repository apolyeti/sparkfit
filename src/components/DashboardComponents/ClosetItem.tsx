import type { SparkFitImage }   from "@/utils/types";
import Image                    from "next/image";

interface ClothesItemProps extends React.HTMLProps<HTMLDivElement> {
    image: SparkFitImage;
    handleEdit: (image: SparkFitImage) => void;
}

export default function ClothesItem({ image, handleEdit }: ClothesItemProps) {
    return (
        <div className="clothes-item" onClick={()=>handleEdit(image)}>
            <Image 
                src={image.data_url} 
                alt={image.file_name} 
                width={200} height={200} 
                className="clothes-image"
                priority
            />
            <p>
                {image.category.toUpperCase()}
            </p>
        </div>
    );
}
