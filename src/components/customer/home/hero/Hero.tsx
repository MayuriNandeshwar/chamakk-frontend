"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import HeroSlider from "./HeroSlider";
import Link from 'next/link';
import { useHeroMedia } from "./useHeroMedia";
import { preloadImages } from "./preloadImages";
import dynamic from "next/dynamic";

// Lazy load 3D components (better performance)
const ParticleBackground = dynamic(
  () => import("./ParticleBackground"),
  { ssr: false }
);

const FlameGlow = dynamic(
  () => import("./FlameGlow"),
  { ssr: false }
);

export default function Hero() {
  const { media, loading } = useHeroMedia();

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const touchStartX = useRef<number | null>(null);

  /* =============================
     IMAGE PRELOADING
     ============================= */
  useEffect(() => {
    if (!media.length) return;

    const imageUrls = media.map((item) => item.websiteMediaUrl);
    preloadImages(imageUrls);
  }, [media]);

  /* =============================
     AUTO SLIDE — 3 SECONDS
     ============================= */
  useEffect(() => {
    if (media.length < 2 || paused) return;

    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % media.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [media, paused]);

  if (loading || media.length === 0) {
    return (
      <section className="relative h-[75vh] md:h-screen w-full bg-black" />
    );
  }

  const active = media[activeIndex];

  /* =============================
     MANUAL CONTROLS
     ============================= */
  const prevSlide = () => {
    setDirection(-1);
    setActiveIndex((i) => (i - 1 + media.length) % media.length);
  };

  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((i) => (i + 1) % media.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  /* =============================
     MOBILE SWIPE
     ============================= */
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();

    touchStartX.current = null;
  };

  return (
    <section
      className="relative h-[75vh] md:h-screen w-full overflow-hidden pt-[56px]"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* =============================
          ✨ LAYER 1: FLAME GLOW
          Warm ambient candlelight effect
          ============================= */}
      <div className="absolute inset-0 pointer-events-none opacity-25 mix-blend-screen">
        <FlameGlow />
      </div>

      {/* =============================
          ✨ LAYER 2: GOLDEN PARTICLES
          Floating particles in brand colors
          ============================= */}
      <div className="absolute inset-0 pointer-events-none opacity-35">
        <ParticleBackground />
      </div>

      {/* =============================
          LAYER 3: PRODUCT IMAGES
          Your existing slider
          ============================= */}
      <HeroSlider
        media={media}
        activeIndex={activeIndex}
        direction={direction}
      />

      {/* =============================
          LAYER 4: OVERLAY GRADIENT
          ============================= */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />

      {/* =============================
          LAYER 5: CONTENT
          Text and CTAs
          ============================= */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <motion.div
          key={active.websiteMediaId}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h1 className="text-white text-4xl leading-[1.25] tracking-[0.01em] md:text-6xl 
                          md:leading-[1.15] md:tracking-normal font-bold mb-6">
            {active.title}
          </h1>
          <p className="text-white/85 text-base md:text-xl mb-10 leading-relaxed">
            {active.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link href="/products?featured=true">
              <button className="px-12 py-4 rounded-full bg-amber-600 text-white font-semibold 
                                hover:bg-amber-700 hover:scale-105 shadow-xl hover:shadow-2xl 
                                transition-all duration-300">
                Shop Collections
              </button>
            </Link>

            <Link href="/products#scents">
              <button className="px-12 py-4 rounded-full border-2 border-white text-white font-semibold 
                                hover:bg-white hover:text-gray-900 hover:scale-105 
                                backdrop-blur-sm bg-white/10 transition-all duration-300">
                Explore Scents
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* =============================
          NAVIGATION DOTS
          ============================= */}
      <div
        className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {media.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === activeIndex
                ? "w-10 bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)]"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}