import type { Metadata } from "next";
import Link from "next/link";
import { preamble } from "@/lib/constitution";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Seal } from "@/components/Seal";

export const metadata: Metadata = {
  title: "The Constitution",
  description:
    "The founding preamble and supreme law of the Republic of Tippa.",
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
        description="The founding document of the Republic. Ratified on Founding Day, 2026."
        fileRef="DOCUMENT №000-001 · ORIGINAL · DO NOT DEPRECATE"
      />

      <section className="mx-auto max-w-4xl px-6 pb-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-burgundy-deep/25 via-charcoal-2 to-charcoal p-8 sm:p-12">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-15" />
            <div className="relative flex justify-center">
              <Seal size={72} />
            </div>
            <div className="relative mt-5 text-center text-[11px] uppercase tracking-civic text-gold/70">
              Preamble
            </div>
            <div className="relative mx-auto mt-6 max-w-2xl space-y-5">
              <p className="font-display text-base font-semibold uppercase leading-relaxed tracking-wide text-cream sm:text-lg">
                {preamble[0]}
              </p>
              {preamble.slice(1).map((para) => (
                <p
                  key={para.slice(0, 40)}
                  className="text-sm leading-relaxed text-cream-dim sm:text-base"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <Reveal>
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-cream/10 bg-cream/[0.02] p-8 text-center">
            <div className="font-display text-2xl italic text-cream">
              Ratified, sealed, and made eternal.
            </div>
            <p className="max-w-lg text-sm text-cream-faint">
              This Constitution may be amended only by unanimous vote, full quorum,
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
