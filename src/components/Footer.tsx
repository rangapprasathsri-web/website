import React from "react";
import { SITE_CONFIG } from "../config/siteConfig";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto space-y-6 text-center">
        {/* Project Branding & Attribution Line */}
        <div className="text-sm font-medium text-slate-200 tracking-tight">
          ChloroQuant — Detect. Quantify. Protect. | Team AQUANEX 007 · Rathinam Technical Campus, Coimbatore | Smart India Hackathon 2026
        </div>

        {/* Mandatory Dual Disclaimer Line (Section 2, Rule 5) */}
        <div className="max-w-3xl mx-auto p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-amber-200/90 leading-relaxed">
          <p>
            {SITE_CONFIG.disclaimer}
          </p>
        </div>

        {/* Secondary Navigation & Metadata */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
          <span>Conceptual Prototype for Smart India Hackathon 2026</span>
          <span aria-hidden="true">•</span>
          <span>Contact: <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-teal-400 hover:underline">{SITE_CONFIG.contact.email}</a></span>
          <span aria-hidden="true">•</span>
          <span>Pending Laboratory Validation</span>
        </div>
      </div>
    </footer>
  );
};
