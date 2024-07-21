import NextAuth, { NextAuthConfig} from "next-auth";
import GitHub from "next-auth/providers/github";
import type { Provider } from "next-auth/providers";
import { signInUser } from "@/utils/helpers";

const providers: Provider[] = [
    GitHub,
]
   
export const providerMap = providers.map((provider) => {
    if (typeof provider === "function") {
        const providerData = provider()
        return { id: providerData.id, name: providerData.name }
    } else {
        return { id: provider.id, name: provider.name }
    }
})

const authConfig: NextAuthConfig = {
    providers,
    pages: {
        signIn: "/auth",
    },
    callbacks: {
        async signIn({user, account, profile}) {
            // check for email and name
            if (profile) {
                const { email, name } = profile;
                if (email && name) {
                    await signInUser(email, name);
                }
                return true;
            }
            return false;
        },

        async redirect({ url, baseUrl }) {
            // Check if the url starts with the baseUrl to prevent open redirects
            if (url.startsWith(baseUrl)) {
                return url;
            } else if (url.startsWith("/")) {
                return new URL(url, baseUrl).toString();
            }
            return baseUrl;
        },
    },
}

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);