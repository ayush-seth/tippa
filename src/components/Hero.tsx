"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Seal } from "./Seal";
import { Marquee } from "./Marquee";
import { Star } from "./civic";
import { Stamp } from "./Stamp";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-burgundy/15 blur-[120px]" />
        <div className="absolute right-10 top-60 h-72 w-72 rounded-full bg-olive/10 blur-[100px]" />
      </div>
      <div className="pointer-events-none absolute -top-10 left-1/2 -z-10 -translate-x-1/2 text-burgundy-bright/[0.05]">
        <Star className="h-[34rem] w-[34rem] animate-spin-slow" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-grid opacity-[0.18] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      <div className="mx-auto max-w-3xl px-6">
        {/* Stencil checkpoint banner */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center justify-center gap-3 text-burgundy-bright"
        >
          <Star className="h-3.5 w-3.5" />
          <span className="font-display text-sm font-semibold uppercase tracking-civic">
            Glory To Tippa
          </span>
          <Star className="h-3.5 w-3.5" />
        </motion.div>

        {/* Inspection booth window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="doc-panel relative px-6 py-10 text-center sm:px-12 sm:py-14"
        >
          {/* corner labels */}
          <div className="label absolute left-4 top-3 text-cream-faint">Doc. N° TPA-001</div>
          <div className="label absolute right-4 top-3 text-cream-faint">Booth 1</div>
          <div className="absolute -right-3 -top-3 sm:right-4 sm:top-10">
            <Stamp label="Entry Visa Required" tone="denied" size="sm" withStar={false} />
          </div>

          <div className="flex justify-center">
            <div className="animate-float-slow">
              <Seal size={92} className="glow-gold" />
            </div>
          </div>

          <div className="mt-6 inline-flex items-center gap-2.5 border border-burgundy-bright/30 bg-burgundy-deep/20 px-4 py-1.5">
            <Star className="h-3 w-3 text-burgundy-bright animate-pulse-soft" />
            <span className="label text-cream/90">Workers of Tippa, Unite · Founding Day</span>
            <Star className="h-3 w-3 text-burgundy-bright animate-pulse-soft" />
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight text-cream sm:text-7xl">
            Republic of <span className="text-gradient-gold">Tippa</span>
          </h1>

          <p className="mt-4 font-display text-xl font-medium uppercase tracking-wide text-cream-dim sm:text-2xl">
            The Operating System For Friendship
          </p>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-cream-faint sm:text-base">
            A sovereign digital nation dedicated to preserving friendships, parties,
            memories, scandals, achievements, annual traditions, and administrative
            chaos.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/citizens"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-sm border border-burgundy-bright/40 bg-burgundy px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-cream transition-transform hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cream/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              Apply For Citizenship
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/announcements"
              className="inline-flex items-center gap-2 rounded-sm border border-cream/20 bg-cream/[0.03] px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-cream transition-all hover:border-gold/40 hover:bg-cream/[0.06]"
            >
              Enter The Republic
            </Link>
          </div>

          <div className="mt-6 label text-cream-faint">
            Present your documents for inspection
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 flex items-center justify-center gap-2 text-center text-[11px] uppercase tracking-civic text-burgundy-bright/80"
        >
          <Star className="h-3 w-3" />
          From each according to their vibe, to each according to their thirst
          <Star className="h-3 w-3" />
        </motion.p>
      </div>

      <div className="mt-12">
        <Marquee />
      </div>
    </section>
  );
}
