
# Sparkfit - Frontend

Sparkfit is your personal outfit assistant. It helps you choose the best outfit for the day based on the weather, given your wardrobe.

https://github.com/user-attachments/assets/4684b00a-f9d5-4059-b163-9dbef57832cb

## Tech Stack
<img height="50" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png"> <img height="50" src="https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png"> 
<img height="50" src=https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704>
<img height="50" src="https://user-images.githubusercontent.com/25181517/183423775-2276e25d-d43d-4e58-890b-edbc88e915f7.png">
<img height="50" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png">
<img height="50" src="https://user-images.githubusercontent.com/25181517/223639822-2a01e63a-a7f9-4a39-8930-61431541bc06.png">
<img height="50" src="https://user-images.githubusercontent.com/25181517/183896132-54262f2e-6d98-41e3-8888-e40ab5a17326.png">
<img height="50" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png"> 
<img src="https://skillicons.dev/icons?i=dynamodb" height="50">
<img src="https://seeklogo.com/images/A/aws-cloudfront-logo-D475098A98-seeklogo.com.png" height="50">
<img src="https://authjs.dev/img/etc/logo-sm.webp" height="50"/>
<img src="https://cdn-lfs.huggingface.co/repos/96/a2/96a2c8468c1546e660ac2609e49404b8588fcf5a748761fa72c154b2836b4c83/942cad1ccda905ac5a659dfd2d78b344fccfb84a8a3ac3721e08f488205638a0?response-content-disposition=inline%3B+filename*%3DUTF-8%27%27hf-logo.svg%3B+filename%3D%22hf-logo.svg%22%3B&response-content-type=image%2Fsvg%2Bxml&Expires=1722832503&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTcyMjgzMjUwM319LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2RuLWxmcy5odWdnaW5nZmFjZS5jby9yZXBvcy85Ni9hMi85NmEyYzg0NjhjMTU0NmU2NjBhYzI2MDllNDk0MDRiODU4OGZjZjVhNzQ4NzYxZmE3MmMxNTRiMjgzNmI0YzgzLzk0MmNhZDFjY2RhOTA1YWM1YTY1OWRmZDJkNzhiMzQ0ZmNjZmI4NGE4YTNhYzM3MjFlMDhmNDg4MjA1NjM4YTA%7EcmVzcG9uc2UtY29udGVudC1kaXNwb3NpdGlvbj0qJnJlc3BvbnNlLWNvbnRlbnQtdHlwZT0qIn1dfQ__&Signature=bPtRh3qBMBM552KgCm70IJpLOFcnY6pFz-QLGy7GQTgvd0uHE4gU9KuCnOjaZKPaaiu6C-STzkyiXvYeQAoJ165e2xj4doRHrDa8P18D%7EpIoDejK-JD8VvgN98wcqItgFUaoS8gDQDPzGaJZZUhcCNHhirnP3vnJTjJSAsbD5qWQeXYv4k10M7YLsnxeDjFBwuo5HNsMZVl-vZ2Hqd6cOcQuK0z9Jw2018teV5RyqdCh-uZTiZhsy6xVbfPH4ytJ6ubKQuAXLLfvRrDLyYaWoikc5M1YtJwTi4f8GxL7Z7Un3Ut9iuvpPopLlTvzCU2BWoZkNAU%7E6VBj9-ghYv2DUQ__&Key-Pair-Id=K3ESJI6DHPFC7" height="50">
<img src="https://avatars.githubusercontent.com/u/132372032?s=200&v=4" height="50"/>


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
