import * as React from "react";

/** Toggle switch — lime track when on, graphite when off. Works controlled or uncontrolled. */
export interface SwitchProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  label?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}
