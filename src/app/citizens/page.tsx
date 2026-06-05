import type { Metadata } from "next";
import Link from "next/link";
import { citizens } from "@/lib/citizens";
import { PageHeader } from "@/components/PageHeader";
import { Avatar } from "@/components/Avatar";
import { Stagger, staggerItem } from "@/components/Reveal";
import { MotionItem } from "@/components/MotionItem";
import { StatusBadge, NicknameBadge } from "@/components/civic";

export const metadata: Metadata = {
  title: "Citizen Directory",
  description:
    "The official directory of citizens of the Republic of Tippa, their titles, status, and standing.",
};

export default function CitizensPage() {
  return (
    <>
      <PageHeader
        eyebrow="National Registry"
        title={
          <>
            Citizens of the <span className="text-gradient-gold">Republic</span>
          </>
        }
        description="The official registry of all sovereign citizens of the People's Republic — their ministerial titles, standing, and aliases. Click any citizen to view their full state record."
        fileRef="FORM C-1 · CENSUS DIVISION · 17 COMRADES REGISTERED"
      />

      <section className="mx-auto max-w-6xl px-6 pb-10">
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {citizens.map((c, i) => (
            <MotionItem key={c.slug} variants={staggerItem} className="h-full">
              <Link
                href={`/citizens/${c.slug}`}
                className="doc-panel group relative flex h-full min-h-[17.5rem] flex-col overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:ring-gold"
              >
                <div className="label absolute right-3 top-3 text-cream-faint/70">
                  ID-{String(i + 1).padStart(3, "0")}
                </div>

                <div className="flex items-start gap-4">
                  <Avatar
                    photo={c.photo}
                    name={c.name}
                    size={72}
                    className="shrink-0 grayscale-[35%] transition-all duration-300 group-hover:grayscale-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-2xl font-semibold leading-tight text-cream">
                      {c.name}
                    </h3>
                    {c.nickname && <NicknameBadge nickname={c.nickname} />}
                  </div>
                </div>

                <p className="mt-4 min-h-10 text-xs leading-snug text-cream-dim line-clamp-2">
                  {c.title}
                </p>

                <div className="ruled mt-auto space-y-2.5 border-t border-dashed border-cream/15 pt-4">
                  <div className="flex flex-col gap-2 pt-2.5 sm:flex-row sm:items-center sm:justify-between">
                    <span className="label text-cream-faint">Status</span>
                    <StatusBadge tone={c.statusTone} size="md">
                      {c.status}
                    </StatusBadge>
                  </div>
                  <div className="flex min-h-10 items-start justify-between gap-3 pt-2.5 text-xs">
                    <span className="label shrink-0 text-cream-faint">Assignment</span>
                    <span className="line-clamp-2 text-right text-cream-dim">
                      {c.ministry.replace("Ministry of ", "Min. of ").replace("Office of the ", "")}
                    </span>
                  </div>
                </div>
              </Link>
            </MotionItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
