import type { Metadata } from "next";

import { Inter, JetBrains_Mono } from 'next/font/google'
import "./globals.css";

import { Navbar } from "./components/navbar";
import ParticleBackground from "./components/particles";
import { Toaster } from "@/components/ui/sonner";

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Lucas Vital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="dark" lang="en" className={`${jetBrainsMono.className} dark`}>
      <body className="bg-[#020617]">
        <ParticleBackground />
        <main className="flex flex-col justify-center items-center">
          <Navbar />
          {children}
        </main>
        <Toaster />
      </body>
    </html >
  );
}
