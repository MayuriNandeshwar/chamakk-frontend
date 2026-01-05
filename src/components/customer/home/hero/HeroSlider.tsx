"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { HeroMedia } from "@/lib/api/home/hero/types";

interface Props {
  media: HeroMedia[];
  activeIndex: number;
  direction: number; // 1 = right, -1 = left
}

const CLOUDINARY_BASE =
  "https://res.cloudinary.com/dtz1gpnge/image/upload";

/**
 * Direction-aware slide animation
 */
const slideVariants: Variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
  }),
  center: {
    x: "0%",
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-100%" : "100%",
  }),
};

export default function HeroSlider({
  media,
  activeIndex,
  direction,
}: Props) {
  if (!media.length) return null;

  const slide = media[activeIndex];

  const imageUrl = `${CLOUDINARY_BASE}/q_auto,f_auto,w_1920${slide.websiteMediaUrl.replace(
    CLOUDINARY_BASE,
    ""
  )}`;

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={slide.websiteMediaId}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 bg-cover bg-[position:70%_center] md:bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
          transition={{
            duration: 0.9,
            ease: "easeInOut",
          }}
        />
      </AnimatePresence>
    </div>
  );
}
