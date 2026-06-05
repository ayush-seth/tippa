import Link from "next/link";
import { Hero } from "@/components/Hero";
import { StatsGrid } from "@/components/StatsGrid";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import { Avatar } from "@/components/Avatar";
import { citizens } from "@/lib/citizens";
import { ecosystem } from "@/lib/ecosystem";
import { MotionItem } from "@/components/MotionItem";
import { Marquee } from "@/components/Marquee";
import { Star } from "@/components/civic";
import { Stamp } from "@/components/Stamp";

const foundingChapters = [
  {
    year: "The Beginning",
    title: "A Group, Near Tippasandra",
    text: "It started, as all great nations do, with a handful of friends and far too many unsettled bills. There was no flag, no constitution, only a shared understanding that someone, somewhere, still owed for last weekend.",
  },
  {
    year: "The Awakening",
    title: "Bureaucracy Becomes a Hobby",
    text: "Plans needed organizing. Debts needed tracking. Parties needed planning committees. What began as convenience quietly hardened into institution. The first ministry was formed before anyone realized a government had begun.",
  },
  {
    year: "The Codification",
    title: "Friendship Becomes Infrastructure",
    text: "The lore grew too vast for memory alone. Achievements demanded parties. Parties demanded records. Records demanded archives. And so the Republic was codified — a civic operating system for a friendship that refused to be forgotten.",
  },
  {
    year: "2026",
    title: "Founding Day",
    text: "On this day, the Republic of Tippa declared itself sovereign. Not a chat. Not a group. A nation — with citizens, ministries, a constitution, and a debt ledger that shall outlive us all.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* National Statistics */}
      <section className="relative py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="flex items-center gap-3">
            <Star className="h-3.5 w-3.5 text-burgundy-bright" />
            <span className="text-[11px] uppercase tracking-civic text-gold/80">
                State of the Union
              </span>
            </div>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-cream sm:text-5xl">
              National Statistics
            </h2>
            <p className="mt-4 max-w-xl text-cream-dim">
              Live indicators from across the Republic, compiled by the Office of
              Permanent Record. Figures are accurate, emotionally if not literally.
            </p>
          </Reveal>
          <div className="mt-10">
            <StatsGrid />
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="relative py-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-burgundy/15 blur-[120px]" />
        </div>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="flex items-center gap-3">
              <Star className="h-3.5 w-3.5 text-burgundy-bright" />
              <span className="text-[11px] uppercase tracking-civic text-gold/80">
                Origins
              </span>
            </div>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold text-cream sm:text-5xl">
              How a Friend Group Became a Civilization
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-cream/10 md:grid-cols-2">
            {foundingChapters.map((ch, i) => (
              <Reveal key={ch.title} delay={i * 0.08}>
                <div className="group relative h-full bg-cream/[0.02] p-8 transition-colors hover:bg-cream/[0.04] sm:p-10">
                  <div className="font-mono text-xs uppercase tracking-widest text-gold/70">
                    {ch.year}
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-cream">
                    {ch.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-cream-dim">{ch.text}</p>
                  <div className="mt-6 h-px w-12 bg-gold/40 transition-all duration-500 group-hover:w-24" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Citizens preview */}
      <section className="relative py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <Star className="h-3.5 w-3.5 text-burgundy-bright" />
                  <span className="text-[11px] uppercase tracking-civic text-gold/80">
                    The People
                  </span>
                </div>
                <h2 className="mt-4 font-display text-4xl font-semibold text-cream sm:text-5xl">
                  Citizens of the Republic
                </h2>
              </div>
              <Link
                href="/citizens"
                className="text-sm font-medium text-gold transition-colors hover:text-gold-bright"
              >
                View full directory →
              </Link>
            </div>
          </Reveal>

          <Stagger className="mt-10 flex flex-wrap justify-center gap-5">
            {citizens.slice(0, 8).map((c) => (
              <MotionItem key={c.slug} variants={staggerItem}>
                <Link
                  href={`/citizens/${c.slug}`}
                  className="group flex w-40 flex-col items-center text-center"
                >
                  <Avatar photo={c.photo} name={c.name} size={104} className="transition-transform duration-500 group-hover:scale-105 group-hover:ring-gold/60" />
                  <div className="mt-3 font-display text-lg font-semibold text-cream">
                    {c.name}
                  </div>
                  <div className="mt-0.5 text-[11px] leading-snug text-cream-faint">
                    {c.title.split(" of ")[0]}
                  </div>
                </Link>
              </MotionItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Ecosystem preview */}
      <section className="relative py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <Star className="h-3.5 w-3.5 text-burgundy-bright" />
                  <span className="text-[11px] uppercase tracking-civic text-gold/80">
                    Coming to the Republic
                  </span>
                </div>
                <h2 className="mt-4 font-display text-4xl font-semibold text-cream sm:text-5xl">
                  The National Ecosystem
                </h2>
              </div>
              <Link
                href="/ecosystem"
                className="text-sm font-medium text-gold transition-colors hover:text-gold-bright"
              >
                Explore ecosystem →
              </Link>
            </div>
          </Reveal>

          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ecosystem.slice(0, 4).map((p) => (
              <MotionItem key={p.slug} variants={staggerItem}>
                <div className="group h-full doc-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:ring-gold">
                  <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-gold/25 bg-gold/5 font-display text-xl text-gold">
                    {p.glyph}
                  </div>
                  <div className="mt-4 font-display text-xl font-semibold text-cream">
                    {p.name}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-cream-faint">
                    {p.tagline}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-cream/10 px-2.5 py-1 text-[10px] uppercase tracking-widest text-cream-dim">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-soft" />
                    {p.status}
                  </div>
                </div>
              </MotionItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Propaganda marquee */}
      <div className="my-6">
        <Marquee tone="muted" />
      </div>

      {/* CTA */}
      <section className="relative py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="doc-panel relative overflow-hidden p-10 text-center sm:p-16">
              <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
              <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-burgundy/30 blur-[100px]" />
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-gold/15 blur-[100px]" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 -translate-x-1/2 -translate-y-1/2 text-cream/[0.03]">
                <Star className="h-72 w-72" />
              </div>
              <div className="label absolute left-5 top-4 text-cream-faint/70">Form A-1 · Citizenship Application</div>
              <div className="pointer-events-none absolute right-4 top-10 sm:right-12">
                <Stamp label="Glory To Tippa" tone="gold" size="md" />
              </div>
              <h2 className="relative font-display text-4xl font-semibold text-cream sm:text-5xl">
                Workers of Tippa, Unite.
              </h2>
              <p className="relative mx-auto mt-4 max-w-xl text-cream-dim">
                Citizenship in the People&rsquo;s Republic of Tippa is a lifelong
                honour and a legally binding source of party obligations. Enlist for
                the collective today.
              </p>
              <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/citizens"
                  className="rounded-xl bg-burgundy px-7 py-3.5 text-sm font-semibold text-cream ring-burgundy transition-transform hover:-translate-y-0.5"
                >
                  Apply For Citizenship
                </Link>
                <Link
                  href="/constitution"
                  className="rounded-xl border border-cream/15 bg-cream/[0.03] px-7 py-3.5 text-sm font-semibold text-cream transition-all hover:border-gold/40"
                >
                  Read The Constitution
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
