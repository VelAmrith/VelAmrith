import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Script from "next/script";

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
    default: "Vel Amrith Company Limited - Construction & Facility Management",
    template: "%s | Vel Amrith Company Limited"
  },
  description: "Dynamic and dedicated contracting company specializing in comprehensive Civil, Interior, MEP and Facility Management solutions. ISO certified with proven expertise in construction.",
  keywords: ["construction", "facility management", "MEP works", "interior design", "civil works", "Saudi Arabia", "Riyadh", "ISO certified"],
  authors: [{ name: "Vel Amrith Company Limited" }],
  creator: "Vel Amrith Company Limited",
  publisher: "Vel Amrith Company Limited",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://velamrith.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Vel Amrith Company Limited - Construction & Facility Management",
    description: "Dynamic and dedicated contracting company specializing in comprehensive Civil, Interior, MEP and Facility Management solutions.",
    url: '/',
    siteName: 'Vel Amrith Company Limited',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vel Amrith Company Limited - Construction & Facility Management",
    description: "Dynamic and dedicated contracting company specializing in comprehensive Civil, Interior, MEP and Facility Management solutions.",
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
    google: process.env.GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        
        {/* Crisp Chat Integration */}
        <Script
          id="crisp-chat"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.$crisp=[];
              window.CRISP_WEBSITE_ID="6af6c745-1755-4c10-86e3-db0f955ed4e7";
              (function(){
                d=document;
                s=d.createElement("script");
                s.src="https://client.crisp.chat/l.js";
                s.async=1;
                d.getElementsByTagName("head")[0].appendChild(s);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
