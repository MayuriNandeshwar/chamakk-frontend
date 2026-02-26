import { Product } from "@/types/product";
import { headers } from "next/headers";

const API_BASE = "http://localhost:8080/api";

export async function getPublicProduct(slug: string): Promise<Product> {
  const res = await fetch(`${API_BASE}/products/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

export async function getAdminProduct(id: string): Promise<Product> {
  const headerList = await headers();
  const cookieHeader = headerList.get("cookie");

  const res = await fetch(`${API_BASE}/admin/products/${id}`, {
    headers: {
      Cookie: cookieHeader ?? "",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Admin product fetch failed:", res.status);
    throw new Error("Failed to fetch product");
  }

  return res.json();
}
