import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavContainer from "@/components/Home/Navbar/NavContainer";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import AOSInit from "@/components/Helper/AOSInit";


const font = Inter({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Corporate LandingPage",
  description: "A corporate built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased bg-[#1f242c]`}>
        <AOSInit />
        <NavContainer />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
