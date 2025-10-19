import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Analytics from './components/Analytics';
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FastHEIC - Fast & Free HEIC to JPG Converter",
  description: "Convert HEIC files to JPG instantly in your browser. No uploads, completely private, bulk conversion supported. Fast, free, and secure HEIC converter.",
  keywords: "HEIC to JPG, HEIC converter, Apple photos, convert HEIC, HEIF to JPG, image converter, free converter, fast HEIC, FastHEIC",
  authors: [{ name: "FastHEIC" }],
  creator: "FastHEIC",
  publisher: "FastHEIC",
  openGraph: {
    title: "FastHEIC - Fast & Free HEIC to JPG Converter",
    description: "Convert HEIC files to JPG instantly in your browser. No uploads, completely private, bulk conversion supported.",
    url: "https://fastheictojpg.com",
    siteName: "FastHEIC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FastHEIC - Fast & Free HEIC to JPG Converter",
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
    <html lang="en" className="light" style={{ colorScheme: 'light' }}>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
