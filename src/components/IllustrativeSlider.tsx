import React, { useState } from "react";
import { Sliders, Info, ShieldCheck } from "lucide-react";
import { getIllustrativeColor } from "../utils/rules";
import { SITE_CONFIG } from "../config/siteConfig";

export const IllustrativeSlider: React.FC = () => {
  const [intensity, setIntensity] = useState<number>(45);

  const colorData = getIllustrativeColor(intensity);

  return (
    <section
      aria-label="Color Reaction Simulation"
      className="py-14 bg-slate-50 dark:bg-slate-950/50 border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-100/70 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 text-[11px] font-mono text-amber-900 dark:text-amber-300">
            <Info className="w-3.5 h-3.5" />
            <span>{SITE_CONFIG.illustrativeLabel}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Color-to-Concentration Illustrative Explorer
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Interactive representation of how TMB reagent paper may undergo progressive chromatic shifts upon oxidation. (Values represent qualitative optical absorbance, not calibrated mg/L).
          </p>
        </div>

        {/* Interactive Swatch Stage */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          {/* Swatch & Strip Display */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Strip Visual Mockup */}
            <div className="md:col-span-7 flex flex-col items-center justify-center p-6 bg-slate-100/80 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] font-mono uppercase text-slate-400 dark:text-slate-500 mb-3 tracking-wider">
                Simulated Test Strip Reaction Zone
              </span>
              
              {/* Test Strip Substrate */}
              <div className="w-full max-w-[320px] h-14 bg-slate-200 dark:bg-slate-800 rounded-lg p-2.5 flex items-center justify-between border border-slate-300 dark:border-slate-700 shadow-inner relative">
                {/* Paper Strip Body */}
                <div className="w-2/3 h-6 bg-slate-100 dark:bg-slate-700/60 rounded flex items-center px-2">
                  <div className="w-full flex justify-between">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="w-0.5 h-3 bg-slate-300 dark:bg-slate-600" />
                    ))}
                  </div>
                </div>

                {/* Reactive Reagent Pad */}
                <div
                  className="w-16 h-8 rounded border transition-colors duration-200 flex items-center justify-center shadow-xs"
                  style={{
                    backgroundColor: colorData.hex,
                    borderColor: intensity > 10 ? "#1e40af" : "#cbd5e1",
                  }}
                  title={colorData.label}
                  aria-label={`Reactive swatch showing ${colorData.label}`}
                >
                  <span className="text-[8px] font-mono font-bold opacity-60 mix-blend-difference text-white">
                    TMB
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
                <span>Color Response:</span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  {colorData.label}
                </span>
              </div>
            </div>

            {/* Readout Data Box */}
            <div className="md:col-span-5 space-y-4">
              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                  Relative Optical Absorbance ($A_{`\\text{rel}`}$)
                </span>
                <div className="text-2xl font-bold font-mono text-teal-800 dark:text-teal-400">
                  {(intensity / 100).toFixed(2)}{" "}
                  <span className="text-xs font-normal text-slate-500 font-sans">
                    relative index
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {colorData.description}
                </p>
              </div>

              <div className="text-[11px] font-mono text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 p-2.5 rounded-lg border border-amber-200 dark:border-amber-900/60">
                Notice: Real concentration values (mg/L) depend on controlled chemical reaction kinetics and sensor calibration.
              </div>
            </div>
          </div>

          {/* Slider Control */}
          <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-400">
              <label htmlFor="chroma-slider" className="font-bold flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                <Sliders className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
                ADJUST ILLUSTRATIVE REACTION EXTENT
              </label>
              <span>{intensity}% Relative</span>
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
              className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-teal-700 dark:accent-teal-500 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-600"
            />

            <div className="flex justify-between text-[10px] font-mono text-slate-400">
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
