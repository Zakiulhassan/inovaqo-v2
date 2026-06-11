"use client";

import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
}

/** Text input with mono label; lime focus ring. */
export function Input({ label, hint, error, type = "text", style, inputStyle, ...rest }: InputProps) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: "block", fontFamily: "var(--font-sans)", ...style }}>
      {label ? (
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-mono)",
            fontSize: 10.5,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: error ? "var(--color-coral)" : "var(--text-muted)",
            marginBottom: 8,
          }}
        >
          {label}
        </span>
      ) : null}
      <input
        type={type}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          width: "100%",
          boxSizing: "border-box",
          background: "var(--surface-field)",
          border: `1px solid ${error ? "rgba(255,107,74,0.55)" : focus ? "var(--border-accent)" : "var(--border-subtle)"}`,
          outline: "none",
          borderRadius: "var(--radius-md)",
          padding: "12px 14px",
          fontFamily: "var(--font-sans)",
          fontSize: 14.5,
          color: "var(--text-primary)",
          transition: "border-color var(--duration-fast) var(--ease-system)",
          ...inputStyle,
        }}
        {...rest}
      />
      {hint || error ? (
        <span
          style={{
            display: "block",
            marginTop: 6,
            fontSize: 12,
            color: error ? "var(--color-coral)" : "var(--text-muted)",
          }}
        >
          {error || hint}
        </span>
      ) : null}
    </label>
  );
}
