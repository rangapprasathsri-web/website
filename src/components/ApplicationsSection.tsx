import React from "react";
import { AlertTriangle, CheckCircle2, ShieldCheck, Microscope, GraduationCap, Compass } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

export const ApplicationsSection: React.FC = () => {
  const applicationIcons = [
    <svg key="1" className="w-5 h-5 text-teal-700 dark:text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>,
    <svg key="2" className="w-5 h-5 text-teal-700 dark:text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" y1="3" x2="9" y2="18" />
      <line x1="15" y1="6" x2="15" y2="21" />
    </svg>,
    <svg key="3" className="w-5 h-5 text-teal-700 dark:text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>,
    <svg key="4" className="w-5 h-5 text-teal-700 dark:text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="m4.93 4.93 4.24 4.24" />
      <path d="m14.83 9.17 4.24-4.24" />
      <path d="m14.83 14.83 4.24 4.24" />
      <path d="m9.17 14.83-4.24 4.24" />
    </svg>,
  ];

  return (
    <div className="border-b border-slate-200 dark:border-slate-800">
      {/* Applications Section */}
      <section
        id="applications"
        aria-labelledby="applications-heading"
        className="py-16 md:py-20 bg-white dark:bg-slate-900"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-teal-800 dark:text-teal-400">
              EXPLORATORY USE CASES
            </span>
            <h2
              id="applications-heading"
              className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight"
            >
              Applications
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base">
              Identified screening and research environments for low-cost FRC evaluation.
            </p>
          </div>

          {/* Applications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SITE_CONFIG.applications.map((appText, i) => (
              <div
                key={appText}
                className="bg-slate-50 dark:bg-slate-950/60 rounded-xl p-5 border border-slate-200 dark:border-slate-800 space-y-3 shadow-2xs hover:border-teal-500/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-50 dark:bg-teal-950/70 border border-teal-200/50 dark:border-teal-800/50 flex items-center justify-center">
                  {applicationIcons[i]}
                </div>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                  {appText}
                </p>
              </div>
            ))}
          </div>

          {/* Prominent Callout (Mandatory Disclaimer 1, Section 2 Rule 5) */}
          <div className="rounded-xl border-2 border-amber-300 dark:border-amber-700/80 bg-amber-50 dark:bg-amber-950/30 p-5 sm:p-6 shadow-xs">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300">
                  CRITICAL SCREENING NOTICE
                </span>
                <p className="text-sm sm:text-base font-semibold text-amber-950 dark:text-amber-100 leading-relaxed">
                  <strong>Important:</strong> {SITE_CONFIG.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Project Section */}
      <section
        id="about-project"
        aria-labelledby="about-project-heading"
        className="py-16 md:py-20 bg-slate-50 dark:bg-slate-950/70 border-t border-slate-200 dark:border-slate-800"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-teal-800 dark:text-teal-400">
                HACKATHON INITIATIVE
              </span>
              <h2
                id="about-project-heading"
                className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight"
              >
                Innovation Through Accessible Water Testing
              </h2>
              <div className="h-1 w-12 bg-teal-700 dark:bg-teal-500 rounded-full" />
            </div>

            <div className="lg:col-span-7 space-y-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
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
