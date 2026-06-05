import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { citizens, getCitizen } from "@/lib/citizens";
import { ministries } from "@/lib/ministries";
import { Avatar } from "@/components/Avatar";
import { Reveal } from "@/components/Reveal";
import { StatusBadge, NicknameBadge, Eyebrow } from "@/components/civic";

export function generateStaticParams() {
  return citizens.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCitizen(slug);
  if (!c) return { title: "Citizen Not Found" };
  return { title: c.name, description: `${c.name} — ${c.title}` };
}

function Panel({
  title,
  accent,
  children,
}: {
  title: string;
  accent?: "gold" | "burgundy";
  children: React.ReactNode;
}) {
  return (
    <div className="doc-panel p-6 sm:p-7">
      <h2
        className={`font-display text-lg font-semibold uppercase tracking-wide ${
          accent === "burgundy" ? "text-burgundy-bright" : "text-cream"
        }`}
      >
        {title}
      </h2>
      <div className="mt-2 mb-4 h-px w-full border-b border-dashed border-cream/15" />
      <div>{children}</div>
    </div>
  );
}

export default async function CitizenProfile({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const citizen = getCitizen(slug);
  if (!citizen) notFound();

  const ministry = ministries.find((m) => m.name === citizen.ministry);

  return (
    <div className="pt-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <Link
            href="/citizens"
            className="inline-flex items-center gap-2 text-sm text-cream-faint transition-colors hover:text-cream"
          >
            ← Back to Directory
          </Link>
        </Reveal>

        {/* Profile header */}
        <Reveal delay={0.05}>
          <div className="doc-panel relative mt-6 overflow-hidden p-8 sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-15" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/10 blur-[90px]" />
            <div className="label absolute left-5 top-4 text-cream-faint/70">
              Ministry of Admission · Personal File
            </div>
            <div className="relative mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">
              <Avatar photo={citizen.photo} name={citizen.name} size={140} className="grayscale-[30%] ring-2 ring-gold/40" />
              <div className="flex-1">
                <div className="mb-4">
                  <StatusBadge tone={citizen.statusTone} size="lg">
                    {citizen.status}
                  </StatusBadge>
                </div>
                <h1 className="font-display text-5xl font-semibold text-cream">
                  {citizen.name}
                </h1>
                {citizen.nickname && (
                  <NicknameBadge nickname={citizen.nickname} size="lg" />
                )}
                <p className="mt-2 max-w-xl text-gold/90">{citizen.title}</p>
                <p className="mt-3 font-display text-lg italic text-cream-dim">
                  &ldquo;{citizen.motto}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Body */}
        <div className="mt-6 grid gap-5 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-5">
            <Reveal>
              <Panel title="Biography">
                <p className="leading-relaxed text-cream-dim">{citizen.bio}</p>
              </Panel>
            </Reveal>

            <Reveal>
              <Panel title="Achievements" accent="gold">
                <ul className="space-y-3">
                  {citizen.achievements.map((a) => (
                    <li key={a} className="flex gap-3 text-cream-dim">
                      <span className="mt-1 text-gold">✦</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </Panel>
            </Reveal>

            <Reveal>
              <Panel title="Known Crimes Against Tippa" accent="burgundy">
                <ul className="space-y-3">
                  {citizen.crimes.map((a) => (
                    <li key={a} className="flex gap-3 text-cream-dim">
                      <span className="mt-0.5 font-mono text-xs text-burgundy-bright">
                        §
                      </span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </Panel>
            </Reveal>

            <Reveal>
              <Panel title="Famous Quotes">
                <div className="space-y-4">
                  {citizen.quotes.map((q) => (
                    <blockquote
                      key={q}
                      className="border-l-2 border-gold/40 pl-4 font-display text-lg italic text-cream"
                    >
                      &ldquo;{q}&rdquo;
                    </blockquote>
                  ))}
                </div>
              </Panel>
            </Reveal>

            <Reveal>
              <Panel title="Historical Contributions">
                <ul className="space-y-3">
                  {citizen.contributions.map((a) => (
                    <li key={a} className="flex gap-3 text-cream-dim">
                      <span className="mt-1 text-gold/70">▣</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </Panel>
            </Reveal>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <Reveal>
              <Panel title="Party Debt" accent="burgundy">
                <div className="font-display text-2xl font-semibold text-burgundy-bright">
                  {citizen.partyDebt}
                </div>
                <p className="mt-2 text-xs text-cream-faint">
                  As recorded by the Ministry of Finance. Subject to lovingly
                  applied interest.
                </p>
              </Panel>
            </Reveal>

            <Reveal>
              <Panel title="Citizen Status">
                <dl className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <dt className="text-cream-faint">Standing</dt>
                    <dd className="text-cream">{citizen.status}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-cream-faint">Ministry</dt>
                    <dd className="text-right text-cream">
                      {ministry ? (
                        <Link
                          href={`/ministries#${ministry.slug}`}
                          className="text-gold hover:text-gold-bright"
                        >
                          {citizen.ministry}
                        </Link>
                      ) : (
                        citizen.ministry
                      )}
                    </dd>
                  </div>
                  {citizen.nickname && (
                    <div className="flex items-center justify-between">
                      <dt className="text-cream-faint">Alias</dt>
                      <dd className="text-cream">{citizen.nickname}</dd>
                    </div>
                  )}
                </dl>
              </Panel>
            </Reveal>

            <Reveal>
              <Panel title="Recent Activities">
                <ol className="relative space-y-5 border-l border-cream/10 pl-5">
                  {citizen.recent.map((r) => (
                    <li key={r.text} className="relative">
                      <span className="absolute -left-[1.45rem] top-1 h-2 w-2 rounded-full bg-gold ring-4 ring-charcoal" />
                      <div className="font-mono text-[10px] uppercase tracking-widest text-gold/70">
                        {r.date}
                      </div>
                      <div className="mt-1 text-sm text-cream-dim">{r.text}</div>
                    </li>
                  ))}
                </ol>
              </Panel>
            </Reveal>
          </div>
        </div>

        {/* Footer nav */}
        <Reveal>
          <div className="my-12 flex items-center justify-between rounded-2xl border border-cream/10 bg-cream/[0.02] p-6">
            <Eyebrow>End of State Record</Eyebrow>
            <Link
              href="/citizens"
              className="text-sm font-medium text-gold hover:text-gold-bright"
            >
              View all citizens →
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
