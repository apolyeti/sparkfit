import Shirt    from "@public/clothing_icons/t-shirt.svg";
import Pants    from "@public/clothing_icons/pants.svg";
import Jacket   from "@public/clothing_icons/jacket.svg";
import Image    from "next/image";

export default function OutfitLoading() {
    return (
        <div className="loading-container">
            <div className="flex space-x-4">
                <Image
                    src={Jacket}
                    alt="Coat"
                    width={150}
                    height={150}
                    className="animate-fade-1"
                />
                <Image
                    src={Shirt}
                    alt="Shirt"
                    width={150}
                    height={150}
                    className="animate-fade-2"
                />
                <Image
                    src={Pants}
                    alt="Pants"
                    width={150}
                    height={150}
                    className="animate-fade-3"
                />
            </div>
        </div>
    )
}