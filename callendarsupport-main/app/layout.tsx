import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LiquidBackdrop } from "@/components/liquid-backdrop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "HRT Calendar — Legal & support",
    template: "%s · HRT Calendar",
  },
  description: "Privacy policy, terms of service, and support for HRT Calendar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <LiquidBackdrop />
        <div className="liquid-noise" aria-hidden />
        {children}
      </body>
    </html>
  );
}
