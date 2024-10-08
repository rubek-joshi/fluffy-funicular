"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./LayoutDemo.module.css";

export const LayoutDemo = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className="flex items-center gap-4">
      <h1 className="text-2xl">Fancy a switch?</h1>
      <div className={styles.switch} data-isOn={isOn} onClick={toggleSwitch}>
        <motion.div
          className={styles.handle}
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          whileHover={{ scale: 1.2 }}
        />
      </div>
    </div>
  );
};
