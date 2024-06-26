import HeaderTop from "@/components/HeaderTop";
import "../styles/globals.css"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HeaderMain from "@/components/HeaderMain";
import Navbar from "@/components/Navbar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import MobNavbar from "@/components/MobNavbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Theessentialmankampala",
  description: "get yourself suited up here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderTop />
        <HeaderMain />
        <Navbar />
        {/* <MobNavbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
