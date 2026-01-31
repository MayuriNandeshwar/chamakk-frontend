'use client';

import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-10">
          
          {/* BRAND */}
          <div className="md:col-span-2">
            <h3 className="font-playfair text-3xl font-bold mb-4">CHAMAKK</h3>
            <p className="font-epilogue text-white/80 leading-relaxed max-w-md">
              Luxury should feel natural and pocket-friendly. CHAMAKK creates
              premium hand-poured soy candles designed to bring calm, warmth,
              and everyday elegance into your space.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 font-epilogue text-sm">
              <li><Link href="/" className="text-white/80 hover:text-white">Home</Link></li>
              <li><Link href="/pages/about-us" className="text-white/80 hover:text-white">About Us</Link></li>
              <li><Link href="/pages/faq" className="text-white/80 hover:text-white">FAQs</Link></li>
              <li><Link href="/pages/contact-us" className="text-white/80 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">
              Legal
            </h4>
            <ul className="space-y-2 font-epilogue text-sm">
              <li><Link href="/pages/privacy-policy" className="text-white/80 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/pages/terms-and-conditions" className="text-white/80 hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="/pages/refund-policy" className="text-white/80 hover:text-white">Refund Policy</Link></li>
              <li><Link href="/pages/shipping-policy" className="text-white/80 hover:text-white">Shipping Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* SOCIAL + COPYRIGHT */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-epilogue text-white/70 text-sm">
            © {new Date().getFullYear()} CHAMAKK. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a href="https://www.instagram.com/chamakk_official" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5" />
            </a>
            <Facebook className="w-5 h-5 opacity-50" />
            <Twitter className="w-5 h-5 opacity-50" />
          </div>
        </div>
      </div>
    </footer>
  );
}
