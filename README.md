# Sparkfit - Frontend

Sparkfit is your personal outfit assistant. It helps you to choose the best outfit for the day based on the weather, given your wardrobe.

## Still in development

The deployed version (on vercel) does not work as there is no hosted backend to support it. If you want to try it out, you can clone the repository and run the frontend locally. The backend repository can be found [here](https://github.com/apolyeti/sparkfit-backend)

You will need to create your own .env file in the root directory of the frontend with the following variables:

```bash
NEXT_PUBLIC_API_URL="http://127.0.0.1:5000" # backend is in flask
NEXT_AUTH_URL="http://localhost:3000"
AUTH_GITHUB_ID="your_github_id"
AUTH_GITHUB_SECRET="your_github_secret" # you will need to create a github oauth app
```
