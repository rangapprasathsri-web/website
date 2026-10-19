import React from "react";
import { AlertCircle, Clock, Calendar, ArrowRight, ShieldAlert } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

export const ValidationSection: React.FC = () => {
  return (
    <section
      id="validation"
      aria-labelledby="validation-heading"
      className="py-16 md:py-24 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-amber-700 dark:text-amber-400">
            TRANSPARENT SCIENTIFIC GOVERNANCE
          </span>
          <h2
            id="validation-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Performance Targets and Validation
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            Clear distinction between proposed engineering objectives and experimental verification milestones.
          </p>
        </div>

        {/* Block A: "Design targets — pending validation" (distinct amber pending style) */}
        <div className="rounded-2xl border-2 border-amber-300 dark:border-amber-700/80 bg-amber-50/50 dark:bg-amber-950/20 p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-amber-200/80 dark:border-amber-800/60 pb-4">
            <h3 className="text-lg sm:text-xl font-bold text-amber-950 dark:text-amber-200 tracking-tight">
              Design targets — pending validation
            </h3>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-amber-100 dark:bg-amber-900/50 text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-700">
              <Clock className="w-3.5 h-3.5" />
              STATUS: PENDING EXPERIMENTAL PROTOCOL
            </span>
          </div>

          {/* Target Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Target 1 */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-amber-200 dark:border-amber-800/70 shadow-2xs space-y-2">
              <div className="text-xs font-mono font-semibold text-amber-700 dark:text-amber-400 uppercase">
                TARGET SENSITIVITY (DESIGN TARGET, PENDING VALIDATION)
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-bold font-mono text-slate-900 dark:text-white tabular-nums">
                  0.1
                </span>
                <span className="text-sm font-mono text-slate-500 dark:text-slate-400">
                  mg/L FRC
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Design target for lower limit of colorimetric resolution, pending formal laboratory calibration.
              </p>
            </div>

            {/* Target 2 */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-amber-200 dark:border-amber-800/70 shadow-2xs space-y-2">
              <div className="text-xs font-mono font-semibold text-amber-700 dark:text-amber-400 uppercase">
                TARGET STRIP COST (DESIGN TARGET, PENDING VALIDATION)
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span>below</span>
                  <span className="inline-flex items-center">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 text-slate-900 dark:text-white"
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
                <span className="text-sm font-mono text-slate-500 dark:text-slate-400">
                  per test strip at scale
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Proposed material and chemical deposition target for scaled batch production.
              </p>
            </div>
          </div>

          {/* Visible Note (Not Fine Print) */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-100/70 dark:bg-amber-900/40 border border-amber-300/80 dark:border-amber-700/60 text-amber-950 dark:text-amber-200">
            <AlertCircle className="w-5 h-5 shrink-0 text-amber-700 dark:text-amber-400 mt-0.5" />
            <p className="text-sm font-medium leading-relaxed">
              <strong>Notice:</strong> These are proposed design goals, not demonstrated performance. The final detection limit, response time, strip cost and shelf life must be established through experiments.
            </p>
          </div>
        </div>

        {/* Block B: "Our Validation Plan" (Roadmap / checklist, ALL "Planned", NONE ticked) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Our Validation Plan
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Rigorous experimental agenda prior to any field claims (All phases marked Planned).
              </p>
            </div>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              0 / 6 Milestones Completed (None Ticked)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SITE_CONFIG.validationPlan.map((item, idx) => (
              <div
                key={item.id}
                className="bg-slate-50 dark:bg-slate-950/60 rounded-xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 flex items-start gap-3.5 hover:border-amber-300 dark:hover:border-amber-700/60 transition-colors"
              >
                {/* Visual "Planned" checkbox (Unticked circle with dash/amber marker) */}
                <div
                  className="w-5 h-5 rounded-md border-2 border-amber-500/70 dark:border-amber-400/70 flex items-center justify-center shrink-0 mt-0.5 bg-amber-50 dark:bg-amber-950/40"
                  aria-label="Planned status, not completed"
                >
                  <span className="w-2 h-0.5 bg-amber-600 dark:bg-amber-400 rounded-full" />
                </div>

                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                      Phase 0{idx + 1}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                      Planned
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-snug">
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
