import type { UserLocationInfo } from "@utils/types";

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


// TODO: Make this API call on the Flask backend instead.
// export async function getWeatherData(API_KEY: string, lat: number, lon: number): Promise<any> {
//     return fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lon}`)
//         .then((response) => response.json())
//         .then((data) => {
//             return data;
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         });
// }

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
