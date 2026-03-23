"use client";

import { useRef, type MouseEvent } from "react";

type SpotlightTextProps = {
  text: string;
  className?: string;
  as?: "p" | "span";
};

export function SpotlightText({
  text,
  className = "",
  as = "p",
}: SpotlightTextProps) {
  const ref = useRef<HTMLElement | null>(null);
  const Element = as;

  const onMouseMove = (event: MouseEvent<HTMLElement>) => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    node.style.setProperty("--mx", `${x}px`);
    node.style.setProperty("--my", `${y}px`);
    node.style.setProperty("--active", "1");
  };

  const onMouseLeave = () => {
    ref.current?.style.setProperty("--active", "0");
  };

  return (
    <Element
      ref={(node) => {
        ref.current = node as HTMLElement | null;
      }}
      className={`about-spotlight ${as === "span" ? "inline-block" : ""} ${className}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <span className="about-spotlight__base">{text}</span>
      <span className="about-spotlight__overlay" aria-hidden="true">
        {text}
      </span>
    </Element>
  );
}
