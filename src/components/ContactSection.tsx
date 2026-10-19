import React from "react";
import { Mail, Building2, Users2, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-18 md:py-28 bg-[#EEF4F3] dark:bg-[#091C26] border-b border-[#0E2230]/6 dark:border-white/6"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#0F5C63] dark:text-teal-400">
            CONNECT WITH TEAM AQUANEX 007
          </span>
          <h2
            id="contact-heading"
            className="font-heading text-3xl sm:text-4xl font-bold text-[#0E2230] dark:text-white tracking-[-0.025em]"
          >
            Interested in Collaborating?
          </h2>
          <p className="text-base text-[#3C4F5C] dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We welcome opportunities to discuss water-quality testing, prototype development, laboratory validation and potential field evaluation.
          </p>
        </div>

        {/* Contact Information Card: 18px Editorial Card */}
        <div className="editorial-card p-6 sm:p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email */}
            <div className="space-y-1.5">
              <span className="text-xs font-mono uppercase text-[#3C4F5C] dark:text-slate-400 flex items-center gap-1.5 font-semibold">
                <Mail className="w-3.5 h-3.5 text-[#0F5C63] dark:text-teal-400" />
                Email
              </span>
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="block text-sm sm:text-base font-semibold text-[#0F5C63] dark:text-teal-300 hover:underline break-all"
              >
                {SITE_CONFIG.contact.email}
              </a>
            </div>

            {/* Institution */}
            <div className="space-y-1.5">
              <span className="text-xs font-mono uppercase text-[#3C4F5C] dark:text-slate-400 flex items-center gap-1.5 font-semibold">
                <Building2 className="w-3.5 h-3.5 text-[#0F5C63] dark:text-teal-400" />
                Institution
              </span>
              <p className="text-sm sm:text-base font-semibold text-[#0E2230] dark:text-slate-100">
                {SITE_CONFIG.contact.institution}
              </p>
            </div>

            {/* Team */}
            <div className="space-y-1.5">
              <span className="text-xs font-mono uppercase text-[#3C4F5C] dark:text-slate-400 flex items-center gap-1.5 font-semibold">
                <Users2 className="w-3.5 h-3.5 text-[#0F5C63] dark:text-teal-400" />
                Team
              </span>
              <p className="text-sm sm:text-base font-semibold text-[#0E2230] dark:text-slate-100">
                {SITE_CONFIG.contact.team}
              </p>
            </div>
          </div>

          {/* Action Button: Pill button with subtle hover lift */}
          <div className="pt-6 border-t border-[#0E2230]/6 dark:border-white/8 flex justify-center">
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-[#0F5C63] hover:bg-[#0c4a4f] rounded-full shadow-xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0F5C63] focus-visible:ring-offset-2"
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
