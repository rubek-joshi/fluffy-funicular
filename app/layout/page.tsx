import Link from "next/link";
import * as motion from "framer-motion/client";
import { LayoutDemo } from "./components";

export default function MotionPage() {
  return (
    <main className="container min-h-screen py-14 flex flex-col justify-center items-center">
      <LayoutDemo />

      <Link href="/layout/task">
        <motion.button
          className="relative px-6 py-3 text-white font-semibold bg-primary rounded-lg mt-6"
          whileHover={{
            scale: 1.1,
            boxShadow:
              "0 0 20px rgba(241, 7, 163, 0.8), 0 0 40px rgba(241, 7, 163, 0.6), 0 0 60px rgba(241, 7, 163, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Go to Task
        </motion.button>
      </Link>
    </main>
  );
}
