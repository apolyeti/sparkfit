import type { SparkFitImage } from "@/utils/types";
import Image from "next/image";

interface ClothesEntryProps extends React.HTMLProps<HTMLDivElement> {
    image: SparkFitImage;
}


export default function ClothesEntry({ image }: ClothesEntryProps) {
    return (
        <div className="flex flex-col items-center">
            <Image src={image.data} alt={image.file_name} width={100} height={100}/>
            <div>
                {image.names.map((name) => (
                    <span key={name}>{name}</span>
                ))}
            </div>
            <span>
                <input placeholder="Color" />
                <input placeholder="Fabric" />
                <input placeholder="Fit" />
            </span>
        </div>
    );
}