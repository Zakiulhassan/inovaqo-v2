import * as React from "react";

/** Styled native select for discovery forms (project stage, budget range, timeline). */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  /** Option strings, rendered in order */
  options?: string[];
  style?: React.CSSProperties;
  selectStyle?: React.CSSProperties;
}
