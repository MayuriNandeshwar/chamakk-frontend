import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.chamakk.co.in" },
    { url: "https://www.chamakk.co.in/about-us" },
    { url: "https://www.chamakk.co.in/faq" },
    { url: "https://www.chamakk.co.in/contact-us" },
    { url: "https://www.chamakk.co.in/privacy-policy" },
    { url: "https://www.chamakk.co.in/terms-and-conditions" },
    { url: "https://www.chamakk.co.in/refund-policy" },
    { url: "https://www.chamakk.co.in/shipping-policy" },
  ];
}
