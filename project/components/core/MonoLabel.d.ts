import * as React from "react";

/** The brand's structural metadata voice: mono, uppercase, +0.12em tracking. */
export interface MonoLabelProps {
  /** Lime label — use once per composition */
  accent?: boolean;
  /** Appends " / NN" */
  index?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
