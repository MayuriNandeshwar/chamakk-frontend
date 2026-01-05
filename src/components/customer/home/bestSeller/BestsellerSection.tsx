'use client';

import { useEffect, useRef, useState } from 'react';
import { productService, BestsellerProduct } from '@/lib/api/home/products.service';
import ProductCard from './ProductCard';
import Link from 'next/link';

export default function BestsellerSection() {
  const [products, setProducts] = useState<BestsellerProduct[]>([]);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    productService.getBestsellers().then(res => {
      setProducts(res.data);
    });
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollerRef.current) return;

    const scrollAmount = scrollerRef.current.clientWidth * 0.9;

    scrollerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const canSlide = products.length > 1;

  return (
    <section className="py-10 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-s tracking-[0.35em] text-amber-700 mb-3">
            BESTSELLERS
          </p>
          <h2 className="font-playfair text-2xl md:text-4xl font-bold text-brand-primary mb-5">
            Our Signature Collection
          </h2>
          <p className="font-epilogue text-lg text-black mb-8 leading-relaxed">
            Explore our most loved aroma candles, thoughtfully crafted to bring
            calm and quiet luxury into your home.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative">

          {/* LEFT */}
          {canSlide && (
            <button
              onClick={() => scroll('left')}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2
              z-10 w-10 h-10 bg-white rounded-full shadow items-center justify-center"
            >
              ‹
            </button>
          )}

          {/* RIGHT */}
          {canSlide && (
            <button
              onClick={() => scroll('right')}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2
              z-10 w-10 h-10 bg-white rounded-full shadow items-center justify-center"
            >
              ›
            </button>
          )}

          {/* TRACK */}
          <div
            ref={scrollerRef}
            className="
              flex gap-6 overflow-x-auto scroll-smooth
              scrollbar-hide px-1
            "
          >
            {products.map(product => (
              <div
                key={product.productId}
                className="min-w-[80%] sm:min-w-[45%] md:min-w-[30%]"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-10 py-3
            border border-emerald-700 text-emerald-700 rounded-full
            hover:bg-emerald-700 hover:text-white transition"
          >
            View All Products →
          </Link>
        </div>

      </div>
    </section>
  );
}
