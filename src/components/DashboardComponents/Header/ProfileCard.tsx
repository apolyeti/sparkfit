"use client";

import { useSession }   from "next-auth/react";
import DefaultSkeleton  from "@/components/LoadingComponents/DefaultSkeleton";
import Image            from "next/image";
import Link             from "next/link";

export default function ProfileCard() {
    const { data: session } = useSession();

    return (
        <div className="profile-card">
            {session?.user ? (
                <div className="profile-card-content">
                    {/* make profile picture a circle */}
                    <div className="profile-card-image">
                        <Link href="/outfits">
                            <Image
                                src={session.user.image || "/profile-placeholder.png"}
                                alt="Profile Picture"
                                width={100}
                                height={100}
                            />
                        </Link>
                    </div>
                    <h1
                        className="text-2xl"
                    >
                        {session.user.name}
                    </h1>
                </div>
            ) : (
                <DefaultSkeleton />
            )}
        </div>
    )
}