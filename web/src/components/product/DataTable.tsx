import * as React from "react";

export interface DataTableProps {
  columns?: string[];
  rows?: React.ReactNode[][];
  style?: React.CSSProperties;
}

/** Readable product table: mono headers, 14px cells, first column emphasized. Cells accept ReactNode (e.g. StatusBadge). */
export function DataTable({ columns = [], rows = [], style }: DataTableProps) {
  return (
    <div
      style={{
        background: "var(--surface-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        fontFamily: "var(--font-sans)",
        ...style,
      }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {columns.map((c) => (
              <th
                key={c}
                style={{
                  textAlign: "left",
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  padding: "12px 16px",
                  borderBottom: "1px solid var(--border-subtle)",
                  background: "rgba(234,242,239,0.02)",
                }}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((cell, j) => (
                <td
                  key={j}
                  style={{
                    fontSize: 13.5,
                    color: j === 0 ? "var(--text-primary)" : "var(--text-secondary)",
                    fontWeight: j === 0 ? 500 : 400,
                    padding: "12px 16px",
                    borderBottom: i === rows.length - 1 ? "none" : "1px solid var(--border-subtle)",
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
