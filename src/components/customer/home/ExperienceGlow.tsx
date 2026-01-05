'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ExperienceGlow() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-14 bg-white opacity-0 transition-all duration-1000"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-playfair text-2xl md:text-4xl font-bold text-brand-primary mb-5">
          Experience the Glow
        </h2>

        <p className="font-epilogue text-lg text-black mb-8 leading-relaxed">
          It's time to discover your sanctuary. Light a CHAMAKK candle and
          transform your space into a sanctuary of warmth and tranquility.
        </p>

        {/* Outline CTA (same style as View All Products) */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 px-12 py-4
          border border-brand-primary text-brand-primary rounded-full
          font-epilogue font-semibold
          hover:bg-brand-primary hover:text-white
          transition-all duration-300 hover:translate-x-0.5"
        >
          Explore Our Collection →
        </Link>
      </div>

      <style jsx>{`
        .animate-fade-in {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
