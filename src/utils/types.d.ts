
/**
 * This file contains all the types used in the project
 */

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
    temp_c: number,
    temp_f: number,
    wind_speed: number,
    humidity: number,
}

export type DynamoClothing = {
    category: string,
    color: string,
    fabric: string,
    fit: string,
    photo_id: string,
    data_url: string,
    file_name: string,
}


export type OutfitChoice = {
    outfit: DynamoClothing[],
    reason: string
}

export type OutfitChoices = {
    choices: OutfitChoice[]
}