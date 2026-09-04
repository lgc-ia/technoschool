"use client";

import { useEffect, useRef } from "react";

const COLORS = ["#d946ef", "#a855f7", "#c026d3", "#9333ea", "#ec4899", "#7c3aed"];
const SPRITE_SIZE = 48;

type Particle = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  colorIndex: number;
  alpha: number;
  phase: number;
};

function buildGlowSprites() {
  return COLORS.map((color) => {
    const sprite = document.createElement("canvas");
    sprite.width = SPRITE_SIZE;
    sprite.height = SPRITE_SIZE;
    const sctx = sprite.getContext("2d")!;
    const center = SPRITE_SIZE / 2;
    const gradient = sctx.createRadialGradient(center, center, 0, center, center, center);
    gradient.addColorStop(0, color);
    gradient.addColorStop(0.35, color);
    gradient.addColorStop(1, "transparent");
    sctx.fillStyle = gradient;
    sctx.fillRect(0, 0, SPRITE_SIZE, SPRITE_SIZE);
    return sprite;
  });
}

export function Particles({
  count = 80,
  size = 1,
}: {
  count?: number;
  size?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = canvas.clientWidth;
    let height = canvas.clientHeight;

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      if (width === 0 || height === 0) return;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    resize();

    const sprites = buildGlowSprites();
    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: (Math.random() * 1.6 + 0.6) * size,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      colorIndex: Math.floor(Math.random() * COLORS.length),
      alpha: Math.random() * 0.5 + 0.35,
      phase: Math.random() * Math.PI * 2,
    }));

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        const twinkle = (Math.sin(t * 0.001 + p.phase) + 1) * 0.5;
        const spriteSize = p.r * 12;
        ctx.globalAlpha = p.alpha * (0.45 + twinkle * 0.55);
        ctx.drawImage(
          sprites[p.colorIndex],
          p.x - spriteSize / 2,
          p.y - spriteSize / 2,
          spriteSize,
          spriteSize
        );
      }
      ctx.globalAlpha = 1;
    };

    if (reduceMotion) {
      draw(0);
      const ro = new ResizeObserver(() => {
        resize();
        draw(0);
      });
      ro.observe(canvas);
      return () => ro.disconnect();
    }

    let raf = 0;
    let running = true;

    const tick = (t: number) => {
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -5) p.x = width + 5;
        else if (p.x > width + 5) p.x = -5;
        if (p.y < -5) p.y = height + 5;
        else if (p.y > height + 5) p.y = -5;
      }
      draw(t);
      if (running) raf = requestAnimationFrame(tick);
    };

    const handleVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    document.addEventListener("visibilitychange", handleVisibility);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", handleVisibility);
      ro.disconnect();
    };
  }, [count, size]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}
