
import GetStartedButton from "@/components/HomePageComponents/GetStartedButton";

export default async function Home() {

    return (
        <div className="flex items-center justify-center h-screen flex-col">
            <h1 className="text-5xl animate-fadeInDown">
                Sparkfit
            </h1>
            <p className="text-xl animate-fadeInDown p-2">
                Get outfit suggestions based on the weather
            </p>
            <GetStartedButton />
            
        </div>
    );
}
