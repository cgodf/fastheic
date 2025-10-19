import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Analytics from './components/Analytics';
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
  title: "Free HEIC to JPG Converter - Convert Apple Photos Online",
  description: "Convert HEIC files to JPG instantly in your browser. No uploads, completely private, bulk conversion supported. Fast, free, and secure HEIC converter.",
  keywords: "HEIC to JPG, HEIC converter, Apple photos, convert HEIC, HEIF to JPG, image converter, free converter",
  authors: [{ name: "Fast HEIC to JPG" }],
  creator: "Fast HEIC to JPG",
  publisher: "Fast HEIC to JPG",
  openGraph: {
    title: "Free HEIC to JPG Converter - Convert Apple Photos Online",
    description: "Convert HEIC files to JPG instantly in your browser. No uploads, completely private, bulk conversion supported.",
    url: "https://fastheictojpg.com",
    siteName: "Fast HEIC to JPG",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free HEIC to JPG Converter",
    description: "Convert HEIC files to JPG instantly in your browser. Private and secure.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // To be replaced with actual code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
