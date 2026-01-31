import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions | CHAMAKK",
  description:
    "Read CHAMAKK’s Terms & Conditions governing the use of our website, products, payments, refunds, and services in compliance with Indian laws.",
  alternates: {
    canonical: "https://www.chamakk.co.in/pages/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms & Conditions | CHAMAKK",
    description:
      "CHAMAKK Terms & Conditions outline user responsibilities, payments, refunds, and legal policies.",
    url: "https://www.chamakk.co.in/pages/terms-and-conditions",
    siteName: "CHAMAKK",
    type: "website",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <LegalLayout title="Terms & Conditions">
      <p>
        This website is operated by <strong>CHAMAKK</strong>. Throughout the
        site, the terms “we”, “us”, and “our” refer to CHAMAKK. By accessing our
        website and/or purchasing products from us, you agree to be bound by
        these Terms & Conditions (“Terms”), including all policies referenced
        herein.
      </p>

      <h2>1. Eligibility & Use of Website</h2>
      <p>
        By using this website, you confirm that you are at least 18 years of age
        or are using the website under the supervision of a parent or legal
        guardian. You agree not to use the website or products for any unlawful
        or unauthorized purpose.
      </p>

      <h2>2. General Conditions</h2>
      <p>
        We reserve the right to refuse service to anyone for any reason at any
        time. You agree not to reproduce, duplicate, copy, sell, resell, or
        exploit any portion of the website without express written permission
        from CHAMAKK.
      </p>

      <h2>3. Accuracy of Information</h2>
      <p>
        We are not responsible if information on this website is inaccurate,
        incomplete, or outdated. Content is provided for general information
        only and may be updated or modified at any time.
      </p>

      <h2>4. Products, Pricing & Availability</h2>
      <ul>
        <li>All products are handcrafted and may show minor variations</li>
        <li>Product images are for representation purposes only</li>
        <li>Prices and availability are subject to change without notice</li>
      </ul>

      <h2>5. Orders, Billing & Payments</h2>
      <p>
        We reserve the right to refuse or cancel any order. You agree to provide
        accurate billing and contact information. All payments are processed
        securely via <strong>Razorpay or other RBI-authorized gateways</strong>.
        CHAMAKK does not store card, UPI, or banking details.
      </p>

      <h2>6. Refunds & Cancellations</h2>
      <p>
        Refunds, replacements, and cancellations are governed by our{" "}
        <a
          href="/pages/refund-policy"
          className="text-black underline hover:opacity-80"
        >
          Refund Policy
        </a>
        . By placing an order, you agree to those terms.
      </p>

      <h2>7. Third-Party Links & Tools</h2>
      <p>
        Our website may contain links to third-party tools or websites. CHAMAKK
        is not responsible for third-party content, services, or transactions.
      </p>

      <h2>8. User Submissions</h2>
      <p>
        Any feedback, comments, or suggestions provided to CHAMAKK may be used
        without restriction or obligation. You agree not to submit unlawful or
        infringing material.
      </p>

      <h2>9. Personal Information</h2>
      <p>
        Your submission of personal information is governed by our{" "}
        <a
          href="/pages/privacy-policy"
          className="text-black underline hover:opacity-80"
        >
          Privacy Policy
        </a>
        .
      </p>

      <h2>10. Prohibited Uses</h2>
      <ul>
        <li>Violation of any law or regulation</li>
        <li>Infringement of intellectual property rights</li>
        <li>Distribution of malicious software</li>
        <li>Unauthorized data collection or scraping</li>
      </ul>

      <h2>11. Disclaimer & Limitation of Liability</h2>
      <p>
        The website and products are provided on an “as is” basis. CHAMAKK shall
        not be liable for any indirect, incidental, or consequential damages to
        the maximum extent permitted by law.
      </p>

      <h2>12. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless CHAMAKK, its founder, and
        partners from any claims arising out of your violation of these Terms.
      </p>

      <h2>13. Termination</h2>
      <p>
        We may suspend or terminate access to the website if these Terms are
        violated. Obligations incurred prior to termination shall survive.
      </p>

      <h2>14. Governing Law & Jurisdiction</h2>
      <p>
        These Terms are governed by the laws of <strong>India</strong>. All
        disputes shall be subject to Indian jurisdiction.
      </p>

      <h2>15. Contact Information</h2>
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
        <strong>Founder / Legal Disclaimer:</strong> These Terms & Conditions are
        published in good faith and comply with Indian laws, RBI guidelines, and
        platform requirements including Razorpay, Meta Ads, and Google Ads.
        <br />
        <strong>Founder:</strong> Vishal Gndhi
      </p>
    </LegalLayout>
  );
}
