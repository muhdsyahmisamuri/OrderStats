"use client";
import React, { useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <div className="border-b border-gray-200 dark:border-neutral-700">
        <nav
          className="flex gap-x-1"
          aria-label="Tabs"
          role="tablist"
          aria-orientation="horizontal"
        >
          {[1, 2].map((tab) => (
            <button
              key={tab}
              type="button"
              className={`hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 ${
                activeTab === tab
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-blue-600"
              } text-sm whitespace-nowrap focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500`}
              id={`tabs-with-underline-item-${tab}`}
              aria-selected={activeTab === tab}
              aria-controls={`tabs-with-underline-${tab}`}
              onClick={() => setActiveTab(tab)}
            >
              Tab {tab}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-3">
        {activeTab === 1 && (
          <div
            id="tabs-with-underline-1"
            role="tabpanel"
            aria-labelledby="tabs-with-underline-item-1"
          >
            <p className="text-gray-500 dark:text-neutral-400">
              This is the{" "}
              <em className="font-semibold text-gray-800 dark:text-neutral-200">
                first
              </em>{" "}
              item's tab body.
            </p>
          </div>
        )}
        {activeTab === 2 && (
          <div
            id="tabs-with-underline-2"
            role="tabpanel"
            aria-labelledby="tabs-with-underline-item-2"
          >
            <p className="text-gray-500 dark:text-neutral-400">
              This is the{" "}
              <em className="font-semibold text-gray-800 dark:text-neutral-200">
                second
              </em>{" "}
              item's tab body.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tabs;
