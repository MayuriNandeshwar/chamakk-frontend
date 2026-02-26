'use client';

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Drive Collection",
    subtitle: "Car Diffusers",
    description:
      "Premium car diffusers designed to keep every drive refreshing and refined.",
    image: "/categories/car-diffuser.jpg",
    href: "/products?category=drive",
  },
  {
    title: "Pure Air Rituals",
    subtitle: "Camphor Sachets",
    description:
      "Natural camphor sachets crafted to purify wardrobes, drawers, and sacred spaces.",
    image: "/categories/camphor.jpg",
    href: "/products?category=camphor",
  },
  {
    title: "Signature Candle Collection",
    subtitle: "Soy Wax Candles",
    description:
      "Hand-poured soy candles that transform your home into a sanctuary of warmth.",
    image: "/categories/candle.jpg",
    href: "/products?category=candles",
  },
];

export default function ShopByCategorySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="uppercase tracking-[0.35em] text-amber-700 text-sm mb-3">
            Shop By Category
          </p>

          <h2 className="font-playfair text-2xl md:text-4xl font-bold text-brand-primary mb-6">
            Fragrance for Every Space
          </h2>

          <p className="font-epilogue text-lg text-black leading-relaxed">
            Whether at home, in your car, or within your personal spaces,
            SUNHOM creates refined fragrances designed to elevate daily rituals.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {categories.map((cat) => (
            <Link key={cat.title} href={cat.href} className="group block">
              <div className="rounded-3xl overflow-hidden bg-[#faf9f7] shadow-sm hover:shadow-lg transition-all duration-500">

                {/* IMAGE */}
                <div className="relative h-[380px] overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-8 text-center">
                  <h3 className="font-playfair text-xl md:text-2xl font-semibold text-brand-primary mb-2">
                    {cat.title}
                  </h3>

                  <p className="uppercase text-sm tracking-wider text-amber-700 mb-4">
                    {cat.subtitle}
                  </p>

                  <p className="font-epilogue text-sm text-black leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  <span className="inline-block border border-brand-primary text-brand-primary px-6 py-2 rounded-full text-sm font-medium group-hover:bg-brand-primary group-hover:text-white transition">
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}