import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | CHAMAKK",
  description:
    "CHAMAKK Privacy Policy explains how we collect, use, and protect customer information in compliance with Indian laws, Razorpay, Meta Ads, and Google Ads requirements.",
  alternates: {
    canonical: "https://www.chamakk.co.in/pages/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | CHAMAKK",
    description:
      "Learn how CHAMAKK protects your personal information and ensures secure transactions.",
    url: "https://www.chamakk.co.in/pages/privacy-policy",
    siteName: "CHAMAKK",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>
        Thank you for visiting <strong>CHAMAKK</strong>. We respect your privacy
        and are committed to protecting the personal information you share with
        us. This Privacy Policy explains how we collect, use, store, and disclose
        information when you visit our website or make a purchase from us.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>Name, email address, phone number</li>
        <li>Shipping and billing address</li>
        <li>IP address and device information</li>
      </ul>

      <h2>2. Payment Information</h2>
      <p>
        We do <strong>not</strong> store credit or debit card details, UPI IDs, or
        banking information. All payments are processed securely via{" "}
        <strong>Razorpay and other RBI-authorized payment gateways</strong>.
      </p>

      <h2>3. Cookies</h2>
      <p>
        We use cookies and analytics tools to improve user experience and website
        performance. You may disable cookies in your browser settings; however,
        some features of the website may not function properly.
      </p>

      <h2>4. Use of Information</h2>
      <ul>
        <li>Order processing and delivery</li>
        <li>Customer support and communication</li>
        <li>Website analytics and improvement</li>
        <li>Marketing communications, where permitted by law</li>
      </ul>

      <h2>5. Sharing of Information</h2>
      <p>
        We may share limited information with payment partners, logistics
        providers, and government or legal authorities when required by law.
      </p>

      <h2>6. Data Security</h2>
      <p>
        We use SSL encryption and reasonable technical safeguards to protect user
        information. However, no method of online transmission or storage is
        completely secure.
      </p>

      <h2>7. Contact Information</h2>
      <p>
        For any questions or concerns regarding this Privacy Policy, you may
        contact us at:
        <br />
        <strong>Email:</strong>{" "}
        <a
          href="mailto:info@chamakk.co.in"
          className="underline hover:opacity-80"
        >
          info@chamakk.co.in
        </a>
      </p>

      <h2>8. Jurisdiction</h2>
      <p>This Privacy Policy is governed by the laws of India.</p>

      <p className="text-sm text-black/60 mt-10">
        <strong>Founder / Legal Disclaimer:</strong> This policy is published in
        good faith and complies with applicable Indian laws, RBI guidelines, and
        platform requirements including Razorpay, Meta Ads, and Google Ads.
      </p>
    </LegalLayout>
  );
}
