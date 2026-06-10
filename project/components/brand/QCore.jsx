import React from "react";

/** The Q-Core mark — geometric ring with 45° forward signal tail. */
export function QCore({ size = 32, color = "var(--color-signal-lime)", style }) {
  const id = React.useId ? React.useId().replace(/:/g, "") : "qc" + Math.round(Math.random() * 1e6);
  return (
    <svg viewBox="0 0 60 60" fill="none" width={size} height={size} style={style} aria-label="INOVAQO Q-Core">
      <mask id={id}>
        <rect width="60" height="60" fill="white"></rect>
        <rect x="34.85" y="34.85" width="18" height="18" transform="rotate(45 43.85 43.85)" fill="black"></rect>
      </mask>
      <circle cx="29" cy="29" r="21" stroke={color} strokeWidth="7" mask={`url(#${id})`}></circle>
      <line x1="35" y1="35" x2="52.5" y2="52.5" stroke={color} strokeWidth="7"></line>
    </svg>
  );
}
