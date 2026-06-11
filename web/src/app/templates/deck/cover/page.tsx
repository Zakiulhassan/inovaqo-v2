import Image from "next/image";
import { TemplateFrame } from "@/components/templates/TemplateFrame";
import { Wordmark } from "@/components/brand/Wordmark";
import styles from "./page.module.css";

export default function DeckCoverPage() {
  return (
    <TemplateFrame width={1280} height={720} label="Deck — Cover" background="var(--gradient-atmosphere)">
      <Image className={styles.qmark} src="/logo/qcore-mist.svg" alt="" width={380} height={380} />
      <div className={styles.gridBg} />
      <div className={styles.frame}>
        <Wordmark size={26} />
        <h1 className={styles.title}>
          AI product engineering for bold ideas that need to <em>scale</em>.
        </h1>
        <div className={styles.tag}>
          Move fast. Build clear. <em>Scale right.</em>
        </div>
        <div className={styles.foot}>
          <span>Capabilities — 2026</span>
          <span className={styles.r}>inovaqo.com</span>
        </div>
      </div>
    </TemplateFrame>
  );
}
