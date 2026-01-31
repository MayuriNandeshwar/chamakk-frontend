// src/app/layout.tsx
import "./globals.css";
import UtilityBar from "@/components/customer/layout/UtilityBar";
import Navbar from "@/components/customer/layout/Navbar";
import Footer from "@/components/customer/layout/Footer";
import ClientAnalyticsShell from "@/components/ClientAnalyticsShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "CHAMAKK – Premium Candles",
    template: "%s | CHAMAKK",
  },
  description:
    "Premium handcrafted soy wax candles that bring calm, warmth, and luxury into everyday life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F7F5F2]">
        <ClientAnalyticsShell />
        <UtilityBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
