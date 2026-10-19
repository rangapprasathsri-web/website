import React from "react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Sample Collection",
      desc: "A water sample is collected in a clean container, and a controlled volume is prepared for testing.",
      icon: (
        <svg className="w-5 h-5 text-[#0F5C63] dark:text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M7 2h10" />
          <path d="M10 2v5.5a2.5 2.5 0 0 1-.5 1.5l-4.5 7A2 2 0 0 0 7 19h10a2 2 0 0 0 1.9-2.9l-4.4-7a2.5 2.5 0 0 1-.5-1.5V2" />
          <path d="M6 14h12" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Colorimetric Reaction",
      desc: "The sample contacts the proposed TMB-treated strip. Free residual chlorine may produce a colour change under suitable, validated reaction conditions.",
      icon: (
        <svg className="w-5 h-5 text-[#0F5C63] dark:text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m14 2 4 4-8.5 8.5a3.5 3.5 0 0 0 5 5L22 12" />
          <path d="M3 21h18" />
          <path d="m5 16 3-3" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Optical Detection",
      desc: "A TCS34725 RGB/clear colour sensor reads the strip under controlled white LED illumination.",
      icon: (
        <svg className="w-5 h-5 text-[#0F5C63] dark:text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="3" />
          <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
          <line x1="12" y1="2" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="22" />
        </svg>
      ),
    },
    {
      num: "04",
      title: "Data Processing",
      desc: "An ESP32 processes the readings through normalisation, blank correction, colour-difference calculation and calibration mapping.",
      icon: (
        <svg className="w-5 h-5 text-[#0F5C63] dark:text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="16" height="16" x="4" y="4" rx="2" />
          <rect width="6" height="6" x="9" y="9" rx="1" />
          <path d="M15 2v2" />
          <path d="M15 20v2" />
          <path d="M2 15h2" />
          <path d="M2 9h2" />
          <path d="M20 15h2" />
          <path d="M20 9h2" />
          <path d="M9 2v2" />
          <path d="M9 20v2" />
        </svg>
      ),
    },
    {
      num: "05",
      title: "Result Display",
      desc: "The OLED is designed to display the estimated FRC concentration in mg/L when calibration and quality checks support a valid result.",
      icon: (
        <svg className="w-5 h-5 text-[#0F5C63] dark:text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
  ];

  const features = [
    {
      title: "Strip-based testing",
      desc: "Explores a simple paper-strip format for preliminary FRC measurement.",
      icon: (
        <svg className="w-5 h-5 text-[#0F5C63] dark:text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="8" y1="13" x2="16" y2="13" />
          <line x1="8" y1="17" x2="12" y2="17" />
        </svg>
      ),
    },
    {
      title: "Electronic colour reading",
      desc: "Uses controlled illumination and RGB/clear-channel sensing to reduce reliance on unaided visual interpretation.",
      icon: (
        <svg className="w-5 h-5 text-[#0F5C63] dark:text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      ),
    },
    {
      title: "Embedded processing",
      desc: "Uses an ESP32 for signal processing, calibration logic and output control.",
      icon: (
        <svg className="w-5 h-5 text-[#0F5C63] dark:text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M7 7h.01" />
          <path d="M17 7h.01" />
          <path d="M7 17h.01" />
          <path d="M17 17h.01" />
          <path d="M12 7v10" />
          <path d="M7 12h10" />
        </svg>
      ),
    },
    {
      title: "Quality-gated results",
      desc: "Designed to flag invalid readings or request retesting when the required quality checks fail.",
      icon: (
        <svg className="w-5 h-5 text-[#0F5C63] dark:text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="py-18 md:py-28 bg-[#EEF4F3] dark:bg-[#091C26] border-b border-[#0E2230]/6 dark:border-white/6"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#0F5C63] dark:text-teal-400">
            WORKFLOW ARCHITECTURE
          </span>
          <h2
            id="how-it-works-heading"
            className="font-heading text-3xl sm:text-4xl font-bold text-[#0E2230] dark:text-white tracking-[-0.025em]"
          >
            How It Works
          </h2>
          <p className="text-[#3C4F5C] dark:text-slate-300 text-base">
            From physical chemical reaction on a paper substrate to digitized sensor quantification.
          </p>
        </div>

        {/* 5-Step Stepper with Signature Gradient Badges & 18px Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((step, index) => (
            <div
              key={step.num}
              className="editorial-card editorial-card-hover p-5 sm:p-6 flex flex-col justify-between relative"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  {/* Step number badge using signature gradient #5A4BD1 to #9A86F2 */}
                  <span className="font-mono text-xs font-bold text-white px-2.5 py-1 rounded-full bg-linear-to-r from-[#5A4BD1] to-[#9A86F2] shadow-xs">
                    {step.num}
                  </span>
                  <div className="p-2 rounded-full bg-[#EEF4F3] dark:bg-[#0E2230] text-[#0F5C63] dark:text-teal-400">
                    {step.icon}
                  </div>
                </div>
                <h3 className="font-heading text-base font-bold text-[#0E2230] dark:text-white tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs text-[#3C4F5C] dark:text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Step indicator arrow for desktop */}
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#0E2230]/20 dark:text-white/20 pointer-events-none"
                  aria-hidden="true"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Conceptual System Diagram: 18px Card */}
        <div className="editorial-card p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-[#0E2230]/6 dark:border-white/8 pb-4">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#0E2230] dark:text-slate-300">
              SYSTEM HARDWARE PIPELINE
            </span>
            <span className="text-xs font-mono text-[#B7791F] dark:text-[#f3c270] bg-[#FBF1DC] dark:bg-[#2a2214] px-3 py-1 rounded-full border border-[#B7791F]/30">
              Conceptual system diagram
            </span>
          </div>

          <div className="w-full overflow-x-auto py-4">
            <svg
              viewBox="0 0 780 180"
              className="w-full min-w-[700px] h-auto text-[#0E2230] dark:text-slate-100"
              role="img"
              aria-label="Conceptual system diagram showing: Strip connecting to White LED and TCS34725 Optical Sensor, feeding into ESP32 Microcontroller, outputting to I2C OLED Display"
            >
              {/* Block 1: Strip */}
              <g transform="translate(10, 30)">
                <rect x="0" y="0" width="130" height="90" rx="14" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" />
                <rect x="25" y="60" width="80" height="15" rx="4" fill="#cbd5e1" />
                <rect x="55" y="60" width="25" height="15" rx="3" fill="#9A86F2" />
                <text x="65" y="28" textAnchor="middle" fontSize="12" fontFamily="Fraunces" fontWeight="bold" fill="#0E2230">
                  Test Strip
                </text>
                <text x="65" y="44" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fill="#3C4F5C">
                  TMB Chemistry
                </text>
              </g>

              {/* Arrow 1 */}
              <g transform="translate(145, 75)">
                <line x1="0" y1="0" x2="35" y2="0" stroke="#0F5C63" strokeWidth="2" strokeDasharray="3 3" />
                <polygon points="35,-4 43,0 35,4" fill="#0F5C63" />
                <text x="20" y="-8" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono" fill="#0F5C63" fontWeight="bold">
                  Sample
                </text>
              </g>

              {/* Block 2: Optical Unit (White LED + TCS34725) */}
              <g transform="translate(195, 20)">
                <rect x="0" y="0" width="170" height="110" rx="14" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" />
                <rect x="12" y="32" width="65" height="30" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
                <circle cx="28" cy="47" r="5" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
                <text x="50" y="50" textAnchor="middle" fontSize="9" fontFamily="Manrope" fontWeight="bold" fill="#0E2230">
                  White LED
                </text>

                <rect x="88" y="32" width="70" height="30" rx="8" fill="#0E2230" />
                <text x="123" y="50" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold" fill="#9A86F2">
                  TCS34725
                </text>
                <text x="85" y="22" textAnchor="middle" fontSize="11" fontFamily="Fraunces" fontWeight="bold" fill="#0E2230">
                  Optical Chamber
                </text>
                <text x="85" y="85" textAnchor="middle" fontSize="9.5" fontFamily="JetBrains Mono" fill="#3C4F5C">
                  RGB + Clear Channel
                </text>
              </g>

              {/* Arrow 2 */}
              <g transform="translate(370, 75)">
                <line x1="0" y1="0" x2="35" y2="0" stroke="#5A4BD1" strokeWidth="2" />
                <polygon points="35,-4 43,0 35,4" fill="#5A4BD1" />
                <text x="20" y="-8" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono" fill="#5A4BD1" fontWeight="bold">
                  I²C Raw
                </text>
              </g>

              {/* Block 3: ESP32 */}
              <g transform="translate(420, 20)">
                <rect x="0" y="0" width="165" height="110" rx="14" fill="#0E2230" stroke="#1e3a4e" strokeWidth="1.2" />
                <rect x="15" y="30" width="135" height="42" rx="8" fill="#172b38" />
                <text x="82" y="22" textAnchor="middle" fontSize="12" fontFamily="Fraunces" fontWeight="bold" fill="#9A86F2">
                  ESP32 DevKit
                </text>
                <text x="82" y="47" textAnchor="middle" fontSize="9.5" fontFamily="JetBrains Mono" fill="#cbd5e1">
                  Blank Correction
                </text>
                <text x="82" y="62" textAnchor="middle" fontSize="9.5" fontFamily="JetBrains Mono" fill="#cbd5e1">
                  Calibration Mapping
                </text>
                <text x="82" y="95" textAnchor="middle" fontSize="9.5" fontFamily="JetBrains Mono" fill="#C8D96A">
                  Quality Gate Logic
                </text>
              </g>

              {/* Arrow 3 */}
              <g transform="translate(590, 75)">
                <line x1="0" y1="0" x2="35" y2="0" stroke="#0F5C63" strokeWidth="2" />
                <polygon points="35,-4 43,0 35,4" fill="#0F5C63" />
                <text x="20" y="-8" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono" fill="#0F5C63" fontWeight="bold">
                  I²C Bus
                </text>
              </g>

              {/* Block 4: OLED Display */}
              <g transform="translate(640, 25)">
                <rect x="0" y="0" width="130" height="100" rx="14" fill="#07131D" stroke="#1e3a4e" strokeWidth="1.5" />
                <rect x="10" y="12" width="110" height="76" rx="8" fill="#0c1b26" stroke="#0F5C63" strokeWidth="1" />
                <text x="65" y="32" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fill="#9A86F2">
                  I²C OLED
                </text>
                <text x="65" y="54" textAnchor="middle" fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold" fill="#ffffff">
                  EST. FRC
                </text>
                <text x="65" y="72" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono" fill="#C8D96A">
                  mg/L Display
                </text>
              </g>
            </svg>
          </div>
          <p className="text-center text-xs font-mono text-[#3C4F5C] dark:text-slate-400">
            Conceptual system diagram
          </p>
        </div>

        {/* Key Features Section: 4 Editorial 18px Cards */}
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0E2230] dark:text-white tracking-tight">
              Key Features
            </h3>
            <p className="text-xs sm:text-sm text-[#3C4F5C] dark:text-slate-400">
              Core design attributes engineered for low-cost screening and field practicality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feat) => (
              <div
                key={feat.title}
                className="editorial-card editorial-card-hover p-6 space-y-3"
              >
                <div className="w-10 h-10 rounded-full bg-[#EEF4F3] dark:bg-[#0E2230] text-[#0F5C63] dark:text-teal-400 flex items-center justify-center">
                  {feat.icon}
                </div>
                <h4 className="font-heading text-base font-bold text-[#0E2230] dark:text-white">
                  {feat.title}
                </h4>
                <p className="text-xs text-[#3C4F5C] dark:text-slate-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
