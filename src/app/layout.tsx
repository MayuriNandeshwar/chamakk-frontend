// src/app/layout.tsx
import "./globals.css";
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
        {children}
      </body>
    </html>
  );
}
