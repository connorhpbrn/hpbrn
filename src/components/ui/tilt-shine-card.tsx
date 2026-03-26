"use client";

import {
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";

type TiltShineCardProps = {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export function TiltShineCard({
  children,
  className = "",
  ...props
}: TiltShineCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const enabledRef = useRef(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    enabledRef.current = canHover && !reduceMotion;
  }, []);

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!enabledRef.current) {
      return;
    }

    const node = ref.current;

    if (!node) {
      return;
    }

    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const px = x / rect.width;
    const py = y / rect.height;

    const rotateY = (px - 0.5) * 8;
    const rotateX = (0.5 - py) * 8;

    node.style.setProperty("--mx", `${x}px`);
    node.style.setProperty("--my", `${y}px`);
    node.style.setProperty("--rx", `${rotateX.toFixed(2)}deg`);
    node.style.setProperty("--ry", `${rotateY.toFixed(2)}deg`);
    setActive(true);
  };

  const onLeave = () => {
    const node = ref.current;

    if (!node) {
      return;
    }

    node.style.setProperty("--rx", "0deg");
    node.style.setProperty("--ry", "0deg");
    setActive(false);
  };

  return (
    <div className="tilt-card-wrap">
      <div
        ref={ref}
        className={`tilt-card ${active ? "is-active" : ""} ${className}`}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        {...props}
      >
        <span className="tilt-card__shine" aria-hidden="true" />
        {children}
      </div>
    </div>
  );
}
