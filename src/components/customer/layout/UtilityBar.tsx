"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const messages = [
  "Free Shipping on All Orders Above ₹999",
  "Handcrafted Soy Wax Candles",
  "Clean & Natural Burn",
];

export default function UtilityBar() {
  const [visible, setVisible] = useState(true);

  // Show only while Hero is visible
  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.25 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-10 bg-[#016656] overflow-hidden">
    <Link href="/shop" className="flex h-full items-center">
        
        <div className="chamakk-track flex items-center">
        
        {/* COPY 1 */}
        {messages.map((msg, i) => (
            <div key={`c1-${i}`} className="flex items-center">
            {i !== 0 && (
                <span className="text-white text-lg mx-8 leading-none">•</span>
            )}
            <span className="mx-12 text-white text-sm font-medium whitespace-nowrap">
                {msg}
            </span>
            </div>
        ))}

        {/* COPY 2 */}
        {messages.map((msg, i) => (
            <div key={`c2-${i}`} className="flex items-center">
            <span className="text-white text-lg mx-8 leading-none">•</span>
            <span className="mx-12 text-white text-sm font-medium whitespace-nowrap">
                {msg}
            </span>
            </div>
        ))}

        {/* COPY 3 */}
        {messages.map((msg, i) => (
            <div key={`c3-${i}`} className="flex items-center">
            <span className="text-white text-lg mx-8 leading-none">•</span>
            <span className="mx-12 text-white text-sm font-medium whitespace-nowrap">
                {msg}
            </span>
            </div>
        ))}

        </div>
    </Link>
    </div>
  );
}
