"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const categories = [
  {
    title: "Candles",
    image: "/category/candle.png",
    href: "/products?category=candles",
  },
  {
    title: "Drive Collection",
    image: "/category/drive.png",
    href: "/products?category=drive",
  },
  {
    title: "Pure Air Rituals",
    image: "/category/sachet.png",
    href: "/products?category=sachet",
  },
];

export default function CategorySection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.clientWidth;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-12 bg-[var(--bg-primary)] border-t border-[var(--border-soft)]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-12">

           <h2 className="font-playfair text-3xl md:text-4xl text-amber-700 mb-6">
            Our Categories
          </h2>


          <p className="font-epilogue text-lg text-black mb-10 leading-relaxed">
            Discover fragrance experiences crafted for home, car, and personal spaces.
            Designed with intention. Made to linger.
          </p>

        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-3 gap-10">

          {categories.map((cat, index) => (
            <Link key={index} href={cat.href} className="group">

              <div className="overflow-hidden rounded-3xl lux-card">

                <div className="relative h-[420px] w-full overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-3xl font-playfair text-[#FDFCF9]">
                      {cat.title}
                    </h3>
                  </div>
                </div>

              </div>

            </Link>
          ))}

        </div>

        {/* MOBILE SLIDER */}
        <div className="md:hidden relative">

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
          >
            {categories.map((cat, index) => (
              <Link
                key={index}
                href={cat.href}
                className="min-w-[85%] group"
              >
                <div className="overflow-hidden rounded-3xl lux-card">

                  <div className="relative h-[380px] w-full overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-2xl font-playfair text-[#FDFCF9]">
                        {cat.title}
                      </h3>
                    </div>
                  </div>

                </div>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}