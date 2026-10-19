import React from "react";
import { SITE_CONFIG } from "../config/siteConfig";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0E2230] text-slate-300 py-14 px-4 sm:px-6 lg:px-8 border-t border-white/8">
      <div className="max-w-6xl mx-auto space-y-6 text-center">
        {/* Project Branding & Attribution Line */}
        <div className="font-heading text-sm sm:text-base font-semibold text-white tracking-tight">
          ChloroQuant — Detect. Quantify. Protect. | Team AQUANEX 007 · Rathinam Technical Campus, Coimbatore | Smart India Hackathon 2026
        </div>

        {/* Mandatory Dual Disclaimer Line (Section 2, Rule 5) */}
        <div className="max-w-3xl mx-auto p-4 sm:p-5 rounded-[14px] bg-[#07131D] border border-[#B7791F]/30 text-xs sm:text-sm text-[#FBF1DC] leading-relaxed">
          <p>
            {SITE_CONFIG.disclaimer}
          </p>
        </div>

        {/* Secondary Navigation & Metadata in JetBrains Mono */}
        <div className="pt-4 border-t border-white/8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
          <span>Conceptual Prototype for Smart India Hackathon 2026</span>
          <span aria-hidden="true">•</span>
          <span>
            Contact:{" "}
            <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-teal-300 hover:underline">
              {SITE_CONFIG.contact.email}
            </a>
          </span>
          <span aria-hidden="true">•</span>
          <span>Pending Laboratory Validation</span>
        </div>
      </div>
    </footer>
  );
};
