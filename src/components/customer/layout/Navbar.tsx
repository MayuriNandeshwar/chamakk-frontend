"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  Menu,
} from "lucide-react";
import MobileMenu from "@/components/customer/layout/MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? "bg-[#F7F5F2] text-black shadow-sm"
          : "bg-transparent text-white"
        }
        top-[40px]`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* MOBILE: MENU */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* LOGO */}
          <Link
            href="/"
            className={`font-playfair text-2xl tracking-widest font-semibold
            ${scrolled ? "text-[#016656]" : "text-white"}`}
          >
            CHAMAKK
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8 font-epilogue text-sm">
            {[
              "Holiday Specials",
              "Shop",
              "Corporate Gifting",
              "Bulk Orders",
              "About Us",
              "Contact",
            ].map((item) => (
              <Link
                key={item}
                href="#"
                className={`transition-colors
                ${scrolled
                  ? "text-black hover:text-[#C1A230]"
                  : "text-white hover:text-[#C1A230]"
                }`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* ICONS */}
          <div className="flex items-center gap-5">
            {/* Desktop only */}
            <Search className="hidden lg:block w-5 h-5 hover:text-[#C1A230]" />
            <Heart className="w-5 h-5 hover:text-[#C1A230]" />
            <ShoppingCart className="w-5 h-5 hover:text-[#C1A230]" />
            <User className="hidden lg:block w-5 h-5 hover:text-[#C1A230]" />
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
