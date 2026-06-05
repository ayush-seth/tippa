import Link from "next/link";
import { Seal } from "./Seal";
import { Star } from "./civic";

const cols: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "The Republic",
    links: [
      { href: "/citizens", label: "Citizens" },
      { href: "/constitution", label: "Constitution" },
    ],
  },
  {
    title: "State Affairs",
    links: [
      { href: "/announcements", label: "Announcements" },
      { href: "/ecosystem", label: "Ecosystem" },
      { href: "/citizens", label: "Apply for Citizenship" },
    ],
  },
];

export function NationFooter() {
  return (
    <footer className="relative mt-24 border-t border-cream/10">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-40" />
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Seal size={48} />
              <div>
                <div className="font-display text-lg font-semibold text-cream">
                  Republic of Tippa
                </div>
                <div className="text-[10px] uppercase tracking-civic text-gold/70">
                  Founded near Tippasandra, Bengaluru
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-faint">
              A sovereign digital nation dedicated to preserving friendships,
              parties, memories, scandals, and administrative chaos.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] uppercase tracking-civic text-gold/80">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-cream-dim transition-colors hover:text-cream"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex items-center justify-center gap-3 border-t border-cream/10 pt-8 text-[11px] uppercase tracking-civic text-burgundy-bright/80">
          <Star className="h-3 w-3" />
          Long Live The People&rsquo;s Republic of Tippa
          <Star className="h-3 w-3" />
        </div>

        <div className="mt-8 grid gap-4 text-center sm:grid-cols-2 sm:text-left">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-cream-dim sm:justify-start">
            <span className="font-display italic text-cream">For Tippa. By Tippa.</span>
            <span className="text-gold/40">·</span>
            <span>Established 2026.</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-xs text-cream-faint sm:items-end">
            <span className="text-gold/80">Friendship Is Infrastructure.</span>
            <span>Preserving History Since Last Weekend.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
