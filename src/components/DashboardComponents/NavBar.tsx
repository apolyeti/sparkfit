"use client";
import Link from "next/link";
import { signOut } from "next-auth/react";
import router from "next/navigation"



export default function NavBar() {
    const handleSignOut = async () => {
        try {
            const result = await signOut({ callbackUrl: "/" });
            // send user back to the home page
        } catch (error) {
            console.error("Error during sign out:", error);
            router.redirect("/error");
        }
    }
    return (
        <div className="p-2">
            <div className="navbar justify-between items-center p-3">
                <div className="text-xl">
                    <Link href="/">
                        Sparkfit
                    </Link>
                </div>
                <div className="flex space-x-4">
                    <button onClick={handleSignOut}>
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    );
}