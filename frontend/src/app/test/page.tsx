"use client";
import React, { useState } from "react";
import ExcelIcon from "../components/icons/ExcelIcon";
import FilterIcon from "../components/icons/FilterIcon";
import PdfIcon from "../components/icons/PdfIcon";
import PrintIcon from "../components/icons/PrinterIcon";
import SortIcon from "../components/icons/SortIcon";
import ViewIcon from "../components/icons/ViewIcon";
import MoreButton from "../components/MoreButton";
import PaginationButton from "../components/PaginationButton";
import styles from "../components/table/table.module.css";

function Sales() {
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

  // Sample order details for demonstration
  const orderDetails = {
    RSQ0060: {
      paymentMethod: "FPX Online Banking",
      pickupTime: "4-06-24 20.00",
      items: [
        { name: "Mixed Fruits 50% discount", price: "RM 7.50" },
        { name: "Blended Juice Bottle", price: "RM 20.00" },
        { name: "Super Bag", price: "RM 22.50" },
      ],
      subtotal: "RM 40.00",
      serviceTax: "RM 2.00",
      voucher: "RM 10.00",
    },
    // Add other order details here
  };

  const toggleDetails = (orderId: string) => {
    setExpandedOrder((prevOrder) => (prevOrder === orderId ? null : orderId));
  };

  return (
    <div className="relative bg-white p-4 md:p-8 lg:p-12">
      {/* Main Container */}
      <div className="rounded-2xl bg-white border border-[#dadada]">
        {/* Header Section */}
        <div className="flex justify-between items-center p-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 bg-white border border-[#dadada] rounded-xl text-black text-sm w-full md:w-auto"
          />
          <div className="justify-evenly gap-2 hidden md:flex">
            <button className="inline-flex items-center px-3.5 py-1 rounded-xl bg-white border border-[#dadada]">
              <SortIcon />
              <span className="text-base font-semibold text-[#333]">Sort</span>
            </button>
            <button className="inline-flex items-center px-3.5 py-1 rounded-xl bg-white border border-[#dadada]">
              <FilterIcon />
              <span className="text-base font-semibold text-[#333]">
                Filter
              </span>
            </button>
            <button className="inline-flex items-center px-3.5 py-1 rounded-xl bg-white border border-[#dadada]">
              <ViewIcon />
              <span className="text-base font-semibold text-[#333]">View</span>
            </button>
            <button className="inline-flex items-center px-3.5 py-1 rounded-xl bg-white border border-[#dadada]">
              <PdfIcon />
            </button>
            <button className="inline-flex items-center px-3.5 py-1 rounded-xl bg-white border border-[#dadada]">
              <ExcelIcon />
            </button>
            <button className="inline-flex items-center px-3.5 py-1 rounded-xl bg-white border border-[#dadada]">
              <PrintIcon />
            </button>
          </div>
        </div>
        <div className="h-px bg-[#dadada]" />

        {/* Table Section */}
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
              {Object.entries(orderDetails).map(([orderId, details]) => (
                <React.Fragment key={orderId}>
                  <tr className="relative">
                    <td>{orderId}</td>
                    <td>Daniel Altaf Hasnan</td>
                    <td>MBG Fruit Shop Mid Valley</td>
                    <td>
                      <span className="px-2 py-1 text-white bg-yellow-500 rounded-md">
                        Preparing
                      </span>
                    </td>
                    <td>4-06-24 20.00</td>
                    <td>RM 50.00</td>
                    <td className="relative">
                      <button
                        onClick={() => toggleDetails(orderId)}
                        className="text-blue-500"
                      >
                        More
                      </button>
                      {expandedOrder === orderId && (
                        <div className="absolute top-0 right-0 mt-1 ml-2 w-80 bg-gray-100 border border-gray-300 rounded-lg shadow-lg p-4 z-10">
                          <h3 className="text-lg font-bold">Order Details</h3>
                          <p className="mt-2">
                            Payment Method: {details.paymentMethod}
                          </p>
                          <p>Pickup Time: {details.pickupTime}</p>
                          <ul className="mt-2 list-disc list-inside">
                            {details.items.map((item, index) => (
                              <li key={index}>
                                {item.name} - {item.price}
                              </li>
                            ))}
                          </ul>
                          <p className="mt-2">Subtotal: {details.subtotal}</p>
                          <p>Service Tax: {details.serviceTax}</p>
                          <p>Voucher: {details.voucher}</p>
                        </div>
                      )}
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Sales;
