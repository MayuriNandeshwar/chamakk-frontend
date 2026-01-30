import api from "@/lib/axios";
import { cookies } from "next/headers";

export type AdminProductListDto = {
  productId: string;
  name: string;
  thumbnail?: string;
  basePrice: number;
  status: "DRAFT" | "PUBLISHED";
  updatedAt: string;
};


export const getAdminProducts = async (): Promise<AdminProductListDto[]> => {
  // ✅ cookies() IS ASYNC IN NEXT 16
  const cookieStore = await cookies();

  const cookieHeader = cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");

  const res = await api.get("/api/admin/products", {
    headers: {
      Cookie: cookieHeader,
    },
  });

  return res.data;
};
