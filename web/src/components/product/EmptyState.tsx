import * as React from "react";

export interface EmptyStateProps {
  title: string;
  children?: React.ReactNode;
  action?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Empty state — Q-Core ring + short useful instruction. */
export function EmptyState({ title, children, action, style }: EmptyStateProps) {
  return (
    <div
      style={{
        border: "1px dashed var(--border-strong)",
        borderRadius: "var(--radius-lg)",
        padding: "40px 24px",
        textAlign: "center",
        fontFamily: "var(--font-sans)",
        ...style,
      }}
    >
      <svg viewBox="0 0 60 60" fill="none" style={{ width: 36, height: 36, opacity: 0.85 }} aria-hidden="true">
        <mask id="inq-es-cut">
          <rect width="60" height="60" fill="white"></rect>
          <rect x="34.85" y="34.85" width="18" height="18" transform="rotate(45 43.85 43.85)" fill="black"></rect>
        </mask>
        <circle cx="29" cy="29" r="21" stroke="var(--color-cloud-gray)" strokeWidth="7" mask="url(#inq-es-cut)"></circle>
        <line x1="35" y1="35" x2="52.5" y2="52.5" stroke="var(--color-cloud-gray)" strokeWidth="7"></line>
      </svg>
      <div style={{ fontSize: 15.5, fontWeight: 500, color: "var(--text-primary)", marginTop: 14 }}>{title}</div>
      <div style={{ fontSize: 13, lineHeight: 1.6, color: "var(--text-muted)", marginTop: 6, maxWidth: 340, marginLeft: "auto", marginRight: "auto" }}>
        {children}
      </div>
      {action ? <div style={{ marginTop: 18, display: "flex", justifyContent: "center" }}>{action}</div> : null}
    </div>
  );
}
