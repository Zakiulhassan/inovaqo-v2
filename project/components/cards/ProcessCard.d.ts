import * as React from "react";

/** Vertical process step with numbered node + connector for the Build Clarity Framework. */
export interface ProcessCardProps {
  /** "01"…"05" */
  step?: string;
  /** Diagnose · Architect · Build · Launch · Scale */
  name: string;
  children?: React.ReactNode;
  /** Lime current step */
  active?: boolean;
  /** Hides trailing connector */
  last?: boolean;
  style?: React.CSSProperties;
}
