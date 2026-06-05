"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { marqueeSlogans, shuffleMarqueeSlogans } from "@/lib/marquee-slogans";
import { Star } from "./civic";

export { marqueeSlogans as slogans };

type MarqueeProps = {
  items?: readonly string[];
  className?: string;
  tone?: "burgundy" | "muted";
};

function MarqueeTrack({
  items = marqueeSlogans,
  className = "",
  tone = "burgundy",
}: MarqueeProps) {
  const [display] = useState(() => shuffleMarqueeSlogans(items));

  const base =
    tone === "burgundy"
      ? "border-y border-burgundy-bright/25 bg-burgundy-deep/20"
      : "border-y border-cream/10 bg-cream/[0.02]";

  const loop = [...display, ...display];
  const duration = Math.max(56, display.length * 2.6);

  return (
    <div className={`relative overflow-hidden py-3 ${base} ${className}`}>
      <div className="marquee-mask flex">
        <div
          className="flex shrink-0 items-center gap-6 pr-6 whitespace-nowrap"
          style={{ animation: `marquee ${duration}s linear infinite` }}
        >
          {loop.map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-6">
              <span className="text-[11px] font-semibold uppercase tracking-civic text-cream/80">
                {item}
              </span>
              <Star className="h-3 w-3 shrink-0 text-gold" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function MarqueePlaceholder({ tone = "burgundy" }: { tone?: "burgundy" | "muted" }) {
  const base =
    tone === "burgundy"
      ? "border-y border-burgundy-bright/25 bg-burgundy-deep/20"
      : "border-y border-cream/10 bg-cream/[0.02]";
  return <div className={`h-11 ${base}`} aria-hidden />;
}

export const Marquee = dynamic<MarqueeProps>(
  () => Promise.resolve({ default: MarqueeTrack }),
  {
    ssr: false,
    loading: () => <MarqueePlaceholder />,
  },
);
