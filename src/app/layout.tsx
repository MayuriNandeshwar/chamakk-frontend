// src/app/layout.tsx
import "./globals.css";
import ClientAnalyticsShell from "@/components/ClientAnalyticsShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "SUNHOM – Premium Candles",
    template: "%s | SUNHOM",
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
