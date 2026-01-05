"use client";

import dynamic from "next/dynamic";

// Heavy / interactive sections
const Hero = dynamic(
  () => import("./hero/Hero"),
  { ssr: false }
);

const BestsellerSection = dynamic(
  () => import("./bestSeller/BestsellerSection"),
  { ssr: false }
);

const QualityCommitment = dynamic(
  () => import("./QualityCommitment"),
  { ssr: false }
);

const PassionSection = dynamic(
  () => import("./PassionSection"),
  { ssr: false }
);

const MeaningSection = dynamic(
  () => import("./MeaningSection"),
  { ssr: false }
);

const NatureCommitment = dynamic(
  () => import("./NatureCommitment"),
  { ssr: false }
);

const CraftsmanshipSection = dynamic(
  () => import("./CraftsmanshipSection"),
  { ssr: false }
);

const Testimonials = dynamic(
  () => import("./Testimonials"),
  { ssr: false }
);

const ExperienceGlow = dynamic(
  () => import("./ExperienceGlow"),
  { ssr: false }
);

export default function HomeClient() {
  return (
    <>
      <Hero />
      <BestsellerSection />
      <QualityCommitment />
      <PassionSection />
      <MeaningSection />
      <NatureCommitment />
      <CraftsmanshipSection />
      <Testimonials />
      <ExperienceGlow />
    </>
  );
}
