import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ["home", "about", "problem", "how-it-works", "technology", "validation", "applications", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(id === "problem" ? "about" : id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 border-b ${
        scrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-slate-200 dark:border-slate-800 shadow-xs"
          : "bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-slate-100 dark:border-slate-800/80"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-600 rounded-md"
        >
          <span className="w-8 h-8 rounded-lg bg-teal-800 flex items-center justify-center text-white shadow-xs">
            <svg
              className="w-4 h-4 text-cyan-300"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
          </span>
          <span className="font-extrabold tracking-tight text-teal-950 dark:text-slate-100">
            {SITE_CONFIG.brand}
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300"
        >
          {SITE_CONFIG.navLinks.map((link) => {
            const linkId = link.href.replace("#", "");
            const isActive = activeSection === linkId;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`whitespace-nowrap transition-colors py-1 relative ${
                  isActive
                    ? "text-teal-700 dark:text-teal-400 font-semibold"
                    : "hover:text-slate-900 dark:hover:text-white"
                } focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-600 rounded-sm`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600 dark:bg-teal-400 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Dark Mode Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-600"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 dark:bg-teal-700 dark:hover:bg-teal-600 rounded-lg transition-colors whitespace-nowrap shadow-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
          >
            Get in touch
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-600"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top duration-150">
          {SITE_CONFIG.navLinks.map((link) => {
            const linkId = link.href.replace("#", "");
            const isActive = activeSection === linkId;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? "bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="block w-full text-center px-4 py-2.5 text-sm font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg transition-colors shadow-xs"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
