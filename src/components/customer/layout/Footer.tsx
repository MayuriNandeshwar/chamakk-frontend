'use client';

import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#014338] text-[#F5F5F2] pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* BRAND */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image
                src="/logo/sunhom.png"
                alt="SUNHOM Logo"
                width={150}
                height={50}
                priority
              />
            </div>

            <p className="text-white/75 leading-relaxed max-w-md text-sm md:text-base">
              SUNHOM is a contemporary fragrance house devoted to the refinement
              of atmosphere. From hand-poured soy candles to elegant car perfumes
              and aromatic sachets, each creation brings warmth, stillness, and
              understated luxury into everyday living.
            </p>

            <p className="text-white/60 mt-4 text-sm tracking-wide">
              Designed for spaces that deserve more.
            </p>
          </div>

          {/* EXPLORE */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4 text-[#F5F5F2]">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-white/70 hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/70 hover:text-white transition-colors duration-300">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-white/70 hover:text-white transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4 text-[#F5F5F2]">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-white/70 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-white/70 hover:text-white transition-colors duration-300">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-white/70 hover:text-white transition-colors duration-300">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="text-white/70 hover:text-white transition-colors duration-300">
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/20 pt-4 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} SUNHOM. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/chamakk_official"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href="#"
              className="text-white/50 hover:text-white transition-colors duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>

            <a
              href="#"
              className="text-white/50 hover:text-white transition-colors duration-300"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}