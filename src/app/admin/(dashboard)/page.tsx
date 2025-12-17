"use client";

import type { Metadata } from "next";
import React, { useEffect, useState } from "react";

import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
import MonthlyTarget from "@/components/ecommerce/MonthlyTarget";
import MonthlySalesChart from "@/components/ecommerce/MonthlySalesChart";
import StatisticsChart from "@/components/ecommerce/StatisticsChart";
import RecentOrders from "@/components/ecommerce/RecentOrders";
import DemographicCard from "@/components/ecommerce/DemographicCard";


import { getDashboardStats } from "@/services/dashboard.service";


type Metrics = {
  totalSales: number;
  totalOrders: number;
  totalCustomers: number;
  customers: number;
  orders: number;
  customersGrowth: number;
  ordersGrowth: number;
  [key: string]: number;
};

type DashboardData = {
  metrics: Metrics;
  monthlySales: unknown;
  monthlyTarget: unknown;
  statistics: unknown;
  demographics: unknown;
  recentOrders: unknown;
};

export default function AdminDashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  getDashboardStats().then((dashboardData) => {
    setData(dashboardData);
    setLoading(false);
  });
}, []);


  if (loading) return <p>Loading dashboard...</p>;
  if (!data) return <p>No dashboard data available.</p>;

  return (
    <section className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 xl:col-span-7">
        <EcommerceMetrics
          data={{
            ...data.metrics,
            customers: data.metrics.customers ?? data.metrics.totalCustomers ?? 0,
            orders: data.metrics.orders ?? data.metrics.totalOrders ?? 0,
            customersGrowth: data.metrics.customersGrowth ?? 0,
            ordersGrowth: data.metrics.ordersGrowth ?? 0,
          }}
        />
        <MonthlySalesChart data={data.monthlySales as number[]} />
      </div>

      <div className="col-span-12 xl:col-span-5">
        <MonthlyTarget value={typeof data.monthlyTarget === "number" ? data.monthlyTarget : 0} />
      </div>

      <div className="col-span-12">
        <StatisticsChart data={data.statistics} />
      </div>

      <div className="col-span-12 xl:col-span-5">
        <DemographicCard data={data.demographics} />
      </div>

      <div className="col-span-12 xl:col-span-7">
        <RecentOrders data={data.recentOrders} />
      </div>
    </section>
  );
}
