import React from "react";
import { AlertTriangle } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

export const ApplicationsSection: React.FC = () => {
  const applicationIcons = [
    <svg key="1" className="w-5 h-5 text-[#0F5C63] dark:text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>,
    <svg key="2" className="w-5 h-5 text-[#0F5C63] dark:text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" y1="3" x2="9" y2="18" />
      <line x1="15" y1="6" x2="15" y2="21" />
    </svg>,
    <svg key="3" className="w-5 h-5 text-[#0F5C63] dark:text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>,
    <svg key="4" className="w-5 h-5 text-[#0F5C63] dark:text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="m4.93 4.93 4.24 4.24" />
      <path d="m14.83 9.17 4.24-4.24" />
      <path d="m14.83 14.83 4.24 4.24" />
      <path d="m9.17 14.83-4.24 4.24" />
    </svg>,
  ];

  return (
    <div className="border-b border-[#0E2230]/6 dark:border-white/6">
      {/* Applications Section - Alt Section Background #EEF4F3 */}
      <section
        id="applications"
        aria-labelledby="applications-heading"
        className="py-18 md:py-24 bg-[#EEF4F3] dark:bg-[#091C26]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#0F5C63] dark:text-teal-400">
              EXPLORATORY USE CASES
            </span>
            <h2
              id="applications-heading"
              className="font-heading text-3xl sm:text-4xl font-bold text-[#0E2230] dark:text-white tracking-[-0.025em]"
            >
              Applications
            </h2>
            <p className="text-[#3C4F5C] dark:text-slate-300 text-base">
              Identified screening and research environments for low-cost FRC evaluation.
            </p>
          </div>

          {/* Applications Grid: 18px Editorial Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SITE_CONFIG.applications.map((appText, i) => (
              <div
                key={appText}
                className="editorial-card editorial-card-hover p-6 space-y-3.5"
              >
                <div className="w-10 h-10 rounded-full bg-[#EEF4F3] dark:bg-[#0E2230] text-[#0F5C63] dark:text-teal-400 flex items-center justify-center">
                  {applicationIcons[i]}
                </div>
                <p className="text-sm font-semibold text-[#0E2230] dark:text-slate-100 leading-snug">
                  {appText}
                </p>
              </div>
            ))}
          </div>

          {/* Prominent Callout (Mandatory Disclaimer 1, Section 2 Rule 5) in Amber #B7791F on #FBF1DC Container */}
          <div className="rounded-[18px] border border-[#B7791F]/40 bg-[#FBF1DC] dark:bg-[#2a2214]/90 p-6 sm:p-7 shadow-xs">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-full bg-[#B7791F]/15 dark:bg-[#B7791F]/30 text-[#B7791F] dark:text-[#f3c270] shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B7791F] dark:text-[#f3c270]">
                  CRITICAL SCREENING NOTICE
                </span>
                <p className="text-sm sm:text-base font-medium text-[#0E2230] dark:text-slate-100 leading-relaxed">
                  <strong className="text-[#B7791F] dark:text-[#f3c270]">Important:</strong> {SITE_CONFIG.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Project Section - Main Section Background #FBFAF6 */}
      <section
        id="about-project"
        aria-labelledby="about-project-heading"
        className="py-18 md:py-24 bg-[#FBFAF6] dark:bg-[#07131D] border-t border-[#0E2230]/6 dark:border-white/6"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#0F5C63] dark:text-teal-400">
                HACKATHON INITIATIVE
              </span>
              <h2
                id="about-project-heading"
                className="font-heading text-2xl sm:text-3xl font-bold text-[#0E2230] dark:text-white tracking-[-0.025em]"
              >
                Innovation Through Accessible Water Testing
              </h2>
              <div className="h-1 w-12 bg-[#0F5C63] dark:bg-teal-400 rounded-full" />
            </div>

            <div className="lg:col-span-7 space-y-4 text-[#3C4F5C] dark:text-slate-300 text-base leading-relaxed">
              <p>
                Developed as a Smart India Hackathon 2026 concept, ChloroQuant explores how paper-based colorimetric chemistry and compact electronics can be combined to make FRC testing more accessible.
              </p>
              <p>
                Our approach focuses on practical engineering, transparent performance claims and experimental validation before deployment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
