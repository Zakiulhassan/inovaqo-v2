import React from "react";

/** Status/emphasis badge with optional state dot. */
export function Badge({ tone = "neutral", dot = false, children, style }) {
  const tones = {
    neutral: { color: "var(--text-secondary)", border: "var(--border-subtle)", dotColor: "var(--color-cloud-gray)" },
    signal: { color: "var(--color-signal-lime)", border: "rgba(201,232,53,0.35)", dotColor: "var(--color-signal-lime)" },
    info: { color: "var(--color-cloud-gray)", border: "rgba(143,183,194,0.35)", dotColor: "var(--color-cloud-gray)" },
    alert: { color: "var(--color-coral)", border: "rgba(255,107,74,0.4)", dotColor: "var(--color-coral)" },
  };
  const t = tones[tone] || tones.neutral;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        fontFamily: "var(--font-mono)",
        fontSize: 10.5,
        fontWeight: 500,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: t.color,
        border: `1px solid ${t.border}`,
        borderRadius: "var(--radius-pill)",
        padding: "4px 11px",
        lineHeight: 1.4,
        ...style,
      }}
    >
      {dot ? (
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: t.dotColor, flex: "none" }}></span>
      ) : null}
      {children}
    </span>
  );
}
