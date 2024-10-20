"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import styles from "./page.module.css";

export default function AnimatePresenceTaskPage() {
  const [isVisible, setVisible] = useState(false);

  return (
    <div className="container min-h-screen py-14 grid place-items-center">
      <div className="h-96 flex flex-col items-center">
        <Button
          onClick={() => setVisible((prevState) => !prevState)}
          className="mb-8"
        >
          Toggle Message
        </Button>

        {isVisible && (
          <p
            className={`text-5xl leading-snug text-center ${
              isVisible ? styles.fadeIn : styles.fadeOut
            } transition animate-in duration-1000`}
          >
            5 hours of debugging can save <br />5 minutes of reading
            documentation.
          </p>
        )}
      </div>
    </div>
  );
}
