"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api/axios";

export default function AdminDashboardPage() {
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState<any>(null);

  useEffect(() => {
    api
      .get("/api/admin/me")
      .then((res) => {
        setAdmin(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-gray-500">Loading dashboard...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">
        Welcome, {admin?.name || "Admin"}
      </h1>

      <p className="text-gray-600">
        Role: <strong>{admin?.role}</strong>
      </p>
    </div>
  );
}
