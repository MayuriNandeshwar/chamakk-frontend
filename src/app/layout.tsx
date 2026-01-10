import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CHAMAKK – Premium Candles",
  description:
    "Experience luxury with CHAMAKK premium hand-poured candles made with natural soy wax.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-epilogue antialiased bg-[#F7F5F2]">
        {children}
      </body>
    </html>
  );
}
