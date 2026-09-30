import { useEffect, useRef } from "react";

type P = { x: number; y: number; vx: number; vy: number; life: number; size: number };

/** Subtle canvas fire trail following the cursor. Desktop + fine-pointer only. */
export function CursorTrail() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: P[] = [];
    const MAX = 90;
    let mx = -100, my = -100, moved = false;

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; moved = true; };
    window.addEventListener("mousemove", onMove, { passive: true });

    let raf = 0;
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      if (moved && particles.length < MAX) {
        for (let i = 0; i < 2; i++) {
          particles.push({
            x: mx + (Math.random() - 0.5) * 6,
            y: my + (Math.random() - 0.5) * 6,
            vx: (Math.random() - 0.5) * 0.6,
            vy: -0.6 - Math.random() * 0.9,
            life: 1,
            size: 3 + Math.random() * 5,
          });
        }
        moved = false;
      }
      ctx.globalCompositeOperation = "lighter";
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]!;
        p.x += p.vx; p.y += p.vy; p.vy -= 0.008; p.life -= 0.022;
        if (p.life <= 0) { particles.splice(i, 1); continue; }
        const r = p.size * p.life;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
        g.addColorStop(0, `rgba(255, 235, 180, ${0.55 * p.life})`);
        g.addColorStop(0.4, `rgba(245, 166, 35, ${0.35 * p.life})`);
        g.addColorStop(1, "rgba(245, 90, 10, 0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[90] hidden md:block"
    />
  );
}
