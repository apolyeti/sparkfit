"use client";

import Link             from "next/link";
import { useSession }   from "next-auth/react";

export default function GetStartedButton() {
    
    const { data: session } = useSession();

    return (
        <div className="cursor-pointer get-started">
            <Link href={session ? "/dashboard" : "/auth"}>
                <text className="text-xl p-2">
                    {session ? "Dashboard" : "Get Started"}
                </text>
            </Link>
        </div>
    );
}