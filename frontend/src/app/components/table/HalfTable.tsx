"use client";

import Link from "next/link";
import styles from "./table.module.css";
import { useEffect, useState } from "react";
import { useSearch } from "@/app/context/searchContext";

function HalfTable() {
  interface SalesOrder {
    orderId: string;
    buyer: string;
    merchant: string;
    status: string;
    amount: number;
  }

  const [salesOrders, setSalesOrders] = useState<SalesOrder[]>([]);
  const { searchTerm } = useSearch();

  useEffect(() => {
    const fetchSalesOrders = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/sales-orders`
        );
        const data = await response.json();
        setSalesOrders(data);
      } catch (error) {
        console.error("Error fetching sales orders:", error);
      }
    };

    fetchSalesOrders();
  }, []);

  const filteredOrders = salesOrders.filter((order) =>
    order.buyer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="rounded-2xl bg-white border border-[#dadada]">
      {/* Header Section */}
      <div className="flex justify-between items-center p-4">
        <p className="text-lg font-semibold text-left text-[#858585]">
          Sales Orders
        </p>
        <Link href="/sales">
          <button className="px-4 py-2 rounded-xl bg-white border border-[#dadada] text-[#333]">
            View All
          </button>
        </Link>
      </div>
      {/* Divider */}
      <div className="h-px bg-[#dadada]"></div>
      {/* Table Section */}
      <div className="p-4">
        <table className={styles.salestable}>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Buyer</th>
              <th>Merchant</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.slice(0, 10).map((order) => (
              <tr key={order.orderId}>
                <td>{order.orderId}</td>
                <td>{order.buyer}</td>
                <td>{order.merchant}</td>
                <td>
                  <span
                    className={`${styles.status} ${
                      styles[order.status.toLowerCase().replace(/\s+/g, "")]
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td>{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HalfTable;
