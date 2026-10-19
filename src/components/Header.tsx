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
          ? "bg-[#FBFAF6]/90 dark:bg-[#0E2230]/90 backdrop-blur-md border-[#0E2230]/8 dark:border-white/10 shadow-xs"
          : "bg-[#FBFAF6]/75 dark:bg-[#0E2230]/75 backdrop-blur-sm border-[#0E2230]/5 dark:border-white/5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0F5C63] rounded-lg"
        >
          <span className="w-8 h-8 rounded-full bg-[#0F5C63] flex items-center justify-center text-white shadow-xs relative">
            <svg
              className="w-4 h-4 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
            {/* Tiny Lime Accent Highlight */}
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#C8D96A] border border-white dark:border-[#0E2230]" aria-hidden="true" />
          </span>
          <span className="font-heading text-xl font-bold tracking-tight text-[#0E2230] dark:text-white">
            {SITE_CONFIG.brand}
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-[#3C4F5C] dark:text-slate-300"
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
                    ? "text-[#0F5C63] dark:text-teal-300 font-semibold"
                    : "hover:text-[#0E2230] dark:hover:text-white"
                } focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0F5C63] rounded-sm`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0F5C63] dark:bg-teal-400 rounded-full" />
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
            className="p-2 rounded-full text-[#3C4F5C] dark:text-slate-300 hover:bg-[#EEF4F3] dark:hover:bg-slate-800 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0F5C63]"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Pill Button with Subtle Hover Lift */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold text-white bg-[#0F5C63] hover:bg-[#0c4a4f] rounded-full transition-all duration-200 whitespace-nowrap shadow-xs hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0F5C63] focus-visible:ring-offset-2"
          >
            Get in touch
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-full text-[#3C4F5C] dark:text-slate-300 hover:bg-[#EEF4F3] dark:hover:bg-slate-800 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0F5C63]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#0E2230]/8 dark:border-white/10 bg-[#FBFAF6] dark:bg-[#0E2230] px-4 pt-3 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top duration-150">
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
                className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? "bg-[#EEF4F3] dark:bg-slate-800 text-[#0F5C63] dark:text-teal-300 font-semibold"
                    : "text-[#3C4F5C] dark:text-slate-300 hover:bg-[#EEF4F3]/60 dark:hover:bg-slate-800/60"
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
              className="block w-full text-center px-4 py-2.5 text-sm font-semibold text-white bg-[#0F5C63] hover:bg-[#0c4a4f] rounded-full transition-all shadow-xs"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
