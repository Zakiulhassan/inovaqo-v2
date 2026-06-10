import React from "react";

/** Mono structural label — e.g. "AI PRODUCT ENGINEERING / 01". */
export function MonoLabel({ accent = false, index, children, style }) {
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
