import React from "react";

/** Service module card — mono label, title, outcome copy, capability tags. */
export function ServiceCard({ index = "01", title, children, tags = [], active = false, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "var(--surface-card)",
        border: `1px solid ${active ? "var(--border-accent)" : hover ? "var(--border-strong)" : "var(--border-subtle)"}`,
        borderRadius: "var(--radius-lg)",
        padding: 28,
        fontFamily: "var(--font-sans)",
        transition: "border-color var(--duration-fast) var(--ease-system), transform var(--duration-fast) var(--ease-system)",
        transform: hover ? "translateY(-2px)" : "none",
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          height: 2,
          width: active || hover ? "100%" : 0,
          background: "var(--gradient-signal-fade)",
          transition: "width var(--duration-reveal) var(--ease-signal)",
        }}
      ></div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: active ? "var(--accent)" : "var(--text-muted)",
        }}
      >
        Service / {index}
      </div>
      <div style={{ fontSize: 21, fontWeight: 500, letterSpacing: "-0.02em", color: "var(--text-primary)", marginTop: 12 }}>
        {title}
      </div>
      <div style={{ fontSize: 14, lineHeight: 1.6, color: "var(--text-secondary)", marginTop: 8 }}>{children}</div>
      {tags.length ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 16 }}>
          {tags.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9.5,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                border: "1px solid var(--border-subtle)",
                borderRadius: 999,
                padding: "3px 9px",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
