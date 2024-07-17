"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { getWeatherData } from "@/utils/helpers";
import type { UserLocationInfo } from "@/utils/types";
import DashboardItem from "@/components/DashboardComponents/DashboardItem";
import FileInput from "@/components/DashboardComponents/FileInput";
import Image from "next/image";
import "@styles/dashboard.css";


export default function Dashboard() {
    const { data: session } = useSession();
    const [userLocationInfo, setUserLocationInfo] = useState<UserLocationInfo | null>(null);
    
    useEffect(() => {
        const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY || "NO API KEY FOUND";
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;
                const weatherData = await getWeatherData(API_KEY, latitude, longitude);
                setUserLocationInfo(weatherData);
            }
            );
        }
    }, []);


    // use tailwindcss to make grid for dashboard
    // with each dashboard item just being
    // header1.. 2..
    // and each content just content 1.. 2..
    
        return (
            <div className="p-5 w-full">
                <div className="grid grid-cols-3 gap-4">
                    <DashboardItem name="Location">
                        {userLocationInfo?.city}, {userLocationInfo?.country}
                    </DashboardItem>
                    <DashboardItem name="Temperature">
                        {userLocationInfo?.temperature} F
                    </DashboardItem>
                    <DashboardItem name="Wind Speed">
                        {userLocationInfo?.wind_speed} mph
                    </DashboardItem>
                    <div className="dashboard-item col-span-3 h-44">
                        <FileInput>
                            <div className="text-2xl">
                                Upload a file
                            </div>
                        </FileInput>
                    </div>
                    <DashboardItem name={session?.user?.name || "no user"}>
                        {
                            session?.user?.image 
                            && 
                            <Image 
                                src={session.user.image} 
                                alt="user profile" 
                                className="rounded-full h-16 w-16" 
                                width={128}
                                height={128}
                            />
                        }
                    </DashboardItem>

                </div>
            </div>
        );
}