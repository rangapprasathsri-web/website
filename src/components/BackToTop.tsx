import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      id="back-to-top"
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top of page"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-teal-800 hover:bg-teal-900 text-white shadow-lg transition-transform hover:scale-105 active:scale-95 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
