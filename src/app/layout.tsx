import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gym Hub | Gym in Montevideo – Training & Group Classes",
  description:
    "Gym Hub is your gym in Montevideo with expert trainers, group classes, affordable plans, and a motivating environment. Start your transformation today.",
  openGraph: {
    title: "Gym Hub | Gym in Montevideo – Training & Group Classes",
    description:
      "Gym Hub is your gym in Montevideo with expert trainers, group classes, affordable plans, and a motivating environment. Start your transformation today.",
    url: "https://gym-hub-eta.vercel.app",
    siteName: "Gym Hub",
    images: [
      {
        url: "https://gym-hub-eta.vercel.app/GymHub.webp",
        width: 1200,
        height: 630,
        alt: "Gym Hub - Fitness in Montevideo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
