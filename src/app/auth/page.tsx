"use client";
import { useRouter } from "next/navigation"
import { signIn, signOut } from "next-auth/react"
import { providerMap } from "@lib/auth"

export default function SignInPage() {
  const router = useRouter()

  const handleSignIn = async (providerId : string) => {
    try {
      console.log('BEFORE SIGN IN')
      const result = await signIn(providerId, { callbackUrl: "/dashboard" })
      if (result?.error) {
        console.error(result.error)
        router.push("/error")
      } else {
        console.log('AFTER SIGN IN')
        // router.push("/dashboard")
      }
    } catch (error) {
      console.error("Error during sign in:", error)
      router.push("/error")
    }
  }

    const handleSignOut = async () => {
        try {
            const result = await signOut();
            router.push("/");
        } catch (error) {
            console.error("Error during sign out:", error);
            router.push("/error");
        }
    }

  return (
    <div className="flex flex-col gap-2">
      {Object.values(providerMap).map((provider) => (
        <button
          key={provider.id}
          onClick={() => handleSignIn(provider.id)}
          className="btn-signin"
        >
          <span>Sign in with {provider.name}</span>
        </button>
      ))}

        <button
            onClick={() => signOut()}
            className="btn-signin"
        >
            <span>Sign out</span>
        </button>
    </div>
  )
}
