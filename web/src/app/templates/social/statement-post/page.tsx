import Image from "next/image";
import { TemplateFrame } from "@/components/templates/TemplateFrame";
import { Wordmark } from "@/components/brand/Wordmark";
import { DashedPath } from "@/components/brand/DashedPath";
import styles from "./page.module.css";

export default function StatementPostPage() {
  return (
    <TemplateFrame width={1080} height={1080} label="Social — Statement post" background="var(--gradient-atmosphere)">
      <Image className={styles.qmark} src="/logo/qcore-mist.svg" alt="" width={460} height={460} />
      <div className={styles.canvas}>
        <div className={styles.label}>Controlled Velocity / 01</div>
        <h1 className={styles.title}>
          Moving fast is not the problem. <span className={styles.dim}>Moving unclear is.</span>
        </h1>
        <DashedPath preset="swoosh" style={{ marginTop: "auto", width: 420 }} />
        <div className={styles.foot}>
          <Wordmark size={26} />
          <span className={styles.tag}>Move fast. Build clear. Scale right.</span>
        </div>
      </div>
    </TemplateFrame>
  );
}
