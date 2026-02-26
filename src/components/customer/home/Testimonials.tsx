"use client";

import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Anuradha Singh",
    rating: 5,
    product: "Lime Whisper",
    date: "19 November 2025",
    avatar: "/users/user1.jpg", // placeholder
    text: "I recently tried the SUNHOM fragrance products, and I’m genuinely impressed. The fragrance is beautifully balanced—not too strong, not too light. It fills the room with a warm, soothing aroma within minutes. Burns evenly and lasts longer than most candles I’ve used.",
  },
  {
    id: 2,
    name: "Sonal Shah",
    rating: 5,
    product: "Mahogany Amber",
    date: "28 December 2025",
    avatar: "/users/user2.jpg",
    text: "Mahogany Amber is warm, cozy, and woody. I was skeptical at first, but this one tops my list. Perfect for winter evenings—creates a comforting, fireplace-like atmosphere.",
  },
  {
    id: 3,
    name: "Sangita Singh",
    rating: 5,
    product: "Lime Whisper",
    date: "19 November 2025",
    avatar: "/users/user3.jpg",
    text: "The scent is subtle yet potent and instantly calming. Burns cleanly and evenly, and the packaging is beautiful. I’ve already recommended it to friends and family.",
  },
  {
    id: 4,
    name: "Monu Marmat",
    rating: 5,
    product: "Lime Whisper",
    date: "30 October 2025",
    avatar: "/users/user4.jpg",
    text: "Smells absolutely divine. Creates a warm, comforting vibe and lasts for hours. Perfect for cozy evenings or work-from-home setups. Totally worth it.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-brand-cream py-12 md:py-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-playfair text-2xl md:text-4xl font-bold text-brand-primary mb-5">
             What customers have to say about us?
          </h2>
        </div>

        {/* Scrollable Cards */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="min-w-[300px] md:min-w-[360px] h-[260px]
                        bg-brand-beige rounded-2xl p-6
                        flex flex-col justify-between
                        shadow-sm snap-start"
            >
              {/* Rating */}
              <div className="flex mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-500 text-sm">★</span>
                ))}
              </div>

              {/* Review Text */}
              <p
                className="font-epilogue text-sm text-black leading-relaxed
                          line-clamp-5"
              >
                {review.text}
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-4">
                <div className="w-10 h-10 rounded-full bg-brand-primary/10
                                flex items-center justify-center">
                  <span className="text-brand-primary font-semibold">
                    {review.name.charAt(0)}
                  </span>
                </div>

                <div>
                  <p className="text-sm font-medium text-black">
                    {review.name}
                  </p>
                  <p className="text-xs text-black">
                    {review.product} • {review.date}
                  </p>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
}
