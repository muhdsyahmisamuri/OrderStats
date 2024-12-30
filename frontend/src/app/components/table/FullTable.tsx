"use client";
import React, { useEffect, useState } from "react";
import styles from "./table.module.css";
import SortIcon from "../icons/SortIcon";
import FilterIcon from "../icons/FilterIcon";
import ViewIcon from "../icons/ViewIcon";
import PdfIcon from "../icons/PdfIcon";
import ExcelIcon from "../icons/ExcelIcon";
import PrintIcon from "../icons/PrinterIcon";
import OrderSummary from "@/app/orders/page";
import { formatDate } from "@/app/utils/dateUtlis";
import MoreButton from "../MoreButton";

interface SalesOrder {
  orderId: string;
  buyer: string;
  merchant: string;
  status: string;
  dateTime: string;
  amount: number;
}

type SortOrder = "normal" | "asc" | "desc";

const fetchSalesOrders = async (): Promise<SalesOrder[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/sales-orders`);
    if (!response.ok) throw new Error("Failed to fetch sales orders");
    return await response.json();
  } catch (error) {
    console.error("Error fetching sales orders:", error);
    throw error;
  }
};

const deleteSalesOrder = async (orderId: string): Promise<void> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/del-sales-orders/${orderId}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete order");
  } catch (error) {
    console.error("Error deleting order:", error);
    throw error;
  }
};

const getSortButtonText = (sortOrder: SortOrder): string => {
  switch (sortOrder) {
    case "asc":
      return "Sort (Ascending)";
    case "desc":
      return "Sort (Descending)";
    default:
      return "Sort";
  }
};

const getFilterButtonText = (selectedFilter: string): string => {
  return selectedFilter === "All" ? "Filter" : `Filter (${selectedFilter})`;
};

interface FullTableProps {
  currentPage: number;
  itemsPerPage: number;
}

const FullTable: React.FC<FullTableProps> = ({ currentPage, itemsPerPage }) => {
  const [salesOrders, setSalesOrders] = useState<SalesOrder[]>([]);
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [sortOrder, setSortOrder] = useState<SortOrder>("normal");
  const [originalOrders, setOriginalOrders] = useState<SalesOrder[]>([]);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadSalesOrders = async () => {
      try {
        const data = await fetchSalesOrders();
        setSalesOrders(data);
        setOriginalOrders(data);
      } catch (error) {
        alert("Failed to load sales orders");
      }
    };
    loadSalesOrders();
  }, []);

  const handleViewOrderDetails = () => {
    setShowOrderDetails((prev) => !prev);
  };

  const handleDeleteOrder = async (orderId: string) => {
    try {
      await deleteSalesOrder(orderId);
      setSalesOrders((prevOrders) => prevOrders.filter((order) => order.orderId !== orderId));
      alert("Order deleted successfully");
    } catch (error) {
      alert("Failed to delete order");
    }
  };

  const handleSort = () => {
    let sortedOrders: SalesOrder[] = [...salesOrders];
    if (sortOrder === "normal") {
      sortedOrders.sort((a, b) => a.amount - b.amount);
      setSortOrder("asc");
    } else if (sortOrder === "asc") {
      sortedOrders.sort((a, b) => b.amount - a.amount);
      setSortOrder("desc");
    } else {
      sortedOrders = [...originalOrders];
      setSortOrder("normal");
    }
    setSalesOrders(sortedOrders);
  };

  const handleFilterChange = () => {
    const filters = ["All", "Pending", "Refund", "Completed", "Preparing", "Waiting for pickup"];
    const nextFilter = filters[(filters.indexOf(selectedFilter) + 1) % filters.length];
    setSelectedFilter(nextFilter);
    setSalesOrders(nextFilter === "All" ? originalOrders : originalOrders.filter((order) => order.status.toLowerCase() === nextFilter.toLowerCase()));
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    setSalesOrders(term === "" ? originalOrders : originalOrders.filter((order) => order.buyer.toLowerCase().includes(term.toLowerCase())));
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = salesOrders.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="inline-flex rounded-2xl bg-white border border-[#dadada]">
      <div className="flex-[3] relative">
        <div className="flex justify-between items-center p-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="px-4 py-2 bg-white border border-[#dadada] rounded-xl text-black text-sm w-full md:w-auto bg-[url('/images/search.svg')] bg-no-repeat bg-[left_10px_bottom_8px] pl-10 focus:outline-0"
          />
          <div className="justify-evenly gap-2 hidden md:flex">
            <button className="inline-flex justify-center items-center flex-grow-0 flex-shrink-0 h-[35px] relative overflow-hidden gap-0.5 px-3.5 py-px rounded-xl bg-white border border-[#dadada]" onClick={handleSort}>
              <SortIcon />
              <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-center text-[#333]">{getSortButtonText(sortOrder)}</p>
            </button>
            <button className="inline-flex justify-center items-center flex-grow-0 flex-shrink-0 h-[35px] relative overflow-hidden gap-0.5 px-3.5 py-px rounded-xl bg-white border border-[#dadada]" onClick={handleFilterChange}>
              <FilterIcon />
              <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-center text-[#333]">{getFilterButtonText(selectedFilter)}</p>
            </button>
            <button className="inline-flex justify-center items-center flex-grow-0 flex-shrink-0 h-[35px] relative overflow-hidden gap-0.5 px-3.5 py-px rounded-xl bg-white border border-[#dadada]">
              <ViewIcon />
              <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-center text-[#333]">View</p>
            </button>
            <button className="inline-flex justify-center items-center flex-grow-0 flex-shrink-0 h-[35px] relative overflow-hidden gap-0.5 px-3.5 py-px rounded-xl bg-white border border-[#dadada]">
              <PdfIcon />
            </button>
            <button className="inline-flex justify-center items-center flex-grow-0 flex-shrink-0 h-[35px] relative overflow-hidden gap-0.5 px-3.5 py-px rounded-xl bg-white border border-[#dadada]">
              <ExcelIcon />
            </button>
            <button className="inline-flex justify-center items-center flex-grow-0 flex-shrink-0 h-[35px] relative overflow-hidden gap-0.5 px-3.5 py-px rounded-xl bg-white border border-[#dadada]">
              <PrintIcon />
            </button>
          </div>
        </div>
        <div className="h-px bg-[#dadada]" />
        <div className="overflow-x-auto">
          <table className={styles.salestable}>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Buyer</th>
                <th>Merchant</th>
                <th>Status</th>
                <th>Date/Time</th>
                <th>Amount</th>
                <th>More</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((order) => (
                <tr key={order.orderId}>
                  <td>{order.orderId}</td>
                  <td>{order.buyer}</td>
                  <td>{order.merchant}</td>
                  <td>
                    <span className={`${styles.status} ${styles[order.status.toLowerCase().replace(/\s+/g, "")]}`}>{order.status}</span>
                  </td>
                  <td>{formatDate(order.dateTime)}</td>
                  <td>{order.amount}</td>
                  <td>
                    <MoreButton handleViewOrderDetails={handleViewOrderDetails} handleDeleteOrder={handleDeleteOrder} orderId={order.orderId} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showOrderDetails && (
        <div className="flex-[1] border-l border-[#dadada]">
          <div className="flex justify-end items-center p-4">
            <button className="px-4 py-2 rounded-xl bg-white border border-[#dadada] text-[#333] text-sm font-bold" onClick={handleViewOrderDetails}>
              Close
            </button>
          </div>
          <div className="overflow-scroll">
            <OrderSummary />
          </div>
        </div>
      )}
    </div>
  );
};

export default FullTable;