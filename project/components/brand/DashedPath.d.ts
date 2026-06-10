import * as React from "react";

/** Dashed lime continuity line (Concept 2.0): round dots on a meandering path — movement, continuity, creativity. One per composition; it should travel toward content. For the exact Figma vectors use assets/motifs/dash-loop.svg / dash-wave.svg via the .inq-dash-* mask utilities. */
export interface DashedPathProps {
  /** "swoosh" underline · "wave" section traveler · "loop" flight path */
  preset?: "swoosh" | "wave" | "loop";
  /** Stroke color, default Signal Lime */
  color?: string;
  width?: number | string;
  height?: number | string;
  strokeWidth?: number;
  /** Slowly marching dashes (respects reduced motion) */
  animate?: boolean;
  style?: React.CSSProperties;
}
