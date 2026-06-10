import * as React from "react";

/** Mono uppercase pill badge for statuses and emphasis. Lime = active/success, coral = alert (rare). */
export interface BadgeProps {
  /** "neutral" default · "signal" lime active · "info" cloud gray · "alert" coral (rare) */
  tone?: "neutral" | "signal" | "info" | "alert";
  /** Show a leading state dot */
  dot?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
