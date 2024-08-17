
# Sparkfit - Frontend

Sparkfit is your personal outfit assistant. It helps you choose the best outfit for the day based on the weather, given your wardrobe.

https://github.com/user-attachments/assets/4684b00a-f9d5-4059-b163-9dbef57832cb

## Tech Stack
<img height="50" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png"> <img height="50" src="https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png"> 
<img height="50" src=https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704>
<img height="50" src="https://user-images.githubusercontent.com/25181517/183423775-2276e25d-d43d-4e58-890b-edbc88e915f7.png">
<img height="50" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png">
<img height="50" src="https://user-images.githubusercontent.com/25181517/223639822-2a01e63a-a7f9-4a39-8930-61431541bc06.png">
<img height="50" src="https://www.svgrepo.com/show/306619/pytorch.svg">
<img height="50" src="https://user-images.githubusercontent.com/25181517/183896132-54262f2e-6d98-41e3-8888-e40ab5a17326.png">
<img height="50" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png"> 
<img src="https://skillicons.dev/icons?i=dynamodb" height="50">
<img src="https://seeklogo.com/images/A/aws-cloudfront-logo-D475098A98-seeklogo.com.png" height="50">
<img src="https://authjs.dev/img/etc/logo-sm.webp" height="50"/>
<img src="https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.png" height="50">
<img src="https://avatars.githubusercontent.com/u/132372032?s=200&v=4" height="50"/>
<img height="50" src="https://user-images.githubusercontent.com/25181517/117207330-263ba280-adf4-11eb-9b97-0ac5b40bc3be.png">


## 🚧 Not yet deployed

The deployed version (on Vercel) does not currently work as there is no hosted backend to support it. If you want to try it out, you can clone the repository and run the frontend locally. The backend repository can be found [here](https://github.com/apolyeti/sparkfit-backend).

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- A backend service running locally (see the backend repository)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/apolyeti/sparkfit sparkfit-frontend
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
   AUTH_GOOGLE_ID="your_google_id"
   AUTH_GOOGLE_SECRET="your_google_secret" # You will need to create a Google OAuth app from their Cloud console
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
