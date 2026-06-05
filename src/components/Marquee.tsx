import { Star } from "./civic";

export const slogans = [
  "Workers of Tippa, Unite",
  "Friendship Is Infrastructure",
  "From Each According To Their Vibe, To Each According To Their Thirst",
  "The Party Provides (and so does Ujjwal)",
  "No Citizen Shall Be Left On Read",
  "Attendance Is A Revolutionary Duty",
  "One Nation · One Group Chat · One Aux",
  "Glory To The Republic",
  "Productivity Is Temporary, Parties Are Eternal",
  "Solidarity Forever, Splits Settled Never",
];

type MarqueeProps = {
  items?: string[];
  className?: string;
  tone?: "burgundy" | "muted";
};

export function Marquee({ items = slogans, className = "", tone = "burgundy" }: MarqueeProps) {
  const base =
    tone === "burgundy"
      ? "border-y border-burgundy-bright/25 bg-burgundy-deep/20"
      : "border-y border-cream/10 bg-cream/[0.02]";
  const loop = [...items, ...items];
  return (
    <div className={`relative overflow-hidden py-3 ${base} ${className}`}>
      <div className="marquee-mask flex">
        <div className="animate-marquee flex shrink-0 items-center gap-6 pr-6 whitespace-nowrap">
          {loop.map((item, i) => (
            <span key={i} className="flex items-center gap-6">
              <span className="text-[11px] font-semibold uppercase tracking-civic text-cream/80">
                {item}
              </span>
              <Star className="h-3 w-3 text-gold" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
