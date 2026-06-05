type SealProps = {
  size?: number;
  className?: string;
  spin?: boolean;
};

export function Seal({ size = 64, className = "", spin = false }: SealProps) {
  return (
    // Native img avoids optimizer issues with the seal asset format
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/republic-seal.png"
      alt="Seal of the Republic of Tippa"
      width={size}
      height={size}
      className={`bg-transparent object-contain ${spin ? "animate-spin-slow" : ""} ${className}`.trim()}
      style={spin ? { transformOrigin: "center center" } : undefined}
      decoding="async"
      fetchPriority={size >= 72 ? "high" : "auto"}
    />
  );
}
