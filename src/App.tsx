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
      // Default is strictly light mode as per requirements
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
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-teal-500/20 selection:text-teal-900 dark:selection:text-teal-200">
      {/* Skip to Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-teal-800 focus:text-white focus:rounded-md focus:shadow-md"
      >
        Skip to main content
      </a>

      {/* Sticky Header with 3-Zone Contract and Dark Mode Toggle */}
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

      {/* Footer with Mandatory Dual Disclaimer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}
