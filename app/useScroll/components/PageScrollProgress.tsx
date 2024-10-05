"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export const PageScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const springSmoothenedScaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-3 bg-primary origin-[0%]"
      style={{
        scaleX: scrollYProgress,
        // scaleX: springSmoothenedScaleX
      }}
    />
  );
};
