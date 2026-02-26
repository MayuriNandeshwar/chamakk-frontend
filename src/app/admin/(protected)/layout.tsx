'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminSideBar from '@/components/admin/AdminSideBar';
import AdminTopBar from '@/components/admin/AdminTopBar';
import { fetchAdminMe } from '@/lib/api/admin.auth';
import { SideBarProvider } from '@/context/SideBarContext';
import { ThemeProvider } from '@/context/ThemeContext';

export default function AdminProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [role, setRole] = useState<'ADMIN' | 'SUPER_ADMIN' | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const me = await fetchAdminMe();
        setRole(me.role);
      } catch {
        router.replace('/admin/login');
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [router]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-sm text-gray-500">
        Loading Admin Panel…
      </div>
    );
  }

  return (
    <ThemeProvider>
      <SideBarProvider>
        <div className="flex h-screen bg-[#F7F7F7] dark:bg-gray-900 overflow-hidden">
          
          {/* SIDEBAR */}
          <AdminSideBar role={role!} />

          {/* RIGHT CONTENT AREA */}
          <div className="flex flex-col flex-1 min-w-0">
            
            {/* TOPBAR */}
            <AdminTopBar />

            {/* PAGE CONTENT */}
            <main className="flex-1 overflow-y-auto p-4 md:p-6">
              <div className="max-w-[1200px] mx-auto">
                {children}
              </div>
            </main>

            {/* FOOTER (GLOBAL) */}
            <footer className="border-t bg-white dark:bg-gray-900">
              <div className="max-w-[1200px] mx-auto px-4 py-3 text-center text-sm text-gray-500 dark:text-gray-400">
                Copyright © 2026 <span className="font-medium text-brand-primary">SUNHOM</span> Admin Dashboard.  
                All Rights Reserved.
              </div>
            </footer>

          </div>
        </div>
      </SideBarProvider>
    </ThemeProvider>
  );
}
