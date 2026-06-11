import * as React from "react";

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

/** INOVAQO abstract shape glossary — geometric marks with psychological meanings.
 *  openRing=openness/no black boxes · velocity=speed with direction · modules=one team ·
 *  scale=growth ripple · continuity=creative momentum (dashed) · control=controlled velocity. */
export function ShapeGlyph({ kind = "openRing", size = 64, color = "currentColor", accent = "var(--color-signal-lime)", style }: ShapeGlyphProps) {
  const s: React.CSSProperties = { width: size, height: size, display: "block", ...style };
  const sw = 8; // base stroke on a 64 grid
  switch (kind) {
    case "openRing": /* openness — no black boxes */
      return (
        <svg viewBox="0 0 64 64" fill="none" style={s} aria-label="Openness">
          <path d="M 54.6 41.4 A 24 24 0 1 1 54.6 22.6" stroke={color} strokeWidth={sw} strokeLinecap="round"></path>
        </svg>
      );
    case "velocity": /* forward diagonal + node — speed with direction */
      return (
        <svg viewBox="0 0 64 64" fill="none" style={s} aria-label="Velocity">
          <line x1="12" y1="52" x2="46" y2="18" stroke={color} strokeWidth={sw} strokeLinecap="round"></line>
          <circle cx="52" cy="12" r="7" fill={accent}></circle>
        </svg>
      );
    case "modules": /* 2×2 modules, one signal — one team, modular systems */
      return (
        <svg viewBox="0 0 64 64" fill="none" style={s} aria-label="One team">
          <rect x="6" y="6" width="24" height="24" rx="7" fill={color}></rect>
          <rect x="34" y="6" width="24" height="24" rx="7" fill={color}></rect>
          <rect x="6" y="34" width="24" height="24" rx="7" fill={color}></rect>
          <rect x="34" y="34" width="24" height="24" rx="7" fill={accent}></rect>
        </svg>
      );
    case "scale": /* concentric rings — growth ripple */
      return (
        <svg viewBox="0 0 64 64" fill="none" style={s} aria-label="Scale">
          <circle cx="32" cy="32" r="7" fill={color}></circle>
          <circle cx="32" cy="32" r="17" stroke={color} strokeWidth="5"></circle>
          <circle cx="32" cy="32" r="28" stroke={color} strokeWidth="3" opacity="0.55"></circle>
        </svg>
      );
    case "continuity": /* dashed loop — creative momentum */
      return (
        <svg viewBox="0 0 64 64" fill="none" style={s} aria-label="Continuity">
          <circle cx="32" cy="32" r="23" stroke={color} strokeWidth="5" strokeLinecap="round" strokeDasharray="0.5 13"></circle>
        </svg>
      );
    case "control": /* circle held by square — controlled velocity */
      return (
        <svg viewBox="0 0 64 64" fill="none" style={s} aria-label="Controlled velocity">
          <rect x="6" y="6" width="52" height="52" rx="10" stroke={color} strokeWidth="5"></rect>
          <circle cx="32" cy="32" r="14" fill={accent}></circle>
        </svg>
      );
    default:
      return null;
  }
}
