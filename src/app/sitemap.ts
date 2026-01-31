import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.chamakk.co.in" },
    { url: "https://www.chamakk.co.in/pages/about-us" },
    { url: "https://www.chamakk.co.in/pages/faq" },
    { url: "https://www.chamakk.co.in/pages/contact-us" },
    { url: "https://www.chamakk.co.in/pages/privacy-policy" },
    { url: "https://www.chamakk.co.in/pages/terms-and-conditions" },
    { url: "https://www.chamakk.co.in/pages/refund-policy" },
    { url: "https://www.chamakk.co.in/pages/shipping-policy" },
  ];
}
