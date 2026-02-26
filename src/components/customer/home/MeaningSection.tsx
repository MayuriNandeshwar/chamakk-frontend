"use client";

import { useEffect, useRef, useState } from "react";

export default function MeaningSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const playVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = false;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const resetVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <section
      ref={sectionRef}
      className={`bg-white transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-14 items-center">

          {/* TEXT */}
          <div className="flex flex-col justify-center">
            <h2 className="font-playfair text-2xl md:text-4xl font-bold text-brand-primary
                           text-center md:text-left mb-5">
              The Meaning of SUNHOM
            </h2>

            {/* Accent line */}
            <div className="w-20 h-[2px] bg-brand-primary/30 mb-6
                            mx-auto md:mx-0" />

            <div className="space-y-4 md:text-left">
              <p className="font-epilogue text-lg leading-relaxed text-black">
                SUNHOM was born from a simple belief shared by its founder,
                <strong> Vishal Gndhi</strong> — luxury should feel natural,
                last long, and never feel out of reach.
              </p>

              <p className="font-epilogue text-lg leading-relaxed text-black">
                Each product is thoughtfully crafted using clean ingredients,
                refined fragrances, and slow, intentional processes —
                designed to elevate everyday moments without excess.
              </p>

              <p className="font-epilogue text-lg leading-relaxed text-black">
                From calm evenings to quiet celebrations, SUNHOM brings warmth
                and presence into spaces where people pause, breathe, and feel at home.
              </p>

              <p className="font-epilogue text-lg leading-relaxed text-black">
                SUNHOM stands for quiet confidence — premium, honest,
                and made for everyone who believes luxury should be felt,
                not waited for.
              </p>
            </div>
          </div>

          {/* VIDEO */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-[260px] sm:w-[300px] md:w-[320px]
                            aspect-[9/16] rounded-3xl overflow-hidden shadow-xl bg-black">

              <video
                ref={videoRef}
                className="w-full h-full object-contain bg-black"
                playsInline
                muted
                onEnded={resetVideo}
                controls={isPlaying}
              >
                <source src="/media/founder_story.mp4" type="video/mp4" />
              </video>

              {!isPlaying && (
                <button
                  onClick={playVideo}
                  className="absolute inset-0 flex items-center justify-center
                             bg-black/20 hover:bg-black/30 transition"
                  aria-label="Play founder story"
                >
                  <div className="w-14 h-14 rounded-full bg-white
                                  flex items-center justify-center shadow-lg">
                    <span className="text-xl ml-1 text-brand-primary">▶</span>
                  </div>
                </button>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
