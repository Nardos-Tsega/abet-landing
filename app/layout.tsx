import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { PageCurtain } from "@/components/layout/PageCurtain";
import { Navbar } from "@/components/hero/Navbar";
import "./globals.css";

/**
 * Brand target: **Aeonik** (licensed). Until `.woff2` files are added under `public/fonts/`,
 * we ship **Plus Jakarta Sans** as a close geometric sans stand-in under the same CSS variable.
 */
const aeonik = Plus_Jakarta_Sans({
  variable: "--font-aeonik",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      className={`${aeonik.variable} ${geistMono.variable} min-h-svh h-full bg-[var(--page-canvas)] antialiased`}
    >
      <body className="min-h-svh flex flex-col bg-[var(--page-canvas)] font-sans">
        <PageCurtain />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
