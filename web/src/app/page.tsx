import styles from "./page.module.css";
import { Wordmark } from "@/components/brand/Wordmark";

export default function Home() {
  return (
    <>
      <nav className={styles.nav} aria-label="Primary">
        <div className={styles.navInner}>
          <a className={styles.wordmark} href="#">
            <Wordmark size={21} />
          </a>
          <div className={styles.navLinks}>
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#process">Process</a>
            <a href="#">Insights</a>
            <a href="#">Careers</a>
          </div>
          <div className={styles.navCta}>
            <a className={`${styles.btn} ${styles.btnPrimary}`} href="#cta">
              Book a Discovery Call
            </a>
          </div>
        </div>
      </nav>

      <header className={styles.hero}>
        <div className={`${styles.container} ${styles.heroInner}`}>
          <div>
            <div className={`${styles.label} ${styles.lime}`}>AI Product Engineering</div>
            <h1>
              AI product engineering for bold ideas that need to <em>scale</em>.
            </h1>
            <p>
              INOVAQO helps founders and businesses turn AI-powered concepts into reliable,
              cloud-native products — built with clarity, speed, and engineering discipline.
            </p>
            <div className={styles.heroCtas}>
              <a className={`${styles.btn} ${styles.btnPrimary}`} href="#cta">
                Book a Discovery Call <span className={styles.arr}>→</span>
              </a>
              <a className={`${styles.btn} ${styles.btnSecondary}`} href="#work">
                See What We&apos;ve Built
              </a>
            </div>
            <div className={styles.heroProof}>
              <span>
                <b>75+</b> products shipped
              </span>
              <span>
                <b>98%</b> client satisfaction
              </span>
              <span>
                <b>2-wk</b> clarity sprint
              </span>
            </div>
          </div>
          <div className={styles.arch} aria-label="Concept to scale architecture">
            <div className={styles.archNode}>
              <span className={styles.num}>input</span>
              <span className={styles.nm}>Concept</span>
              <span className={styles.dot}></span>
            </div>
            <div className={styles.archLink}></div>
            <div className={`${styles.archNode} ${styles.hot}`}>
              <span className={styles.num}>02</span>
              <span className={styles.nm}>AI Layer</span>
              <span className={styles.dot}></span>
            </div>
            <div className={`${styles.archLink} ${styles.archLinkDelay1}`}></div>
            <div className={styles.archNode}>
              <span className={styles.num}>03</span>
              <span className={styles.nm}>Product Interface</span>
              <span className={styles.dot}></span>
            </div>
            <div className={`${styles.archLink} ${styles.archLinkDelay2}`}></div>
            <div className={styles.archNode}>
              <span className={styles.num}>04</span>
              <span className={styles.nm}>Cloud Infrastructure</span>
              <span className={styles.dot}></span>
            </div>
            <div className={`${styles.archLink} ${styles.archLinkDelay3}`}></div>
            <div className={styles.archNode}>
              <span className={styles.num}>output</span>
              <span className={styles.nm}>Scale</span>
              <span className={styles.dot}></span>
            </div>
          </div>
        </div>
      </header>

      <div className={styles.trust}>
        <div className={`${styles.container} ${styles.trustInner}`}>
          <span className={styles.lead}>Trusted by teams building in</span>
          <span>Cloud Security</span>
          <span>LegalTech</span>
          <span>EdTech</span>
          <span>FinTech</span>
          <span>HealthTech</span>
          <span>SaaS</span>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.label}>The Problem / 01</div>
          <h2>Most AI products do not fail because the idea was bad.</h2>
          <p className={styles.sectionSub}>
            They fail because the use case was unclear, the architecture was weak, the team moved
            without a system, or the product could not scale after launch.
          </p>
          <div className={styles.problemGrid}>
            <div className={styles.pCard}>
              <div className={styles.pm}>Risk / A</div>
              <h3>Unclear AI value</h3>
              <p>The idea sounds promising, but the workflow, user need, and business outcome are not defined.</p>
            </div>
            <div className={styles.pCard}>
              <div className={styles.pm}>Risk / B</div>
              <h3>Slow execution</h3>
              <p>Competitors ship while the product stays stuck in planning, hiring, or vendor handoffs.</p>
            </div>
            <div className={styles.pCard}>
              <div className={styles.pm}>Risk / C</div>
              <h3>Fragile architecture</h3>
              <p>Fast builds become expensive rewrites when cloud, data, and product decisions are weak.</p>
            </div>
            <div className={styles.pCard}>
              <div className={styles.pm}>Risk / D</div>
              <h3>Black-box delivery</h3>
              <p>Founders lose confidence when they cannot see progress or trust the build path.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.system}`} id="services">
        <div className={styles.container}>
          <div className={`${styles.label} ${styles.lime}`}>The INOVAQO System / 02</div>
          <h2>One team for the full AI product journey.</h2>
          <p className={styles.sectionSub}>
            Strategy, AI engineering, product engineering, cloud architecture, and data systems —
            connected into one clear build path.
          </p>
          <div className={styles.svcGrid}>
            <div className={styles.svc}>
              <div className={styles.sm}>01</div>
              <h3>AI Product Strategy</h3>
              <p>Turn unclear AI opportunities into use cases, workflows, and a buildable roadmap.</p>
            </div>
            <div className={`${styles.svc} ${styles.hot}`}>
              <div className={styles.sm}>02</div>
              <h3>AI Engineering</h3>
              <p>AI features, agents, RAG pipelines, and automation that solve real product problems.</p>
            </div>
            <div className={styles.svc}>
              <div className={styles.sm}>03</div>
              <h3>Product Engineering</h3>
              <p>Web apps, mobile apps, SaaS platforms, and dashboards built for real users and growth.</p>
            </div>
            <div className={styles.svc}>
              <div className={styles.sm}>04</div>
              <h3>Cloud &amp; DevOps</h3>
              <p>Secure, observable, cloud-native systems ready for launch, traffic, and scale.</p>
            </div>
            <div className={styles.svc}>
              <div className={styles.sm}>05</div>
              <h3>Data Systems &amp; ETL</h3>
              <p>Scattered data becomes clean pipelines, dashboards, and AI-ready systems.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="process">
        <div className={styles.container}>
          <div className={styles.label}>Build Clarity Framework / 03</div>
          <h2>Speed works when the system is clear.</h2>
          <p className={styles.sectionSub}>
            A structured product engineering process that reduces ambiguity, exposes risks early,
            and keeps founders in control from concept to scale.
          </p>
          <div className={styles.proc}>
            <div className={styles.step}>
              <div className={styles.ring}>01</div>
              <h3>Diagnose</h3>
              <p>Understand the product, business goal, users, constraints, and real technical challenge.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.ring}>02</div>
              <h3>Architect</h3>
              <p>Define scope, AI approach, cloud structure, stack, timeline, and delivery path.</p>
            </div>
            <div className={`${styles.step} ${styles.now}`}>
              <div className={styles.ring}>03</div>
              <h3>Build</h3>
              <p>Engineer the product system with visible progress and no black-box delivery.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.ring}>04</div>
              <h3>Launch</h3>
              <p>Prepare for real users, production environments, performance, and security.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.ring}>05</div>
              <h3>Scale</h3>
              <p>Improve, automate, optimize, and grow the system after launch.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="work" style={{ paddingTop: 0 }}>
        <div className={styles.container}>
          <div className={styles.label}>Selected Work / 04</div>
          <h2>Products built for real users, workflows, and scale.</h2>
          <div className={styles.case}>
            <div>
              <div className={styles.label}>Case Study / LegalTech AI</div>
              <h3>Lexgen AI</h3>
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
            <div className={styles.caseVisual}>
              <div className={styles.ph}>
                product screenshot
                <br />
                drop case study visual here
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.container}>
          <div className={styles.label}>Why INOVAQO / 05</div>
          <h2>Built for founders who need speed without uncertainty.</h2>
          <div className={styles.whyGrid}>
            <div className={`${styles.why} ${styles.hot}`}>
              <h3>Strategy before code</h3>
              <p>We define the real product problem, business goal, and technical path before writing tickets.</p>
            </div>
            <div className={styles.why}>
              <h3>AI + product + cloud in one team</h3>
              <p>No separate vendors for strategy, AI, product, infrastructure, and data.</p>
            </div>
            <div className={styles.why}>
              <h3>No black-box delivery</h3>
              <p>You see what is being built, why it matters, what changed, and what comes next.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.cta}`} id="cta">
        <div className={styles.container}>
          <div className={`${styles.label} ${styles.lime}`}>Next Step</div>
          <h2 style={{ maxWidth: "100%" }}>Have an AI product idea that needs to become real?</h2>
          <p className={styles.sectionSub} style={{ maxWidth: 560 }}>
            Tell us what you&apos;re building. We&apos;ll help you understand the product path,
            technical risks, AI opportunities, and next steps.
          </p>
          <div className={styles.heroCtas}>
            <a className={`${styles.btn} ${styles.btnPrimary}`} href="#">
              Book a Discovery Call <span className={styles.arr}>→</span>
            </a>
            <a className={`${styles.btn} ${styles.btnSecondary}`} href="#">
              Tell Us What You&apos;re Building
            </a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={`${styles.container} ${styles.foot}`}>
          <span className={styles.wordmark}>
            <Wordmark size={15} qColor="var(--color-mist-white)" />
          </span>
          <span>Move fast. Build clear. Scale right.</span>
          <span className={styles.right}>© 2026 INOVAQO</span>
        </div>
      </footer>
    </>
  );
}
