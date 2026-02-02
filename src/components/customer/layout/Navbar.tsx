"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  Menu,
} from "lucide-react";
import MobileMenu from "@/components/customer/layout/MobileMenu";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      // Non-home pages → always solid
      setScrolled(true);
      return;
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 120); // hero height threshold
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const isTransparent = isHome && !scrolled;

  return (
    <>
      <nav
        className={`
          fixed left-0 right-0 z-50 top-[40px]
          transition-all duration-300
          ${isTransparent
            ? "bg-transparent text-white"
            : "bg-[#FBF1D6] text-black shadow-sm"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* MOBILE MENU */}
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
            className={`
              font-playfair text-2xl tracking-widest font-semibold
              ${isTransparent ? "text-white" : "text-[#016656]"}
            `}
          >
            CHAMAKK
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8 font-epilogue text-sm">
            {[
              { label: "New", href: "#" },
              { label: "Shop", href: "#" },
              { label: "Corporate Gifting", href: "#" },
              { label: "Bulk Orders", href: "#" },
              { label: "Our Story", href: "#" },
              { label: "About Us", href: "/about-us" },
              { label: "Contact", href: "/contact-us" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={`
                  transition-colors
                  ${isTransparent
                    ? "text-white hover:text-[#C1A230]"
                    : "text-black hover:text-[#C1A230]"
                  }
                `}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* ICONS */}
          <div className="flex items-center gap-5">
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
