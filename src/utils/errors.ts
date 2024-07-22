export class SparkFitError extends Error {
    constructor(message: string, public statusCode: number) {
        super(message);
        this.statusCode = statusCode;
    }

    static badRequest(message: string) {
        return new SparkFitError(message, 400);
    }

    static notFound(message: string) {
        return new SparkFitError(message, 404);
    }

    static internal(message: string) {
        return new SparkFitError(message, 500);
    }

    static MissingAPIKey() {
        const message = "Environmental variable for weather API key not found. Make sure to add API key under NEXT_PUBLIC_WEATHER_API_KEY in .env";
        return new SparkFitError(message, 500);
    }
}