import React from "react";

/** Proof metric — confident number, mono label, lime suffix signal. */
export function MetricCard({ value, suffix, label, context, bare = false, style }) {
  return (
    <div
      style={{
        background: bare ? "transparent" : "var(--surface-card)",
        border: bare ? "none" : "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-lg)",
        padding: bare ? 0 : 22,
        fontFamily: "var(--font-sans)",
        ...style,
      }}
    >
      <div style={{ fontSize: 44, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1, color: "var(--text-primary)" }}>
        {value}
        {suffix ? <span style={{ color: "var(--accent)" }}>{suffix}</span> : null}
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
          marginTop: 10,
        }}
      >
        {label}
      </div>
      {context ? <div style={{ fontSize: 13, lineHeight: 1.55, color: "var(--text-secondary)", marginTop: 8 }}>{context}</div> : null}
    </div>
  );
}
