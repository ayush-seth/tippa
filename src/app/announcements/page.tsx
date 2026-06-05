import type { Metadata } from "next";
import { announcements } from "@/lib/announcements";
import type { Announcement } from "@/lib/types";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Seal } from "@/components/Seal";
import { Stamp } from "@/components/Stamp";

const memoStamp: Record<
  Announcement["classification"],
  { label: string; tone: "approved" | "denied" | "gold" | "blue" }
> = {
  Public: { label: "Approved", tone: "approved" },
  Ceremonial: { label: "Glory To Tippa", tone: "gold" },
  Confidential: { label: "Classified", tone: "denied" },
  Restricted: { label: "Restricted", tone: "denied" },
};

export const metadata: Metadata = {
  title: "Announcements",
  description:
    "Official proclamations and classified state memos from the Republic of Tippa.",
};

const stampStyle: Record<Announcement["classification"], string> = {
  Public: "border-emerald-400/40 text-emerald-300 rotate-[-4deg]",
  Confidential: "border-amber-400/40 text-amber-300 rotate-[3deg]",
  Ceremonial: "border-gold/50 text-gold-bright rotate-[-3deg]",
  Restricted: "border-burgundy-bright/50 text-burgundy-bright rotate-[4deg]",
};

export default function AnnouncementsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Office of the Architect"
        title={
          <>
            Official <span className="text-gradient-gold">Proclamations</span>
          </>
        }
        description="Memos, proclamations, and classified communiqués issued by the State. Reproduction without national seal constitutes treason under Article XIX."
        fileRef="GAZETTE OF TIPPA · DECLASSIFIED FOR PUBLIC RECORD"
      />

      <section className="mx-auto max-w-4xl px-6 pb-10">
        <div className="space-y-7">
          {announcements.map((a, i) => (
            <Reveal key={a.id} delay={Math.min(i * 0.04, 0.2)}>
              <article className="doc-panel perforated group relative overflow-hidden p-7 transition-colors hover:ring-gold sm:p-9">
                <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.08]" />
                <div className="pointer-events-none absolute bottom-20 right-5 sm:right-10">
                  <Stamp
                    label={memoStamp[a.classification].label}
                    tone={memoStamp[a.classification].tone}
                    size="md"
                    withStar={false}
                  />
                </div>

                {/* Memo header */}
                <div className="relative flex items-start justify-between gap-4 border-b border-dashed border-cream/15 pb-5">
                  <div className="flex items-center gap-4">
                    <Seal size={48} className="opacity-90" />
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-gold/70">
                        Republic of Tippa
                      </div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-cream-faint">
                        {a.ministry}
                      </div>
                      <div className="mt-1 font-mono text-[11px] text-cream-dim">
                        FILE №{a.id}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`shrink-0 rounded-md border px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest ${stampStyle[a.classification]}`}
                  >
                    {a.classification}
                  </div>
                </div>

                {/* Body */}
                <div className="relative mt-6">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-cream-faint">
                    {a.date}
                  </div>
                  <h2 className="mt-2 font-display text-3xl font-semibold text-cream">
                    {a.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-cream-dim">{a.body}</p>

                  {a.refs && (
                    <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-cream/10 pt-5">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-cream-faint">
                        Cross-ref:
                      </span>
                      {a.refs.map((r) => (
                        <span
                          key={r}
                          className="rounded-full border border-gold/20 bg-gold/5 px-2.5 py-0.5 text-[11px] text-gold/90"
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Signature */}
                <div className="relative mt-7 flex items-end justify-between">
                  <div>
                    <div className="font-display text-xl italic text-cream/90">
                      By Order of the Republic
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-cream-faint">
                      Sealed · Signed · Henceforth Binding
                    </div>
                  </div>
                  <div className="h-14 w-14 rounded-full seal-ring p-[3px] opacity-60">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-charcoal font-display text-lg text-gold">
                      T
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
