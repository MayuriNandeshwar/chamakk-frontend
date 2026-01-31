import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "FAQs | CHAMAKK",
  description:
    "Find answers to common questions about CHAMAKK candles, shipping, payments, refunds, and care instructions.",
  alternates: {
    canonical: "https://www.chamakk.co.in/pages/faq",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FAQPage() {
  return (
    <LegalLayout title="Frequently Asked Questions">
      <h2>Are CHAMAKK candles safe to use?</h2>
      <p>
        Yes. Our candles are made using natural soy wax and are designed for
        safe, everyday use when used as directed.
      </p>

      <h2>Why do candles look slightly different?</h2>
      <p>
        CHAMAKK candles are handcrafted, so minor variations in color, texture,
        or finish are natural and part of their charm.
      </p>

      <h2>Do you offer Cash on Delivery?</h2>
      <p>
        Yes. Cash on Delivery is available on eligible orders up to INR 2000,
        with a flat COD fee of INR 49.
      </p>

      <h2>Can I return a used candle?</h2>
      <p>
        No. Used or partially used candles are not eligible for return or
        refund.
      </p>
        <h2>Are CHAMAKK candles eco-friendly?</h2>
        <p>
        Yes. Our candles are made using natural soy wax, which burns cleaner and
        is more environmentally friendly than paraffin wax.
        </p>

        <h2>How long do CHAMAKK candles last?</h2>
        <p>
        Burn time varies by size, but our candles are designed for long, even
        burns when used as recommended.
        </p>

        <h2>Can I cancel my order after placing it?</h2>
        <p>
        Yes, orders can be cancelled before dispatch by contacting customer
        support.
        </p>

        <h2>Do fragrances cause allergies?</h2>
        <p>
        We use carefully selected fragrances. However, sensitivity may vary
        from person to person.
        </p>

      <h2>How can I contact customer support?</h2>
      <p>
        You can reach us at{" "}
        <a href="mailto:info@chamakk.co.in" className="underline">
          info@chamakk.co.in
        </a>{" "}
        or call us at 97022 61262.
      </p>
    </LegalLayout>
  );
}
