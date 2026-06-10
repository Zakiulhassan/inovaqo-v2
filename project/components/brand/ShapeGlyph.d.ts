import * as React from "react";

/** Abstract shape glossary — each mark carries a psychological meaning (Concept 2.0 shape-language approach, original INOVAQO geometry). openRing=openness/no black boxes · velocity=speed with direction · modules=one team · scale=growth ripple · continuity=creative momentum (dashed) · control=controlled velocity. */
export interface ShapeGlyphProps {
  kind?: "openRing" | "velocity" | "modules" | "scale" | "continuity" | "control";
  /** Pixel size, default 64 */
  size?: number;
  /** Main shape color (currentColor by default) */
  color?: string;
  /** Signal element color, default Signal Lime */
  accent?: string;
  style?: React.CSSProperties;
}
