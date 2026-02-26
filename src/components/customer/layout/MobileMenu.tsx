"use client";

import Link from "next/link";
import Image from "next/image";
import { X, User } from "lucide-react";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#F7F5F2] transition-transform duration-300
      ${open ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* HEADER — HEIGHT REDUCED */}
      <div className="px-6 py-3 min-h-[56px] flex items-center justify-between border-b border-[var(--border-soft)]">
        {/* LOGO — SIZE UNCHANGED */}
        <Image
          src="/logo/sunhomtrans.png"
          alt="SUNHOM"
          width={120}
          height={40}
          priority
          className="object-contain"
        />

        {/* CLOSE ICON */}
        <button onClick={onClose} aria-label="Close menu">
          <X className="w-5 h-5 text-[var(--text-heading)]" />
        </button>
      </div>

      {/* NAV LINKS */}
      <nav className="p-6 space-y-6 font-epilogue text-sm">
        {[
          { label: "Home", href: "/" },
          { label: "Collections", href: "/products" },
          { label: "Our Story", href: "/our-story" },
          { label: "About Us", href: "/about-us" },
          { label: "Contact", href: "/contact-us" },
        ].map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            onClick={onClose}
            className="block border-b border-[var(--border-soft)] pb-3 text-[var(--text-heading)]"
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* LOGIN — FIXED AT BOTTOM */}
      <div className="absolute bottom-6 left-6 right-6">
        <button className="flex items-center gap-3 text-sm font-epilogue text-[var(--text-heading)]">
          <span className="w-9 h-9 rounded-full bg-black/5 flex items-center justify-center">
            <User className="w-5 h-5" />
          </span>
          <span>Log in</span>
        </button>
      </div>
    </div>
  );
}