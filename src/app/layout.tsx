import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Sparkfit",
    description: "Get outfit suggestions based on the weather",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold mt-8">Sparkfit</h1>
          <p className="text-xl">Get outfit suggestions based on the weather</p>
        </div>
        {children}
      </body>
    </html>
  );
}
