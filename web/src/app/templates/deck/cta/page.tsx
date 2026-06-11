import { TemplateFrame } from "@/components/templates/TemplateFrame";
import { Wordmark } from "@/components/brand/Wordmark";
import styles from "./page.module.css";

export default function DeckCtaPage() {
  return (
    <TemplateFrame width={1280} height={720} label="Deck — CTA" background="var(--gradient-atmosphere)">
      <div className={styles.frame}>
        <div className={styles.label}>Next Step / 12</div>
        <h1 className={styles.title}>Have an AI product idea that needs to become real?</h1>
        <div className={styles.sub}>
          Tell us what you&apos;re building. We&apos;ll help you understand the product path, technical risks, AI opportunities, and next steps.
        </div>
        <div className={styles.cta}>Book a Discovery Call →</div>
        <div className={styles.foot}>
          <Wordmark size={24} />
          <span className={styles.r}>inovaqo.com · hello@inovaqo.com</span>
        </div>
      </div>
    </TemplateFrame>
  );
}
