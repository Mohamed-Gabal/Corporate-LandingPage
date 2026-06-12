"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show/Hide Button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll To Top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-4 animate-pulse">
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          className="bg-[#b69974] cursor-pointer text-white w-12 h-12 rounded-full flex items-center justify-center focus:outline-none"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};
export default ScrollToTop;
