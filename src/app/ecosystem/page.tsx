import type { Metadata } from "next";
import { ecosystem } from "@/lib/ecosystem";
import type { EcosystemProduct } from "@/lib/types";
import { PageHeader } from "@/components/PageHeader";
import { Stagger, staggerItem } from "@/components/Reveal";
import { MotionItem } from "@/components/MotionItem";
import { Stamp } from "@/components/Stamp";
import { EcosystemIconFrame } from "@/components/EcosystemIcon";

export const metadata: Metadata = {
  title: "National Ecosystem",
  description:
    "The upcoming suite of state-sponsored products powering the Republic of Tippa.",
};

const statusStyle: Record<EcosystemProduct["status"], string> = {
  "Coming Soon": "border-gold/30 bg-gold/5 text-gold",
  "Launching Soon": "border-emerald-400/30 bg-emerald-400/5 text-emerald-300",
  "In Development": "border-sky-400/30 bg-sky-400/5 text-sky-300",
  "Under Construction": "border-amber-400/30 bg-amber-400/5 text-amber-300",
};

const statusStamp: Record<
  EcosystemProduct["status"],
  { label: string; tone: "approved" | "denied" | "gold" | "blue" }
> = {
  "Coming Soon": { label: "Pending", tone: "gold" },
  "Launching Soon": { label: "Approved", tone: "approved" },
  "In Development": { label: "In Review", tone: "blue" },
  "Under Construction": { label: "On Hold", tone: "denied" },
};

export default function EcosystemPage() {
  return (
    <>
      <PageHeader
        eyebrow="National Infrastructure"
        title={
          <>
            The <span className="text-gradient-gold">Tippa</span> Ecosystem
          </>
        }
        description="A sovereign suite of state-sponsored platforms, each engineered to administer a different corner of national life. All systems are under active development by the Office of the Architect."
        fileRef="ROADMAP · MINISTRY OF FUTURE AFFAIRS · CLASSIFIED IN PART"
      />

      <section className="mx-auto max-w-6xl px-6 pb-10">
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ecosystem.map((p) => (
            <MotionItem key={p.slug} variants={staggerItem}>
              <article className="doc-panel group relative flex h-full flex-col overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1 hover:ring-gold">
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute bottom-24 right-3 opacity-0 transition-opacity duration-300 group-hover:opacity-95">
                  <Stamp
                    label={statusStamp[p.status].label}
                    tone={statusStamp[p.status].tone}
                    size="sm"
                    withStar={false}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <EcosystemIconFrame slug={p.slug} size="md" />
                  <span
                    className={`rounded-full border px-3 py-1 text-[10px] font-medium uppercase tracking-widest ${statusStyle[p.status]}`}
                  >
                    {p.status}
                  </span>
                </div>

                <h2 className="mt-5 font-display text-2xl font-semibold text-cream">
                  {p.name}
                </h2>
                <p className="mt-1 text-sm font-medium text-gold/80">{p.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-cream-faint">
                  {p.description}
                </p>

                <ul className="mt-5 grid grid-cols-2 gap-2">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="rounded-lg border border-cream/10 bg-cream/[0.02] px-3 py-2 text-xs text-cream-dim"
                    >
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <div className="flex items-center justify-between border-t border-cream/10 pt-4 text-xs">
                    <span className="text-cream-faint">Pre-register interest</span>
                    <span className="font-medium text-gold/80 transition-transform group-hover:translate-x-1">
                      Notify me →
                    </span>
                  </div>
                </div>
              </article>
            </MotionItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
