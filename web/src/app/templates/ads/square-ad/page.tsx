import { TemplateFrame } from "@/components/templates/TemplateFrame";
import { Wordmark } from "@/components/brand/Wordmark";
import styles from "./page.module.css";

export default function SquareAdPage() {
  return (
    <TemplateFrame width={1080} height={1080} label="Ads — Square ad" background="var(--gradient-atmosphere)">
      <div className={styles.canvas}>
        <h1 className={styles.title}>
          Your AI idea is not the hard part. <span className={styles.dim}>Shipping it right is.</span>
        </h1>
        <p className={styles.sub}>
          We design, build, and ship AI products end to end — strategy, AI engineering, product, and cloud, all in one team.
        </p>
        <div className={styles.cta}>Book a Discovery Call →</div>
        <div className={styles.flow}>
          <div className={styles.n}>Idea</div>
          <div className={styles.l} />
          <div className={`${styles.n} ${styles.hot}`}>AI Layer</div>
          <div className={styles.l} />
          <div className={styles.n}>Product</div>
          <div className={styles.l} />
          <div className={styles.n}>Scale</div>
        </div>
        <Wordmark size={26} style={{ position: "absolute", right: 90, bottom: 90 }} />
      </div>
    </TemplateFrame>
  );
}
