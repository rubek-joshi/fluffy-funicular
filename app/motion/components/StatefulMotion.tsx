"use client";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";
import { useState } from "react";

export const StatefulMotion = () => {
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [radius, setRadius] = useState(0);

  return (
    <div className="flex gap-16 rounded-md border border-primary h-56 p-8">
      <div className="flex gap-14 h-full">
        <p className="whitespace-nowrap">Stateful motion:</p>
        <div className="h-full grid place-items-center">
          <motion.div
            initial={{ scale }}
            animate={{
              scale,
              rotate,
              borderRadius: `${radius}%`,
            }}
            transition={{
              easings: ["anticipate"],
              duration: 1,
            }}
            className="bg-primary size-24"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 w-full max-w-64">
        <div className="flex gap-4">
          <label htmlFor="scale">Scale:</label>
          <Slider
            id="scale"
            value={[scale]}
            onValueChange={(value) => setScale(value[0])}
            max={2}
            step={0.1}
            className="w-full"
          />
        </div>

        <div className="flex gap-4">
          <label htmlFor="rotate">Rotate:</label>
          <Slider
            id="rotate"
            value={[rotate]}
            onValueChange={(value) => setRotate(value[0])}
            max={360}
            step={1}
            className="w-full"
          />
        </div>

        <div className="flex gap-4">
          <label htmlFor="radius">Radius:</label>
          <Slider
            id="radius"
            value={[radius]}
            onValueChange={(value) => setRadius(value[0])}
            max={50}
            step={1}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};
