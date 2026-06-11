import * as React from "react";
import styles from "./TemplateFrame.module.css";

export interface TemplateFrameProps {
  width: number;
  height: number;
  label: string;
  background?: string;
  children: React.ReactNode;
}

/** Centers a fixed-dimension export template (social post, ad, slide, proposal page) on a neutral backdrop. */
export function TemplateFrame({ width, height, label, background, children }: TemplateFrameProps) {
  return (
    <div className={styles.page}>
      <div className={styles.meta}>
        {label} · {width}×{height}
      </div>
      <div className={styles.canvas} style={{ width, height, background }}>
        {children}
      </div>
    </div>
  );
}
