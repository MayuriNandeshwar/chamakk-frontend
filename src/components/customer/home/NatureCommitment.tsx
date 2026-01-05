'use client';

import { Leaf, Recycle, Heart } from 'lucide-react';

export default function NatureCommitment() {
  const commitments = [
    {
      icon: Heart,
      title: 'Clean Ingredients',
      description:
        'Made with pure soy wax for a soft, natural burn—safe for you and gentle on the planet.',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Production',
      description:
        'Sustainably sourced materials and mindful processes that reduce waste and pollution.',
    },
    {
      icon: Recycle,
      title: 'Planet-First Packaging',
      description:
        'Recyclable, low-impact packaging designed to protect what matters most.',
    },
  ];

  return (
    <section className="py-14 md:py-16 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* OUTER CONTAINER */}
        <div className="rounded-3xl bg-[#f3e3cd] border border-white/60 px-8 py-10 md:px-12 md:py-14">
          {/* HEADER */}
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="font-playfair text-2xl md:text-4xl font-bold text-brand-primary mb-5">
              Our Commitment to Nature
            </h2>
              <p className="font-epilogue text-lg text-black mb-8 leading-relaxed">
              We craft each candle with care for your home and the planet. With
              pure soy wax and sustainable practices, we create products that
              feel good, smell good, and do good.
            </p>
          </div>

          {/* COMMITMENT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commitments.map((item, index) => (
              <div
                key={index}
                className="bg-[#fffaf3] rounded-2xl p-6 text-center"
              >
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white border border-gray-200">

                  <item.icon className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-playfair text-xl md:text-2xl text-brand-primary mb-2">
                  {item.title}
                </h3>
                <p className="font-epilogue text-sm text-black leading-relaxed">
                  {item.description}
                </p>
              
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
