"use client";
import { signIn } from "next-auth/react";

export default function SignInGithub() {
    return (
        <button onClick={() => signIn("github")}>
            Sign in with GitHub
        </button>
    );
}