import type { Metadata } from "next";
import Link from "next/link";
import { citizens } from "@/lib/citizens";
import { Reveal } from "@/components/Reveal";
import { RegistryComingSoonPanel } from "@/components/RegistryComingSoonPanel";
import { Stamp } from "@/components/Stamp";
import { Seal } from "@/components/Seal";

export function generateStaticParams() {
  return citizens.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: "Dossier Classified",
    description: `Citizen file ${slug} remains under government processing and is not available for public inspection.`,
  };
}

export default async function CitizenProfileBlocked({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const fileRef = `TIPPA/CR/${slug.toUpperCase()}/███`;

  return (
    <div className="pt-28">
      <div className="mx-auto max-w-3xl px-6 pb-20">
        <Reveal>
          <Link
            href="/citizens"
            className="inline-flex items-center gap-2 text-sm text-cream-faint transition-colors hover:text-cream"
          >
            ← Return to Registry
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="doc-panel relative mt-8 overflow-hidden p-8 text-center sm:p-12">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-15" />
            <div className="label absolute left-5 top-4 text-cream-faint/70">
              Ministry of Admission · Restricted File
            </div>

            <div className="relative flex justify-center">
              <Seal size={72} className="opacity-80" />
            </div>

            <div className="relative mt-6 flex flex-wrap justify-center gap-2">
              <Stamp label="Classified" tone="denied" size="md" withStar={false} />
              <Stamp label="Access Denied" tone="denied" size="sm" withStar={false} />
            </div>

            <h1 className="relative mt-6 font-display text-3xl font-semibold uppercase tracking-wide text-cream sm:text-4xl">
              This Dossier Remains Classified
            </h1>

            <p className="relative mx-auto mt-4 max-w-md font-mono text-[11px] uppercase tracking-widest text-cream-faint">
              {fileRef}
            </p>

            <p className="relative mx-auto mt-6 max-w-lg text-sm leading-relaxed text-cream-dim">
              Citizen profiles have not been cleared for public release. The file you
              requested exists somewhere in the national archive — but the Ministry of
              Records is not prepared to show it to you yet.
            </p>

            <p className="relative mt-4 text-sm italic text-cream-faint">
              The Republic knows. The Republic is not ready.
            </p>

            <Link
              href="/citizens"
              className="relative mt-8 inline-flex items-center gap-2 rounded-sm border border-gold/35 bg-gold/10 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-gold transition-colors hover:bg-gold/20"
            >
              View Registry Status
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8">
            <RegistryComingSoonPanel compact showBlockers />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
