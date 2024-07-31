"use client";
import { 
    useState, useEffect 
} from                      "react";
import Image from           "next/image";
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
import DashboardItem from   "@/components/DashboardComponents/DashboardItem";
import FileInput from       "@/components/DashboardComponents/FileInput";
import ClothesModal from    "@components/ClothesModal";
import EditItem from "@/components/DashboardComponents/EditItem";
import ClothesEntry from    "@/components/ClothesEntry";
import ClosetItem from      "@/components/DashboardComponents/ClosetItem";
import DefaultSkeleton from "@/components/DefaultSkeleton";
import OutfitChoicesComponent from "@/components/OutfitChoices";
import Loading from         "@/components/Loading";

import Link from "next/link";
import ProfileCard from "@/components/DashboardComponents/ProfileCard";


export default function Dashboard() {
    const { data: session } = useSession();
    const [userLocationInfo, setUserLocationInfo] = useState<UserLocationInfo | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [images, setImages] = useState<SparkFitImage[]>([]);
    const [userCloset, setUserCloset] = useState<SparkFitImage[]>([]);
    const [outfitChoices, setOutfitChoices] = useState<OutfitChoices | null>(null);
    const [loading, setLoading] = useState(false);
    const [closetExpanded, setClosetExpanded] = useState(false);
    const [selectedImage, setSelectedImage] = useState<SparkFitImage | null>(null);
    const [EditModal, setEditModal] = useState(false);
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
    }, [session?.user?.email]);

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
                console.log(outfitChoices);
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
        window.location.reload();
    }

    const updateImage = async () => {
        if (session && session.user && session.user.email && selectedImage) {
            await updateClothing(session.user.email, selectedImage);
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
                    <div className="flex flex-row items-center justify-between p-4">
                        <ProfileCard />
                        <div>
                            {userLocationInfo ? (
                                <div>
                                    <p>
                                        Temperature: {getTemperature()}
                                    </p>
                                    <p>
                                        Condition: {userLocationInfo.weather}
                                    </p>
                                </div>
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
                                <div className="dropdown-btn" onClick={toggleCloset}>
                
                                </div>
                            </div>
                        ) : (
                            <DefaultSkeleton />
                        )}        
                    </div>
                    <div className="p-4 text-center flex-col">
                        <button onClick={handleGenerateOutfits} className="outfit-btn">
                            Generate Outfits
                        </button>
                        {loading ? (
                            <Loading />
                        ) : (
                            outfitChoices && <OutfitChoicesComponent outfitChoices={outfitChoices} />
                        )}
                    </div>
                </div>
            </>
        );
}