import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://nfuse.necrozmalabs.com'),
  title: {
    template: `%s |NFuse`,
    default: 'NFuse', // a default is required when creating a template
  },
  description: 'Project NFuse from Necrozma Labs aims at making Nuclear Fusion a reality',
  openGraph: {
    title: 'NFuse',
    description: 'Project NFuse from Necrozma Labs aims at making Nuclear Fusion a reality',
    url: 'https://nfuse.necrozmalabs.com',
    siteName: 'NFuse',
    
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: 'NFuse',
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
