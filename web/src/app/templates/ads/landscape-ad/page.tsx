import { TemplateFrame } from "@/components/templates/TemplateFrame";
import { Wordmark } from "@/components/brand/Wordmark";
import styles from "./page.module.css";

const stack: { m: string; t: string; hot?: boolean }[] = [
  { m: "01", t: "Strategy" },
  { m: "02", t: "AI Engineering", hot: true },
  { m: "03", t: "Product" },
  { m: "04", t: "Cloud + Scale" },
];

export default function LandscapeAdPage() {
  return (
    <TemplateFrame width={1200} height={628} label="Ads — Landscape ad" background="var(--surface-page)">
      <div className={styles.gridBg} />
      <div className={styles.frame}>
        <div className={styles.copy}>
          <div className={styles.label}>AI Product Engineering</div>
          <h1 className={styles.title}>
            Build AI products <em>without the chaos</em>.
          </h1>
          <p className={styles.sub}>
            Strategy, AI engineering, product, and cloud — one team, one connected build path from idea to scale.
          </p>
          <div className={styles.cta}>Start Your Product Build →</div>
        </div>
        <div className={styles.stack}>
          {stack.map((s, i) => (
            <div key={s.t}>
              <div className={`${styles.n} ${s.hot ? styles.hot : ""}`}>
                <span className={styles.m}>{s.m}</span>
                <span>{s.t}</span>
              </div>
              {i < stack.length - 1 && <div className={styles.v} />}
            </div>
          ))}
        </div>
      </div>
      <Wordmark size={22} qColor="var(--color-mist-white)" style={{ position: "absolute", left: 72, bottom: 64 }} />
    </TemplateFrame>
  );
}
