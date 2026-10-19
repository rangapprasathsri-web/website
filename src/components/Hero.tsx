import React from "react";
import { ArrowDown, Mail, Cpu } from "lucide-react";
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
      className="relative pt-12 pb-18 md:pt-20 md:pb-28 overflow-hidden bg-[#FBFAF6] dark:bg-[#07131D]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Copy & Pill CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Hackathon Badge: Amber #B7791F on #FBF1DC pill */}
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#FBF1DC] dark:bg-[#2a2214] border border-[#B7791F]/30 text-xs font-mono font-semibold text-[#B7791F] dark:text-[#f3c270]">
              <span>{SITE_CONFIG.badge}</span>
            </div>

            {/* Eyebrow in JetBrains Mono */}
            <div className="text-xs sm:text-sm font-bold tracking-widest text-[#0F5C63] dark:text-teal-400 uppercase font-mono">
              {SITE_CONFIG.eyebrow}
            </div>

            {/* H1 Headline with Fraunces 700, tight letter-spacing, and signature gradient italic accent word */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-[#0E2230] dark:text-white leading-[1.12]">
              Detect.{" "}
              <span className="bg-linear-to-r from-[#5A4BD1] to-[#9A86F2] bg-clip-text text-transparent italic font-serif">
                Quantify.
              </span>{" "}
              Protect.
            </h1>

            {/* Subheadline in Manrope */}
            <p className="text-base sm:text-lg text-[#3C4F5C] dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              {SITE_CONFIG.subheadline}
            </p>

            {/* Chips rendered as clean unboxed text with subtle separators */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs sm:text-sm font-medium text-[#3C4F5C] dark:text-slate-300">
              {SITE_CONFIG.chips.map((chip, index) => (
                <React.Fragment key={chip}>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white dark:bg-[#0E2230] border border-[#0E2230]/8 dark:border-white/10 shadow-2xs">
                    {chip}
                  </span>
                  {index < SITE_CONFIG.chips.length - 1 && (
                    <span className="text-[#0E2230]/30 dark:text-white/30 select-none" aria-hidden="true">
                      •
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Pill CTAs with subtle hover lift */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => scrollToSection("how-it-works")}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#0F5C63] hover:bg-[#0c4a4f] rounded-full shadow-xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0F5C63]"
              >
                <span>See how it works</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#0E2230] dark:text-slate-100 bg-white dark:bg-[#0E2230] hover:bg-[#EEF4F3] dark:hover:bg-slate-800 border border-[#0E2230]/10 dark:border-white/10 rounded-full shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0F5C63]"
              >
                <Mail className="w-4 h-4 text-[#0F5C63] dark:text-teal-400" />
                <span>Get in touch</span>
              </button>
            </div>
          </div>

          {/* Right Column: 18px Rounded Card with Soft Layered Shadow & Signature Gradient Animation */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md editorial-card p-6 sm:p-7 relative overflow-hidden">
              {/* Header Label in JetBrains Mono */}
              <div className="flex items-center justify-between pb-4 border-b border-[#0E2230]/6 dark:border-white/8 text-xs font-mono text-[#3C4F5C] dark:text-slate-400">
                <span className="font-semibold text-[#0E2230] dark:text-slate-200 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#0F5C63] dark:text-teal-400" />
                  OPTICAL SENSING CELL
                </span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#EEF4F3] dark:bg-slate-800 text-[#0F5C63] dark:text-teal-300 font-semibold">
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
                      <stop offset="35%" stopColor="#fef08a" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#9a86f2" stopOpacity="0.04" />
                    </linearGradient>

                    {/* Sensor Field of View */}
                    <linearGradient id="sensorFov" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#5a4bd1" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#9a86f2" stopOpacity="0.04" />
                    </linearGradient>

                    {/* Signature Droplet Gradient */}
                    <linearGradient id="dropletGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#9A86F2" />
                      <stop offset="100%" stopColor="#5A4BD1" />
                    </linearGradient>
                  </defs>

                  {/* Optical Enclosure Housing Reference (Subtle Dashed Hairline) */}
                  <rect
                    x="20"
                    y="15"
                    width="280"
                    height="250"
                    rx="16"
                    fill="none"
                    stroke="#0E2230"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    strokeOpacity="0.15"
                  />

                  {/* Top Optical Unit: White LED Module & TCS34725 Sensor */}
                  {/* White LED Emitter */}
                  <g transform="translate(100, 25)">
                    <rect x="0" y="0" width="34" height="18" rx="4" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
                    <circle cx="17" cy="18" r="4.5" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
                    <text x="17" y="-5" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono" fill="#3C4F5C">
                      WHITE LED
                    </text>
                  </g>

                  {/* TCS34725 Color Sensor Header */}
                  <g transform="translate(170, 25)">
                    <rect x="0" y="0" width="50" height="18" rx="4" fill="#0E2230" stroke="#1e3a4e" strokeWidth="1" />
                    <rect x="18" y="14" width="14" height="6" rx="2" fill="#5A4BD1" />
                    <text x="25" y="-5" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono" fill="#5A4BD1" fontWeight="bold">
                      TCS34725
                    </text>
                  </g>

                  {/* Light Beams */}
                  <polygon points="117,45 70,175 160,175" fill="url(#ledBeam)" />
                  <polygon points="195,45 140,175 230,175" fill="url(#sensorFov)" />

                  {/* Water Droplet (Animated with Signature Gradient) */}
                  <g className="animate-droplet">
                    <path
                      d="M160 50 C160 50 154 62 154 67 C154 70.3 156.7 73 160 73 C163.3 73 166 70.3 166 67 C166 62 160 50 160 50 Z"
                      fill="url(#dropletGradient)"
                      stroke="#5A4BD1"
                      strokeWidth="1"
                    />
                    <circle cx="158.5" cy="65" r="1.5" fill="#ffffff" opacity="0.8" />
                  </g>

                  {/* Concentric Reaction Ripple (Animated with Signature Purple) */}
                  <circle
                    cx="160"
                    cy="185"
                    r="0"
                    fill="none"
                    stroke="#9A86F2"
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
                      rx="4"
                      fill="#ffffff"
                      stroke="#dbe4ea"
                      strokeWidth="1.2"
                    />

                    {/* Strip Millimeter Graduations */}
                    <line x1="20" y1="0" x2="20" y2="6" stroke="#94a3b8" strokeWidth="0.8" />
                    <line x1="40" y1="0" x2="40" y2="6" stroke="#94a3b8" strokeWidth="0.8" />
                    <line x1="60" y1="0" x2="60" y2="6" stroke="#94a3b8" strokeWidth="0.8" />
                    <line x1="80" y1="0" x2="80" y2="6" stroke="#94a3b8" strokeWidth="0.8" />
                    <line x1="180" y1="0" x2="180" y2="6" stroke="#94a3b8" strokeWidth="0.8" />
                    <line x1="200" y1="0" x2="200" y2="6" stroke="#94a3b8" strokeWidth="0.8" />

                    {/* TMB Reagent Reaction Pad (Animated signature gradient shift from clear to #5A4BD1) */}
                    <rect
                      x="95"
                      y="2"
                      width="40"
                      height="16"
                      rx="3"
                      className="animate-strip-reaction"
                      strokeWidth="1.2"
                    />

                    {/* Pad Reflection Highlight */}
                    <line x1="97" y1="4" x2="133" y2="4" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.5" />
                  </g>

                  {/* Technical Sensor Beam Annotations */}
                  <path d="M117 48 L150 176" stroke="#C8D96A" strokeWidth="1.2" strokeDasharray="2 2" strokeOpacity="0.8" />
                  <path d="M165 176 L195 48" stroke="#9A86F2" strokeWidth="1.2" strokeDasharray="2 2" strokeOpacity="0.8" />

                  {/* Microcontroller I2C Data Stream (ESP32 connection line) */}
                  <g transform="translate(160, 225)">
                    <rect x="-70" y="0" width="140" height="24" rx="12" fill="#0E2230" />
                    <text
                      x="0"
                      y="15"
                      textAnchor="middle"
                      fontSize="10"
                      fontFamily="JetBrains Mono"
                      fill="#9A86F2"
                      fontWeight="bold"
                    >
                      ESP32 I²C BUS
                    </text>
                  </g>
                  <path d="M195 43 L265 43 L265 237 L230 237" fill="none" stroke="#0E2230" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="3 3" />
                </svg>
              </div>

              {/* Illustrative Label (Section 2, Rule 7) in Amber #B7791F on #FBF1DC pill */}
              <div className="pt-3 border-t border-[#0E2230]/6 dark:border-white/8 text-center">
                <span className="inline-block text-[11px] font-mono font-medium text-[#B7791F] dark:text-[#f3c270] bg-[#FBF1DC] dark:bg-[#2a2214] px-3 py-1 rounded-full border border-[#B7791F]/30">
                  {SITE_CONFIG.illustrativeLabel}
                </span>
                <p className="text-[11px] text-[#3C4F5C] dark:text-slate-400 mt-2">
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
