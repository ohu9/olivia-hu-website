import type { Metadata } from "next";
import { EB_Garamond, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ebg = EB_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ebg',
});

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "olivia hu",
  description: "Olivia Hu's personal website & portfolio",
  keywords: ['olivia', 'hu', 'olivia hu'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ebg.variable} ${cormorant.variable} ${inter.variable}`}>
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
