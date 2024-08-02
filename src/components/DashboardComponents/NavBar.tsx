"use client";
import Link from "next/link";
import { signOut } from "next-auth/react";
import router from "next/router"



export default function NavBar() {
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
        <div className="p-2">
            <div className="navbar justify-between items-center p-3">
                <div className="text-xl navbar-link">
                    <Link href="/">
                        Sparkfit
                    </Link>
                </div>
                <div className="flex space-x-4 navbar-link">
                    <button onClick={handleSignOut}>
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    );
}