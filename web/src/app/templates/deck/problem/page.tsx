import { TemplateFrame } from "@/components/templates/TemplateFrame";
import styles from "./page.module.css";

const risks = [
  { m: "Risk / A", t: "Unclear AI value", p: "Workflow, user need, and outcome were never defined." },
  { m: "Risk / B", t: "Slow execution", p: "Stuck in planning, hiring, or vendor handoffs." },
  { m: "Risk / C", t: "Fragile architecture", p: "Fast builds become expensive rewrites." },
  { m: "Risk / D", t: "Black-box delivery", p: "Founders cannot see progress or trust the path." },
];

export default function DeckProblemPage() {
  return (
    <TemplateFrame width={1280} height={720} label="Deck — Problem" background="var(--surface-page)">
      <div className={styles.frame}>
        <div className={styles.label}>The Problem / 02</div>
        <h1 className={styles.title}>Most AI products do not fail because the idea was bad.</h1>
        <p className={styles.sub}>
          They fail because the use case is unclear, the architecture is weak, the data is disconnected, or the product cannot scale after launch.
        </p>
        <div className={styles.risks}>
          {risks.map((r) => (
            <div className={styles.r} key={r.m}>
              <div className={styles.m}>{r.m}</div>
              <div className={styles.t}>{r.t}</div>
              <p>{r.p}</p>
            </div>
          ))}
        </div>
        <div className={styles.foot}>
          <span>INOVAQO</span>
          <span className={styles.r2}>02</span>
        </div>
      </div>
    </TemplateFrame>
  );
}
