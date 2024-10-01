import * as motion from "framer-motion/client";
import { StatefulMotion, MotionTask } from "./components";

export default function MotionPage() {
  return (
    <main className="container min-h-screen py-14 flex flex-col gap-16">
      <div className="flex gap-14 rounded-md border border-primary h-56 p-8">
        <p className="whitespace-nowrap">Stateless motion:</p>
        <div className="h-full grid place-items-center">
          <motion.div
            initial={{ scale: 0, borderRadius: "20%" }}
            animate={{
              scale: [1, 1.5, 2, 1, 1],
              rotate: [0, 90, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{
              easings: ["easeInOut", "circInOut", "backInOut", "anticipate"],
              duration: 5,
              delay: 1,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="bg-primary size-24"
          />
        </div>
      </div>

      <StatefulMotion />

      <MotionTask />
    </main>
  );
}
