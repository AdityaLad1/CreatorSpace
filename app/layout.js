import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import SessionWrapper from "@/components/SessionWrapper";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CreatorSpace",
  description: "A crowdfunding platform built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white`}
      >
        <SessionWrapper>
          <div className="min-h-screen flex flex-col [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#331a76_100%)]">
            <Navbar />

            <main className="flex-1">{children}</main>

            <Footer />

            <Script
              src="https://cdn.lordicon.com/lordicon.js"
              strategy="afterInteractive"
            />
          </div>
        </SessionWrapper>
      </body>
    </html>
  );
}
