import { citizens } from "./citizens";
import { ministries } from "./ministries";

export type Stat = {
  label: string;
  value: number;
  display?: string;
  suffix?: string;
  prefix?: string;
  caption: string;
};

export const nationalStats: Stat[] = [
  {
    label: "Citizens",
    value: citizens.length,
    caption: "Sovereign individuals, fully accounted for",
  },
  { label: "Pending Party Obligations", value: 43, caption: "Celebrations legally owed and unfulfilled" },
  {
    label: "Active Ministries",
    value: ministries.length,
    caption: "Departments of organized chaos",
  },
  { label: "Historical Incidents", value: 147, caption: "Catalogued and never forgotten" },
  { label: "National Happiness Index", value: 96, suffix: "%", caption: "The remaining 4% owes someone money" },
  { label: "Gross Drinking Product", value: 0, display: "GDP", caption: "The Republic's primary economic indicator" },
];
