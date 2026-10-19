/**
 * Central Configuration for ChloroQuant
 * All team contact details, disclaimers, and project metadata are centralized here
 * in strict compliance with Section 2, Rule 6.
 */

export const SITE_CONFIG = {
  // Required Contact Details (Exact)
  contact: {
    email: "drshustigaamv@gmail.com",
    institution: "Rathinam Technical Campus, Coimbatore",
    team: "AQUANEX 007",
  },

  // Mandatory Dual Disclaimers (Exact copy from Rule 5)
  disclaimer:
    "ChloroQuant is a proposed screening technology, not a certified drinking-water safety instrument. FRC measurements alone do not establish that water is safe to drink.",

  // Mandatory Illustrative Label (Exact copy from Rule 7)
  illustrativeLabel: "Illustrative only, not real calibration data",

  // Core Project Identity
  brand: "ChloroQuant",
  eyebrow: "SMART WATER QUALITY SCREENING",
  headline: "Detect. Quantify. Protect.",
  subheadline:
    "A proposed low-cost, strip-based solution for estimating Free Residual Chlorine (FRC) in water through colorimetric sensing and embedded data processing.",
  chips: [
    "Colorimetric Strip",
    "Optical Sensing",
    "ESP32 Processing"
  ],
  badge: "Smart India Hackathon 2026 | Team AQUANEX 007 | Conceptual prototype",

  // Navigation Links
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Technology", href: "#technology" },
    { label: "Validation", href: "#validation" },
    { label: "Applications", href: "#applications" },
    { label: "Contact", href: "#contact" },
  ],

  // Technology Stack Table Data
  techStack: [
    { category: "Microcontroller", technologies: "ESP32 DevKit" },
    { category: "Colour sensing", technologies: "TCS34725 RGB/clear sensor" },
    { category: "Illumination", technologies: "White LED module" },
    { category: "Display", technologies: "I²C OLED" },
    { category: "Strip chemistry", technologies: "Proposed TMB colorimetric chemistry" },
    { category: "Firmware", technologies: "Arduino IDE" },
    { category: "Data analysis", technologies: "Python, NumPy, Pandas" },
    { category: "Calibration analysis", technologies: "Google Colab" },
    { category: "Optional image analysis", technologies: "OpenCV" },
  ],

  // Validation Plan Items (All "Planned", none ticked)
  validationPlan: [
    {
      id: "val-1",
      title: "Compare readings against a suitable DPD reference method.",
      status: "Planned",
    },
    {
      id: "val-2",
      title: "Test known FRC concentrations, including levels around the 0.1 mg/L target.",
      status: "Planned",
    },
    {
      id: "val-3",
      title: "Evaluate repeatability across multiple strips and measurements.",
      status: "Planned",
    },
    {
      id: "val-4",
      title: "Assess potential interference from pH, turbidity and other substances.",
      status: "Planned",
    },
    {
      id: "val-5",
      title: "Study reagent stability and strip storage conditions.",
      status: "Planned",
    },
    {
      id: "val-6",
      title: "Establish calibration, decision thresholds and invalid-result criteria from experimental data.",
      status: "Planned",
    },
  ],

  // Applications List
  applications: [
    "Preliminary drinking-water screening.",
    "Field assessment of chlorinated water supplies.",
    "Water-quality monitoring demonstrations in educational laboratories.",
    "Research into low-cost optical sensing and colorimetric test systems.",
  ],
} as const;
