"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function GetStartedButton() {



    const { data: session } = useSession();

    return (
        <Link href={session ? "/dashboard" : "/signin"}>
            <text className="text-xl animate-fadeInUpSlow p-2 cursor-pointer">
                {session ? "Dashboard" : "Get Started"}
            </text>
        </Link>
    );
}