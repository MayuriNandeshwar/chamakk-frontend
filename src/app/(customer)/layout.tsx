"use client";

import Navbar from "@/components/customer/layout/Navbar";
import Footer from "@/components/customer/layout/Footer";

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
