"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function PassionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-brand-beige py-12 md:py-14 overflow-hidden"
    >
      <div
        className={`max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center
        transition-all duration-[1400ms] ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        {/* IMAGE — DOMINANT */}
        <div className="relative h-[420px] md:h-[560px] rounded-3xl overflow-hidden">
          <Image
            src="/03.png"
            alt="SUNHOM fragrance products ritual"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* TEXT — RESTRAINED */}
        <div className="max-w-xl">
          <span className="block font-epilogue uppercase tracking-[0.2em] text-sm text-brand-dark/50 mb-4">
            Our Passion
          </span>
          <h2 className="font-playfair text-2xl md:text-4xl font-bold text-brand-primary mb-5">
            From intention,
            <br />
            to flame.
          </h2>

          <p className="font-epilogue text-lg leading-relaxed text-black">
            SUNHOM was born from a belief that fragrance is not decoration,
            but ritual. Each candle is carefully hand-poured to slow down time,
            soften spaces, and create moments of calm presence.
            <br />
            <br />
            From responsibly sourced wax to refined fragrance compositions,
            every detail is chosen with care—so what you light feels as
            meaningful as it is beautiful.
          </p>
        </div>
      </div>
    </section>
  );
}
