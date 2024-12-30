import React from "react";

const items = [
  {
    id: 1,
    name: "Mixed Fruits 50% discount",
    description: "3 days from expiry date.",
    price: "RM 07.50",
    image: "/images/mixed-fruits.svg",
  },
  {
    id: 2,
    name: "Blended Juice Bottle random fruits 50% discount",
    description: "3 days from expiry date.",
    price: "RM 12.50",
    image: "/images/blended-juice.svg",
  },
  {
    id: 3,
    name: "Surprise Bag",
    description: "3 days from expiry date.",
    price: "RM 29.00",
    image: "/images/surprise-bag.svg",
  },
];

function OrderSummary() {
  return (
    <div>
      <div className="relative bg-white md:p-8 lg:py-16 flex-col items-center justify-center h-screen">
        <div className="flex-col">
          <p className="text-3xl font-bold text-left text-[#333]">
            Order details
          </p>
        </div>
        <div className="p-[20px]" />
        <div className="flex-col">
          <p className="text-base font-bold text-left text-[#333]">
            Payment method
          </p>
          <p className="text-base text-left text-[#333]">
            FPX (Online Banking)
          </p>
        </div>
        <div className="w-full border-t border-[#DADADA] my-5" />
        <div className="flex-col">
          <p className="text-base font-bold text-left text-[#333]">
            Pickup time
          </p>
          <p className="text-base text-left text-[#333]">4-06-24 20:00</p>
        </div>

        <h2 className="text-3xl font-bold text-left text-[#333] py-10">
          Items
        </h2>
        <div>
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center mb-6 border-b pb-4 border-[#DADADA] last:border-b-0 last:pb-0"
            >
              <h3 className="w-10 text-base font-normal">1x</h3>
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 mr-4 rounded"
              />
              <div className="flex-1">
                <h3 className="text-sm font-normal mb-1">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-1">{item.description}</p>
              </div>
              <div className="text-left text-sm font-normal text-gray-800 flex items-center justify-end">
                {item.price}
              </div>
            </div>
          ))}
        </div>
        <div className="p-6" />

        {/* Card Total Summary*/}
        <div className="rounded-lg border border-[#dadada] bg-gradient-to-r from-[#FFFFFF] to-[#F7F7F7]">
          <div className="flex flex-col justify-between items-center p-4">
            <table className="w-full text-left">
              <tbody>
                <tr className="border-b border-[#FFFFFF]">
                  <td className="text-sm font-normal mb-1">Subtotal</td>
                  <td className="py-2 text-right text-sm font-normal">
                    RM 49.00
                  </td>
                </tr>
                <tr className="border-b border-[#FFFFFF]">
                  <td className="py-2 text-sm font-normal mb-1">Service Tax</td>
                  <td className="py-2 text-right text-sm font-normal">
                    RM 0.73
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-sm font-normal mb-1">
                    Voucher applied
                  </td>
                  <td className="py-2 text-right text-sm font-normal">
                    - RM 0.00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="p-4" />

        {/* Discount*/}
        <div className="rounded-lg border border-[#dadada] bg-[#F7F7F7]">
          <div className="p-2">
            <span className="text-left text-sm font-normal pl-1">
              10% Voucher applied
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
