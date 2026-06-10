import * as React from "react";

/**
 * INOVAQO Button. Primary = Signal Lime fill with Core Dark text (the rare,
 * intentional signal); secondary = 1px mist outline; ghost = quiet text action.
 * @startingPoint section="Components" subtitle="Primary, secondary & ghost buttons" viewport="700x220"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** "primary" lime CTA · "secondary" outline · "ghost" text */
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  /** Append a → that shifts 3px right on hover */
  arrow?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}
