import type { ComponentType } from "react";

type IconProps = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function IconSplit({ className = "h-full w-full" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path {...stroke} d="M6 4h12v16H6z" />
      <path {...stroke} d="M6 9h12M12 4v16" />
      <path {...stroke} d="M8.5 13h3M8.5 16h2" />
      <circle cx="15.5" cy="14" r="1.25" {...stroke} />
      <circle cx="15.5" cy="17" r="1.25" {...stroke} />
    </svg>
  );
}

function IconHousing({ className = "h-full w-full" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path {...stroke} d="M4 10.5 12 4l8 6.5V20H4z" />
      <path {...stroke} d="M9 20v-6h6v6" />
      <path {...stroke} d="M12 4v3" />
    </svg>
  );
}

function IconMarket({ className = "h-full w-full" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path {...stroke} d="M4 9h16l-1.2 11H5.2z" />
      <path {...stroke} d="M8 9V7a4 4 0 0 1 8 0v2" />
      <path {...stroke} d="M9 13h6" />
    </svg>
  );
}

function IconCodenames({ className = "h-full w-full" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect {...stroke} x="4" y="4" width="7" height="7" rx="1" />
      <rect {...stroke} x="13" y="4" width="7" height="7" rx="1" />
      <rect {...stroke} x="4" y="13" width="7" height="7" rx="1" />
      <rect {...stroke} x="13" y="13" width="7" height="7" rx="1" />
      <path {...stroke} d="M16.5 7.5h.01M16.5 16.5h.01" strokeWidth={2.5} />
    </svg>
  );
}

function IconMerch({ className = "h-full w-full" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path {...stroke} d="M8 4h8l1 4H7z" />
      <path {...stroke} d="M7 8h10v12H7z" />
      <path {...stroke} d="M10 12h4M10 15h4" />
    </svg>
  );
}

function IconLeague({ className = "h-full w-full" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path {...stroke} d="M8 4h8v3a4 4 0 0 1-8 0z" />
      <path {...stroke} d="M12 11v7" />
      <path {...stroke} d="M9 20h6M7 14h10" />
    </svg>
  );
}

function IconArchives({ className = "h-full w-full" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path {...stroke} d="M5 4h14v16H5z" />
      <path {...stroke} d="M8 4v16M16 4v16" />
      <path {...stroke} d="M8 9h8M8 13h8M8 17h5" />
    </svg>
  );
}

function IconLive({ className = "h-full w-full" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="12" r="2.5" {...stroke} />
      <path {...stroke} d="M12 3v2M12 19v2M3 12h2M19 12h2" />
      <path {...stroke} d="M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" />
    </svg>
  );
}

const icons: Record<string, ComponentType<IconProps>> = {
  tippasplit: IconSplit,
  tippabnb: IconHousing,
  marketplace: IconMarket,
  codenames: IconCodenames,
  merch: IconMerch,
  league: IconLeague,
  archives: IconArchives,
  live: IconLive,
};

type EcosystemIconProps = {
  slug: string;
  size?: "sm" | "md";
  className?: string;
};

export function EcosystemIconFrame({
  slug,
  size = "md",
  className = "",
}: EcosystemIconProps) {
  const Icon = icons[slug] ?? IconArchives;
  const box = size === "sm" ? "h-11 w-11" : "h-14 w-14";
  const icon = size === "sm" ? "h-6 w-6" : "h-7 w-7";

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-sm border border-gold/30 bg-gradient-to-br from-gold/[0.12] to-charcoal-3/80 text-gold shadow-[inset_0_1px_0_rgba(240,208,137,0.1)] ${box} ${className}`}
      aria-hidden
    >
      <Icon className={icon} />
    </div>
  );
}
