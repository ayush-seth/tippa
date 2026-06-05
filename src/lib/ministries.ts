import type { Ministry } from "./types";

export const ministries: Ministry[] = [
  {
    slug: "public-communications",
    name: "Ministry of Public Communications",
    minister: "Aman",
    ministerSlug: "aman",
    seal: "◈",
    description:
      "The voice of the People's Republic. Issues every proclamation, hosts every gathering, preserves every group photo, and ensures the official narrative is both glorious and grammatically correct.",
    initiatives: [
      "The People's Daily Briefing",
      "National Group-Photo Mandate",
      "Standardisation of the Word 'Henceforth'",
    ],
    impact: "Not a single national moment left unannounced or unphotographed",
    impactScore: 90,
  },
  {
    slug: "finance",
    name: "Ministry of Finance",
    minister: "Mukesh",
    ministerSlug: "mukesh",
    seal: "₹",
    description:
      "Guardian of the National Treasury and the only ledger the Republic trusts. Recovers debts, issues splits, and reminds citizens of obligations they had hoped were forgotten — for the good of the collective.",
    initiatives: [
      "The People's Debt Recovery Drive 2026",
      "The Great Split Reconciliation",
      "Operation 'Just Send It Now'",
    ],
    impact: "Treasury solvency maintained against impossible odds",
    impactScore: 88,
  },
  {
    slug: "foreign-affairs",
    name: "Ministry of Foreign Affairs",
    minister: "Mohsin",
    ministerSlug: "mohsin",
    seal: "◆",
    description:
      "Manages relations with the outside world, neighbouring friend groups, and the eternal quest for the group trip. Issues visas, contacts, and 'I know a guy' referrals in the name of international solidarity.",
    initiatives: [
      "Annual Group Trip Realisation Initiative",
      "Diplomatic Outreach to Adjacent Circles",
      "National Visa Acquisition Programme",
    ],
    impact: "3 international trips negotiated into existence",
    impactScore: 84,
  },
  {
    slug: "food-security",
    name: "Ministry of Food Security",
    minister: "Smruti",
    ministerSlug: "smruti",
    seal: "❖",
    description:
      "Defends the Republic against over-ordering, under-ordering, and the eternal question of 'should we get one more?'. Also oversees the Strategic Beer Reserve — bread and circuses, but mostly the reserve.",
    initiatives: [
      "The 'Do We Really Need This' Protocol",
      "Strategic Beer Reserve Replenishment",
      "National Bill-Splitting Standardisation",
    ],
    impact: "7 reckless over-orders prevented; reserves never once dry",
    impactScore: 81,
  },
  {
    slug: "sports-logistics",
    name: "Ministry of Sports and Logistics",
    minister: "Ayush",
    ministerSlug: "ayush",
    seal: "✸",
    description:
      "Mobilises the masses onto courts, fields, and group plans that actually happen. Home of the Tippa Premier League and the sacred pickleball booking. Its hardest battle: convincing citizens to simply show up.",
    initiatives: [
      "Tippa Premier League — Season Zero",
      "National Pickleball Court Reservation Drive",
      "Operation 'Everyone Actually Shows Up'",
    ],
    impact: "Citizens successfully assembled in one place 6 times this quarter",
    impactScore: 79,
  },
];

export function getMinistry(slug: string) {
  return ministries.find((m) => m.slug === slug);
}
