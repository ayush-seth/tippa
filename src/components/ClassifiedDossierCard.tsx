import { Stamp } from "./Stamp";

type Props = {
  fileId: string;
  statusLabel: string;
  clearance?: string;
  compact?: boolean;
};

function Silhouette({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 80"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <ellipse cx="32" cy="22" rx="14" ry="16" opacity="0.35" />
      <path d="M8 72c4-14 14-22 24-22s20 8 24 22" opacity="0.25" />
    </svg>
  );
}

export function ClassifiedDossierCard({
  fileId,
  statusLabel,
  clearance = "LEVEL 2",
  compact = false,
}: Props) {
  const photoSize = compact ? "h-14 w-11" : "h-[4.5rem] w-[3.5rem] sm:h-20 sm:w-16";
  const panelClass = compact
    ? "min-h-[15rem] p-4"
    : "min-h-[17.5rem] p-5 sm:p-6";

  return (
    <div
      className={`doc-panel relative flex h-full flex-col overflow-hidden ${panelClass}`}
      aria-label={`Classified dossier ${fileId}`}
    >
      <div className="label absolute right-3 top-3 text-cream-faint/60">{fileId}</div>
      <div className="label absolute left-3 top-3 text-cream-faint/50">{clearance}</div>

      <div className="pointer-events-none absolute -right-1 bottom-16 rotate-[-14deg] opacity-95">
        <Stamp label="Restricted" tone="denied" size="sm" withStar={false} />
      </div>

      <div className="mt-8 flex items-start gap-4">
        <div
          className={`relative shrink-0 overflow-hidden border border-cream/15 bg-charcoal-3 ${photoSize}`}
        >
          <Silhouette className="absolute inset-0 h-full w-full text-cream/30" />
          <div className="absolute inset-0 bg-charcoal/50 backdrop-blur-[6px]" />
          <div className="absolute inset-x-0 top-1/2 h-2 -translate-y-1/2 bg-charcoal" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-[8px] font-bold uppercase tracking-widest text-stamp-red/90">
              ███
            </span>
          </div>
        </div>

        <div className="min-w-0 flex-1 space-y-2 pt-1">
          <div className="space-y-1.5">
            <div className="h-2.5 w-[85%] rounded-sm bg-cream/12" />
            <div className="h-2 w-[60%] rounded-sm bg-cream/8" />
          </div>
          <div className="font-mono text-[9px] uppercase tracking-widest text-cream-faint/70">
            Identity · Redacted
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="h-2 w-full rounded-sm bg-cream/[0.06]" />
        <div className="h-2 w-[90%] rounded-sm bg-cream/[0.05]" />
        <div className="h-2 w-[75%] rounded-sm bg-cream/[0.04]" />
      </div>

      <div className="ruled mt-auto space-y-2 border-t border-dashed border-cream/15 pt-4">
        <div className="flex flex-col gap-2 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="label text-cream-faint">File Status</span>
          <Stamp label={statusLabel} tone="neutral" size="sm" withStar={false} />
        </div>
        <div className="flex items-center justify-between gap-2 pt-2 text-[10px]">
          <span className="label text-cream-faint">Access</span>
          <span className="font-mono uppercase tracking-widest text-stamp-red/90">
            Locked
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-3 right-3 text-cream-faint/40" aria-hidden>
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="11" width="14" height="10" rx="1" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </svg>
      </div>
    </div>
  );
}
