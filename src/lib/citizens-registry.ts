/** Citizen profiles are not publicly released yet — registry UI only. */

export const REGISTRY_STATUS = "Under Government Processing" as const;

export const registryStatusVariants = [
  "Classified",
  "Pending Verification",
  "Restricted Access",
  "Under Review",
  "Awaiting Clearance",
  "Under Government Processing",
] as const;

export function registryStatusForIndex(index: number): string {
  return registryStatusVariants[index % registryStatusVariants.length];
}

export const registryBlockers = [
  "Unresolved party debt",
  "Ongoing investigations",
  "Missing documentation",
  "Ravi's approval workflow",
  "Several incidents from Tippa Black Day",
];

export const registryComingSoonLead =
  "The National Citizen Registry is currently undergoing administrative review.";

export const registryComingSoonBody = [
  "Our archivists are working tirelessly to verify achievements, investigate allegations, calculate party debt, and determine which citizens can legally be described as functioning adults.",
  "Background checks remain ongoing. Several dossiers contain conflicting information, missing receipts, unpaid party obligations, and evidence that should probably not be preserved for future generations.",
  "The Ministry of Records reports that progress remains slower than expected due to excessive committee meetings. Achievements are being verified. Scandals are being fact-checked. Party debt calculations are being audited.",
  "The Republic currently knows who its citizens are. The Republic simply isn't ready for the rest of the world to know yet.",
];
