"use client";
import React, { useState } from "react";
import PaginationButton from "../components/PaginationButton";
import FullTable from "../components/table/FullTable";

function Sales() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Dummy data for demonstration (replace with your actual data fetching logic)
  const totalItems = 100; // Total number of items (e.g., fetched from an API)

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (itemsPerPage: number) => {
    setItemsPerPage(itemsPerPage);
    setCurrentPage(1); // Reset to the first page when changing items per page
  };

  return (
    <div>
      {/* Main Container */}
      <div className="relative bg-white p-4 md:p-8 lg:p-12">
        {/* Tabs */}
        <div className="text-md font-medium text-center text-[#858585] dark:text-gray-400">
          <ul className="flex flex-wrap -mb-px">
            <li className="me-2">
              <a
                href="/"
                className="inline-block p-3 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >
                Dashboard
              </a>
            </li>
            <li className="me-2">
              <a
                href="/sales"
                className="inline-block p-3 text-black border-b-2 border-black rounded-t-lg active dark:text-black dark:border-black"
                aria-current="page"
              >
                Sales Orders
              </a>
            </li>
          </ul>
        </div>
        <div className="p-4"></div>
        {/* Table */}
        <FullTable currentPage={currentPage} itemsPerPage={itemsPerPage} />
        <div className="p-4" />
        {/* Pagination */}
        <PaginationButton
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      </div>
    </div>
  );
}

export default Sales;