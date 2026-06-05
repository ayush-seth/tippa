import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Star } from "./civic";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  fileRef?: string;
};

export function PageHeader({ eyebrow, title, description, fileRef }: Props) {
  return (
    <section className="relative overflow-hidden pt-36 pb-14">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-grid opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-2.5">
            <Star className="h-3.5 w-3.5 text-burgundy-bright" />
            <span className="text-[11px] uppercase tracking-civic text-gold/80">
              {eyebrow}
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-cream sm:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-dim">
              {description}
            </p>
          </Reveal>
        )}
        {fileRef && (
          <Reveal delay={0.15}>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cream/10 bg-cream/[0.03] px-3 py-1 font-mono text-[11px] text-cream-faint">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-soft" />
              {fileRef}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
