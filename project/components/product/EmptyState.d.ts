import * as React from "react";

/** Branded empty state: Q-Core ring + short instruction + optional action. */
export interface EmptyStateProps {
  title: string;
  /** One useful sentence — what to do next */
  children?: React.ReactNode;
  /** Usually a <Button> */
  action?: React.ReactNode;
  style?: React.CSSProperties;
}
