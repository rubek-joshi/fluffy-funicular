"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

function removeItem<T>(arr: T[], item: T) {
  const index = arr.indexOf(item);
  if (index > -1) arr.splice(index, 1);
}

export const PopLayoutDemo = () => {
  const [items, setItems] = useState([0]);
  const [popLayout, setPopLayout] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col"></div>
      <div className="flex gap-2 items-center mb-4">
        <label htmlFor="pop-layout-switch">Pop Layout</label>
        <Switch
          id="pop-layout-switch"
          checked={popLayout}
          onCheckedChange={setPopLayout}
        />
      </div>

      <Button
        onClick={() => setItems([...items, (items.at(-1) ?? 0) + 1])}
        className="mb-4"
      >
        Add Item
      </Button>

      <ul className="flex justify-center w-96 gap-4 flex-wrap">
        <AnimatePresence mode={popLayout ? "popLayout" : "sync"}>
          {items.map((id) => (
            <motion.li
              layout
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring" }}
              onClick={() => {
                const newItems = [...items];
                removeItem(newItems, id);
                setItems(newItems);
              }}
              className="size-16 bg-primary grid place-items-center cursor-pointer rounded"
              key={id}
            >
              {id}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};
