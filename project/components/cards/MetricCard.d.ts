import * as React from "react";

/** Proof metric: large number + mono label. Suffix (+, %, wk) renders in lime. */
export interface MetricCardProps {
  /** The number, e.g. "75" */
  value: string;
  /** Lime-rendered unit, e.g. "+" or "%" */
  suffix?: string;
  /** Mono uppercase label */
  label: string;
  /** Optional supporting sentence */
  context?: string;
  /** No card chrome — for trust strips */
  bare?: boolean;
  style?: React.CSSProperties;
}
