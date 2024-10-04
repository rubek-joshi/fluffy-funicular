import Link from "next/link";
import { AnimatePresenceDemo, PopLayoutDemo } from "./components";
import * as motion from "framer-motion/client";

export default function AnimatePresencePage() {
  return (
    <main className="container min-h-screen py-14">
      <AnimatePresenceDemo />

      <div className="flex justify-center">
        <Link href="/animate-presence/task" className="block">
          <motion.button
            className="w-96 h-12 rounded-md bg-primary"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Go to Task
          </motion.button>
        </Link>
      </div>
    </main>
  );
}
