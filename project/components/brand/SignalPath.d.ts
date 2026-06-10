import * as React from "react";

/** Thin lime pulse traveling a base line. Use for dividers, loaders, diagram connectors. */
export interface SignalPathProps {
  width?: number | string;
  height?: number;
  /** false renders a static dim signal (print/reduced contexts) */
  animate?: boolean;
  style?: React.CSSProperties;
}
