
# Sparkfit - Frontend

Sparkfit is your personal outfit assistant. It helps you choose the best outfit for the day based on the weather, given your wardrobe.

## 🚧 Still in Development

The deployed version (on Vercel) does not work as there is no hosted backend to support it. If you want to try it out, you can clone the repository and run the frontend locally. The backend repository can be found [here](https://github.com/apolyeti/sparkfit-backend).

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- A backend service running locally (see the backend repository)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/sparkfit-frontend.git
   cd sparkfit-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:

   ```bash
   NEXT_PUBLIC_API_URL="http://127.0.0.1:5000" # Backend is in Flask
   NEXT_AUTH_URL="http://localhost:3000"
   AUTH_GITHUB_ID="your_github_id"
   AUTH_GITHUB_SECRET="your_github_secret" # You will need to create a GitHub OAuth app
   ```

   **Note:** It is important to follow the naming convention for Auth.js providers (e.g., `AUTH_GITHUB_ID`). See [Auth.js Environment Variables Guide](https://authjs.dev/guides/environment-variables#oauth-variables) for more information.

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

To use Sparkfit, ensure the backend service is running locally. The frontend communicates with the backend to fetch weather data and wardrobe information.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
