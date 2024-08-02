import type { 
    UserLocationInfo, 
    SparkFitImage,
    OutfitChoices 
} from "./types"

declare module "@utils/helpers" {
    /**
     * Checks if the specified type of storage is available.
     * @param type - The type of storage to check for, either 'localStorage' or 'sessionStorage'.
     * @returns boolean indicating if the storage type is available.
     */
    export function storageAvailable(type: 'localStorage' | 'sessionStorage'): boolean;

    /**
     * Retrieves weather data for a specified location.
     * @param API_KEY - The API key to use for the weather API.
     * @param lat - The latitude of the location.
     * @param lon - The longitude of the location.
     * @returns A Promise that resolves to a UserLocationInfo object containing the weather data.
     */
    export function getWeatherData(API_KEY: string, lat: number, lon: number): Promise<UserLocationInfo>;

    /**
     * Classifies images of clothes and returns the results.
     * @param form - The form data containing the images to classify.
     * @returns A Promise that resolves to an array of SparkFitImage objects.
     */
    export function classifySparkFitImages(form: FormData): Promise<SparkFitImage[]>;

    /**
     * Signs in a user with the specified email and name.
     * @param email - The email of the user to sign in.
     * @param name - The name of the user to sign in.
     * @returns A Promise that resolves when the sign-in process is complete.
     */
    export function signInUser(email: string, name: string): Promise<void>;

    /**
     * Adds clothes to a user's wardrobe.
     * @param email - The email of the user.
     * @param clothes - An array of SparkFitImage objects representing the clothes to add.
     * @returns A Promise that resolves when the clothes have been added.
     */
    export function addUserClothes(email: string, clothes: SparkFitImage[]): Promise<void>;

    /**
     * Fetches the clothes for a specified user.
     * @param email - The email of the user to fetch clothes for.
     * @returns A Promise that resolves to an array of SparkFitImage objects.
     */
    export function fetchUserClothes(email: string): Promise<SparkFitImage[]>;

    /**
     * Generates outfit choices based on the user's wardrobe and the weather.
     * @param email - The email of the user.
     * @param images - An array of SparkFitImage objects representing the user's wardrobe.
     * @param weatherData - A UserLocationInfo object containing the current weather data.
     * @returns A Promise that resolves to an OutfitChoices object containing the outfit choices.
     */
    export function generateOutfits(email: string, images: SparkFitImage[], weatherData: UserLocationInfo): Promise<OutfitChoices>;

    /**
     * Deletes a specific clothing item from the user's wardrobe.
     * @param email - The email of the user.
     * @param photo_id - The photo ID of the clothing item to delete.
     * @returns A Promise that resolves when the clothing item has been deleted.
     */
    export function deleteClothing(email: string, photo_id: string): Promise<void>;

    /**
     * Updates a specific clothing item in the user's wardrobe.
     * @param email - The email of the user.
     * @param updatedItem - The updated SparkFitImage object.
     * @returns A Promise that resolves when the clothing item has been updated.
     */
    export function updateClothing(email: string, updatedItem: SparkFitImage): Promise<void>;
}
