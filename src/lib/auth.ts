import NextAuth, { NextAuthConfig} from "next-auth";
import GitHub from "next-auth/providers/github";
import type { Provider } from "next-auth/providers";

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
        signIn: "/signin",
    },
    callbacks: {
        async signIn({user, account, profile}) {
            return true
        },

        async redirect({url, baseUrl}) {
            return url.startsWith(baseUrl) ? url : baseUrl
        }
    },
}

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);