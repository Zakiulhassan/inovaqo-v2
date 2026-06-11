import { TemplateFrame } from "@/components/templates/TemplateFrame";
import { Wordmark } from "@/components/brand/Wordmark";
import styles from "./page.module.css";

export default function CarouselCoverPage() {
  return (
    <TemplateFrame width={1080} height={1080} label="Social — Carousel cover" background="var(--surface-page)">
      <div className={styles.canvas}>
        <div className={styles.label}>AI Product Engineering / 01</div>
        <h1 className={styles.title}>
          Your AI idea does not need another demo. <em>It needs a product system.</em>
        </h1>
        <div className={styles.diagram}>
          <div className={styles.mod}>
            <div className={styles.m}>01</div>
            <div className={styles.t}>Strategy</div>
          </div>
          <div className={styles.lnk} />
          <div className={`${styles.mod} ${styles.hot}`}>
            <div className={styles.m}>02</div>
            <div className={styles.t}>AI Layer</div>
          </div>
          <div className={styles.lnk} />
          <div className={styles.mod}>
            <div className={styles.m}>03</div>
            <div className={styles.t}>Scalable Build</div>
          </div>
        </div>
        <div className={styles.foot}>
          <Wordmark size={26} />
          <span className={styles.pager}>
            <em>01</em> / 07 →
          </span>
        </div>
      </div>
    </TemplateFrame>
  );
}
