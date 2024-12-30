import React from "react";

function Card() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        {
          title: "Total Revenue",
          value: "$11,5237",
          desc: "From last month",
        },
        { title: "Total New Users", value: "+20", desc: "From last month" },
        {
          title: "Total New Merchants",
          value: "+3",
          desc: "From last month",
        },
        { title: "Total Active Users", value: "+250", desc: "Currently" },
      ].map((card, index) => (
        <div
          key={index}
          className="rounded-2xl bg-gradient-to-b from-[#1E4038] to-[#117C63] p-6"
        >
          <p className="text-lg font-bold text-[#00FFB7]">{card.title}</p>
          <p className="text-4xl lg:text-5xl font-bold text-white">
            {card.value}
          </p>
          <p className="text-sm lg:text-base font-medium text-white">
            {card.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Card;
