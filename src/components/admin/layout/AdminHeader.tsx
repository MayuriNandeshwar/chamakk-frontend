"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function AdminHeader() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout(); // clear token + context
    router.push("/admin/login");
  };

  return (
    <header className="h-14 bg-white border-b px-6 flex items-center justify-between">
      <div className="font-medium">Admin Panel</div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
          {user?.name} ({user?.role})
        </span>

        <button
          onClick={handleLogout}
          className="text-sm text-red-600 hover:underline"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
