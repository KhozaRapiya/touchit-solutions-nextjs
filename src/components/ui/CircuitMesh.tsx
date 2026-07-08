"use client";

import { useEffect, useRef } from "react";

interface CircuitMeshProps {
  className?: string;
  count?: number;
  dist?: number;
  dot?: number;
  speed?: number;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface Pulse {
  a: Node;
  b: Node;
  t: number;
}

/**
 * Live circuit-mesh network rendered on a canvas.
 * Nodes drift and connect; data "pulses" travel along links to echo the
 * circuit-trace motif in the TouchIT logo. Re-reads the --hero-net CSS
 * variable each frame so it adapts to light/dark mode automatically.
 */
export function CircuitMesh({
  className,
  count = 70,
  dist = 145,
  dot = 2.2,
  speed = 0.35,
}: CircuitMeshProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];
    let raf = 0;
    let w = 0;
    let h = 0;

    const netColor = () =>
      getComputedStyle(document.documentElement).getPropertyValue("--hero-net").trim() || "#0052CC";

    const build = () => {
      const rw = w / dpr;
      const rh = h / dpr;
      const n = Math.min(count, Math.round((rw * rh) / 13000));
      nodes = Array.from({ length: n }, () => ({
        x: Math.random() * rw,
        y: Math.random() * rh,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
      }));
      pulses = [];
    };

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = canvas.width = Math.max(1, r.width * dpr);
      h = canvas.height = Math.max(1, r.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    };

    const step = () => {
      const rw = w / dpr;
      const rh = h / dpr;
      ctx.clearRect(0, 0, rw, rh);
      const c = netColor();

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        if (!reduce) {
          a.x += a.vx;
          a.y += a.vy;
          if (a.x < 0 || a.x > rw) a.vx *= -1;
          if (a.y < 0 || a.y > rh) a.vy *= -1;
        }
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < dist) {
            ctx.strokeStyle = c;
            ctx.globalAlpha = (1 - d / dist) * 0.5;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            if (!reduce && Math.random() < 0.0006) pulses.push({ a, b, t: 0 });
          }
        }
      }

      ctx.globalAlpha = 0.9;
      for (const p of nodes) {
        ctx.fillStyle = c;
        ctx.beginPath();
        ctx.arc(p.x, p.y, dot, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      for (let k = pulses.length - 1; k >= 0; k--) {
        const pu = pulses[k];
        pu.t += 0.03;
        if (pu.t >= 1) {
          pulses.splice(k, 1);
          continue;
        }
        const x = pu.a.x + (pu.b.x - pu.a.x) * pu.t;
        const y = pu.a.y + (pu.b.y - pu.a.y) * pu.t;
        ctx.fillStyle = "#00AEEF";
        ctx.shadowColor = "#00AEEF";
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(x, y, 2.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      raf = requestAnimationFrame(step);
    };

    resize();
    step();

    const onResize = () => {
      cancelAnimationFrame(raf);
      resize();
      step();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [count, dist, dot, speed]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
