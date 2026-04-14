"use client";

import { useEffect } from "react";

export function CursorAura() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const root = document.documentElement;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (!isFinePointer) {
      root.style.setProperty("--cursor-x", "50vw");
      root.style.setProperty("--cursor-y", "50vh");
      return;
    }

    let targetX = window.innerWidth * 0.5;
    let targetY = window.innerHeight * 0.5;
    let currentX = targetX;
    let currentY = targetY;
    let frameId = 0;

    const update = () => {
      currentX += (targetX - currentX) * 0.14;
      currentY += (targetY - currentY) * 0.14;

      root.style.setProperty("--cursor-x", `${currentX}px`);
      root.style.setProperty("--cursor-y", `${currentY}px`);
      frameId = window.requestAnimationFrame(update);
    };

    const onMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    frameId = window.requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return null;
}
