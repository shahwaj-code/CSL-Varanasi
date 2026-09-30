/**
 * Lightweight CSS-only ember/particle layer for the hero section.
 * Purely decorative: pointer-events none, no JS timers.
 */
const EMBERS = Array.from({ length: 26 }, (_, i) => {
  const rnd = (n: number) => ((i * 9301 + n * 49297) % 233280) / 233280;
  return {
    left: `${Math.round(rnd(1) * 100)}%`,
    size: 2 + Math.round(rnd(2) * 4),
    delay: `${(rnd(3) * 9).toFixed(2)}s`,
    duration: `${(7 + rnd(4) * 8).toFixed(2)}s`,
    drift: `${Math.round(rnd(5) * 80 - 40)}px`,
    opacity: 0.35 + rnd(6) * 0.5,
  };
});

export function HeroParticles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden z-[5]">
      {EMBERS.map((e, i) => (
        <span
          key={i}
          className="ember"
          style={{
            left: e.left,
            width: e.size,
            height: e.size,
            animationDelay: e.delay,
            animationDuration: e.duration,
            opacity: e.opacity,
            ["--drift" as string]: e.drift,
          }}
        />
      ))}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--gold)]/12 to-transparent animate-glow-pulse" />
    </div>
  );
}
