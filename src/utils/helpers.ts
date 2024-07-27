import type { UserLocationInfo, SparkFitImage, OutfitChoices, DynamoClothing } from "@utils/types";

export function storageAvailable(type: 'localStorage' | 'sessionStorage'): boolean {
    let storage: Storage | null = null;
    try {
        storage = window[type as keyof Window] as Storage;
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (
        e instanceof DOMException &&
        (e.name === "QuotaExceededError" ||
            e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage !== null &&
        storage.length !== 0
        );
    }
}

export async function getWeatherData(API_KEY: string, lat: number, lon: number): Promise<UserLocationInfo> {
    const apiUrl : string = process.env.NEXT_PUBLIC_API_URL || "";

    const response : Response = await fetch(`${apiUrl}/getWeather`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            API_KEY,
            lat,
            lon,
        }),
    });
    const data = await response.json();

    const weatherData: UserLocationInfo = {
        city: data.location.name,
        country: data.location.country,
        weather: data.current.condition.text,
        temp_f: data.current.temp_f,
        temp_c: data.current.temp_c,
        wind_speed: data.current.wind_mph,
        humidity: data.current.humidity,
    };

    return weatherData;
}

export async function classifySparkFitImages(form: FormData): Promise<SparkFitImage[]> {
    const apiUrl : string = process.env.NEXT_PUBLIC_API_URL || "";
    console.log(form)

    const response : Response = await fetch(`${apiUrl}/clothes/classify`, {
        method: "POST",
        body: form
    });
    const data = await response.json();

    const result : SparkFitImage[] = data.results.map((image: any) => {
        const sparkFitImage: SparkFitImage = {
            photo_id: image.photo_id,
            predicted_classes: image.predicted_classes,
            file_name: image.file_name,
            data: image.data,
            data_url: image.data_url,
            fabric: null,
            color: null,
            fit: null,
            category: image.category,
        };
        return sparkFitImage;
    });

    return result;
}

export async function signInUser(email: string, name: string): Promise<void> {
    const first_name = name.split(" ")[0];
    const last_name = name.split(" ")[1];
    const clothes: SparkFitImage[] = [];

    const apiUrl : string = process.env.NEXT_PUBLIC_API_URL || "";
    const response : Response = await fetch(`${apiUrl}/user/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            first_name,
            last_name,
            clothes,
        }),
    });
}

export async function addUserClothes(email: string, clothes: SparkFitImage[]): Promise<void> {
    const apiUrl : string = process.env.NEXT_PUBLIC_API_URL || "";
    const response : Response = await fetch(`${apiUrl}/clothes/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            clothes,
        }),
    });

    const data = await response.json();
    console.log(data);
}

export async function fetchUserClothes(email: string): Promise<SparkFitImage[]> {
    const apiUrl : string = process.env.NEXT_PUBLIC_API_URL || "";
    const response : Response = await fetch(`${apiUrl}/clothes/get`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
        }),
    });


    const data = await response.json();



    const clothes: SparkFitImage[] = data.clothes.map((image: any) => {
        const sparkFitImage: SparkFitImage = {
            photo_id: image.photo_id,
            predicted_classes: image.predicted_classes,
            file_name: image.file_name,
            data_url: image.data_url,
            fabric: image.fabric,
            color: image.color,
            fit: image.fit,
            category: image.category,
        };
        return sparkFitImage;
    });

    return clothes;
}

export async function generateOutfits(email: string, images: SparkFitImage[], weatherData: UserLocationInfo): Promise<any> {

    console.log('generateOutfits called');

    // grab all sparkfitimages and migrate them to dynamo clothing
    const dynamoClothing: DynamoClothing[] = images.map((image: SparkFitImage) => {
        const dynamoCloth: DynamoClothing = {
            file_name: image.file_name,
            category: image.category,
            color: image.color || "",
            fabric: image.fabric || "",
            fit: image.fit || "",
            photo_id: image.photo_id,

        };
        return dynamoCloth;
    });

    const temperature = weatherData.country === "United States" ? `${weatherData.temp_f} F` : `${weatherData.temp_c} C`;

    console.log(email, dynamoClothing, temperature, weatherData.weather);


    // send the dynamo clothing to the backend
    const apiUrl : string = process.env.NEXT_PUBLIC_API_URL || "";
    const response : Response = await fetch(`${apiUrl}/clothes/outfit`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            clothes: dynamoClothing,
            temperature: temperature,
            condition: weatherData.weather,
        }),
    });

    const data = await response.json();

    return data;
}