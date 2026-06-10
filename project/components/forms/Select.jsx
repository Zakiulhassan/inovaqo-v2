import React from "react";

/** Native select styled to the dark field system. */
export function Select({ label, options = [], style, selectStyle, ...rest }) {
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
            color: "var(--text-muted)",
            marginBottom: 8,
          }}
        >
          {label}
        </span>
      ) : null}
      <span style={{ position: "relative", display: "block" }}>
        <select
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            width: "100%",
            appearance: "none",
            WebkitAppearance: "none",
            background: "var(--surface-field)",
            border: `1px solid ${focus ? "var(--border-accent)" : "var(--border-subtle)"}`,
            outline: "none",
            borderRadius: "var(--radius-md)",
            padding: "12px 36px 12px 14px",
            fontFamily: "var(--font-sans)",
            fontSize: 14.5,
            color: "var(--text-primary)",
            transition: "border-color var(--duration-fast) var(--ease-system)",
            cursor: "pointer",
            ...selectStyle,
          }}
          {...rest}
        >
          {options.map((o) => (
            <option key={o} value={o} style={{ background: "#11191c" }}>
              {o}
            </option>
          ))}
        </select>
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            right: 14,
            top: "50%",
            transform: "translateY(-58%) rotate(45deg)",
            width: 7,
            height: 7,
            borderRight: "1.5px solid var(--text-muted)",
            borderBottom: "1.5px solid var(--text-muted)",
            pointerEvents: "none",
          }}
        ></span>
      </span>
    </label>
  );
}
