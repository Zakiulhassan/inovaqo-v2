import * as React from "react";

/** Q-Core symbol: ring (product core) + notch (signal entry) + 45° tail (velocity). Min 24px. */
export interface QCoreProps {
  /** Pixel size, default 32 */
  size?: number;
  /** Any CSS color; default Signal Lime */
  color?: string;
  style?: React.CSSProperties;
}
