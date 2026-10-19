import React from "react";
import { ArrowDown, Mail, Cpu, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      aria-label="Hero Overview"
      className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-linear-to-b from-teal-50/40 via-white to-slate-50 dark:from-slate-900/60 dark:via-slate-950 dark:to-slate-950"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Hackathon Badge */}
            <div className="inline-flex items-center px-3 py-1.5 rounded-md bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/60 text-xs font-medium text-amber-900 dark:text-amber-300">
              <span>{SITE_CONFIG.badge}</span>
            </div>

            {/* Eyebrow */}
            <div className="text-xs sm:text-sm font-bold tracking-widest text-teal-800 dark:text-teal-400 uppercase font-mono">
              {SITE_CONFIG.eyebrow}
            </div>

            {/* H1 Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white text-balance leading-tight">
              {SITE_CONFIG.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {SITE_CONFIG.subheadline}
            </p>

            {/* Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
              {SITE_CONFIG.chips.map((chip, index) => (
                <React.Fragment key={chip}>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs">
                    {chip}
                  </span>
                  {index < SITE_CONFIG.chips.length - 1 && (
                    <span className="text-slate-400 dark:text-slate-600 select-none" aria-hidden="true">
                      •
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => scrollToSection("how-it-works")}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-teal-800 hover:bg-teal-900 dark:bg-teal-700 dark:hover:bg-teal-600 rounded-lg shadow-sm transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-600"
              >
                <span>See how it works</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-lg shadow-2xs transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-600"
              >
                <Mail className="w-4 h-4" />
                <span>Get in touch</span>
              </button>
            </div>
          </div>

          {/* Right Column: Pure CSS/SVG Animated Test Strip Visual */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm relative overflow-hidden">
              {/* Header Label */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 text-xs font-mono text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                  OPTICAL SENSING CELL
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  ESP32 + TCS34725
                </span>
              </div>

              {/* Animated SVG Simulation Canvas */}
              <div className="py-6 flex justify-center items-center">
                <svg
                  viewBox="0 0 320 280"
                  className="w-full h-auto max-w-[280px] sm:max-w-[320px]"
                  aria-label="Illustration of a paper test strip undergoing colorimetric oxidation from pale clear to blue-violet upon water sample contact"
                  role="img"
                >
                  <defs>
                    {/* Controlled White LED Light Cone */}
                    <linearGradient id="ledBeam" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                      <stop offset="30%" stopColor="#fef08a" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.05" />
                    </linearGradient>

                    {/* Sensor Field of View */}
                    <linearGradient id="sensorFov" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#0284c7" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#0284c7" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>

                  {/* Optical Enclosure Housing Reference (Subtle Dashed) */}
                  <rect
                    x="20"
                    y="15"
                    width="280"
                    height="250"
                    rx="12"
                    fill="none"
                    stroke="#94a3b8"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    strokeOpacity="0.4"
                  />

                  {/* Top Optical Unit: White LED Module & TCS34725 Sensor */}
                  {/* White LED Emitter */}
                  <g transform="translate(100, 25)">
                    <rect x="0" y="0" width="34" height="18" rx="3" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
                    <circle cx="17" cy="18" r="4.5" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
                    <text x="17" y="-5" textAnchor="middle" fontSize="9" fontFamily="monospace" fill="#64748b">
                      WHITE LED
                    </text>
                  </g>

                  {/* TCS34725 Color Sensor Header */}
                  <g transform="translate(170, 25)">
                    <rect x="0" y="0" width="50" height="18" rx="3" fill="#0f172a" stroke="#334155" strokeWidth="1" />
                    <rect x="18" y="14" width="14" height="6" rx="1.5" fill="#0284c7" />
                    <text x="25" y="-5" textAnchor="middle" fontSize="9" fontFamily="monospace" fill="#0284c7">
                      TCS34725
                    </text>
                  </g>

                  {/* Light Beams */}
                  <polygon points="117,45 70,175 160,175" fill="url(#ledBeam)" />
                  <polygon points="195,45 140,175 230,175" fill="url(#sensorFov)" />

                  {/* Water Droplet (Animated) */}
                  <g className="animate-droplet">
                    <path
                      d="M160 50 C160 50 154 62 154 67 C154 70.3 156.7 73 160 73 C163.3 73 166 70.3 166 67 C166 62 160 50 160 50 Z"
                      fill="#38bdf8"
                      stroke="#0284c7"
                      strokeWidth="1"
                    />
                    <circle cx="158.5" cy="65" r="1.5" fill="#ffffff" opacity="0.7" />
                  </g>

                  {/* Concentric Reaction Ripple (Animated) */}
                  <circle
                    cx="160"
                    cy="185"
                    r="0"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="1.5"
                    className="animate-ripple"
                  />

                  {/* Test Strip Body (Paper Substrate) */}
                  <g transform="translate(45, 175)">
                    {/* Plastic / Paper Strip Carrier */}
                    <rect
                      x="0"
                      y="0"
                      width="230"
                      height="20"
                      rx="3"
                      fill="#f1f5f9"
                      stroke="#cbd5e1"
                      strokeWidth="1.2"
                    />

                    {/* Strip Millimeter Graduations */}
                    <line x1="20" y1="0" x2="20" y2="6" stroke="#94a3b8" strokeWidth="0.8" />
                    <line x1="40" y1="0" x2="40" y2="6" stroke="#94a3b8" strokeWidth="0.8" />
                    <line x1="60" y1="0" x2="60" y2="6" stroke="#94a3b8" strokeWidth="0.8" />
                    <line x1="80" y1="0" x2="80" y2="6" stroke="#94a3b8" strokeWidth="0.8" />
                    <line x1="180" y1="0" x2="180" y2="6" stroke="#94a3b8" strokeWidth="0.8" />
                    <line x1="200" y1="0" x2="200" y2="6" stroke="#94a3b8" strokeWidth="0.8" />

                    {/* TMB Reagent Reaction Pad (Animated color shift) */}
                    <rect
                      x="95"
                      y="2"
                      width="40"
                      height="16"
                      rx="2"
                      className="animate-strip-reaction"
                      strokeWidth="1.2"
                    />

                    {/* Pad Reflection Highlight */}
                    <line x1="97" y1="4" x2="133" y2="4" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.4" />
                  </g>

                  {/* Technical Sensor Beam Annotations */}
                  <path d="M117 48 L150 176" stroke="#eab308" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.6" />
                  <path d="M165 176 L195 48" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.6" />

                  {/* Microcontroller I2C Data Stream (ESP32 connection line) */}
                  <g transform="translate(160, 225)">
                    <rect x="-70" y="0" width="140" height="24" rx="4" fill="#0f172a" />
                    <text
                      x="0"
                      y="15"
                      textAnchor="middle"
                      fontSize="10"
                      fontFamily="monospace"
                      fill="#38bdf8"
                      fontWeight="bold"
                    >
                      ESP32 I²C BUS
                    </text>
                  </g>
                  <path d="M195 43 L265 43 L265 237 L230 237" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="3 3" />
                </svg>
              </div>

              {/* Mandatory Illustrative Label (Section 2, Rule 7) */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-center">
                <span className="inline-block text-[11px] font-mono text-amber-700 dark:text-amber-400 bg-amber-50/80 dark:bg-amber-950/40 px-2.5 py-1 rounded border border-amber-200/60 dark:border-amber-800/60">
                  {SITE_CONFIG.illustrativeLabel}
                </span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5">
                  Color shift illustrates proposed TMB reagent oxidation upon sample contact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
