import type { Metadata } from "next";
import { citizens } from "@/lib/citizens";
import { PageHeader } from "@/components/PageHeader";
import { ClassifiedDossierCard } from "@/components/ClassifiedDossierCard";
import { RegistryComingSoonPanel } from "@/components/RegistryComingSoonPanel";
import { Stagger, staggerItem } from "@/components/Reveal";
import { MotionItem } from "@/components/MotionItem";
import { REGISTRY_STATUS, registryStatusForIndex } from "@/lib/citizens-registry";
import { Stamp } from "@/components/Stamp";

export const metadata: Metadata = {
  title: "Citizen Registry",
  description:
    "The Republic's official citizen database — currently under government processing. Profiles classified until further notice.",
};

export default function CitizensPage() {
  const dossierCount = citizens.length;

  return (
    <>
      <PageHeader
        eyebrow="Ministry of Records"
        title={
          <>
            Citizen <span className="text-gradient-gold">Registry</span>
          </>
        }
        description="The Republic's official database of citizens, achievements, scandals, party debt, constitutional violations, and historical contributions."
        fileRef={`FORM C-1 · CENSUS DIVISION · ${dossierCount} DOSSIERS SEALED`}
      />

      <section className="mx-auto max-w-6xl px-6 pb-6">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <Stamp label={REGISTRY_STATUS} tone="gold" size="md" withStar={false} />
          <Stamp label="Restricted Access" tone="denied" size="sm" withStar={false} />
          <span className="label text-cream-faint">
            Public release pending · No individual files available
          </span>
        </div>
        <RegistryComingSoonPanel />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px flex-1 bg-cream/10" />
          <span className="label text-cream-faint">Sealed dossiers on file</span>
          <span className="h-px flex-1 bg-cream/10" />
        </div>
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {citizens.map((_, i) => (
            <MotionItem key={i} variants={staggerItem} className="h-full">
              <ClassifiedDossierCard
                fileId={`FILE-${String(i + 1).padStart(3, "0")}`}
                statusLabel={registryStatusForIndex(i)}
                clearance={`CLR-${(i % 4) + 1}`}
              />
            </MotionItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
