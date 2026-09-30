"use client";

import { useEffect, useRef } from "react";

const Spotlight = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current?.parentElement;

    if (!el) return;

    let frameId = null;
    let x = 0;
    let y = 0;

    const move = (event) => {
      const rect = el.getBoundingClientRect();

      x = event.clientX - rect.left;
      y = event.clientY - rect.top;

      if (frameId) return;

      frameId = requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.setProperty("--spotlight-x", `${x}px`);
          ref.current.style.setProperty("--spotlight-y", `${y}px`);
        }

        frameId = null;
      });
    };

    el.addEventListener("pointermove", move, { passive: true });

    return () => {
      el.removeEventListener("pointermove", move);

      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-0
        opacity-0
        transition-opacity
        duration-700
        group-hover:opacity-100
        dark:opacity-0
        dark:group-hover:opacity-100
      "
      style={{
        background: `
          radial-gradient(
            520px circle at var(--spotlight-x, 50%) var(--spotlight-y, 30%),
            rgba(201, 154, 189, 0.16),
            rgba(79, 3, 65, 0.08) 32%,
            transparent 68%
          )
        `,
      }}
    />
  );
};

export default Spotlight;