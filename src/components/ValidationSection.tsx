import React from "react";
import { AlertCircle, Clock } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

export const ValidationSection: React.FC = () => {
  return (
    <section
      id="validation"
      aria-labelledby="validation-heading"
      className="py-18 md:py-28 bg-[#FBFAF6] dark:bg-[#07131D] border-b border-[#0E2230]/6 dark:border-white/6"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#B7791F] dark:text-[#f3c270]">
            TRANSPARENT SCIENTIFIC GOVERNANCE
          </span>
          <h2
            id="validation-heading"
            className="font-heading text-3xl sm:text-4xl font-bold text-[#0E2230] dark:text-white tracking-[-0.025em]"
          >
            Performance Targets and Validation
          </h2>
          <p className="text-[#3C4F5C] dark:text-slate-300 text-base">
            Clear distinction between proposed engineering objectives and experimental verification milestones.
          </p>
        </div>

        {/* Block A: "Design targets — pending validation" (distinct amber #B7791F on #FBF1DC style) */}
        <div className="rounded-[18px] border border-[#B7791F]/30 bg-[#FBF1DC]/40 dark:bg-[#2a2214]/40 p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#B7791F]/20 pb-4">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#B7791F] dark:text-[#f3c270] tracking-tight">
              Design targets — pending validation
            </h3>
            {/* Amber #B7791F on #FBF1DC Pill */}
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#FBF1DC] dark:bg-[#2a2214] text-[#B7791F] dark:text-[#f3c270] border border-[#B7791F]/40 shadow-2xs">
              <Clock className="w-3.5 h-3.5" />
              STATUS: PENDING EXPERIMENTAL PROTOCOL
            </span>
          </div>

          {/* Target Cards: 18px Editorial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Target 1 */}
            <div className="editorial-card p-6 space-y-2">
              <div className="text-xs font-mono font-semibold text-[#B7791F] dark:text-[#f3c270] uppercase">
                TARGET SENSITIVITY (DESIGN TARGET, PENDING VALIDATION)
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-bold font-mono text-[#0E2230] dark:text-white tabular-nums">
                  0.1
                </span>
                <span className="text-sm font-mono text-[#3C4F5C] dark:text-slate-400">
                  mg/L FRC
                </span>
              </div>
              <p className="text-xs text-[#3C4F5C] dark:text-slate-400">
                Design target for lower limit of colorimetric resolution, pending formal laboratory calibration.
              </p>
            </div>

            {/* Target 2 */}
            <div className="editorial-card p-6 space-y-2">
              <div className="text-xs font-mono font-semibold text-[#B7791F] dark:text-[#f3c270] uppercase">
                TARGET STRIP COST (DESIGN TARGET, PENDING VALIDATION)
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-bold text-[#0E2230] dark:text-white flex items-center gap-1.5">
                  <span>below</span>
                  <span className="inline-flex items-center">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 text-[#0E2230] dark:text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M6 3.5h12" />
                      <path d="M6 8.5h12" />
                      <path d="M6 13.5h3a4.5 4.5 0 0 0 0-9" />
                      <path d="M9 13.5l7 8" />
                    </svg>
                    <span className="sr-only">₹</span>
                    <span>2</span>
                  </span>
                </span>
                <span className="text-sm font-mono text-[#3C4F5C] dark:text-slate-400">
                  per test strip at scale
                </span>
              </div>
              <p className="text-xs text-[#3C4F5C] dark:text-slate-400">
                Proposed material and chemical deposition target for scaled batch production.
              </p>
            </div>
          </div>

          {/* Visible Note (Not Fine Print) */}
          <div className="flex items-start gap-3.5 p-4 sm:p-5 rounded-[14px] bg-[#FBF1DC] dark:bg-[#2a2214]/80 border border-[#B7791F]/30 text-[#0E2230] dark:text-slate-200">
            <AlertCircle className="w-5 h-5 shrink-0 text-[#B7791F] dark:text-[#f3c270] mt-0.5" />
            <p className="text-sm leading-relaxed">
              <strong className="text-[#B7791F] dark:text-[#f3c270]">Notice:</strong> These are proposed design goals, not demonstrated performance. The final detection limit, response time, strip cost and shelf life must be established through experiments.
            </p>
          </div>
        </div>

        {/* Block B: "Our Validation Plan" (Roadmap / checklist, ALL "Planned", NONE ticked) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#0E2230]/6 dark:border-white/8 pb-4">
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0E2230] dark:text-white tracking-tight">
                Our Validation Plan
              </h3>
              <p className="text-xs sm:text-sm text-[#3C4F5C] dark:text-slate-400">
                Rigorous experimental agenda prior to any field claims (All phases marked Planned).
              </p>
            </div>
            <span className="text-xs font-mono text-[#3C4F5C] dark:text-slate-400">
              0 / 6 Milestones Completed (None Ticked)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SITE_CONFIG.validationPlan.map((item, idx) => (
              <div
                key={item.id}
                className="editorial-card editorial-card-hover p-5 sm:p-6 flex items-start gap-3.5"
              >
                {/* Visual "Planned" checkbox (Unticked circle with dash/amber marker) */}
                <div
                  className="w-5 h-5 rounded-full border-2 border-[#B7791F]/60 dark:border-[#f3c270]/60 flex items-center justify-center shrink-0 mt-0.5 bg-[#FBF1DC] dark:bg-[#2a2214]"
                  aria-label="Planned status, not completed"
                >
                  <span className="w-2 h-0.5 bg-[#B7791F] dark:bg-[#f3c270] rounded-full" />
                </div>

                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono text-[#3C4F5C]/70 dark:text-slate-500 font-semibold">
                      Phase 0{idx + 1}
                    </span>
                    {/* Amber #B7791F on #FBF1DC pill */}
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#FBF1DC] dark:bg-[#2a2214] text-[#B7791F] dark:text-[#f3c270] border border-[#B7791F]/30">
                      Planned
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-[#0E2230] dark:text-slate-200 leading-snug">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
