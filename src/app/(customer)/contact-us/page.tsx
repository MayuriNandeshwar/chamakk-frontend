import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Contact Us | CHAMAKK",
  description:
    "Contact CHAMAKK for order support, product queries, or general assistance. Reach us via email, phone, or address.",
  alternates: {
    canonical: "https://www.chamakk.co.in/contact-us",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contact Us | CHAMAKK",
    description:
      "Get in touch with CHAMAKK for support, inquiries, or assistance.",
    url: "https://www.chamakk.co.in/contact-us",
    siteName: "CHAMAKK",
    type: "website",
  },
};

export default function ContactUsPage() {
  return (
    <LegalLayout title="Contact Us">
      <p>
        We’re here to help. If you have any questions regarding your order,
        products, or our policies, please feel free to reach out to us using the
        details below.
      </p>

      <h2>Customer Support</h2>
      <p>
        <strong>Email:</strong>{" "}
        <a
          href="mailto:info@chamakk.co.in"
          className="underline hover:opacity-80"
        >
          info@chamakk.co.in
        </a>
        <br />
        <strong>Phone:</strong> 97022 61262
      </p>

      <h2>Business Address</h2>
      <p>
        B-705, Palm Complex,
        <br />
        Palm Spring, Link Road,
        <br />
        Malad West, Mumbai – 400064
      </p>

      <h2>Business Hours</h2>
      <p>
        Monday to Saturday
        <br />
        10:00 AM – 6:00 PM (IST)
      </p>

      <p className="text-sm text-black/60 mt-10">
        <strong>Founder / Legal Disclaimer:</strong> This contact information is
        provided in good faith and is intended for customer support and official
        communication only.
        <br />
        <strong>Founder:</strong> Vishal Gndhi
      </p>
    </LegalLayout>
  );
}
