import { Stamp } from "./Stamp";
import {
  REGISTRY_STATUS,
  registryBlockers,
  registryComingSoonBody,
  registryComingSoonLead,
} from "@/lib/citizens-registry";

type Props = {
  showBlockers?: boolean;
  compact?: boolean;
};

export function RegistryComingSoonPanel({ showBlockers = true, compact = false }: Props) {
  return (
    <div className={`doc-panel relative overflow-hidden ${compact ? "p-6 sm:p-8" : "p-8 sm:p-10"}`}>
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.12]" />
      <div className="label absolute left-5 top-4 text-cream-faint/70">
        Ministry of Records · Internal Notice
      </div>
      <div className="pointer-events-none absolute right-4 top-8 sm:right-8 sm:top-10">
        <Stamp label={REGISTRY_STATUS} tone="gold" size="md" withStar={false} />
      </div>

      <div className="relative mt-10 max-w-3xl">
        <h2 className="font-display text-2xl font-semibold uppercase tracking-wide text-cream sm:text-3xl">
          Profiles Not Yet Cleared For Release
        </h2>
        <p className="mt-4 text-base leading-relaxed text-cream-dim">{registryComingSoonLead}</p>
        {registryComingSoonBody.map((para) => (
          <p key={para.slice(0, 32)} className="mt-3 text-sm leading-relaxed text-cream-faint">
            {para}
          </p>
        ))}

        {showBlockers && (
          <div className="mt-6 border border-dashed border-cream/15 bg-charcoal-3/50 p-5">
            <div className="label text-gold/80">Current blockers</div>
            <ul className="mt-3 space-y-2">
              {registryBlockers.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-cream-dim">
                  <span className="text-burgundy-bright">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 font-display text-lg text-gold/90">
              Expected launch: <span className="text-cream">Soon™</span>
            </p>
          </div>
        )}

        <p className="mt-5 font-mono text-[10px] uppercase tracking-widest text-cream-faint/60">
          Profiles will be released after sufficient paperwork has been ignored.
        </p>
      </div>
    </div>
  );
}
