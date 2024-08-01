import Image from "next/image";
import type { OutfitChoices, OutfitChoice } from "@/utils/types";

interface OutfitChoicesComponentProps {
    outfitChoices: OutfitChoices;
}

export default function OutfitChoicesComponent({ outfitChoices }: OutfitChoicesComponentProps) {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold"></h1>
            <div className="flex flex-row gap-2 items-stretch justify-center w-full">
                {outfitChoices.choices.map((choice: OutfitChoice, index: number) => (
                    <div key={index} className="rounded border-2 border-white flex flex-row w-2/5 justify-center mb-4 p-4">
                        <div className="flex flex-col items-center justify-center">
                            {choice.outfit.map((clothing) => (
                                <div key={clothing.photo_id} className="flex flex-col items-center justify-center p-2">
                                    <Image
                                        src={clothing.data_url}
                                        alt={clothing.category}
                                        width={200}
                                        height={200}
                                        style={{ width: "200px", height: "200px", objectFit: "cover", borderRadius: "8px" }}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col justify-center ml-4 w-1/2">
                            <p className="text-xl text-left">
                                {choice.reason}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
