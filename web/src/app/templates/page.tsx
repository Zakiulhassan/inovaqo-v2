import Link from "next/link";
import { Wordmark } from "@/components/brand/Wordmark";
import styles from "./page.module.css";

const groups: { label: string; items: { href: string; title: string; meta: string }[] }[] = [
  {
    label: "Social",
    items: [
      { href: "/templates/social/statement-post", title: "Statement post", meta: "1080 × 1080" },
      { href: "/templates/social/carousel-cover", title: "Carousel cover", meta: "1080 × 1080" },
      { href: "/templates/social/checklist-post", title: "Checklist post", meta: "1080 × 1080" },
    ],
  },
  {
    label: "Ads",
    items: [
      { href: "/templates/ads/square-ad", title: "Square ad", meta: "1080 × 1080" },
      { href: "/templates/ads/landscape-ad", title: "Landscape ad", meta: "1200 × 628" },
    ],
  },
  {
    label: "Pitch deck",
    items: [
      { href: "/templates/deck/cover", title: "Cover", meta: "1280 × 720" },
      { href: "/templates/deck/problem", title: "Problem", meta: "1280 × 720" },
      { href: "/templates/deck/system", title: "System", meta: "1280 × 720" },
      { href: "/templates/deck/case-study", title: "Case study", meta: "1280 × 720" },
      { href: "/templates/deck/investment", title: "Investment", meta: "1280 × 720" },
      { href: "/templates/deck/cta", title: "CTA", meta: "1280 × 720" },
    ],
  },
  {
    label: "Proposal",
    items: [
      { href: "/templates/proposal/cover", title: "Cover", meta: "850 × 1100" },
      { href: "/templates/proposal/content-page", title: "Content page", meta: "850 × 1100" },
    ],
  },
];

export default function TemplatesIndexPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Wordmark size={26} />
        <h1 className={styles.title}>Templates</h1>
      </div>
      {groups.map((g) => (
        <div className={styles.group} key={g.label}>
          <div className={styles.groupLabel}>{g.label}</div>
          <div className={styles.grid}>
            {g.items.map((item) => (
              <Link className={styles.card} href={item.href} key={item.href}>
                <span className={styles.cardTitle}>{item.title}</span>
                <span className={styles.cardMeta}>{item.meta}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
