import cloudy from "@public/weather_icons/cloudy.svg";
import cloudy_night from "@public/weather_icons/cloudy-night-1.svg";
import rainy from "@public/weather_icons/rainy-6.svg";
import sunny from "@public/weather_icons/day.svg";
import snowy from "@public/weather_icons/snowy-6.svg";
import night from "@public/weather_icons/night.svg";
import Image from "next/image";

interface WeatherDisplayProps {
    temperature: string;
    weather: string;
}

export default function WeatherDisplay({ temperature, weather }: WeatherDisplayProps) {


    let weatherIcon = sunny;
    let isDay = true;

    // check if it is day or night
    const date = new Date();
    const hours = date.getHours();
    if (hours >= 18 || hours < 6) {
        isDay = false;
    }

    const weatherCondition = weather.toLowerCase();

    // set the weather icon based on the weather
    if (weatherCondition.includes("cloud")) {
        weatherIcon = isDay ? cloudy : cloudy_night;
    }
    if (weatherCondition.includes("rain")) {
        weatherIcon = rainy;
    }
    if (weatherCondition.includes("snow")) {
        weatherIcon = snowy;
    }
    if (weatherCondition.includes("clear")) {
        weatherIcon = isDay ? sunny : night;
    }


    return (
        <div className="flex flex-col items-center p-0">
            <Image
                src={weatherIcon}
                alt="weather icon"
                width={80}
                height={80}
            />
            <div className="text-2xl font-semibold">
                {temperature}
            </div>
        </div>
    );
}