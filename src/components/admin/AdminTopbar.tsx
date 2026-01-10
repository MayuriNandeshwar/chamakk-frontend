'use client';

import { Search, UserCircle } from 'lucide-react';

export default function AdminTopbar() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-8">
      {/* Search */}
      <div className="flex items-center gap-3 w-1/2">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search products, orders, customers…"
          className="w-full bg-transparent outline-none text-sm text-gray-700"
        />
      </div>

      {/* Profile */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600">Admin</span>
        <UserCircle size={30} className="text-gray-500" />
      </div>
    </header>
  );
}
