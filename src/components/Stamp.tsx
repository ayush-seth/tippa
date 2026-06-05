type StampTone = "approved" | "denied" | "gold" | "blue" | "neutral";

const toneColor: Record<StampTone, string> = {
  approved: "text-stamp-green",
  denied: "text-stamp-red",
  gold: "text-gold-bright",
  blue: "text-stamp-blue",
  neutral: "text-cream-dim",
};

type StampProps = {
  label: string;
  tone?: StampTone;
  rotate?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
  withStar?: boolean;
  bold?: boolean;
};

export function Stamp({
  label,
  tone = "approved",
  rotate = 0,
  size = "md",
  className = "",
  withStar = true,
  bold = true,
}: StampProps) {
  const sizing =
    size === "lg"
      ? "text-xl px-5 py-2 border-[3px] tracking-[0.14em]"
      : size === "sm"
        ? "text-xs px-3 py-1 border-2 tracking-[0.12em]"
        : "text-sm px-4 py-1.5 border-[3px] tracking-[0.13em]";

  const stampClass = bold ? "stamp-bold" : "stamp";

  return (
    <span
      className={`${stampClass} select-none ${toneColor[tone]} ${sizing} ${className}`}
      style={rotate !== 0 ? { transform: `rotate(${rotate}deg)` } : undefined}
      aria-hidden
    >
      {withStar && <StarGlyph />}
      {label}
      {withStar && <StarGlyph />}
    </span>
  );
}

function StarGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-[0.7em] w-[0.7em] opacity-90" fill="currentColor" aria-hidden>
      <path d="M12 2l2.95 6.18 6.8.78-5.05 4.6 1.36 6.7L12 17.9 5.94 21.06 7.3 14.36 2.25 9.76l6.8-.78L12 2z" />
    </svg>
  );
}
