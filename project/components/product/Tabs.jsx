import React from "react";

/** Tab bar — lime underline on the active tab. */
export function Tabs({ items = [], active, onChange, style }) {
  const [internal, setInternal] = React.useState(active || items[0]);
  const current = active !== undefined && onChange ? active : internal;
  const pick = (t) => (onChange ? onChange(t) : setInternal(t));
  return (
    <div
      role="tablist"
      style={{ display: "flex", gap: 4, borderBottom: "1px solid var(--border-subtle)", fontFamily: "var(--font-sans)", ...style }}
    >
      {items.map((t) => {
        const is = t === current;
        return (
          <button
            key={t}
            role="tab"
            aria-selected={is}
            onClick={() => pick(t)}
            style={{
              background: "none",
              border: "none",
              borderBottom: `2px solid ${is ? "var(--color-signal-lime)" : "transparent"}`,
              marginBottom: -1,
              padding: "10px 14px",
              fontFamily: "var(--font-sans)",
              fontSize: 13.5,
              fontWeight: is ? 500 : 400,
              color: is ? "var(--text-primary)" : "var(--text-muted)",
              cursor: "pointer",
              transition: "color var(--duration-fast) var(--ease-system)",
            }}
          >
            {t}
          </button>
        );
      })}
    </div>
  );
}
