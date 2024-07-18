import type { UserLocationInfo, SparkFitImage } from "@utils/types";

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
        temperature: data.current.temp_f,
        wind_speed: data.current.wind_mph,
        humidity: data.current.humidity,
    };

    return weatherData;
}

export async function classifySparkFitImages(form: FormData): Promise<SparkFitImage[]> {
    const apiUrl : string = process.env.NEXT_PUBLIC_API_URL || "";
    console.log(form)

    const response : Response = await fetch(`${apiUrl}/classifyImages`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: form
    });
    const data = await response.json();

    const result : SparkFitImage[] = data.results.map((image: any) => {
        const sparkFitImage: SparkFitImage = {
            name: image.name,
            file_name: image.file_name,
            data: image.data,
            fabric: null,
            color: null,
            fit: null,
        };
        return sparkFitImage;
    });

    console.log("RESULT BEFORE SENDING ", result);

    return result;
}
