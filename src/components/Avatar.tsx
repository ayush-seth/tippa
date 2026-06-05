type AvatarProps = {
  photo: number;
  name: string;
  size?: number;
  className?: string;
  ring?: boolean;
};

export function Avatar({ photo, name, size = 96, className = "", ring = true }: AvatarProps) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-none ${
        ring ? "ring-2 ring-gold/35" : ""
      } ${className}`}
      style={{ width: size, height: size }}
    >
      <span
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-burgundy/40 to-charcoal-3"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.pravatar.cc/${Math.round(size * 2)}?img=${photo}`}
        alt={`Official state portrait of ${name}`}
        width={size}
        height={size}
        loading="lazy"
        className="relative h-full w-full object-cover"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-cream/15"
      />
      {/* ID photo corner marks */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-2 w-2 border-l-2 border-t-2 border-cream/25"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-2 w-2 border-b-2 border-r-2 border-cream/25"
      />
    </span>
  );
}
