import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "About Us | CHAMAKK",
  description:
    "Discover the story behind CHAMAKK — a brand built on the belief that luxury should feel natural, calming, and affordable for everyone.",
  alternates: {
    canonical: "https://www.chamakk.co.in/about-us",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "About Us | CHAMAKK",
    description:
      "CHAMAKK was founded with a simple belief: luxury should be natural, calming, and accessible to all.",
    url: "https://www.chamakk.co.in/about-us",
    siteName: "CHAMAKK",
    type: "website",
  },
};

export default function AboutUsPage() {
  return (
    <LegalLayout title="About Us">
      <p>
        <strong>CHAMAKK</strong> was born from a simple but powerful belief —
        luxury should not feel distant, expensive, or exclusive. It should feel
        natural, calming, and something everyone can afford and enjoy in their
        everyday life.
      </p>

      <p>
        In a world where luxury is often associated with high prices and limited
        access, CHAMAKK was created to change that perception. Our goal is to
        bring thoughtfully crafted candles that elevate your space, mood, and
        rituals — without making luxury feel out of reach.
      </p>

      <h2>Why CHAMAKK?</h2>
      <p>
        Our founder believed that small moments of calm and warmth should be
        accessible to everyone. A softly glowing candle, a soothing fragrance,
        and a peaceful environment should not be reserved for a few — they
        should be part of everyday living.
      </p>

      <p>
        CHAMAKK focuses on creating products that balance quality, design, and
        affordability. Every candle is crafted with care, using natural soy wax
        and refined fragrances, designed to feel premium while remaining
        pocket-friendly.
      </p>

      <h2>Our Philosophy</h2>
      <ul>
        <li>Luxury should feel natural, not intimidating</li>
        <li>Quality should be accessible, not exclusive</li>
        <li>Calm and warmth should be part of everyday life</li>
      </ul>

      <p>
        CHAMAKK is not about extravagance. It is about creating moments —
        moments of calm, reflection, and comfort — at a price that makes sense.
      </p>

      <p className="text-sm text-black/60 mt-10">
        <strong>Founder:</strong> Vishal Gndhi
      </p>
    </LegalLayout>
  );
}
