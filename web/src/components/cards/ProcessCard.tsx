import * as React from "react";

export interface ProcessCardProps {
  step?: string;
  name: string;
  children?: React.ReactNode;
  active?: boolean;
  last?: boolean;
  style?: React.CSSProperties;
}

/** Build Clarity Framework step — Diagnose / Architect / Build / Launch / Scale. */
export function ProcessCard({ step = "01", name, children, active = false, last = false, style }: ProcessCardProps) {
  return (
    <div style={{ display: "flex", gap: 16, fontFamily: "var(--font-sans)", ...style }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: "none" }}>
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            border: `1.5px solid ${active ? "var(--color-signal-lime)" : "var(--border-strong)"}`,
            color: active ? "var(--color-signal-lime)" : "var(--text-secondary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            flex: "none",
            background: active ? "var(--accent-dim)" : "transparent",
          }}
        >
          {step}
        </div>
        {!last ? (
          <div style={{ width: 1.5, flex: 1, minHeight: 18, background: active ? "var(--gradient-signal-fade)" : "var(--border-subtle)", marginTop: 6 }}></div>
        ) : null}
      </div>
      <div style={{ paddingBottom: last ? 0 : 22 }}>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: active ? "var(--accent)" : "var(--text-primary)",
            paddingTop: 8,
          }}
        >
          {name}
        </div>
        <div style={{ fontSize: 13.5, lineHeight: 1.6, color: "var(--text-secondary)", marginTop: 6 }}>{children}</div>
      </div>
    </div>
  );
}
