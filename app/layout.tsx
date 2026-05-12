import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abet — Subscription Engineering Pods for Frontier Tech",
  description:
    "Provision a fully sovereign, 3-person engineering Pod into your stack in 21 days. Same cost as one local senior hire.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} min-h-svh h-full bg-[var(--page-canvas)] antialiased`}
    >
      <body className="min-h-svh flex flex-col bg-[var(--page-canvas)]">{children}</body>
    </html>
  );
}
