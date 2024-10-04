"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import styles from "./page.module.css";

export default function AnimatePresenceTaskPage() {
  const [isVisible, setVisible] = useState(false);

  return (
    <div className="container min-h-screen py-14">
      <Button onClick={() => setVisible((prevState) => !prevState)} className="mb-4">
        Toggle Message
      </Button>
      {isVisible && (
        <p
          className={`${isVisible ? styles.fadeIn : styles.fadeOut} transition animate-in duration-1000`}
        >
          Benzema is black
        </p>
      )}
    </div>
  );
}
