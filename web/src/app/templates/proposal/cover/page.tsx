import { TemplateFrame } from "@/components/templates/TemplateFrame";
import { Wordmark } from "@/components/brand/Wordmark";
import styles from "./page.module.css";

export default function ProposalCoverPage() {
  return (
    <TemplateFrame width={850} height={1100} label="Proposal — Cover" background="var(--gradient-atmosphere)">
      <div className={styles.frame}>
        <Wordmark size={24} />
        <div className={styles.label}>Product Engineering Proposal</div>
        <h1 className={styles.title}>Product Engineering Proposal for [Client Name]</h1>
        <div className={styles.sub}>Strategy, AI, product engineering, and cloud execution for a scalable digital product.</div>
        <div className={styles.sig} />
        <div className={styles.meta}>
          <div>
            <div className={styles.k}>Prepared for</div>
            <div className={styles.v}>[Client / Product]</div>
          </div>
          <div>
            <div className={styles.k}>Date</div>
            <div className={styles.v}>June 2026</div>
          </div>
          <div>
            <div className={styles.k}>Engagement</div>
            <div className={styles.v}>AI Product Build</div>
          </div>
        </div>
      </div>
    </TemplateFrame>
  );
}
