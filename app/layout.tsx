import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Analytics from './components/Analytics';
import StructuredData from './components/StructuredData';
import Footer from './components/Footer';
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
  keywords: "HEIC to JPG, HEIC converter, Apple photos, convert HEIC, HEIF to JPG, image converter, free converter, fast HEIC, FastHEIC, iPhone photos, iOS photos, bulk convert",
  authors: [{ name: "FastHEIC" }],
  creator: "FastHEIC",
  publisher: "FastHEIC",
  category: "Technology",
  applicationName: "FastHEIC",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "FastHEIC - Fast & Free HEIC to JPG Converter",
    description: "Convert HEIC files to JPG instantly in your browser. No uploads, completely private, bulk conversion supported.",
    url: "https://www.fastheictojpg.com",
    siteName: "FastHEIC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.fastheictojpg.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FastHEIC - Convert HEIC to JPG instantly",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FastHEIC - Fast & Free HEIC to JPG Converter",
    description: "Convert HEIC files to JPG instantly in your browser. Private and secure.",
    images: ["https://www.fastheictojpg.com/og-image.jpg"],
    creator: "@fastheic",
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
  alternates: {
    canonical: "https://www.fastheictojpg.com",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/fastheiclogo.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  other: {
    'google-adsense-account': process.env.NEXT_PUBLIC_ADSENSE_ID || '',
    'msapplication-TileColor': '#0d9488',
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
        <StructuredData />
        <Analytics />
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
