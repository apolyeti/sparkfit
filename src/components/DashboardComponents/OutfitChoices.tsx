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
                    <div key={index} className="rounded border-2 border-white flex flex-row w-2/6 justify-between mb-4">
                        <div className="flex flex-col items-center justify-center">
                            {choice.outfit.map((clothing) => (
                                <div key={clothing.photo_id} className="flex flex-col items-center justify-center p-2">
                                    <Image
                                        src={clothing.data_url}
                                        alt={clothing.category}
                                        width={300}
                                        height={300}
                                        style={{ width: "300px", height: "300px", objectFit: "cover", borderRadius: "8px" }}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col ml-2 border-l-2 w-1/2">
                            <div className="flex flex-col items-center justify-center h-1/6">
                                {choice.outfit.map((clothing) => (
                                    <p key={clothing.photo_id} className="text-center text-xl">
                                        {clothing.color.charAt(0).toUpperCase() + clothing.color.slice(1)} {clothing.category}
                                    </p>
                                ))}
                            </div>
                            <div className="flex flex-col items-center justify-center h-5/6 border-top p-2">
                                <p className="text-xl text-left justify">
                                    {choice.reason}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
