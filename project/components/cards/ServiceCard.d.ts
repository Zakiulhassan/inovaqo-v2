import * as React from "react";

/** Service module card. Services are connected modules in one build path, never generic boxes. */
export interface ServiceCardProps {
  /** Two-digit step, e.g. "02" */
  index?: string;
  title: string;
  /** Business-outcome copy (1–2 sentences) */
  children?: React.ReactNode;
  /** Capability tags, e.g. ["LLM","RAG","Agents"] */
  tags?: string[];
  /** Lime signal state — at most one active card per row */
  active?: boolean;
  style?: React.CSSProperties;
}
