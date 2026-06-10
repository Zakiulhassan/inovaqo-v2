import * as React from "react";

/** Readable product table: mono headers, 14px cells, first column emphasized. Cells accept ReactNode (e.g. StatusBadge). */
export interface DataTableProps {
  columns?: string[];
  rows?: React.ReactNode[][];
  style?: React.CSSProperties;
}
