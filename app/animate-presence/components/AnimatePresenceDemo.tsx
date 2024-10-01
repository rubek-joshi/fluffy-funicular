import Link from "next/link";
import * as motion from "framer-motion/client";
import { EiffelTower } from "./EiffelTower";

export const AnimatePresenceDemo = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="grid grid-cols-2 gap-4 w-fit">
        <EiffelTower mode="wait" />
        <EiffelTower mode="sync" />
      </div>

      <Link href="/animate-presence/task">
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
  );
};
