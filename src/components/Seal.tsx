type SealProps = {
  size?: number;
  className?: string;
  spin?: boolean;
};

export function Seal({ size = 64, className = "", spin = false }: SealProps) {
  const id = "seal";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      role="img"
      aria-label="Seal of the Republic of Tippa"
    >
      <defs>
        <linearGradient id={`${id}-gold`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0d089" />
          <stop offset="50%" stopColor="#d8b35e" />
          <stop offset="100%" stopColor="#9c7e3a" />
        </linearGradient>
        <radialGradient id={`${id}-core`} cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#b13145" />
          <stop offset="100%" stopColor="#5c1722" />
        </radialGradient>
        <path id={`${id}-circle`} d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
      </defs>

      <g className={spin ? "animate-spin-slow" : ""} style={{ transformOrigin: "100px 100px" }}>
        {/* Outer ribbon text */}
        <circle cx="100" cy="100" r="96" stroke={`url(#${id}-gold)`} strokeWidth="1" opacity="0.55" />
        <circle cx="100" cy="100" r="88" stroke={`url(#${id}-gold)`} strokeWidth="2" />
        <text
          fill="#d8b35e"
          fontSize="11"
          fontWeight="600"
          letterSpacing="3.4"
          fontFamily="var(--font-mono), monospace"
        >
          <textPath href={`#${id}-circle`} startOffset="0%">
            REPUBLIC OF TIPPA · EST. 2026 · FRIENDSHIP IS INFRASTRUCTURE ·
          </textPath>
        </text>
      </g>

      {/* Tick marks */}
      <g stroke="#d8b35e" strokeWidth="1.4" opacity="0.7">
        {Array.from({ length: 48 }).map((_, i) => {
          const a = (i / 48) * Math.PI * 2;
          const r1 = 80;
          const r2 = i % 4 === 0 ? 72 : 76;
          return (
            <line
              key={i}
              x1={r(100 + Math.cos(a) * r1)}
              y1={r(100 + Math.sin(a) * r1)}
              x2={r(100 + Math.cos(a) * r2)}
              y2={r(100 + Math.sin(a) * r2)}
            />
          );
        })}
      </g>

      {/* Core crest */}
      <circle cx="100" cy="100" r="58" fill={`url(#${id}-core)`} />
      <circle cx="100" cy="100" r="58" stroke={`url(#${id}-gold)`} strokeWidth="2.5" />

      {/* Rays behind monogram */}
      <g stroke="#f0d089" strokeWidth="1" opacity="0.35">
        {Array.from({ length: 16 }).map((_, i) => {
          const a = (i / 16) * Math.PI * 2;
          return (
            <line
              key={i}
              x1={100}
              y1={100}
              x2={r(100 + Math.cos(a) * 52)}
              y2={r(100 + Math.sin(a) * 52)}
            />
          );
        })}
      </g>

      {/* Monogram T */}
      <text
        x="100"
        y="118"
        textAnchor="middle"
        fontFamily="var(--font-fraunces), serif"
        fontSize="74"
        fontWeight="700"
        fill={`url(#${id}-gold)`}
      >
        T
      </text>

      {/* Stars */}
      <g fill="#f0d089">
        <Star cx={100} cy={48} r={5} />
        <Star cx={64} cy={140} r={3.6} />
        <Star cx={136} cy={140} r={3.6} />
      </g>
    </svg>
  );
}

function r(n: number) {
  return Math.round(n * 100) / 100;
}

function Star({ cx, cy, r: radiusOuter }: { cx: number; cy: number; r: number }) {
  const pts: string[] = [];
  for (let i = 0; i < 10; i++) {
    const radius = i % 2 === 0 ? radiusOuter : radiusOuter / 2.3;
    const a = (Math.PI / 5) * i - Math.PI / 2;
    pts.push(`${r(cx + Math.cos(a) * radius)},${r(cy + Math.sin(a) * radius)}`);
  }
  return <polygon points={pts.join(" ")} />;
}
