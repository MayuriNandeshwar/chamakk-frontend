import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Shipping Policy | CHAMAKK",
  description:
    "CHAMAKK Shipping Policy explains delivery timelines, shipping charges, and order processing details.",
  alternates: {
    canonical: "https://www.chamakk.co.in/pages/shipping-policy",
  },
  robots: { index: true, follow: true },
};

export default function ShippingPolicyPage() {
  return (
    <LegalLayout title="Shipping Policy">
      <p>
        CHAMAKK aims to deliver your orders safely and efficiently while
        keeping shipping costs transparent and fair.
      </p>

      <h2>Shipping Charges</h2>
      <ul>
        <li>Free shipping on orders above <strong>INR 999</strong></li>
        <li>Flat shipping fee of <strong>INR 99</strong> on orders below INR 999</li>
      </ul>

      <h2>Delivery Timeline</h2>
      <p>
        Orders are typically delivered within <strong>3–5 business days</strong>
        after confirmation.
      </p>

      <h2>Delays</h2>
      <p>
        Delivery timelines may vary due to courier delays, regional
        restrictions, or unforeseen circumstances.
      </p>
    </LegalLayout>
  );
}
