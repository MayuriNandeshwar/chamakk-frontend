'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminTopbar from '@/components/admin/AdminTopbar';
import { fetchAdminMe } from '@/lib/api/admin.auth';

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
    <div className="flex h-screen bg-[#F7F7F7]">
      <AdminSidebar role={role!} />
      <div className="flex flex-col flex-1">
        <AdminTopbar />
        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
