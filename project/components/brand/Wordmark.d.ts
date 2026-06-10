import * as React from "react";

/** INOVAQO wordmark (styled-type rendition). One-color first; lime Q only on dark. */
export interface WordmarkProps {
  /** Font size px, default 28. Min legible ≈ 16 */
  size?: number;
  /** Letter color */
  color?: string;
  /** Q-Core color — use same as `color` for one-color version */
  qColor?: string;
  style?: React.CSSProperties;
}
