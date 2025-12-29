import type { ReactNode } from "react";
import AdminSidebar from "@/components/admin/layout/AdminSidebar";
import AdminHeader from "@/components/admin/layout/AdminHeader";

interface AdminDashboardLayoutProps {
  children: ReactNode;
}

export default function AdminDashboardLayout({
  children,
}: AdminDashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content area */}
      <div className="flex flex-col flex-1">
        {/* Top Header */}
        <AdminHeader />

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
