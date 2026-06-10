# INOVAQO Design System

**Brand idea: Controlled Velocity** — Move fast. Build clear. Scale right.
AI product engineering for bold ideas that need to scale.

INOVAQO is an AI-native product engineering partner helping founders and businesses turn AI-powered concepts into reliable, cloud-native products — through AI strategy, AI engineering, product engineering, cloud architecture & DevOps, and data systems & ETL, connected into one build path (Diagnose → Architect → Build → Launch → Scale).

This design system is compiled from 10 brand strategy modules (in `src-docs/` as .docx, extracted to `notes/` as plain text). They are the source of truth for positioning, messaging, color, type, layout, visual language, website, social/ads, deck/proposal, and guideline structure.

## Brand personality
Bold · intelligent · energetic · futuristic · minimal · reliable · startup-native · technically sharp.
Never: generic, cheap, cold, corporate, childish, overdesigned, "AI-template" looking.

## The brand recognition assets
1. **Q-Core** — a custom Q built as a geometric ring with a 45° forward signal tail. Logo symbol, favicon, loader, watermark, empty states.
2. **Signal Path** — a thin lime line/pulse moving through structured systems. Hero motion, diagrams, dividers, loading states.
3. **Product Grid** — modular grid + layered cards that make every layout feel engineered and scalable.
4. **Dashed Continuity Line** (Concept 2.0) — a hand-drawn lime dashed path that loops and travels across imagery and sections: continuity, movement, creativity. Original vectors from the concept .fig in `assets/motifs/` (dash-loop.svg, dash-wave.svg, default lime via currentColor); parametric React version in `components/brand/DashedPath.jsx`; CSS mask utilities `.inq-dash-loop` / `.inq-dash-wave` in tokens/base.css.
5. **Shape Language** (Concept 2.0) — abstract geometric shapes carrying psychological meanings: open ring = openness/no black boxes · forward diagonal + node = velocity · 2×2 modules (one lime) = one team · concentric rings = scale · dashed loop = continuity/creative momentum · circle-in-square = controlled velocity. `components/brand/ShapeGlyph.jsx` + `guidelines/visual-shapes.html`. NOTE: the shapes board in the .fig was competitor reference (tkxel); this set is original INOVAQO geometry using the same shape-as-meaning approach.

## CONTENT FUNDAMENTALS
- Voice: sharp, confident, clear, founder-friendly, technical but understandable, premium but not cold. Direct second person ("You bring the idea. We shape, build, and scale the product.").
- Short declarative headlines, never slogans-by-committee: "Build AI products without the chaos." / "Speed works when the system is clear." / "Most AI products do not fail because the idea was bad."
- Body copy is short, scannable, outcome-focused. No long paragraphs.
- Mono labels structure everything: `AI PRODUCT ENGINEERING / 01`, `CASE STUDY / LEGALTECH`, `DIAGNOSE / ARCHITECT / BUILD / SCALE`.
- Sentence case for headlines and UI; UPPERCASE only for mono labels.
- **No emoji.** No exclamation marks. No buzzwords: avoid "innovative solutions", "cutting-edge", "digital transformation partner", "end-to-end services", "passionate team", "world-class".
- Words to own: AI product engineering · controlled velocity · concept to scalable product · speed without chaos · cloud-native execution · no black-box delivery · move fast, build clear, scale right.
- CTAs: "Book a Discovery Call" (primary), "See What We've Built", "Tell Us What You're Building", "Start Your Product Build". Never "Contact Us".
- Pricing language: "Investment", "Projects typically start from $30K…". Never "affordable" or "cost-effective".

## VISUAL FOUNDATIONS
- **Color**: Dark-first. Core Black Teal `#061113` pages, Deep Technical Teal `#0A3C40` panels, Graphite Teal `#1B2528` cards. Mist White `#EAF2EF` text/light mode. Signal Lime `#C9E835` is a *signal, not decoration* — CTAs, active states, key metrics, signal paths only (~5% of any layout). Controlled Coral `#FF6B4A` is rare (warnings/errors, 1–2%). Cloud Gray Blue `#8FB7C2` for muted text and diagrams. Never pure black; never lime text on light backgrounds; never blue/purple AI gradients.
- **Ratio**: 60% dark base / 25% teal surfaces / 10% mist / 5% lime / 1–2% coral.
- **Type**: Concept 2.0 stacks (from the brand-guidelines .fig): **Neurial Grotesk** primary (substitute: Hanken Grotesk; Geist remains in the stack), **Geist Mono** for labels. Display layers: `--font-display-condensed` (Helvetica Bold Condensed → Roboto Condensed 700) for big uppercase statements ("YOUR WORKDAY, ELEVATE YOUR LIFE."); `--font-display-black` (NewBlack Typeface → Archivo Black) for heavy value walls ("Growth", "honesty"); `--font-script` (Neonderthaw, used in the file) for ONE expressive lime accent word per composition ("Streamline"). Headlines: weight 500–600, tracking −0.03 to −0.04em, leading 0.98–1.08. Body 17px/1.65. Mono uppercase labels 11–13px, +0.12em tracking. Never ultra-bold chunky body headings, never mono paragraphs, never more than one script word.
- **Light surfaces** (Concept 2.0): cream-lime `#F8FFD8` appears as an editorial light surface for guideline pages and value walls, paired with Deep Teal text — use alongside Mist White, not as a replacement.
- **Gradients**: only three approved — atmosphere (#061113→#0A3C40), depth (#1B2528→#0A3C40), signal fade (lime→transparent). Always vertical/purposeful, never mesh/rainbow/purple.
- **Backgrounds**: layered dark surfaces, optional ultra-subtle 48px technical grid at ~4% opacity, faint radial depth. No particles, no noise that hurts readability.
- **Layout**: 12-col grid, 1280px max (1440 immersive hero, 960 text-heavy), 24px gutters. Section padding 96–160px desktop / 56–128px mobile. One idea per section. Big type, fewer words. Controlled asymmetry.
- **Cards**: Graphite surface, 1px border at 10% mist, radius 20px (28px feature panels), 32px padding, mono label + title + short copy. Hover: border brightens to 22%, optional 2px lime signal line or lime dot; translateY(-2px) max. Shadows restrained — depth via surfaces and borders.
- **Buttons**: Primary = lime fill, core-dark text, 12px radius (pill acceptable), hover slightly brighter + arrow shift. Secondary = transparent, 1px mist border. Ghost = text + lime underline on hover. In light mode primary actions are deep teal.
- **Radius**: 8 (chips/inputs) / 12 (buttons) / 20 (cards) / 28 (feature) / pill for tags.
- **Motion**: motion clarifies transformation, never decorates. Signal travel, system assembly (cards reveal in sequence), progressive diagrams, subtle hover. Ease `cubic-bezier(0.22,1,0.36,1)`, 150ms hover / 240ms state / 600ms reveal. Never bounce, glitch, parallax soup, particles, slow heavy animation.
- **Imagery**: product architecture diagrams, AI workflow maps, modular UI fragments, system pathways — not robots, brains, neural nets, stock people, 3D blobs, holograms. Photography only when real and premium (team, working sessions); dark/neutral backgrounds.
- **Transparency/blur**: minimal. Glassmorphism nearly forbidden — at most a subtle panel over the dark atmosphere.

## ICONOGRAPHY
- Style: linear, geometric, medium stroke (~1.5–1.75px at 24px grid), slightly rounded joins, minimal detail, built on a 24px grid. No filled/cartoon icons.
- Icons represent **systems, not objects**: AI Engineering = signal + decision node; Cloud = layered infrastructure blocks; Product = modular UI grid; Data = pipeline path; Strategy = route/decision map; Scale = expanding grid. Banned: robot, brain, cloud puff, lightbulb, laptop, rocket, globe, handshake, chip.
- Implementation: use **Lucide** (CDN `https://unpkg.com/lucide@latest`) as the nearest stroke-matched library, stroke-width 1.5, sized 20/24px, color `--text-muted` or `--accent` when active. This is a *substitution* until a custom system-icon set is drawn — flagged for the user.
- No emoji, ever. Unicode arrows (→ ↓) are used as connective glyphs in diagrams and copy.

## Index
- `styles.css` — global entry (imports tokens/fonts).
- `tokens/` — colors.css, typography.css, spacing.css, fonts.css, base.css.
- `assets/logo/` — Q-Core symbol SVGs + favicon. (Final custom wordmark pending logo design — current wordmark is a styled-type rendition.)
- `guidelines/` — foundation specimen cards (colors, type, spacing, brand, visual language, motion, accessibility, do's/don'ts).
- `components/core/` — Button, Badge, Tag, MonoLabel.
- `components/forms/` — Input, Select, Switch.
- `components/cards/` — ServiceCard, CaseStudyCard, ProcessCard, MetricCard.
- `components/product/` — StatusBadge, DataTable, Tabs, EmptyState.
- `components/brand/` — QCore, Wordmark, SignalPath, DashedPath, ShapeGlyph.
- `ui_kits/website/` — marketing site (hero, problem, system, services, process, work, CTA).
- `ui_kits/product/` — product UI dashboard (sidebar, table, statuses, AI panel).
- `templates/social/` — LinkedIn statement + carousel + checklist templates.
- `templates/ads/` — paid ad templates (square + landscape).
- `templates/deck/` — pitch deck slides (dark impact / light clarity / system diagram).
- `templates/proposal/` — proposal cover + content page.
- `notes/` — extracted brand modules (source of truth).
- `SKILL.md` — agent skill entry point.

## Sources
Ten DOCX brand modules supplied by the user (Modules 1–10: strategy, messaging, visual identity, logo, color+type, layout+visual language, website, social+ads, deck+proposal, guidelines structure). Stored in `uploads/` and `src-docs/`; plain-text extractions in `notes/`.
Figma concept file “inovaqo brand guidelines - concept.fig” (attached, mounted read-only): source of the dashed continuity line vectors, the Neurial Grotesk / NewBlack / condensed display type direction, cream-lime `#F8FFD8` surfaces, and the shape-as-psychological-meaning approach (its shapes board itself is tkxel competitor reference — do not reproduce). The concept also explores a custom-N wordmark (lime diagonal N) that differs from the Q-Core direction — unresolved, ask the brand owner before using.
