export type SparkFitImage  = {
    photo_id: string,
    predicted_classes: string[],
    file_name: string,
    data?: string,
    data_url: string,
    fabric: string | null,
    color: string | null,
    fit: string | null,
    category: string
}

export type UserLocationInfo = {
    city: string,
    country: string,
    weather: string,
    temperature: number,
    wind_speed: number,
    humidity: number,
}