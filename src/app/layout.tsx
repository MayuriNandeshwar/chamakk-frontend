import './globals.css';
import type { Metadata } from 'next';

import Navbar from '@/components/customer/layout/Navbar';
import Footer from '@/components/customer/layout/Footer';

export const metadata: Metadata = {
  title: 'CHAMAKK - Premium Candles',
  description:
    'Experience luxury with CHAMAKK premium hand-poured candles. Made with natural soy wax and finest essential oils for 40+ hour burn time.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-epilogue antialiased bg-[#F7F5F2]">
        {/* GLOBAL NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* GLOBAL FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
