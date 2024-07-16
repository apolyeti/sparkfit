import Link from "next/link";
import GetStartedButton from "@/components/HomePageComponents/GetStartedButton";

export default function Home() {

    // const [location, setLocation] = useState<UserLocationInfo | null>(null);
    // const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

    // useEffect(() => {
    //     async function fetchWeather() {
    //         try {
    //             if (!API_KEY) {
    //                 throw SparkFitError.MissingAPIKey();
    //             }
    //             navigator.geolocation.getCurrentPosition(async (position) => {
    //                 const lat = position.coords.latitude;
    //                 const lon = position.coords.longitude;
                    
    //                 // get weather data
    //                 const data = await getWeatherData(API_KEY, lat, lon);
    //                 if (data) {
    //                     setLocation({
    //                         city: data.location.name,
    //                         country: data.location.country,
    //                         weather: data.current.condition.text,
    //                         temperature: data.current.temp_c,
    //                         wind_speed: data.current.wind_kph,
    //                         humidity: data.current.humidity,
    //                     });
    //                 }
    //             });
    //         }
    //         catch (error) {
    //             console.error(error);
    //         }
    //     }
    //     fetchWeather();
    // }, [API_KEY]);

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
