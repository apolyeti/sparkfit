"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { getWeatherData, addUserClothes, fetchUserClothes } from "@/utils/helpers";
import type { UserLocationInfo } from "@/utils/types";
import DashboardItem from "@/components/DashboardComponents/DashboardItem";
import FileInput from "@/components/DashboardComponents/FileInput";
import Image from "next/image";
import "@styles/dashboard.css";
import ClothesModal from "@components/ClothesModal";
import ClothesEntry from "@/components/ClothesEntry";

import type { SparkFitImage } from "@utils/types";

export default function Dashboard() {
    const { data: session } = useSession();
    const [userLocationInfo, setUserLocationInfo] = useState<UserLocationInfo | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [images, setImages] = useState<SparkFitImage[]>([]);

    const [userCloset, setUserCloset] = useState<SparkFitImage[]>([]);



    
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

    useEffect(() => {
        const fetchUserClothesData = async () => {
            if (session?.user?.email) {
                const clothes = await fetchUserClothes(session.user.email);
                setUserCloset(clothes);
            }
        }
        fetchUserClothesData();
    }, [session?.user?.email]);

    const handleUpdateImages = (updatedImage : SparkFitImage) => {
        setImages((prevImages) =>
            prevImages.map((image) => 
                image.file_name === updatedImage.file_name ? updatedImage : image
            )
        );
    }



    const closeModal = () => {
        setModalOpen(false);
    }

    const handleSubmit = async () => {
        if (session?.user?.email) {
            try {
                await addUserClothes(session.user.email, images);
                setModalOpen(false);
            } catch (error) {
                console.error(error);
            }
        }
    }
    
        return (
            <>
           <ClothesModal isOpen={modalOpen} onClose={closeModal}>
                {images.map((image) => (
                    <ClothesEntry 
                        key={image.file_name} 
                        image={image} 
                        onUpdate={handleUpdateImages}
                    />
                ))}
                <button className="font-bold" onClick={handleSubmit}>
                    Submit
                </button>
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
                    <DashboardItem name="Closet" className="col-span-2 h-72">
                        <div className="grid grid-cols-3 gap-4">
                            {userCloset.map((image) => (
                                <>
                                <Image 
                                    key={image.file_name} 
                                    src={image.data_url} 
                                    alt={image.file_name} 
                                    width={128} 
                                    height={128} 
                                />
                                <span>
                                    <p>{image.color}</p>
                                    <p>{image.fit}</p>
                                    <p>{image.fabric}</p>
                                    <p>{image.category}</p>
                                </span>
                                </>
                            ))}
                        </div>
                    </DashboardItem>

                </div>
            </div>
            </>
        );
}