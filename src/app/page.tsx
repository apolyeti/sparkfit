import GetStartedButton from "@/components/HomePageComponents/GetStartedButton";
import Shirt from "@public/clothing_icons/t-shirt.svg";
import Pants from "@public/clothing_icons/pants.svg";
import Jacket from "@public/clothing_icons/jacket.svg";
import Image from "next/image";

export default function Home() {
    return (
        <div className="relative h-screen overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <Image
                    src={Shirt}
                    alt="Shirt"
                    className="animate-diagonal1 opacity-10 absolute"
                    width={200}
                    height={200}
                />
                <Image
                    src={Pants}
                    alt="Pants"
                    className="animate-diagonal2 opacity-10 absolute"
                    width={200}
                    height={200}
                />
                <Image
                    src={Jacket}
                    alt="Jacket"
                    className="animate-diagonal3 opacity-10 absolute"
                    width={200}
                    height={200}
                />
            </div>
            <div className="h-screen flex flex-col items-center justify-center z-10 relative">
                <h1 className="text-5xl text-white">Sparkfit</h1>
                <p className="text-xl text-white">Get outfit suggestions based on the weather</p>
                <GetStartedButton />
            </div>
        </div>
    );
}
