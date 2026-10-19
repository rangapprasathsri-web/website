import React from "react";
import { Mail, Building2, Users2, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 md:py-24 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-teal-800 dark:text-teal-400">
            CONNECT WITH TEAM AQUANEX 007
          </span>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Interested in Collaborating?
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            We welcome opportunities to discuss water-quality testing, prototype development, laboratory validation and potential field evaluation.
          </p>
        </div>

        {/* Contact Information Card */}
        <div className="bg-slate-50 dark:bg-slate-950/70 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-8 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email */}
            <div className="space-y-1.5">
              <span className="text-xs font-mono uppercase text-slate-500 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
                Email
              </span>
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="block text-sm sm:text-base font-semibold text-teal-800 dark:text-teal-300 hover:underline break-all"
              >
                {SITE_CONFIG.contact.email}
              </a>
            </div>

            {/* Institution */}
            <div className="space-y-1.5">
              <span className="text-xs font-mono uppercase text-slate-500 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
                Institution
              </span>
              <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100">
                {SITE_CONFIG.contact.institution}
              </p>
            </div>

            {/* Team */}
            <div className="space-y-1.5">
              <span className="text-xs font-mono uppercase text-slate-500 flex items-center gap-1.5">
                <Users2 className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
                Team
              </span>
              <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100">
                {SITE_CONFIG.contact.team}
              </p>
            </div>
          </div>

          {/* Action Button: Direct mailto link (no backend form) */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-center">
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-teal-800 hover:bg-teal-900 dark:bg-teal-700 dark:hover:bg-teal-600 rounded-lg shadow-sm transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
