export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">
          Dashboard Overview
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Monitor Chamakk sales, inventory, and customer activity
        </p>
      </div>

      {/* Placeholder for KPI cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <p className="text-sm text-gray-500">Total Orders</p>
          <p className="text-2xl font-semibold mt-2">—</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <p className="text-sm text-gray-500">Revenue</p>
          <p className="text-2xl font-semibold mt-2">—</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <p className="text-sm text-gray-500">Customers</p>
          <p className="text-2xl font-semibold mt-2">—</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <p className="text-sm text-gray-500">Low Stock Items</p>
          <p className="text-2xl font-semibold mt-2">—</p>
        </div>
      </div>
    </div>
  );
}
