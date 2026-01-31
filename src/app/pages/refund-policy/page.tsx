import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Chamakk",
  description:
    "Read Chamakk’s Refund, Return, Shipping, and Cancellation Policy. Learn about damaged product returns, shipping timelines, COD rules, and refund processing.",
  alternates: {
    canonical: "https://www.chamakk.co.in/pages/refund-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Refund & Cancellation Policy | CHAMAKK",
    description:
      "CHAMAKK refund, shipping, COD, and cancellation policy explained clearly for customers.",
    url: "https://www.chamakk.co.in/pages/refund-policy",
    siteName: "CHAAMAKK",
    type: "website",
  },
};

export default function RefundPolicyPage() {
  return (
    <LegalLayout title="Return, Refund & Cancellation Policy">
      <p>
        At <strong>CHAMAKK</strong>, we take great care in crafting and packaging
        our products. If you experience any issue with your order, our customer
        support team will be happy to assist you in eligible cases, as outlined
        below.
      </p>

      <h2>Returns & Refunds</h2>
      <p>
        We accept returns or replacements only in the following cases:
      </p>
      <ul>
        <li>Product damaged during shipping</li>
        <li>Wrong product delivered</li>
        <li>Any other genuine issue, subject to verification</li>
      </ul>

      <p>
        The final decision regarding approval of any return or refund will be
        taken by CHAMAKK after verification of the product and issue reported.
      </p>

      <p>
        Customers are required to contact our customer support team within
        <strong> 3 days of delivery</strong> of the order, along with clear
        images or videos of the issue.
      </p>

      <p>
        Once the returned product is received and verified by us, the refund
        amount will be processed to the original payment method within
        <strong> 7 business days</strong>.
      </p>

      <h2>Non-Refundable Items</h2>
      <ul>
        <li>Used or partially used candles</li>
        <li>Products damaged due to misuse or mishandling</li>
        <li>Minor fragrance or color variations due to handcrafted nature</li>
      </ul>

      <p>
        <strong>No refund or replacement will be provided for used candles.</strong>
      </p>

      <h2>Shipping Policy</h2>
      <p>
        We offer free shipping on orders above a minimum order value of
        <strong> INR 999</strong>.
      </p>
      <p>
        For all orders below the minimum order value, a shipping charge of
        <strong> INR 99</strong> will be applied at checkout.
      </p>
      <p>
        After order confirmation, deliveries typically reach your doorstep
        within <strong>3–5 business days</strong>, depending on your location
        and courier partner.
      </p>

      <h2>Cash on Delivery (COD)</h2>
      <ul>
        <li>Flat COD fee of <strong>₹49</strong> on eligible orders</li>
        <li>COD is available only for orders up to <strong>₹2000</strong></li>
        <li>Orders above ₹2000 must be prepaid</li>
      </ul>
      <p>
        All COD charges and eligibility details will be clearly displayed at
        checkout.
      </p>

      <h2>Order Cancellation</h2>
      <p>
        Orders can be cancelled anytime before they are shipped by contacting
        our customer care team.
      </p>
      <p>
        If the cancellation request is received before dispatch, a full refund
        will be processed to the original payment method.
      </p>
      <p>
        Refunds for cancelled orders may take
        <strong> 8–9 business days</strong> to reflect in your account.
      </p>

      <h2>Contact Information</h2>
      <p>
        For any queries related to returns, refunds, shipping, or cancellations,
        please contact:
      </p>

      <p>
        <strong>CHAMAKK</strong>
        <br />
        Email: info@chamakk.co.in
        <br />
        Phone: 97022 61262
        <br />
        Address: B-705, Palm Complex, Palm Spring, Link Road, Malad West,
        Mumbai-400064
      </p>

      <p className="text-sm text-black/60 mt-10">
        <strong>Founder / Legal Disclaimer:</strong> This policy is published in
        good faith and is intended to comply with applicable Indian laws, RBI
        guidelines, and platform requirements including Razorpay, Meta Ads, and
        Google Ads.
        <br />
        <strong>Founder:</strong> Vishal Gndhi
      </p>
    </LegalLayout>
  );
}
