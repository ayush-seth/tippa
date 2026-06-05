import type { Citizen } from "@/lib/types";

const stampTone: Record<Citizen["statusTone"], string> = {
  founding: "text-gold-bright",
  senior: "text-stamp-blue",
  active: "text-stamp-green",
  inactive: "text-cream-dim",
  watch: "text-stamp-red",
  exile: "text-burgundy-bright",
};

export function StatusBadge({
  tone,
  children,
  size = "sm",
  className = "",
}: {
  tone: Citizen["statusTone"];
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizing =
    size === "lg"
      ? "text-xl px-5 py-2 border-[3px] tracking-[0.16em]"
      : size === "md"
        ? "text-sm px-4 py-1.5 border-[3px] tracking-[0.14em]"
        : "text-xs px-3 py-1 border-2 tracking-[0.12em]";

  return (
    <span
      className={`stamp-bold inline-flex shrink-0 select-none ${stampTone[tone]} ${sizing} ${className}`}
    >
      {children}
    </span>
  );
}

export function NicknameBadge({
  nickname,
  size = "sm",
}: {
  nickname: string;
  size?: "sm" | "lg";
}) {
  const isLg = size === "lg";
  return (
    <p
      className={`leading-snug ${isLg ? "mt-2" : "mt-1"}`}
      title={`Alias: ${nickname}`}
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream-faint">
        Alias{" "}
      </span>
      <span
        className={`font-display font-semibold uppercase tracking-wide text-gold-bright ${
          isLg ? "text-xl sm:text-2xl" : "text-sm"
        }`}
      >
        &ldquo;{nickname}&rdquo;
      </span>
    </p>
  );
}

export function Meter({
  label,
  value,
  accent = "gold",
}: {
  label: string;
  value: number;
  accent?: "gold" | "burgundy";
}) {
  const grad =
    accent === "gold"
      ? "from-gold-deep via-gold to-gold-bright"
      : "from-burgundy-deep via-burgundy to-burgundy-bright";
  return (
    <div>
      <div className="flex items-center justify-between text-xs">
        <span className="text-cream-faint">{label}</span>
        <span className="font-mono text-cream">{value}%</span>
      </div>
      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-cream/10">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${grad}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export function Star({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2l2.95 6.18 6.8.78-5.05 4.6 1.36 6.7L12 17.9 5.94 21.06 7.3 14.36 2.25 9.76l6.8-.78L12 2z" />
    </svg>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <Star className="h-3 w-3 text-burgundy-bright" />
      <span className="text-[11px] uppercase tracking-civic text-gold/80">
        {children}
      </span>
    </div>
  );
}
