import Image from "next/image";

import type { OutfitChoices, OutfitChoice } from "@/utils/types";

interface OutfitChoicesComponentProps {
    outfitChoices: OutfitChoices;
}

export default function OutfitChoicesComponent({ outfitChoices }: OutfitChoicesComponentProps) {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">Outfit Choices</h1>
            <div className="flex flex-col items-center justify-center">
                {outfitChoices.choices.map((choice: OutfitChoice, index: number) => (
                    <div key={index} className="flex flex-col items-center justify-center">
                        <h2 className="text-2xl font-bold">Choice {index + 1}</h2>
                        <div className="flex flex-row items-center justify-center">
                            {choice.outfit.map((clothing) => (
                                <div key={clothing.photo_id} className="flex flex-col items-center justify-center px-2">
                                    <Image
                                        src={clothing.data_url}
                                        alt={clothing.category}
                                        width={300}
                                        height={300}
                                        className="clothes-image"
                                    />
                                    <p>{clothing.category}</p>
                                </div>
                            ))}
                        </div>
                        <p>{choice.reason}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}


