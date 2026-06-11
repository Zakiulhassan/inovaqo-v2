import { TemplateFrame } from "@/components/templates/TemplateFrame";
import { Wordmark } from "@/components/brand/Wordmark";
import styles from "./page.module.css";

const items: { lead: string; rest: string }[] = [
  { lead: "Use case", rest: " — what specific workflow does AI improve, automate, or unlock?" },
  { lead: "User", rest: " — who experiences this directly, and what changes for them?" },
  { lead: "Data", rest: " — what information feeds the system, and where does it live?" },
  { lead: "Architecture", rest: " — how does this fit into a system that can scale?" },
  { lead: "Outcome", rest: " — what does success look like in 90 days?" },
];

export default function ChecklistPostPage() {
  return (
    <TemplateFrame width={1080} height={1080} label="Social — Checklist post" background="var(--surface-page)">
      <div className={styles.canvas}>
        <div className={styles.label}>Build Clarity / 02</div>
        <h1 className={styles.title}>Before building your AI product, define:</h1>
        <ul className={styles.list}>
          {items.map((it) => (
            <li className={styles.item} key={it.lead}>
              <span className={styles.chk} />
              <span className={styles.text}>
                <b>{it.lead}</b>
                {it.rest}
              </span>
            </li>
          ))}
        </ul>
        <div className={styles.foot}>
          <Wordmark size={26} />
          <span className={styles.cta}>Save this → build clearer</span>
        </div>
      </div>
    </TemplateFrame>
  );
}
