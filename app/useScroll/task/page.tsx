"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Card } from "./components";

const UseScrollTaskPage = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <main>
      <section className="bg-primary/40 h-36" />
      <section ref={targetRef} className="relative h-[300vh] bg-blue-950">
        <div className="sticky top-0 h-screen container flex items-center overflow-hidden">
          <motion.div className="flex gap-4">
            {Array(7)
              .fill(0)
              .map((_, idx) => (
                <Card key={idx} />
              ))}
          </motion.div>
        </div>
      </section>
      <section className="bg-primary/40 h-36" />
    </main>
  );
};

export default UseScrollTaskPage;
