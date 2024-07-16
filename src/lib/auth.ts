import NextAuth, { NextAuthConfig} from "next-auth";
import github from "next-auth/providers/github";
// import { OAuthUserConfig } from "next-auth/providers";
// import { GitHubProfile } from "next-auth/providers/github";


const authConfig: NextAuthConfig = {
    providers: [
        github
    ],
}

export const { handlers, auth } = NextAuth(authConfig);
