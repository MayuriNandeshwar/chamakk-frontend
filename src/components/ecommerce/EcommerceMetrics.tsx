"use client";
import React from "react";
import Badge from "../ui/badge/Badge";
import { ArrowDown, ArrowUp, BoxLine, Group } from "@/icons-tsx";

interface MetricsData {
  customers: number;
  orders: number;
  customersGrowth: number;
  ordersGrowth: number;
}

export const EcommerceMetrics = ({ data }: { data: MetricsData }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
      {/* Customers */}
      <div className="rounded-2xl border p-5 bg-white">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl">
          <Group className="size-6" />
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500">Customers</span>
            <h4 className="mt-2 font-bold text-title-sm">
              {data.customers}
            </h4>
          </div>
          <Badge color="success">
            <ArrowUp /> {data.customersGrowth}%
          </Badge>
        </div>
      </div>

      {/* Orders */}
      <div className="rounded-2xl border p-5 bg-white">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl">
          <BoxLine className="size-6" />
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500">Orders</span>
            <h4 className="mt-2 font-bold text-title-sm">
              {data.orders}
            </h4>
          </div>
          <Badge color="error">
            <ArrowDown /> {data.ordersGrowth}%
          </Badge>
        </div>
      </div>
    </div>
  );
};
