import React from "react";

/** INOVAQO Button — lime signal primary, outline secondary, ghost text. */
export function Button({ variant = "primary", size = "md", arrow = false, disabled = false, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const sizes = {
    sm: { padding: "8px 14px", fontSize: 13 },
    md: { padding: "12px 20px", fontSize: 14 },
    lg: { padding: "15px 26px", fontSize: 16 },
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: hover && !disabled ? "#D6F04E" : "var(--color-signal-lime)",
      color: "var(--color-core-dark)",
      borderColor: "transparent",
    },
    secondary: {
      background: hover && !disabled ? "rgba(234,242,239,0.05)" : "transparent",
      color: "var(--text-primary)",
      borderColor: hover && !disabled ? "var(--border-strong)" : "rgba(234,242,239,0.22)",
    },
    ghost: {
      background: "transparent",
      color: hover && !disabled ? "var(--accent)" : "var(--text-secondary)",
      borderColor: "transparent",
    },
  };
  return (
    <button
      type="button"
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: "-0.01em",
        border: "1px solid",
        borderRadius: "var(--radius-md)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        transition: "all var(--duration-fast) var(--ease-system)",
        ...s,
        ...(variants[variant] || variants.primary),
        ...style,
      }}
      {...rest}
    >
      <span>{children}</span>
      {arrow ? (
        <span
          aria-hidden="true"
          style={{
            display: "inline-block",
            transition: "transform var(--duration-fast) var(--ease-system)",
            transform: hover && !disabled ? "translateX(3px)" : "none",
          }}
        >
          →
        </span>
      ) : null}
    </button>
  );
}
