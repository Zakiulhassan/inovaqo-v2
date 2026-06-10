import React from "react";

/** Dashed continuity line — hand-drawn lime path showing movement & creativity. */
export function DashedPath({ preset = "swoosh", color = "var(--color-signal-lime)", width = "100%", height, strokeWidth = 3, animate = false, style }) {
  const presets = {
    /* gentle underline swoosh */
    swoosh: { viewBox: "0 0 600 60", d: "M4 44 C 150 10, 240 58, 360 34 S 560 14, 596 30" },
    /* meandering wave across a section */
    wave: { viewBox: "0 0 900 120", d: "M4 84 C 120 20, 220 110, 340 64 S 540 8, 660 70 S 840 96, 896 44" },
    /* flight-path loop (continuity) */
    loop: { viewBox: "0 0 600 220", d: "M8 190 C 90 60, 200 14, 256 64 C 310 113, 220 196, 300 200 C 392 205, 380 96, 470 84 C 540 75, 570 120, 594 150" },
  };
  const p = presets[preset] || presets.swoosh;
  const vbH = Number(p.viewBox.split(" ")[3]);
  const id = React.useId ? React.useId().replace(/:/g, "") : "dp" + Math.round(Math.random() * 1e6);
  return (
    <div style={{ width, height, lineHeight: 0, ...style }} aria-hidden="true">
      {animate ? (
        <style>{`
          .inq-dp-${id} { stroke-dashoffset: 0; animation: inqDash-${id} 24s linear infinite; }
          @keyframes inqDash-${id} { to { stroke-dashoffset: -200; } }
          @media (prefers-reduced-motion: reduce) { .inq-dp-${id} { animation: none; } }
        `}</style>
      ) : null}
      <svg viewBox={p.viewBox} style={{ width: "100%", height: height || "auto", display: "block", overflow: "visible" }} preserveAspectRatio="xMidYMid meet">
        <path
          d={p.d}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray="1 14"
          className={animate ? `inq-dp-${id}` : undefined}
          style={{ vectorEffect: "non-scaling-stroke" }}
        ></path>
      </svg>
    </div>
  );
}
