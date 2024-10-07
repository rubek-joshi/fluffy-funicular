"use client";
import { Button } from "@/components/ui/button";

export const ScrollToTop = () => {
  const handleScrollToTop = () => {
    const scrollStep = -window.scrollY / 75; // Adjust 50 for a slower/faster scroll
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15); // 15ms interval for smooth animation
  };

  return <Button onClick={handleScrollToTop}>Back to top</Button>;
};
