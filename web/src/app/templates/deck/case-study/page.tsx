import { TemplateFrame } from "@/components/templates/TemplateFrame";
import styles from "./page.module.css";

export default function DeckCaseStudyPage() {
  return (
    <TemplateFrame width={1280} height={720} label="Deck — Case study" background="var(--surface-page)">
      <div className={styles.frame}>
        <div className={styles.label}>Case Study / LegalTech AI / 08</div>
        <div className={styles.grid}>
          <div>
            <h1 className={styles.title}>Lexgen AI</h1>
            <div className={styles.crow}>
              <div className={styles.ck}>Challenge</div>
              <div>A legal firm needed to reduce document drafting time without sacrificing compliance.</div>
            </div>
            <div className={styles.crow}>
              <div className={styles.ck}>System</div>
              <div>AI-assisted document generation using LLM workflows, structured prompts, backend logic, and review safeguards.</div>
            </div>
            <div className={styles.crow}>
              <div className={`${styles.ck} ${styles.lime}`}>Outcome</div>
              <div className={styles.outcome}>Document generation reduced from hours to minutes.</div>
            </div>
            <div className={styles.tags}>
              <span className={styles.tag}>AI Product</span>
              <span className={styles.tag}>Cloud</span>
              <span className={styles.tag}>Product Engineering</span>
            </div>
          </div>
          <div className={styles.visual}>
            <div className={styles.ph}>
              product screenshot
              <br />
              drop case visual here
            </div>
          </div>
        </div>
        <div className={styles.foot}>
          <span>INOVAQO</span>
          <span className={styles.r}>08</span>
        </div>
      </div>
    </TemplateFrame>
  );
}
