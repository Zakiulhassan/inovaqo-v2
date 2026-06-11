import styles from "./page.module.css";
import { Wordmark } from "@/components/brand/Wordmark";
import { QCore } from "@/components/brand/QCore";
import { DataTable } from "@/components/product/DataTable";
import { StatusBadge } from "@/components/product/StatusBadge";
import { Tabs } from "@/components/product/Tabs";

export default function Dashboard() {
  return (
    <div className={styles.app}>
      <aside className={styles.aside}>
        <span className={styles.wordmark}>
          <Wordmark size={17} />
        </span>
        <div className={styles.navSec}>Build</div>
        <div className={`${styles.navItem} ${styles.active}`}>
          <span className={styles.nd}></span>Pipelines
        </div>
        <div className={styles.navItem}>
          <span className={styles.nd}></span>Agents
        </div>
        <div className={styles.navItem}>
          <span className={styles.nd}></span>Workflows
        </div>
        <div className={styles.navSec}>System</div>
        <div className={styles.navItem}>
          <span className={styles.nd}></span>Data sources
        </div>
        <div className={styles.navItem}>
          <span className={styles.nd}></span>Deployments
        </div>
        <div className={styles.navItem}>
          <span className={styles.nd}></span>Observability
        </div>
        <div className={styles.navSec}>Workspace</div>
        <div className={styles.navItem}>
          <span className={styles.nd}></span>Settings
        </div>
      </aside>

      <main className={styles.main}>
        <div className={styles.topbar}>
          <h1>Pipelines</h1>
          <span className={styles.env}>Production</span>
          <button className={`${styles.btn} ${styles.ghost}`} type="button">
            Run all
          </button>
          <button className={`${styles.btn} ${styles.topbarBtn}`} type="button">
            New pipeline
          </button>
        </div>

        <div className={styles.metrics}>
          <div className={styles.metric}>
            <div className={styles.v}>
              24<em>/26</em>
            </div>
            <div className={styles.l}>Pipelines healthy</div>
          </div>
          <div className={styles.metric}>
            <div className={styles.v}>
              1.2<em>s</em>
            </div>
            <div className={styles.l}>P95 latency</div>
          </div>
          <div className={styles.metric}>
            <div className={styles.v}>
              99.98<em>%</em>
            </div>
            <div className={styles.l}>Uptime, 30 days</div>
          </div>
        </div>

        <div className={styles.tabsWrap}>
          <Tabs items={["All", "Ingest", "Transform", "AI workflows"]} />
        </div>

        <div className={styles.tablewrap}>
          <DataTable
            columns={["Pipeline", "Status", "Source", "Last run", "Duration"]}
            rows={[
              ["Ingest / CRM sync", <StatusBadge key="s" status="active">Running</StatusBadge>, <span key="m" className={styles.mono}>salesforce.prod</span>, "2m ago", <span key="d" className={styles.mono}>42s</span>],
              ["Embeddings refresh", <StatusBadge key="s" status="neutral">Queued</StatusBadge>, <span key="m" className={styles.mono}>pg.documents</span>, "1h ago", <span key="d" className={styles.mono}>3m 10s</span>],
              ["Eval suite / nightly", <StatusBadge key="s" status="warning">Degraded</StatusBadge>, <span key="m" className={styles.mono}>evals.core</span>, "6h ago", <span key="d" className={styles.mono}>12m 44s</span>],
              ["Invoice extraction", <StatusBadge key="s" status="active">Running</StatusBadge>, <span key="m" className={styles.mono}>s3.inbound</span>, "14m ago", <span key="d" className={styles.mono}>1m 02s</span>],
              ["Usage rollup", <StatusBadge key="s" status="neutral">Scheduled</StatusBadge>, <span key="m" className={styles.mono}>events.stream</span>, "Tonight 02:00", <span key="d" className={styles.mono}>—</span>],
            ]}
          />
        </div>
      </main>

      <div className={styles.ai}>
        <div className={styles.aiHead}>
          <QCore size={18} />
          <span className={styles.t}>Assistant</span>
          <span className={styles.live}>Live</span>
        </div>
        <div className={styles.aiMeta}>Context / pipelines · prod</div>
        <div className={`${styles.msg} ${styles.user}`}>Why is the nightly eval suite degraded?</div>
        <div className={styles.msg}>
          <b>Two eval workers timed out</b> after the 02:00 embeddings refresh ran long. Re-running
          the suite now should pass; I can also stagger the schedules by 30 minutes.
        </div>
        <div className={styles.aiMeta}>Suggested action</div>
        <div className={styles.msg}>
          <b>Stagger schedules</b> — move evals to 02:30 so they never overlap the refresh window.
        </div>
        <div className={styles.aiInput}>
          <input type="text" placeholder="Ask about your system…" />
          <button className={styles.btn} type="button">
            →
          </button>
        </div>
      </div>
    </div>
  );
}
