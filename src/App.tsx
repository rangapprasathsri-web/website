import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutProblem } from "./components/AboutProblem";
import { HowItWorks } from "./components/HowItWorks";
import { IllustrativeSlider } from "./components/IllustrativeSlider";
import { TechnologyStack } from "./components/TechnologyStack";
import { ValidationSection } from "./components/ValidationSection";
import { ApplicationsSection } from "./components/ApplicationsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("chloroquant_theme");
      if (saved) return saved === "dark";
      // Default is light mode
      return false;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("chloroquant_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("chloroquant_theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFAF6] dark:bg-[#07131D] text-[#3C4F5C] dark:text-slate-200 selection:bg-[#5A4BD1]/15 selection:text-[#5A4BD1] dark:selection:text-[#9A86F2]">
      {/* Skip to Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0F5C63] focus:text-white focus:rounded-full focus:shadow-md"
      >
        Skip to main content
      </a>

      {/* Translucent Blurred Sticky Header */}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        <Hero />
        <AboutProblem />
        <HowItWorks />
        <IllustrativeSlider />
        <TechnologyStack />
        <ValidationSection />
        <ApplicationsSection />
        <ContactSection />
      </main>

      {/* Footer in #0E2230 */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}
