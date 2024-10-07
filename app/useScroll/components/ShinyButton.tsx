"use client";
import { motion, type HTMLMotionProps } from "framer-motion";
import "./ShinyButton.css";

type ExtendedMotionProps = HTMLMotionProps<"button"> & {
  initial?: Record<string, unknown>;
  animate?: Record<string, unknown>;
};

type ShinyButtonProps = ExtendedMotionProps & {
  children: React.ReactNode;
};

// see https://www.youtube.com/watch?v=jcpLprT5F0I&ab_channel=rithmic
export const ShinyButton = ({
  children,
  type = "button", // Default to "button" type
  ...rest
}: ShinyButtonProps) => {
  return (
    <motion.button
      type={type}
      initial={{ '--x': '100%', scale: 1 }}
      animate={{ '--x': '-100%' }}
      whileTap={{ scale: 0.88 }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0.25,
        type: 'spring',
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: 'spring',
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className="radial-gradient relative w-full rounded-md px-6 py-2"
      {...rest}
    >
      <span className="linear-mask relative block h-full w-full tracking-wide text-primary">
        {children}
      </span>
      <span className="linear-overlay absolute inset-0 block rounded-md p-px" />
    </motion.button>
  );
};
