import * as React from "react";

export interface TagProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Capability tag — quiet mono chip for stacks/services (LLM, RAG, AGENTS…). */
export function Tag({ children, style }: TagProps) {
  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--text-muted)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-pill)",
        padding: "4px 10px",
        lineHeight: 1.4,
        ...style,
      }}
    >
      {children}
    </span>
  );
}
