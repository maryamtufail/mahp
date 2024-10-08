import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

// Use the Arvo font instead of Inter
const ibmPlexSan = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["200", "400"],
  variable: "--font-ibm-plexSan",
});

export const metadata: Metadata = {
  title: "Muhammad Ameer Hamza",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSan.className} ${ibmPlexSan.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
