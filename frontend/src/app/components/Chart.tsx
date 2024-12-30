import React from 'react'

function Chart() {
  return (
    <div className="rounded-2xl bg-white border border-[#dadada] p-4">
            <img
              src={"/images/graph.svg"}
              alt={"graph"}
              className="m-32 items-center justify-center"
            />
            <div className="mt-6 text-center grid grid-cols-7 gap-4 text-[#767676]">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                (day, index) => (
                  <p key={index}>{day}</p>
                )
              )}
            </div>
            <div className="w-full flex justify-center mt-4 gap-2">
              {[
                "Today",
                "Yesterday",
                "7 days",
                "30 days",
                "60 days",
                "1 year",
              ].map((label, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-xl ${
                    label === "7 days"
                      ? "bg-[#005541] text-white font-semibold"
                      : "bg-white text-[#4f4f4f]"
                  } border border-[#dadada]`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
  )
}

export default Chart