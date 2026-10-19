import React from "react";
import { SITE_CONFIG } from "../config/siteConfig";

export const TechnologyStack: React.FC = () => {
  return (
    <section
      id="technology"
      aria-labelledby="tech-heading"
      className="py-16 md:py-20 bg-slate-50 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-teal-800 dark:text-teal-400">
            SYSTEM SPECIFICATION
          </span>
          <h2
            id="tech-heading"
            className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Technology Stack
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Hardware components, embedded electronics, chemistry, and analytical software.
          </p>
        </div>

        {/* Clean Two-Column Table */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-800/60 text-xs font-mono font-semibold uppercase text-slate-600 dark:text-slate-300">
                  <th scope="col" className="py-3.5 px-6 w-1/3">
                    Category
                  </th>
                  <th scope="col" className="py-3.5 px-6 w-2/3">
                    Technologies
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 text-sm">
                {SITE_CONFIG.techStack.map((item) => (
                  <tr
                    key={item.category}
                    className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <td className="py-3.5 px-6 font-medium text-slate-900 dark:text-slate-200">
                      {item.category}
                    </td>
                    <td className="py-3.5 px-6 font-mono text-xs text-teal-900 dark:text-teal-300">
                      <span className="inline-block px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
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
