import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer"; 

const inter = Inter({ subsets: ["latin"] });

// 1. Upgraded Viewport Settings for Mobile
export const viewport: Viewport = {
  themeColor: "#0f172a", // Matches your slate-900 theme
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // Prevents annoying zoom on mobile forms
};

// 2. Upgraded SEO Metadata Engine
export const metadata: Metadata = {
  metadataBase: new URL('https://jadon-hospital.vercel.app'), // Required for OpenGraph
  title: {
    template: "%s | Jadon Hospital", // Automatically appends hospital name to subpages
    default: "Jadon Hospital & Ultrasound Centre | Farah, Mathura", // Used on the homepage
  },
  description: "24/7 Advanced Medical Care, Ultrasound Response, High-Resolution Ultrasound, and Pathology Laboratory in Farah, Mathura.",
  verification: {
    google: "AZhRyjMo_Kr9MoRpJz-3TKadU-cxWJDDRSufnDIxIH0",
  },
  keywords: ["Hospital in Farah", "Ultrasound Centre Mathura", "Ultrasound Farah", "Pathology Lab Mathura", "Emergency Doctor"],
  openGraph: {
    title: "Jadon Hospital & Ultrasound Centre",
    description: "24/7 Advanced Medical Care in Farah, Mathura.",
    url: "https://jadon-hospital.vercel.app",
    siteName: "Jadon Hospital",
    locale: "en_IN",
    type: "website",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* 3. Upgraded Body wrapper for perfect layout physics */}
      <body className={`${inter.className} bg-slate-50 text-slate-900 flex flex-col min-h-screen`}>
        
        <Navbar /> 
        
        {/* Main content expands to push footer down */}
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
        
      </body>
    </html>
  );
}