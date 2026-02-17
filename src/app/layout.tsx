import type { Metadata } from "next";
import {Dancing_Script, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coffee Shop",
  description: "A cozy coffee shop website built with Next.js, showcasing our delicious menu and inviting atmosphere. Explore our offerings, learn about our story, and experience the warmth of our coffee culture online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Navbar />
      <body className={`${cormorantGaramond.variable} ${dancingScript.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
      <Footer />
    </html>
  );
}
