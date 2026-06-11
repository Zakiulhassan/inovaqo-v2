import { TemplateFrame } from "@/components/templates/TemplateFrame";
import styles from "./page.module.css";

const phases = [
  { phase: "Discovery & Architecture", duration: "1–2 wks", focus: "Scope, product path, tech plan" },
  { phase: "UX/UI Design", duration: "2–4 wks", focus: "Flows, screens, design system" },
  { phase: "Development Sprints", duration: "6–10 wks", focus: "Core product + AI features" },
  { phase: "QA & Launch", duration: "1–2 wks", focus: "Testing, deployment, polish" },
];

export default function DeckInvestmentPage() {
  return (
    <TemplateFrame width={1280} height={720} label="Deck — Investment" background="var(--color-mist-white)">
      <div className={styles.frame}>
        <div className={styles.label}>Investment / 11</div>
        <h1 className={styles.title}>Priced for risk reduction, not hours.</h1>
        <div className={styles.grid}>
          <div>
            <div className={styles.inv}>
              From <span className={styles.mark}>$30K</span>
            </div>
            <div className={styles.invSub}>
              Final investment depends on product complexity, AI requirements, integrations, cloud infrastructure, and launch timeline.
            </div>
          </div>
          <table className={styles.table}>
            <tbody>
              <tr>
                <th>Phase</th>
                <th>Duration</th>
                <th>Focus</th>
              </tr>
              {phases.map((p) => (
                <tr key={p.phase}>
                  <td>{p.phase}</td>
                  <td>{p.duration}</td>
                  <td>{p.focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.foot}>
          <span>INOVAQO</span>
          <span className={styles.r}>11</span>
        </div>
      </div>
    </TemplateFrame>
  );
}
