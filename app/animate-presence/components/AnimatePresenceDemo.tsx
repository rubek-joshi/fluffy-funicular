import Link from "next/link";
import * as motion from "framer-motion/client";
import { EiffelTower } from "./EiffelTower";
import { PopLayoutDemo } from "./PopLayoutDemo";

export const AnimatePresenceDemo = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="grid grid-cols-2 gap-4 w-fit">
        <EiffelTower mode="wait" />
        <EiffelTower mode="sync" />

        <div className="col-span-2 border-t border-t-primary"></div>

        <div className="col-span-2">
          <PopLayoutDemo />
        </div>

        <div className="col-span-2 border-t border-t-primary mb-4"></div>
      </div>
    </div>
  );
};
