"use client";
import Weather from "@components/BackgroundVideo/Weather";
import { useEffect, useState } from "react";
import type { UserLocationInfo } from "@/utils/types";

export default function Home() {

    const [location, setLocation] = useState<UserLocationInfo | null>(null);

    // get geolocation of user

    useEffect(() => {
        const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            // 42.296881, -89.645892
            
            // get weather data
            fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lon}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    const locationInfo: UserLocationInfo = {
                        city: data.location.name,
                        country: data.location.country,
                        weather: data.current.condition.text,
                        temperature: data.current.temp_c,
                        wind_speed: data.current.wind_mph,
                        humidity: data.current.humidity,
                    };
                    setLocation(locationInfo);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        });
    }, []);

    return (
        <div>
            {location && <Weather weather={location.weather} />}
        </div>
    );
}
