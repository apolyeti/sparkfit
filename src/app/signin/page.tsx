/* eslint-disable react/jsx-key */
import { redirect } from "next/navigation"
import { signIn, auth, providerMap } from "@lib/auth"
import { AuthError } from "next-auth"
 
export default async function SignInPage() {
  return (
    <div className="flex flex-col gap-2">
      {Object.values(providerMap).map((provider) => (
        <form
          action={async () => {
            "use server"
            try {
              await signIn(provider.id)
              redirect("/dashboard")
            } catch (error) {
                if (error instanceof AuthError) {
                    redirect("/error")
                }
            }
          }}
        >
          <button type="submit">
            <span>Sign in with {provider.name}</span>
          </button>
        </form>
      ))}
    </div>
  )
}