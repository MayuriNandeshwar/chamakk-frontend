'use client';

import { useEffect, useRef, useState } from 'react';
import { Flame, Droplet, Clock } from 'lucide-react';

const FEATURES = [
  {
    icon: Flame,
    title: 'Hand-Poured Soy Wax',
    description:
      'Made using 100% natural soy wax, hand-poured in small batches for a clean, even burn.',
  },
  {
    icon: Droplet,
    title: 'Pure Fragrance Oils',
    description:
      'Crafted with high-quality fragrance oils that deliver a refined, long-lasting aroma.',
  },
  {
    icon: Clock,
    title: 'Extended Burn Time',
    description:
      'Thoughtfully designed to offer over 35 hours of consistent, calming illumination.',
  },
];

export default function QualityCommitment() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative pt-8 md:pt-8 pb-8 md:pb-14 bg-[#faf9f7] transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-2xl md:text-4xl font-bold text-brand-primary mb-5">
            Our Commitment to Quality
          </h2>
          <p className="font-epilogue text-lg text-black mb-8 leading-relaxed">
            Every SUNHOM fragrance products is crafted with intention—using carefully
            selected ingredients and time-honored methods to deliver a refined,
            sensory experience.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className={`text-center bg-white rounded-2xl px-8 py-10 shadow-sm hover:shadow-lg transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-amber-100">
                <feature.icon className="h-6 w-6 text-amber-600" />
              </div>

              <h3 className="font-playfair text-xl md:text-2xl text-brand-primary mb-4">
                {feature.title}
              </h3>

              <p className="font-epilogue text-black leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}