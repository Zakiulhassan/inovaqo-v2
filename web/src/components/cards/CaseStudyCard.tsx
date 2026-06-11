"use client";

import * as React from "react";

export interface CaseStudyCardProps {
  label?: string;
  industry?: string;
  title: string;
  challenge?: React.ReactNode;
  system?: React.ReactNode;
  outcome?: React.ReactNode;
  tags?: string[];
  style?: React.CSSProperties;
}

/** Editorial case study block — proof, not decoration. */
export function CaseStudyCard({ label = "Case Study", industry, title, challenge, system, outcome, tags = [], style }: CaseStudyCardProps) {
  const [hover, setHover] = React.useState(false);
  const row = (k: string, v: React.ReactNode) => (
    <div style={{ display: "grid", gridTemplateColumns: "110px 1fr", gap: 14, marginTop: 12 }}>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
          paddingTop: 2,
        }}
      >
        {k}
      </div>
      <div style={{ fontSize: 14, lineHeight: 1.55, color: "var(--text-secondary)" }}>{v}</div>
    </div>
  );
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "var(--surface-card)",
        border: `1px solid ${hover ? "var(--border-strong)" : "var(--border-subtle)"}`,
        borderRadius: "var(--radius-xl)",
        padding: 32,
        fontFamily: "var(--font-sans)",
        transition: "border-color var(--duration-fast) var(--ease-system)",
        ...style,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
        }}
      >
        {label}
        {industry ? ` / ${industry}` : ""}
      </div>
      <div style={{ fontSize: 26, fontWeight: 500, letterSpacing: "-0.02em", color: "var(--text-primary)", marginTop: 12 }}>
        {title}
      </div>
      {challenge ? row("Challenge", challenge) : null}
      {system ? row("System", system) : null}
      {outcome ? (
        <div style={{ display: "grid", gridTemplateColumns: "110px 1fr", gap: 14, marginTop: 12 }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--accent)",
              paddingTop: 2,
            }}
          >
            Outcome
          </div>
          <div style={{ fontSize: 15, lineHeight: 1.5, fontWeight: 500, color: "var(--text-primary)" }}>{outcome}</div>
        </div>
      ) : null}
      {tags.length ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 18 }}>
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
