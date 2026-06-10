import * as React from "react";

/** Underline tabs; active tab gets the 2px lime signal. Controlled or uncontrolled. */
export interface TabsProps {
  items?: string[];
  active?: string;
  onChange?: (tab: string) => void;
  style?: React.CSSProperties;
}
