"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollMarqueeTextProps {
  children: string;
  reverse?: boolean;
}

// see https://www.framer.com/motion/use-scroll/##scroll-velocity
export const ScrollMarqueeText = ({
  children,
  reverse = false,
}: ScrollMarqueeTextProps) => {
  const marqueeRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: marqueeRef,
    offset: ["start end", "end start"],
  });

  scrollYProgress.on("change", (progress) => console.log(progress));

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    reverse ? ["-100%", "100%"] : ["100%", "-100%"]
  );

  return (
    <div ref={marqueeRef} className="overflow-hidden w-full py-4">
      <motion.div className="flex whitespace-nowrap" style={{ x }}>
        <p className="text-9xl font-bold mx-4">{children}</p>
      </motion.div>
    </div>
  );
};
