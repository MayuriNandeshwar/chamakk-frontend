"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api/axios";

export default function RequireAdminAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    api.get("/api/admin/me").catch(() => {
      router.replace("/admin/login");
    });
  }, [router]);

  return <>{children}</>;
}
