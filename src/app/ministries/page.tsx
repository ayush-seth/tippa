import type { Metadata } from "next";
import Link from "next/link";
import { ministries } from "@/lib/ministries";
import { PageHeader } from "@/components/PageHeader";
import { Stagger, staggerItem } from "@/components/Reveal";
import { MotionItem } from "@/components/MotionItem";
import { Meter } from "@/components/civic";

export const metadata: Metadata = {
  title: "Ministries",
  description:
    "The governing ministries of the Republic of Tippa — departments of organized chaos.",
};

export default function MinistriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Organs of the People's State"
        title={
          <>
            Ministries of the <span className="text-gradient-gold">People</span>
          </>
        }
        description="A lean cabinet of essential ministries administers the affairs of the People's Republic. Each organ preserves a vital function of national friendship — from finance and foreign affairs to sport, logistics, and the strategic reserve."
        fileRef="ORG CHART · CABINET OF TIPPA · ACTIVE"
      />

      <section className="mx-auto max-w-6xl px-6 pb-10">
        <Stagger className="grid gap-5 md:grid-cols-2">
          {ministries.map((m) => (
            <MotionItem key={m.slug} variants={staggerItem}>
              <article
                id={m.slug}
                className="doc-panel group relative flex h-full scroll-mt-28 flex-col overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1 hover:ring-gold"
              >
                <div className="label absolute right-4 top-3 text-cream-faint/70">
                  Dept. {m.seal}
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-sm border border-gold/25 bg-gold/5 font-display text-2xl text-gold">
                    {m.seal}
                  </div>
                  <Link
                    href={m.ministerSlug ? `/citizens/${m.ministerSlug}` : "/citizens"}
                    className="text-right"
                  >
                    <div className="label text-cream-faint">
                      Minister
                    </div>
                    <div className="font-display text-lg text-gold transition-colors group-hover:text-gold-bright">
                      {m.minister}
                    </div>
                  </Link>
                </div>

                <h2 className="mt-5 font-display text-2xl font-semibold text-cream">
                  {m.name}
                </h2>
                <p className="mt-3 leading-relaxed text-cream-dim">{m.description}</p>

                <div className="mt-6">
                  <div className="text-[11px] uppercase tracking-widest text-gold/70">
                    Current Initiatives
                  </div>
                  <ul className="mt-3 space-y-2">
                    {m.initiatives.map((init) => (
                      <li key={init} className="flex gap-2.5 text-sm text-cream-dim">
                        <span className="mt-0.5 text-gold/70">›</span>
                        <span>{init}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6">
                  <div className="text-[11px] uppercase tracking-widest text-gold/70">
                    National Impact
                  </div>
                  <p className="mt-2 mb-3 text-sm italic text-cream">{m.impact}</p>
                  <Meter label="Impact Index" value={m.impactScore} accent="gold" />
                </div>
              </article>
            </MotionItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
