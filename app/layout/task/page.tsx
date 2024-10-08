"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const TABS = [
  "Trip Summary",
  "What's included",
  "What's not included",
  "Requirements",
  "Payment",
  "Cancellation",
  "Insurance",
] as const;

type Tab = (typeof TABS)[number];

// see https://www.framer.com/motion/layout-animations/#shared-layout-animations
const LayoutTask = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>(TABS[0]);

  return (
    <main className="container min-h-screen py-14 flex flex-col">
      <h3 className="text-4xl font-semibold mb-6">Practical Details</h3>
      <ul className="flex border-b border-b-primary/20">
        {TABS.map((tab) => (
          <li
            className="cursor-pointer flex flex-col"
            key={tab}
            onClick={() => setSelectedTab(tab)}
          >
            <span className="block px-4 flex-1 mb-2">{tab}</span>
            {tab === selectedTab ? (
              <div className="h-[1px] bg-primary w-full" />
            ) : null}
          </li>
        ))}
      </ul>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTab ?? "empty"}
          className="h-12 w-96 grid place-items-start py-8 px-4"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {selectedTab} content
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default LayoutTask;
