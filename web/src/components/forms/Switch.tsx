"use client";

import * as React from "react";

export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/** Toggle switch — lime when on. */
export function Switch({ checked, onChange, label, disabled = false, style }: SwitchProps) {
  const [internal, setInternal] = React.useState(!!checked);
  const isControlled = typeof checked === "boolean" && typeof onChange === "function";
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (isControlled) onChange!(!checked);
    else setInternal(!internal);
  };
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={toggle}
      disabled={disabled}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        background: "none",
        border: "none",
        padding: 0,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        fontFamily: "var(--font-sans)",
        ...style,
      }}
    >
      <span
        style={{
          width: 38,
          height: 22,
          borderRadius: 999,
          background: on ? "var(--color-signal-lime)" : "rgba(234,242,239,0.14)",
          position: "relative",
          transition: "background var(--duration-base) var(--ease-system)",
          flex: "none",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: 3,
            left: on ? 19 : 3,
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: on ? "var(--color-core-dark)" : "var(--color-mist-white)",
            transition: "left var(--duration-base) var(--ease-system)",
          }}
        ></span>
      </span>
      {label ? <span style={{ fontSize: 13.5, color: "var(--text-secondary)" }}>{label}</span> : null}
    </button>
  );
}
