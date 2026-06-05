import type { Metadata } from "next";
import Link from "next/link";
import { articles, preamble } from "@/lib/constitution";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import { MotionItem } from "@/components/MotionItem";
import { Seal } from "@/components/Seal";

export const metadata: Metadata = {
  title: "The Constitution",
  description:
    "The founding articles and supreme law of the Republic of Tippa.",
};

export default function ConstitutionPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Supreme Law"
        title={
          <>
            The <span className="text-gradient-gold">Constitution</span> of Tippa
          </>
        }
        description="The founding document of the Republic. Thirty articles binding every citizen to a life of celebration, accountability, and unsettled debts. Ratified on Founding Day, 2026."
        fileRef="DOCUMENT №000-001 · ORIGINAL · DO NOT DEPRECATE"
      />

      {/* Preamble */}
      <section className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-burgundy-deep/25 via-charcoal-2 to-charcoal p-8 text-center sm:p-12">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-15" />
            <div className="relative flex justify-center">
              <Seal size={72} />
            </div>
            <div className="relative mt-5 text-[11px] uppercase tracking-civic text-gold/70">
              Preamble
            </div>
            <p className="relative mx-auto mt-4 max-w-2xl font-display text-xl italic leading-relaxed text-cream sm:text-2xl">
              {preamble}
            </p>
          </div>
        </Reveal>
      </section>

      {/* Articles */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <Stagger className="grid gap-4 sm:grid-cols-2">
          {articles.map((art) => (
            <MotionItem key={art.numeral} variants={staggerItem}>
              <div className="group flex h-full gap-5 rounded-2xl glass p-6 transition-all duration-500 hover:ring-gold">
                <div className="shrink-0">
                  <div className="font-display text-3xl font-semibold text-gradient-gold">
                    {art.numeral}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-gold/60">
                    Article {art.numeral} · {art.title}
                  </div>
                  <p className="mt-2 leading-relaxed text-cream-dim">{art.text}</p>
                </div>
              </div>
            </MotionItem>
          ))}
        </Stagger>
      </section>

      {/* Ratification */}
      <section className="mx-auto max-w-4xl px-6 pb-8">
        <Reveal>
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-cream/10 bg-cream/[0.02] p-8 text-center">
            <div className="font-display text-2xl italic text-cream">
              Ratified, sealed, and made eternal.
            </div>
            <p className="max-w-lg text-sm text-cream-faint">
              These articles may be amended only by unanimous vote, full quorum,
              and the production of snacks. No citizen may plead ignorance of the
              law, especially regarding birthdays.
            </p>
            <Link
              href="/citizens"
              className="mt-2 rounded-xl bg-burgundy px-6 py-3 text-sm font-semibold text-cream ring-burgundy transition-transform hover:-translate-y-0.5"
            >
              Swear the Oath of Citizenship
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
