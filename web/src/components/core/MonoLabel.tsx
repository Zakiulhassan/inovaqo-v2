import * as React from "react";

export interface MonoLabelProps {
  accent?: boolean;
  index?: string | number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Mono structural label — e.g. "AI PRODUCT ENGINEERING / 01". */
export function MonoLabel({ accent = false, index, children, style }: MonoLabelProps) {
  return (
    <div
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-label)",
        fontWeight: 500,
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        lineHeight: "var(--leading-label)",
        color: accent ? "var(--accent)" : "var(--text-muted)",
        ...style,
      }}
    >
      {children}
      {index ? ` / ${index}` : ""}
    </div>
  );
}
