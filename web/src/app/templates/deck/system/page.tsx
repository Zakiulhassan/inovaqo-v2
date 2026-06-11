import * as React from "react";
import { TemplateFrame } from "@/components/templates/TemplateFrame";
import styles from "./page.module.css";

const modules = [
  { m: "01", t: "Strategy", p: "Use cases, workflows, buildable roadmap." },
  { m: "02", t: "AI Engineering", p: "LLMs, RAG, agents, automation.", hot: true },
  { m: "03", t: "Product", p: "Web, mobile, SaaS, dashboards." },
  { m: "04", t: "Cloud", p: "Infra, CI/CD, security, observability." },
  { m: "05", t: "Data + Scale", p: "Pipelines, analytics, AI-ready systems." },
];

export default function DeckSystemPage() {
  return (
    <TemplateFrame width={1280} height={720} label="Deck — System" background="var(--surface-panel)">
      <div className={styles.frame}>
        <div className={styles.label}>The INOVAQO System / 04</div>
        <h1 className={styles.title}>One team for the full AI product journey.</h1>
        <div className={styles.flow}>
          {modules.map((m, i) => (
            <React.Fragment key={m.m}>
              <div className={`${styles.mod} ${m.hot ? styles.hot : ""}`}>
                <div className={styles.m}>{m.m}</div>
                <div className={styles.t}>{m.t}</div>
                <p>{m.p}</p>
              </div>
              {i < modules.length - 1 && <div className={styles.lnk} />}
            </React.Fragment>
          ))}
        </div>
        <div className={styles.foot}>
          <span>INOVAQO</span>
          <span className={styles.r}>04</span>
        </div>
      </div>
    </TemplateFrame>
  );
}
