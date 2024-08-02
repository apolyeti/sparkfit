import Image from "next/image";
import type { OutfitChoices, OutfitChoice } from "@/utils/types";

interface OutfitChoicesComponentProps {
    outfitChoices: OutfitChoices;
}

export default function OutfitChoicesComponent({ outfitChoices }: OutfitChoicesComponentProps) {
    return (
        <div className="flex flex-col items-center justify-center w-full animate-fadeIn" id="outfit-container">
            <div className="flex flex-row gap-2 items-stretch justify-center w-full">
                {outfitChoices.choices.map((choice: OutfitChoice, index: number) => (
                    <div key={index} className="rounded border-2 border-[#f7ece1] flex flex-row w-2/6 mb-4 box-shadow">
                        <div className="flex flex-col w-1/2">
                            <div className="w-full h-36 flex flex-col justify-center items-center">
                                <h2 className="text-xl font-bold text-center">OUTFIT</h2>
                                <p className="text-lg font-bold text-center">{index + 1}</p>
                            </div>
                            <div className="border-[#f7ece1] border-t-2 flex flex-col w-full h-full">
                                {choice.outfit.map((clothing) => (
                                    <div key={clothing.photo_id} className="flex flex-col items-center justify-between p-2">
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
                        </div>
                        <div className="flex flex-col border-[#f7ece1] border-l-2 w-1/2">
                            <div className="flex flex-col items-center justify-center h-36">
                                {choice.outfit.map((clothing) => (
                                    <p key={clothing.photo_id} className="text-center text-xl">
                                        {clothing.color.toUpperCase() + " " + clothing.category.toUpperCase()}
                                    </p>
                                ))}
                            </div>
                            <div className="flex flex-col items-center justify-center border-[#f7ece1] border-t-2 p-1 h-full">
                                <p className="text-lg text-center" id="outfit-reason">
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
