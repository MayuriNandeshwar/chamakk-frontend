"use client";

import Link from "next/link";
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
      <div className="p-6 flex justify-between items-center border-b">
            <span className="font-playfair text-2xl font-semibold text-[#016656]">CHAMAKK</span>
        <button onClick={onClose}>
          <X className="w-6 h-6" />
        </button>
      </div>

      <nav className="p-6 space-y-6 font-epilogue text-sm">
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
            onClick={onClose}
            className="block border-b pb-3"
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* LOGIN FIXED AT BOTTOM */}
      
      <div className="absolute bottom-6 left-6 right-6">
        <button className="flex items-center gap-3 text-sm font-epilogue text-black">
          <span className="w-9 h-9 rounded-full bg-black/5 flex items-center justify-center">
            <User className="w-5 h-5" />
          </span>
          <span>Log in</span>
        </button>
      </div>
    </div>
  );
}
