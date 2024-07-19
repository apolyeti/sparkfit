"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { getWeatherData } from "@/utils/helpers";
import type { UserLocationInfo } from "@/utils/types";
import DashboardItem from "@/components/DashboardComponents/DashboardItem";
import FileInput from "@/components/DashboardComponents/FileInput";
import Image from "next/image";
import "@styles/dashboard.css";
import ClothesModal from "@components/ClothesModal";

import type { SparkFitImage } from "@utils/types";

export default function Dashboard() {
    const { data: session } = useSession();
    const [userLocationInfo, setUserLocationInfo] = useState<UserLocationInfo | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [images, setImages] = useState<SparkFitImage[]>([]);

    
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

    const closeModal = () => {
        setModalOpen(false);
    }
    
        return (
            <>
           <ClothesModal isOpen={modalOpen} onClose={closeModal}>
                <div className="images-container">
                    {images.map((image) => (
                        <div key={image.file_name} className="image-item">
                            <Image src={image.data} alt={image.file_name} width={100} height={100} />
                            <div>
                                {image.names.map((name) => (
                                    <span key={name}>{name}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </ClothesModal>
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
                        <FileInput
                            setImages={setImages}
                            setModalOpen={setModalOpen}
                        >
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
                    <DashboardItem name="Humidity" className="col-span-2 h-72">
                        {userLocationInfo?.humidity}%
                    </DashboardItem>

                </div>
            </div>
            </>
        );
}