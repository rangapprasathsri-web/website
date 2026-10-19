import React, { useState } from "react";
import { Sliders, Info } from "lucide-react";
import { getIllustrativeColor } from "../utils/rules";
import { SITE_CONFIG } from "../config/siteConfig";

export const IllustrativeSlider: React.FC = () => {
  const [intensity, setIntensity] = useState<number>(45);

  const colorData = getIllustrativeColor(intensity);

  return (
    <section
      aria-label="Color Reaction Simulation"
      className="py-16 md:py-24 bg-[#FBFAF6] dark:bg-[#07131D] border-b border-[#0E2230]/6 dark:border-white/6"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          {/* Amber #B7791F on #FBF1DC Pill */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FBF1DC] dark:bg-[#2a2214] border border-[#B7791F]/30 text-[11px] font-mono font-semibold text-[#B7791F] dark:text-[#f3c270]">
            <Info className="w-3.5 h-3.5" />
            <span>{SITE_CONFIG.illustrativeLabel}</span>
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0E2230] dark:text-white tracking-[-0.025em]">
            Color-to-Concentration Illustrative Explorer
          </h3>
          <p className="text-xs sm:text-sm text-[#3C4F5C] dark:text-slate-400 max-w-xl mx-auto">
            Interactive representation of how TMB reagent paper may undergo progressive chromatic shifts upon oxidation. (Values represent qualitative optical absorbance, not calibrated mg/L).
          </p>
        </div>

        {/* Interactive Swatch Stage: 18px Editorial Card */}
        <div className="editorial-card p-6 sm:p-8 space-y-8">
          {/* Swatch & Strip Display */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Strip Visual Mockup */}
            <div className="md:col-span-7 flex flex-col items-center justify-center p-6 bg-[#EEF4F3] dark:bg-[#091C26] rounded-[14px] border border-[#0E2230]/6 dark:border-white/6">
              <span className="text-[10px] font-mono uppercase text-[#3C4F5C] dark:text-slate-400 mb-3 tracking-wider font-semibold">
                Simulated Test Strip Reaction Zone
              </span>
              
              {/* Test Strip Substrate */}
              <div className="w-full max-w-[320px] h-14 bg-white dark:bg-[#0E2230] rounded-xl p-2.5 flex items-center justify-between border border-[#0E2230]/10 dark:border-white/10 shadow-xs relative">
                {/* Paper Strip Body */}
                <div className="w-2/3 h-6 bg-[#FBFAF6] dark:bg-slate-800 rounded flex items-center px-2">
                  <div className="w-full flex justify-between">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="w-0.5 h-3 bg-[#0E2230]/15 dark:bg-slate-600" />
                    ))}
                  </div>
                </div>

                {/* Reactive Reagent Pad */}
                <div
                  className="w-16 h-8 rounded-md border transition-colors duration-200 flex items-center justify-center shadow-xs"
                  style={{
                    backgroundColor: colorData.hex,
                    borderColor: intensity > 10 ? "#5A4BD1" : "#cbd5e1",
                  }}
                  title={colorData.label}
                  aria-label={`Reactive swatch showing ${colorData.label}`}
                >
                  <span className="text-[8px] font-mono font-bold opacity-70 mix-blend-difference text-white">
                    TMB
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs font-mono text-[#3C4F5C] dark:text-slate-300">
                <span>Color Response:</span>
                <span className="font-semibold text-[#0E2230] dark:text-white">
                  {colorData.label}
                </span>
              </div>
            </div>

            {/* Readout Data Box */}
            <div className="md:col-span-5 space-y-4">
              <div className="bg-[#FBFAF6] dark:bg-[#091C26] p-5 rounded-[14px] border border-[#0E2230]/6 dark:border-white/6 space-y-2">
                <span className="text-[11px] font-mono text-[#3C4F5C] dark:text-slate-400 uppercase tracking-wider block font-semibold">
                  Relative Optical Absorbance ($A_{`\\text{rel}`}$)
                </span>
                <div className="text-2xl font-bold font-mono text-[#0F5C63] dark:text-teal-400">
                  {(intensity / 100).toFixed(2)}{" "}
                  <span className="text-xs font-normal text-[#3C4F5C] dark:text-slate-400 font-sans">
                    relative index
                  </span>
                </div>
                <p className="text-xs text-[#3C4F5C] dark:text-slate-400">
                  {colorData.description}
                </p>
              </div>

              <div className="text-[11px] font-mono text-[#B7791F] dark:text-[#f3c270] bg-[#FBF1DC] dark:bg-[#2a2214] p-3 rounded-[12px] border border-[#B7791F]/30 leading-relaxed">
                Notice: Real concentration values (mg/L) depend on controlled chemical reaction kinetics and sensor calibration.
              </div>
            </div>
          </div>

          {/* Slider Control */}
          <div className="space-y-3 pt-4 border-t border-[#0E2230]/6 dark:border-white/8">
            <div className="flex items-center justify-between text-xs font-mono text-[#3C4F5C] dark:text-slate-400">
              <label htmlFor="chroma-slider" className="font-bold flex items-center gap-1.5 text-[#0E2230] dark:text-slate-200">
                <Sliders className="w-3.5 h-3.5 text-[#0F5C63] dark:text-teal-400" />
                ADJUST ILLUSTRATIVE REACTION EXTENT
              </label>
              <span className="font-semibold">{intensity}% Relative</span>
            </div>

            <input
              id="chroma-slider"
              type="range"
              min="0"
              max="100"
              step="1"
              value={intensity}
              onChange={(e) => setIntensity(Number(e.target.value))}
              aria-label="Adjust illustrative color reaction extent slider"
              className="w-full h-2 bg-[#EEF4F3] dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#5A4BD1] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0F5C63]"
            />

            <div className="flex justify-between text-[10px] font-mono text-[#3C4F5C]/70 dark:text-slate-500">
              <span>0% (Blank / Unreacted)</span>
              <span>50% (Intermediate)</span>
              <span>100% (High Density)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
