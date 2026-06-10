import * as React from "react";

/** Large editorial case study block: challenge → system → outcome. Outcome is lime-labeled proof. */
export interface CaseStudyCardProps {
  label?: string;
  /** e.g. "LegalTech AI" */
  industry?: string;
  /** Project name */
  title: string;
  challenge?: React.ReactNode;
  system?: React.ReactNode;
  /** The measurable result — only verified metrics */
  outcome?: React.ReactNode;
  tags?: string[];
  style?: React.CSSProperties;
}
