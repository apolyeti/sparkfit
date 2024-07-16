import "@styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@components/HomePageComponents/Header";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sparkfit",
  description: "Get outfit suggestions based on the weather",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionWrapper>
        <html lang="en">
            <body className={inter.className}>
                {/* <Header /> */}
                {children}
            </body>
        </html>
    </SessionWrapper>
  );
}