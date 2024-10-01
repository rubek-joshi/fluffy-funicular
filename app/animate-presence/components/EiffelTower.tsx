"use client";
import { AnimatePresence, motion, AnimatePresenceProps } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import EiffelTowerImage from "../images/eiffel-tower.png";
import CloudyDaySky from "../images/cloudy-day-sky.jpg";
import LilacSky from "../images/lilac-sky.webp";
import { Button } from "@/components/ui/button";

type EiffelTowerProps = { mode: AnimatePresenceProps["mode"] };

export const EiffelTower = ({ mode }: EiffelTowerProps) => {
  const [isVisible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible((prev) => !prev);

  return (
    <div className="col-span-1">
      <h2 className="capitalize mb-2">Mode: {mode}</h2>
      <div className="w-64 h-[455.11px] border border-primary rounded-md overflow-hidden relative mb-4">
        <AnimatePresence mode={mode}>
          {isVisible ? (
            <motion.figure
              key="lilac"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Image
                src={LilacSky}
                alt="Lilac sky"
                className="absolute w-64 h-[455.11px] object-cover -z-10"
              />
            </motion.figure>
          ) : (
            <motion.figure
              key="cloudy-day"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Image
                src={CloudyDaySky}
                alt="Day sky with clouds"
                className="absolute w-64 h-[455.11px] object-cover -z-10"
              />
            </motion.figure>
          )}
        </AnimatePresence>

        <Image
          src={EiffelTowerImage}
          alt="Eiffel tower"
          className="absolute w-64 h-[455.11px] object-contain object-bottom z-10"
        />
      </div>

      <Button onClick={toggleVisibility} className="w-64">
        Toggle
      </Button>
    </div>
  );
};
