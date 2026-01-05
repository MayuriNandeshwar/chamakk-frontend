"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useSidebar } from "@/context/SidebarContext";

export default function AdminSidebar() {
  const { user } = useAuth(); // user.role = "ADMIN" | "SUPER_ADMIN"
  const { isOpen } = useSidebar();

  const role = user?.role;

  return (
    <aside
      className={`bg-gray-900 text-white h-screen w-64 p-4
      ${isOpen ? "block" : "hidden"} md:block`}
    >
      <h2 className="text-xl font-semibold mb-6">CHAMAKK Admin</h2>

      <nav className="space-y-3">
        <Link href="/admin/dashboard">Dashboard</Link>
        <Link href="/admin/products">Products</Link>
        <Link href="/admin/orders">Orders</Link>
        <Link href="/admin/customers">Customers</Link>

        {role === "SUPER_ADMIN" && (
          <>
            <hr className="border-gray-700 my-4" />
            <Link href="/admin/analytics">Analytics</Link>
            <Link href="/admin/admins">Admins</Link>
            <Link href="/admin/security">Security</Link>
            <Link href="/admin/settings">Settings</Link>
          </>
        )}
      </nav>
    </aside>
  );
}
