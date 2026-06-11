import * as React from "react";

export interface SignalPathProps {
  width?: number | string;
  height?: number | string;
  animate?: boolean;
  style?: React.CSSProperties;
}

/** Animated lime signal traveling a horizontal path — section dividers, loading, diagrams. */
export function SignalPath({ width = "100%", height = 24, animate = true, style }: SignalPathProps) {
  const id = React.useId().replace(/:/g, "");
  return (
    <div style={{ width, height, position: "relative", ...style }} aria-hidden="true">
      <style>{`
        .inq-sig-${id} { stroke-dasharray: 60 540; animation: inqTravel-${id} var(--duration-signal, 1800ms) cubic-bezier(0.4,0,0.2,1) infinite; }
        @keyframes inqTravel-${id} { from { stroke-dashoffset: 60; } to { stroke-dashoffset: -540; } }
        @media (prefers-reduced-motion: reduce) { .inq-sig-${id} { animation: none; stroke-dasharray: none; opacity: 0.6; } }
      `}</style>
      <svg viewBox="0 0 600 24" preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block" }}>
        <line x1="0" y1="12" x2="600" y2="12" stroke="rgba(234,242,239,0.1)" strokeWidth="1.5"></line>
        <line
          x1="0" y1="12" x2="600" y2="12"
          stroke="var(--color-signal-lime)"
          strokeWidth="1.5"
          className={animate ? `inq-sig-${id}` : undefined}
          opacity={animate ? 1 : 0.6}
        ></line>
      </svg>
    </div>
  );
}
