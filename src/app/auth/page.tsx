"use client";
import { useRouter }                    from "next/navigation"
import { 
    signIn, 
    signOut, 
    useSession 
}                                       from "next-auth/react"
import { providerMap }                  from "@lib/auth"

export default function SignInPage() {
    const router = useRouter()

    const { data: session } = useSession()

    const handleSignIn = async (providerId : string) => {
        try {
            const result = await signIn(providerId, { callbackUrl: "/dashboard" })
            if (result?.error) {
                console.error(result.error)
                router.push("/error")
            }
        } catch (error) {
            console.error("Error during sign in:", error)
            router.push("/error")
        }
    }

    const handleSignOut = async () => {
        try {
            const result = await signOut({ callbackUrl: "/" });
            // send user back to the home page
        } catch (error) {
            console.error("Error during sign out:", error);
            router.push("/error");
        }
    }

    return (
        <div className="flex flex-col gap-2">
            {!session?.user ? 
            Object.values(providerMap).map((provider) => (
                <button
                    key={provider.id}
                    onClick={() => handleSignIn(provider.id)}
                    className="btn-signin"
                >
                    <span>Sign in with {provider.name}</span>
                </button>
            )) :
                <button
                    onClick={handleSignOut}
                    className="btn-signin"
                >
                    <span>Sign out</span>
                </button> 
            }

        </div>
    )
}
