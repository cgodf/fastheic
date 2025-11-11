import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Analytics from './components/Analytics';
import StructuredData from './components/StructuredData';
import FAQSchema from './components/FAQSchema';
import Footer from './components/Footer';
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
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
    'google-adsense-account': 'ca-pub-7548837670084494',
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
      <head>
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7548837670084494"
          crossOrigin="anonymous"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const THEME_VERSION = '2.0';
                const savedVersion = localStorage.getItem('theme-version');
                const savedTheme = localStorage.getItem('theme');
                
                // Force light mode if version changed or new user
                if (savedVersion !== THEME_VERSION || !savedTheme) {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                  document.documentElement.style.colorScheme = 'light';
                  localStorage.setItem('theme', 'light');
                  localStorage.setItem('theme-version', THEME_VERSION);
                } else if (savedTheme === 'dark') {
                  document.documentElement.classList.remove('light');
                  document.documentElement.classList.add('dark');
                  document.documentElement.style.colorScheme = 'dark';
                } else {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                  document.documentElement.style.colorScheme = 'light';
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased bg-background text-foreground`}
      >
        <StructuredData />
        <FAQSchema />
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
