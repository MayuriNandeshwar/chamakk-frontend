"use client";

import Image from "next/image";

export default function CraftsmanshipSection() {
  return (
    <section className="bg-white py-12 md:py-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-playfair text-2xl md:text-4xl font-bold text-brand-primary mb-5">
            The Art of Craftsmanship
          </h2>
          <p className="font-epilogue text-lg text-black mb-8 leading-relaxed">
            Every SUNHOM product — whether candle, diffuser, or camphor sachet —
            is the result of a slow, intentional process—
            where natural materials, skilled hands, and thoughtful design come
            together to create something enduring.
          </p>
        </div>

        {/* PROCESS STORY */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {/* STEP 1 */}
          <div className="space-y-4">
            <div className="relative h-[320px] rounded-2xl overflow-hidden">
              <Image
                src="/01.png"
                alt="Natural wax selection"
                fill
                className="object-cover"
              />
            </div>
            <p className="font-epilogue text-l uppercase tracking-widest text-brand-primary mb-2">
              Materials
            </p>
            <p className="font-epilogue text-base text-black leading-relaxed">
              We begin with carefully sourced soy wax and clean ingredients,
              chosen for their purity, performance, and minimal impact.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="space-y-4">
            <div className="relative h-[320px] rounded-2xl overflow-hidden">
              <Image
                src="/09.png"
                alt="Hand pouring candles"
                fill
                className="object-cover"
              />
            </div>
            <p className="font-epilogue text-l uppercase tracking-widest text-brand-primary mb-2">
              Hand Pouring
            </p>
            <p className="font-epilogue text-base text-black leading-relaxed">
              Each candle is hand-poured in small batches, ensuring consistency,
              balance, and a clean, even burn.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="space-y-4">
            <div className="relative h-[320px] rounded-2xl overflow-hidden">
              <Image
                src="/02.png"
                alt="Finishing candle details"
                fill
                className="object-cover"
              />
            </div>
            <p className="font-epilogue text-l uppercase tracking-widest text-brand-primary mb-2">
              Finishing
            </p>
            <p className="font-epilogue text-base text-black leading-relaxed">
              From wick placement to final inspection, every detail is refined
              by hand—nothing rushed, nothing overlooked.
            </p>
          </div>
        </div>

        {/* FINAL RESULT */}
        <div className="relative h-[520px] md:h-[640px] rounded-3xl overflow-hidden">
          <Image
            src="/20.png"
            alt="Finished SUNHOM fragrance products"
            fill
            priority
            className="object-cover"
          />

           {/* SOFT GRADIENT FOR TEXT READABILITY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

            {/* OVERLAY TEXT */}
            <div className="absolute bottom-8 left-8 right-8 md:left-12 md:right-12">
              <p className="font-playfair text-xl md:text-2xl text-white max-w-xl leading-snug">
                Crafted slowly. Finished beautifully.
              </p>
            </div>
          </div>
      </div>
    </section>
  );
}
