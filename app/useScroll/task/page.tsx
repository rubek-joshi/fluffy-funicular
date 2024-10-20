"use client";
import { useRef } from "react";
import { motion, useTime, useTransform } from "framer-motion";
import { Card } from "./components";

const NO_OF_CARDS = 7;

const UseScrollTaskPage = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const placeholderX = useTime(); // mocking x value change, remove this after observing

  const x = useTransform(
    placeholderX,
    [0, 2000],
    [16, NO_OF_CARDS * -450] // 450 is card width
  );

  return (
    <main>
      <section className="bg-primary/40 h-36" />

      <section ref={targetRef} className="relative h-[300vh] bg-blue-950">
        <div className="sticky top-0 left-0 h-screen flex items-center overflow-hidden">
          <motion.div
            className="flex gap-4"
            style={{ x }} // <- FIRST comment this out and try below first
            // style={{ x: 0 }} // <- try changing this value and observe
          >
            {Array(NO_OF_CARDS)
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
