"use client";

import Link from "next/link";
import { useState } from "react";

export default function GetStartedButton() {

    const [link, setLink] = useState<string>("/dashboard");

    return (
        <Link href={link}>
            <text className="text-xl animate-fadeInUpSlow p-2 cursor-pointer">
                Get Started
            </text>
        </Link>
    );
}