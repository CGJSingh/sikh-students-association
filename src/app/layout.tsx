import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sikh Students Association - Sheridan",
  description: "Official website of Sikh Students Association at Sheridan College",
  icons: {
    icon: [
      {
        url: '/images/round-logo.png',
        type: 'image/png',
      }
    ],
    shortcut: '/images/round-logo.png',
    apple: '/images/round-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-primary-dark text-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}