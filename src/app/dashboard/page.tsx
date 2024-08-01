"use client";
import { 
    useState, useEffect 
} from                      "react";
import { 
    useSession 
} from                      "next-auth/react";
import { 
    getWeatherData, 
    addUserClothes, 
    fetchUserClothes,
    generateOutfits,
    deleteClothing,
    updateClothing
} from                      "@/utils/helpers";
import type { 
    UserLocationInfo,
    SparkFitImage,
    OutfitChoices
} from                      "@/utils/types";

import FileInput                from    "@/components/DashboardComponents/FileInput";
import ClothesModal             from    "@/components/DashboardComponents/ClothesModal";
import ClothesEntry             from    "@/components/DashboardComponents/ClothesEntry";
import EditItem                 from    "@/components/DashboardComponents/EditItem";
import ClosetItem               from    "@/components/DashboardComponents/ClosetItem";
import OutfitChoicesComponent   from    "@/components/DashboardComponents/OutfitChoices";
import ProfileCard              from    "@/components/DashboardComponents/ProfileCard";
import WeatherDisplay           from    "@/components/DashboardComponents/WeatherDisplay";
import {
    UpArrow,
    DownArrow
}                               from    "@/components/DashboardComponents/Arrows";
import DefaultSkeleton          from    "@/components/DefaultSkeleton";
import LargeSkeleton            from    "@/components/LargeSkeleton";
import OutfitSkeleton           from    "@/components/OutfitSkeleton";



export default function Dashboard() {
    const { data: session }                         = useSession();
    const [userLocationInfo, setUserLocationInfo]   = useState<UserLocationInfo | null>(null);
    const [images, setImages]                       = useState<SparkFitImage[]>([]);
    const [userCloset, setUserCloset]               = useState<SparkFitImage[]>([]);
    const [selectedImage, setSelectedImage]         = useState<SparkFitImage | null>(null);
    const [outfitChoices, setOutfitChoices]         = useState<OutfitChoices | null>(null);
    const [closetExpanded, setClosetExpanded]       = useState<boolean>(false);
    const [modalOpen, setModalOpen]                 = useState<boolean>(false);
    const [EditModal, setEditModal]                 = useState<boolean>(false);
    const [loading, setLoading]                     = useState<boolean>(false);
    const [reload, setReload]                       = useState<boolean>(false);

    const maxPreviewItems = 6; 

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
    }, [session?.user?.email, reload]);

    const handleEdit = (image: SparkFitImage) => {
        setSelectedImage(image);
        setEditModal(true);
    }

    const getTemperature = () => {
        if (!userLocationInfo) return "";
        const isUS = userLocationInfo.country === "United States";
        return isUS
            ? `${userLocationInfo.temp_f}° F`
            : `${userLocationInfo.temp_c}° C`;
    };

    const handleGenerateOutfits = async () => {
        if (session?.user?.email && userLocationInfo) {
            try {
                setLoading(true);
                const outfitChoices = await generateOutfits(session.user.email, userCloset, userLocationInfo);
                setOutfitChoices(outfitChoices);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
    }

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

    const closeEditModal = () => {
        setEditModal(false);
    }

    const toggleCloset = () => {
        setClosetExpanded(!closetExpanded);
    }

    const handleSubmit = async () => {
        if (session?.user?.email) {
            try {
                await addUserClothes(session.user.email, images);
                setModalOpen(false);
                setReload(!reload);
            } catch (error) {
                console.error(error);
            }
        }
    }

    const handleDelete = async (image: SparkFitImage) => {
        if (session && session.user && session.user.email) {
            await deleteClothing(session.user.email, image.photo_id);
        }
        // reload page
        setReload(!reload);
    }

    const updateImage = async () => {
        if (session && session.user && session.user.email && selectedImage) {
            await updateClothing(session.user.email, selectedImage);
        }
        setEditModal(false);
        setReload(!reload);
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
                <ClothesModal isOpen={EditModal} onClose={closeEditModal}>
                    {selectedImage && (
                        <EditItem 
                            image={selectedImage} 
                            handleDelete={handleDelete}
                            handleEdit={updateImage}
                            setSelectedImage={setSelectedImage}
                        />
                    )}
                </ClothesModal>

                <div className="flex flex-col justify-between">
                    <div className="flex flex-row items-center justify-evenly p-4">
                        <ProfileCard />
                        <div>
                            {userLocationInfo ? (
                                <WeatherDisplay
                                    temperature={getTemperature()}
                                    weather={userLocationInfo.weather}
                                />
                            ) : <DefaultSkeleton />}
                        </div>
                        <div>
                            {userLocationInfo ? (
                                <p>
                                    Location: {userLocationInfo.city}, {userLocationInfo.country}
                                </p>
                            ) : <DefaultSkeleton />}
                        </div>
                    </div>

                    <div className="px-4">
                        <FileInput setImages={setImages} setModalOpen={setModalOpen}>
                            <p>Drop pictures of your clothes here!</p>
                        </FileInput>
                    </div>

                    <div className="p-4">
                        {userCloset.length > 0 ? (
                            <div>
                                <div className="grid grid-cols-6 gap-2">
                                    {closetExpanded ? (
                                        userCloset.map((item, index) => (
                                            <ClosetItem key={index} image={item} handleEdit={() => handleEdit(item)}/>
                                        ))
                                    ) : (
                                        userCloset.slice(0, maxPreviewItems).map((item, index) => (
                                            <ClosetItem key={index} image={item} handleEdit={() => handleEdit(item)}/>
                                        ))
                                    )}
                                </div>
                                <div className="dropdown-btn justify-center flex" onClick={toggleCloset}>
                                    {closetExpanded ? <UpArrow /> : <DownArrow />}
                                </div>
                            </div>
                        ) : (
                            <LargeSkeleton />
                        )}        
                    </div>
                    
                    <div className="p-4 text-center flex-col">
                        <button onClick={handleGenerateOutfits} className="outfit-btn" id="outfit-btn">
                            Generate Outfits
                        </button>
                        {loading ? (
                            <OutfitSkeleton />
                        ) : (
                            outfitChoices && <OutfitChoicesComponent outfitChoices={outfitChoices} />
                        )}
                    </div>

                </div>
            </>
        );
}