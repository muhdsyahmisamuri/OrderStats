"use client";
import React from "react";

interface PaginationButtonProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (itemsPerPage: number) => void;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleFirstPage = () => {
    onPageChange(1);
  };

  const handleLastPage = () => {
    onPageChange(totalPages);
  };

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newItemsPerPage = parseInt(e.target.value, 10);
    onItemsPerPageChange(newItemsPerPage);
    onPageChange(1); // Reset to the first page when changing items per page
  };

  return (
    <div className="flex justify-end justify-items-end gap-8">
      <div className="flex justify-start items-center gap-[5px]">
        <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#333]">
          Rows per page
        </p>
        <select
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          className="justify-center items-center w-[60px] h-[35px] overflow-hidden rounded-[10px] bg-white border border-[#dadada] text-center leading-[35px]"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
      <div className="flex justify-start items-center gap-[5px]">
        <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#333]">
          Go to page
        </p>
        <input
          type="number"
          min={1}
          max={totalPages}
          value={currentPage}
          onChange={(e) => onPageChange(parseInt(e.target.value, 10))}
          className="text-center w-[60px] h-[35px] overflow-hidden rounded-[10px] bg-white border border-[#dadada]"
        />
      </div>
      <div className="flex justify-start items-center gap-[5px]">
        <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#333] px-4">
          Page {currentPage} of {totalPages}
        </p>
        <button
          onClick={handleFirstPage}
          disabled={currentPage === 1}
          className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[37px] h-[35px] overflow-hidden gap-0.5 px-3.5 py-px rounded-[10px] bg-white border border-[#dadada] disabled:opacity-50"
        >
          {"<<"}
        </button>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[37px] h-[35px] overflow-hidden gap-0.5 px-3.5 py-px rounded-[10px] bg-white border border-[#dadada] disabled:opacity-50"
        >
          {"<"}
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[37px] h-[35px] overflow-hidden gap-0.5 px-3.5 py-px rounded-[10px] bg-white border border-[#dadada] disabled:opacity-50"
        >
          {">"}
        </button>
        <button
          onClick={handleLastPage}
          disabled={currentPage === totalPages}
          className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[37px] h-[35px] overflow-hidden gap-0.5 px-3.5 py-px rounded-[10px] bg-white border border-[#dadada] disabled:opacity-50"
        >
          {">>"}
        </button>
      </div>
    </div>
  );
};

export default PaginationButton;
