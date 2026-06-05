export type Citizen = {
  slug: string;
  name: string;
  nickname?: string;
  title: string;
  ministry: string;
  status: string;
  statusTone: "founding" | "senior" | "active" | "inactive" | "watch" | "exile";
  partyDebt: string;
  photo: number;
  motto: string;
  bio: string;
  achievements: string[];
  crimes: string[];
  quotes: string[];
  contributions: string[];
  recent: { date: string; text: string }[];
};

export type Ministry = {
  slug: string;
  name: string;
  minister: string;
  ministerSlug?: string;
  seal: string;
  description: string;
  initiatives: string[];
  impact: string;
  impactScore: number;
};

export type Announcement = {
  id: string;
  title: string;
  classification: "Public" | "Confidential" | "Ceremonial" | "Restricted";
  date: string;
  ministry: string;
  body: string;
  refs?: string[];
};

export type EcosystemProduct = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  bullets: string[];
  status: "Coming Soon" | "Launching Soon" | "In Development" | "Under Construction";
  glyph: string;
};
