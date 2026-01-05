'use client';

import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-10">
          {/* BRAND */}
          <div className="md:col-span-2">
            <h3 className="font-playfair text-3xl font-bold mb-4">
              CHAMAKK
            </h3>
            <p className="font-epilogue text-white/80 leading-relaxed max-w-md">
              Premium hand-poured candles crafted with natural soy wax and
              thoughtfully refined fragrances—designed to bring calm, warmth,
              and quiet luxury into your space.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 font-epilogue text-sm">
              <li>
                <a
                  href="#home"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#collection"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Collection
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/chamakk_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* Facebook (placeholder for now) */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>

              {/* Twitter (placeholder for now) */}
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>

          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="font-epilogue text-white/70 text-sm">
            &copy; {new Date().getFullYear()} CHAMAKK. All rights reserved.
            Crafted with care. Inspired by calm.
          </p>
        </div>
      </div>
    </footer>
  );
}
