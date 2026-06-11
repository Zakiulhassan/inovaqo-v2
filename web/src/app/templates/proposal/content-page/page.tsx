import { TemplateFrame } from "@/components/templates/TemplateFrame";
import styles from "./page.module.css";

const path = [
  { label: "Diagnose", hot: true },
  { label: "Architect" },
  { label: "Build" },
  { label: "Launch" },
  { label: "Scale" },
];

const modules = [
  { m: "Module 1", t: "Product Strategy & Requirements", p: "Users, workflows, feature scope, success criteria, and product roadmap." },
  { m: "Module 2", t: "UX/UI & Product Design", p: "User flows, wireframes, design system, interface screens, prototype direction." },
  { m: "Module 3", t: "AI Engineering", p: "AI workflows, LLM integration, automation logic, RAG/agent systems." },
  { m: "Module 4", t: "Product Development", p: "Frontend, backend, APIs, dashboards, and core application features." },
  { m: "Module 5", t: "Cloud, DevOps & Deployment", p: "Infrastructure, CI/CD, monitoring, performance, security." },
  { m: "Module 6", t: "QA, Launch & Optimization", p: "Testing, refinement, launch preparation, early product support." },
];

export default function ProposalContentPage() {
  return (
    <TemplateFrame width={850} height={1100} label="Proposal — Content page" background="var(--color-mist-white)">
      <div className={styles.frame}>
        <div className={styles.label}>03 / Recommended Approach</div>
        <h1 className={styles.title}>Clarity before code.</h1>
        <p className={styles.lead}>
          We first clarify the product goal, user workflows, AI opportunity, data requirements, technical architecture, and launch path. Once the
          system is clear, we move into design and engineering with visible progress, structured sprints, and clear communication.
        </p>
        <div className={styles.path}>
          {path.map((p, i) => (
            <span key={p.label} style={{ display: "contents" }}>
              <div className={`${styles.pn} ${p.hot ? styles.hot : ""}`}>{p.label}</div>
              {i < path.length - 1 && <div className={styles.pl} />}
            </span>
          ))}
        </div>
        <div className={styles.mods}>
          {modules.map((mod) => (
            <div className={styles.mod} key={mod.m}>
              <div className={styles.m}>{mod.m}</div>
              <div className={styles.t}>{mod.t}</div>
              <p>{mod.p}</p>
            </div>
          ))}
        </div>
        <div className={styles.foot}>
          <span>INOVAQO — Product Engineering Proposal</span>
          <span className={styles.r}>04</span>
        </div>
      </div>
    </TemplateFrame>
  );
}
