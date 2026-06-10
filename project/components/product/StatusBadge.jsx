import React from "react";

/** Product UI status indicator — dot + label, never color alone. */
export function StatusBadge({ status = "neutral", children, style }) {
  const map = {
    active: { dot: "var(--color-signal-lime)", text: "var(--color-signal-lime)" },
    success: { dot: "var(--color-signal-lime)", text: "var(--text-secondary)" },
    warning: { dot: "var(--color-coral)", text: "var(--color-coral)" },
    error: { dot: "var(--color-coral)", text: "var(--color-coral)" },
    info: { dot: "var(--color-cloud-gray)", text: "var(--text-secondary)" },
    neutral: { dot: "rgba(143,183,194,0.5)", text: "var(--text-muted)" },
    disabled: { dot: "rgba(143,183,194,0.3)", text: "var(--state-disabled)" },
  };
  const s = map[status] || map.neutral;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: s.text,
        ...style,
      }}
    >
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: s.dot, flex: "none" }}></span>
      {children}
    </span>
  );
}
