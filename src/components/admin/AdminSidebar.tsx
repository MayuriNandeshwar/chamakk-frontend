'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Package,
  Boxes,
  ShoppingBag,
  Users,
  BarChart3,
  Settings,
} from 'lucide-react';

type Role = 'ADMIN' | 'SUPER_ADMIN';

const NAV_ITEMS = [
  {
    label: 'Dashboard',
    href: '/admin/dashboard',
    icon: LayoutDashboard,
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    label: 'Products',
    href: '/admin/products',
    icon: Package,
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    label: 'Inventory',
    href: '/admin/inventory',
    icon: Boxes,
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    label: 'Orders',
    href: '/admin/orders',
    icon: ShoppingBag,
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    label: 'Customers',
    href: '/admin/customers',
    icon: Users,
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    label: 'Analytics',
    href: '/admin/analytics',
    icon: BarChart3,
    roles: ['SUPER_ADMIN'],
  },
  {
    label: 'Settings',
    href: '/admin/settings',
    icon: Settings,
    roles: ['SUPER_ADMIN'],
  },
];

export default function AdminSidebar({ role }: { role: Role }) {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-white border-r flex flex-col">
      {/* Brand */}
      <div className="h-20 flex items-center justify-center border-b bg-brand-primary">
        <span className="text-xl tracking-[0.35em] font-semibold text-amber-50">
          CHAMAKK
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 px-4 py-6">
        {NAV_ITEMS.filter(item => item.roles.includes(role)).map(item => {
          const active = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 px-5 py-3 rounded-full
                text-sm font-medium transition-all
                ${
                  active
                    ? 'bg-amber-600 text-white shadow'
                    : 'text-gray-700 hover:bg-amber-50'
                }`}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
