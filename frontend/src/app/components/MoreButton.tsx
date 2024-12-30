import React, { useState, useEffect, useRef } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import VisibilityIcon from "./icons/VisibilityIcon";

interface MoreButtonProps {
  handleViewOrderDetails: () => void;
  handleDeleteOrder: (orderId: string) => void; // Add handleDeleteOrder
  orderId: string; // Add orderId prop
}

const MoreButton: React.FC<MoreButtonProps> = ({
  handleViewOrderDetails,
  handleDeleteOrder,
  orderId,
}) => {
  const [isDropdownUp, setIsDropdownUp] = useState(false); // State to control dropdown direction
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Function to check the button position relative to the viewport
  useEffect(() => {
    const checkDropdownPosition = () => {
      if (buttonRef.current) {
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const isNearBottom = window.innerHeight - buttonRect.bottom < 150; // Adjust threshold if needed
        setIsDropdownUp(isNearBottom);
      }
    };

    window.addEventListener("resize", checkDropdownPosition);
    checkDropdownPosition(); // Initial check

    return () => window.removeEventListener("resize", checkDropdownPosition);
  }, []);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton
        ref={buttonRef}
        className="inline-flex justify-end gap-1 rounded-lg px-2 py-4 hover:ring-gray-300 hover:bg-gray-50"
      >
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            style={{
              width: "5px",
              height: "5px",
              backgroundColor: "#333333",
              borderRadius: "50%",
              display: "inline-block",
            }}
          />
        ))}
      </MenuButton>

      <MenuItems
        className={`absolute ${
          isDropdownUp ? "bottom-full mb-2" : "top-full mt-2"
        } right-0 z-10 w-72 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none`}
      >
        <div className="py-1">
          <MenuItem>
            <button
              className="flex items-center px-4 py-2"
              onClick={handleViewOrderDetails}
            >
              <VisibilityIcon />
              <span className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900">
                View Sales Order Details
              </span>
            </button>
          </MenuItem>

          <MenuItem>
            <button className="flex items-center px-4 py-2">
              <div className="w-6" />
              <span className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900">
                View Transaction
              </span>
            </button>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem>
            <button
              className="flex items-center px-4 py-2"
              onClick={() => handleDeleteOrder(orderId)} // Trigger delete with the orderId
            >
              <div className="w-6" />
              <span className="block px-4 py-2 text-sm text-[#ED1C24]">
                Delete this Order
              </span>
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};

export default MoreButton;
