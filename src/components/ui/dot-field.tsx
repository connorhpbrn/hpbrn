"use client";

import { useEffect, useRef } from "react";

type Dot = {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
};

type Ripple = {
  x: number;
  y: number;
  radius: number;
  strength: number;
  speed: number;
  maxRadius: number;
};

export function DotField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const spacing = 28;
    const dots: Dot[] = [];
    const ripples: Ripple[] = [];

    let width = 0;
    let height = 0;
    let frameId = 0;
    let mouseX = -9999;
    let mouseY = -9999;

    const setSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots.length = 0;
      for (let y = spacing * 0.5; y < height; y += spacing) {
        for (let x = spacing * 0.5; x < width; x += spacing) {
          dots.push({
            baseX: x,
            baseY: y,
            x,
            y,
            vx: 0,
            vy: 0,
          });
        }
      }
    };

    const onMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const onLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };

    const onClick = (event: MouseEvent) => {
      ripples.push({
        x: event.clientX,
        y: event.clientY,
        radius: 0,
        strength: 1,
        speed: 9.5,
        maxRadius: Math.max(width, height) * 1.2,
      });
    };

    const render = () => {
      context.clearRect(0, 0, width, height);

      for (const dot of dots) {
        const dx = mouseX - dot.x;
        const dy = mouseY - dot.y;
        const distance = Math.hypot(dx, dy);
        const range = 140;
        let waveGlow = 0;

        if (isFinePointer && !reduceMotion && distance < range) {
          const force = (1 - distance / range) * 0.16;
          dot.vx += dx * force * 0.015;
          dot.vy += dy * force * 0.015;
        }

        for (const ripple of ripples) {
          const rx = dot.x - ripple.x;
          const ry = dot.y - ripple.y;
          const rippleDistance = Math.hypot(rx, ry) || 0.0001;
          const band = 44;
          const edgeDistance = Math.abs(rippleDistance - ripple.radius);

          if (edgeDistance < band) {
            const edge = (1 - edgeDistance / band) * ripple.strength;
            const nx = rx / rippleDistance;
            const ny = ry / rippleDistance;
            dot.vx += nx * edge * 0.52;
            dot.vy += ny * edge * 0.52;
            waveGlow += edge * 0.95;
          }
        }

        dot.vx += (dot.baseX - dot.x) * 0.02;
        dot.vy += (dot.baseY - dot.y) * 0.02;
        dot.vx *= 0.86;
        dot.vy *= 0.86;
        dot.x += dot.vx;
        dot.y += dot.vy;

        const brightness = Math.min(1, Math.max(0, 1 - distance / range) + waveGlow);
        const alpha = 0.24 + brightness * 0.72;
        const radius = 0.85 + brightness * 0.58;

        context.beginPath();
        context.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 255, 255, ${alpha.toFixed(3)})`;
        context.fill();
      }

      for (let index = ripples.length - 1; index >= 0; index -= 1) {
        const ripple = ripples[index];
        ripple.radius += ripple.speed;
        ripple.speed *= 0.996;
        ripple.strength *= 0.991;

        if (ripple.radius > ripple.maxRadius || ripple.strength < 0.045) {
          ripples.splice(index, 1);
        }
      }

      frameId = window.requestAnimationFrame(render);
    };

    setSize();
    frameId = window.requestAnimationFrame(render);

    if (isFinePointer && !reduceMotion) {
      window.addEventListener("mousemove", onMove, { passive: true });
      window.addEventListener("mouseleave", onLeave);
      window.addEventListener("mousedown", onClick, { passive: true });
    }

    window.addEventListener("resize", setSize);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", setSize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onClick);
    };
  }, []);

  return <canvas ref={canvasRef} className="dot-field-layer" aria-hidden="true" />;
}
