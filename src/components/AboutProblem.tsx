import React from "react";
import { Droplets, Activity, Layers, Compass } from "lucide-react";

export const AboutProblem: React.FC = () => {
  return (
    <div className="border-b border-slate-200 dark:border-slate-800">
      {/* About Section */}
      <section
        id="about"
        aria-labelledby="about-heading"
        className="py-16 md:py-20 bg-white dark:bg-slate-900"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-teal-800 dark:text-teal-400">
                SYSTEM CONCEPT
              </span>
              <h2
                id="about-heading"
                className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight"
              >
                Making Water Quality Screening More Accessible
              </h2>
              <div className="h-1 w-12 bg-teal-700 dark:bg-teal-500 rounded-full" />
            </div>

            <div className="lg:col-span-7 space-y-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
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

      {/* The Problem Section */}
      <section
        id="problem"
        aria-labelledby="problem-heading"
        className="py-16 md:py-20 bg-slate-50 dark:bg-slate-950/70 border-t border-slate-200 dark:border-slate-800"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-teal-800 dark:text-teal-400">
                WATER QUALITY CONTEXT
              </span>
              <h2
                id="problem-heading"
                className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight"
              >
                Why Free Residual Chlorine Monitoring Matters
              </h2>
              <div className="h-1 w-12 bg-teal-700 dark:bg-teal-500 rounded-full" />
            </div>

            <div className="lg:col-span-7 space-y-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
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
