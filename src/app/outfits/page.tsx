"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Outfits() {

    const { data: session } = useSession();

    return (
        <h1>
            Outfits of {session?.user?.name}
        </h1>
    )
}