import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import About from "@/components/about";

import { Space_Grotesk } from "next/font/google";

export const metadata: Metadata = {
  title: "Portfolio Development Fair",
};

const space_grotesk = Space_Grotesk({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={space_grotesk.className}>
      <body>
        <Navbar />
        {children}
        <About />
        <Footer />
      </body>
    </html>
  );
}
