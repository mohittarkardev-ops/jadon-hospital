import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer"; 

const inter = Inter({ subsets: ["latin"] });

// 1. Upgraded Viewport Settings for Mobile
export const viewport: Viewport = {
  themeColor: "#0f172a", // Matches your slate-950 theme
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, 
};

// 2. Enterprise-Grade SEO Metadata Engine
export const metadata: Metadata = {
  metadataBase: new URL('https://jadon-hospital.vercel.app'), 
  title: {
    template: "%s | Jadon Hospital", 
    default: "Jadon Hospital & Ultrasound Centre | Farah, Mathura", 
  },
  description: "24/7 Advanced Medical Care, Emergency Trauma Response, High-Resolution Ultrasound, and Pathology Laboratory in Farah, Mathura.",
  category: "medical",
  authors: [{ name: "Jadon Hospital Management" }],
  creator: "Jadon Hospital",
  keywords: [
    "Hospital in Farah", 
    "Ultrasound Centre Mathura", 
    "Best Ultrasound Farah", 
    "Pathology Lab Mathura", 
    "Emergency Doctor Farah",
    "Jadaun Hospital" // Capturing spelling variations
  ],
  verification: {
    google: "AZhRyjMo_Kr9MoRpJz-3TKadU-cxWJDDRSufnDIxIH0",
  },
  alternates: {
    canonical: '/',
  },
  // Social Media Link Previews (WhatsApp, Facebook, LinkedIn)
  openGraph: {
    title: "Jadon Hospital & Ultrasound Centre | Farah, Mathura",
    description: "Experience world-class diagnostics and 24/7 emergency care in Mathura.",
    url: "https://jadon-hospital.vercel.app",
    siteName: "Jadon Hospital",
    images: [
      {
        url: "/og-image.jpg", // Must be placed in the /public folder
        width: 1200,
        height: 630,
        alt: "Jadon Hospital & Ultrasound Centre Facility",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  // Twitter Specific Cards
  twitter: {
    card: "summary_large_image",
    title: "Jadon Hospital & Ultrasound Centre",
    description: "24/7 Advanced Medical Care and High-Resolution Ultrasound in Farah, Mathura.",
    images: ["/og-image.jpg"],
  },
  // Deep Search Engine Directives
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
  // Search Result & Browser Tab Branding
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900 flex flex-col min-h-screen overflow-x-hidden`}>
        
        <Navbar /> 
        
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
        
      </body>
    </html>
  );
}