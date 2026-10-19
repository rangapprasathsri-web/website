import React from "react";
import { SITE_CONFIG } from "../config/siteConfig";

export const TechnologyStack: React.FC = () => {
  return (
    <section
      id="technology"
      aria-labelledby="tech-heading"
      className="py-18 md:py-24 bg-[#EEF4F3] dark:bg-[#091C26] border-b border-[#0E2230]/6 dark:border-white/6"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#0F5C63] dark:text-teal-400">
            SYSTEM SPECIFICATION
          </span>
          <h2
            id="tech-heading"
            className="font-heading text-3xl sm:text-4xl font-bold text-[#0E2230] dark:text-white tracking-[-0.025em]"
          >
            Technology Stack
          </h2>
          <p className="text-sm text-[#3C4F5C] dark:text-slate-400">
            Hardware components, embedded electronics, chemistry, and analytical software.
          </p>
        </div>

        {/* 18px Editorial Card Table */}
        <div className="editorial-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#0E2230]/8 dark:border-white/10 bg-[#FBFAF6] dark:bg-[#0E2230] text-xs font-mono font-semibold uppercase text-[#3C4F5C] dark:text-slate-300">
                  <th scope="col" className="py-4 px-6 w-1/3">
                    Category
                  </th>
                  <th scope="col" className="py-4 px-6 w-2/3">
                    Technologies
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0E2230]/6 dark:divide-white/6 text-sm">
                {SITE_CONFIG.techStack.map((item) => (
                  <tr
                    key={item.category}
                    className="hover:bg-[#EEF4F3]/50 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <td className="py-4 px-6 font-medium text-[#0E2230] dark:text-slate-200">
                      {item.category}
                    </td>
                    <td className="py-4 px-6 font-mono text-xs text-[#0F5C63] dark:text-teal-300">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#EEF4F3] dark:bg-slate-800 border border-[#0E2230]/8 dark:border-white/10">
                        {item.technologies}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
