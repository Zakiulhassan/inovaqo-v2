import * as React from "react";

export interface QCoreProps {
  /** Pixel size, default 32 */
  size?: number;
  /** Any CSS color; default Signal Lime */
  color?: string;
  style?: React.CSSProperties;
}

/** Q-Core symbol: ring (product core) + notch (signal entry) + 45° forward tail (velocity). Min 24px. */
export function QCore({ size = 32, color = "var(--color-signal-lime)", style }: QCoreProps) {
  const id = React.useId().replace(/:/g, "");
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
