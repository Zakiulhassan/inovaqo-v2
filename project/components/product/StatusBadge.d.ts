import * as React from "react";

/** Dot + mono label status. Lime = active/success, coral = warning/error, cloud gray = info. */
export interface StatusBadgeProps {
  status?: "active" | "success" | "warning" | "error" | "info" | "neutral" | "disabled";
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
