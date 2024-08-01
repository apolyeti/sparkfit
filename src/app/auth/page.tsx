"use client";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import GithubButton from "react-github-login-button";
import GoogleButton from "react-google-button";
import Link from "next/link";

export default function SignInPage() {
    const router = useRouter();
    const { data: session } = useSession();

    const handleSignIn = async (providerId: string) => {
        try {
            const result = await signIn(providerId, { callbackUrl: "/dashboard" });
            if (result?.error) {
                console.error(result.error);
                router.push("/error");
            }
        } catch (error) {
            console.error("Error during sign in:", error);
            router.push("/error");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="border-2 flex flex-row rounded-lg w-2/3 h-1/3">
                <div className="flex flex-col items-center justify-center w-1/2 p-4 border-r border-gray-200">
                    <Link className="text-5xl font-bold mb-4" href={"/"}>
                        Sparkfit
                    </Link>
                    <p className="text-xl text-center">
                        Get outfit suggestions based on the weather
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center w-1/2 p-4 gap-6">
                    <GithubButton onClick={() => handleSignIn("github")} />
                    <GoogleButton
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                        onClick={() => handleSignIn("google")}
                    />
                </div>
            </div>
        </div>
    );
}
