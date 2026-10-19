import React from "react";

export const AboutProblem: React.FC = () => {
  return (
    <div className="border-b border-[#0E2230]/6 dark:border-white/6">
      {/* About Section - Alt Section Background #EEF4F3 */}
      <section
        id="about"
        aria-labelledby="about-heading"
        className="py-18 md:py-24 bg-[#EEF4F3] dark:bg-[#091C26]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#0F5C63] dark:text-teal-400">
                SYSTEM CONCEPT
              </span>
              <h2
                id="about-heading"
                className="font-heading text-2xl sm:text-3xl font-bold text-[#0E2230] dark:text-white tracking-[-0.025em]"
              >
                Making Water Quality Screening More Accessible
              </h2>
              <div className="h-1 w-12 bg-[#0F5C63] dark:bg-teal-400 rounded-full" />
            </div>

            <div className="lg:col-span-7 space-y-4 text-[#3C4F5C] dark:text-slate-300 text-base leading-relaxed">
              <p>
                ChloroQuant is a proposed portable water-testing system designed to estimate Free Residual Chlorine (FRC) using a reagent-treated test strip and an electronic colour-reading unit.
              </p>
              <p>
                The system combines colorimetric chemistry, an RGB colour sensor and an ESP32 microcontroller to process the strip&apos;s colour response and estimate chlorine concentration using an experimentally established calibration model.
              </p>
              <p>
                Our goal is to explore an affordable, simple and repeatable approach to preliminary FRC screening, with potential applications in drinking-water monitoring and field testing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section - Main Section Background #FBFAF6 */}
      <section
        id="problem"
        aria-labelledby="problem-heading"
        className="py-18 md:py-24 bg-[#FBFAF6] dark:bg-[#07131D] border-t border-[#0E2230]/6 dark:border-white/6"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#0F5C63] dark:text-teal-400">
                WATER QUALITY CONTEXT
              </span>
              <h2
                id="problem-heading"
                className="font-heading text-2xl sm:text-3xl font-bold text-[#0E2230] dark:text-white tracking-[-0.025em]"
              >
                Why Free Residual Chlorine Monitoring Matters
              </h2>
              <div className="h-1 w-12 bg-[#0F5C63] dark:bg-teal-400 rounded-full" />
            </div>

            <div className="lg:col-span-7 space-y-4 text-[#3C4F5C] dark:text-slate-300 text-base leading-relaxed">
              <p>
                Free residual chlorine is an important indicator used in monitoring chlorinated drinking water. Measuring it helps assess whether chlorine remains in the water after disinfection.
              </p>
              <p>
                Conventional testing methods can require reagents, visual interpretation and manual recording. ChloroQuant explores a compact alternative that combines a test strip with optical sensing and digital processing to support more consistent readings and recordkeeping.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
