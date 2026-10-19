/**
 * Pure logic and verification rules for ChloroQuant.
 * Adheres strictly to the scientific constraints, hedging requirements,
 * and illustrative color mapping without inventing false data.
 */

export interface ContactInfo {
  readonly email: string;
  readonly institution: string;
  readonly team: string;
}

export interface ValidationItem {
  readonly id: string;
  readonly title: string;
  readonly status: "Planned";
}

/**
 * Computes an illustrative color hex for TMB oxidation simulation.
 * TMB (3,3',5,5'-tetramethylbenzidine) oxidizes in presence of free chlorine
 * from colorless/pale to blue (charge-transfer complex) and blue-violet.
 * This is explicitly illustrative only and does NOT produce or calibrate real mg/L values.
 *
 * @param percent 0 to 100 relative color development index
 */
export function getIllustrativeColor(percent: number): {
  hex: string;
  label: string;
  description: string;
} {
  const clamped = Math.max(0, Math.min(100, percent));

  if (clamped === 0) {
    return {
      hex: "#f8fafc",
      label: "Clear / Baseline (Unreacted)",
      description: "Reagent strip before contact with sample",
    };
  } else if (clamped < 25) {
    return {
      hex: "#bae6fd",
      label: "Pale Sky Blue (Faint Response)",
      description: "Initial color response under low optical density",
    };
  } else if (clamped < 55) {
    return {
      hex: "#38bdf8",
      label: "Cyan-Blue (Moderate Response)",
      description: "Intermediate optical absorbance band",
    };
  } else if (clamped < 80) {
    return {
      hex: "#2563eb",
      label: "Deep Blue (Strong Response)",
      description: "Higher optical density across RGB clear channel",
    };
  } else {
    return {
      hex: "#312e81",
      label: "Blue-Violet (Intense Response)",
      description: "Saturated charge-transfer absorption region",
    };
  }
}

/**
 * Verifies that target claims are strictly labelled as pending design targets.
 */
export function isCompliantTargetLabel(label: string): boolean {
  const lower = label.toLowerCase();
  return lower.includes("design target") || lower.includes("pending validation");
}

/**
 * Asserts that no validation item is falsely marked as completed or certified.
 */
export function validatePlanIntegrity(plan: readonly { status: string }[]): boolean {
  if (plan.length === 0) return false;
  return plan.every((item) => item.status === "Planned");
}

/**
 * Validates that contact details match Section 2, Rule 6 exactly.
 */
export function verifyContactDetails(contact: ContactInfo): boolean {
  return (
    contact.email === "drshustigaamv@gmail.com" &&
    contact.institution === "Rathinam Technical Campus, Coimbatore" &&
    contact.team === "AQUANEX 007"
  );
}

/**
 * Verifies that both required disclaimers match Rule 5 verbatim.
 */
export const REQUIRED_DISCLAIMER =
  "ChloroQuant is a proposed screening technology, not a certified drinking-water safety instrument. FRC measurements alone do not establish that water is safe to drink.";

export function verifyDisclaimerExact(text: string): boolean {
  return text.trim() === REQUIRED_DISCLAIMER;
}
