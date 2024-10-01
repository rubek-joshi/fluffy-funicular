import * as motion from "framer-motion/client";

// https://www.framer.com/motion/gestures/
export const MotionTask = () => {
  return (
    <div className="flex gap-16 rounded-md border border-primary h-56 p-8">
      <div className="flex gap-14 h-full">
        <p className="whitespace-nowrap">Animation Task:</p>
        <div className="h-full grid place-items-center">
          <motion.div
            transition={{
              easings: ["anticipate"],
              duration: 1,
            }}
            className="bg-primary size-24"
          />
        </div>
      </div>
    </div>
  );
};
