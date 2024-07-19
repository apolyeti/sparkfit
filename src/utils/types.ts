export type SparkFitImage  = {
    names: string[],
    file_name: string,
    data: string,
    fabric: string | null,
    color: string | null,
    fit: string | null,
}

export type UserLocationInfo = {
    city: string,
    country: string,
    weather: string,
    temperature: number,
    wind_speed: number,
    humidity: number,
}