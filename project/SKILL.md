---
name: inovaqo-design
description: Use this skill to generate well-branded interfaces and assets for INOVAQO, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key INOVAQO rules (full detail in readme.md):
- Brand idea: Controlled Velocity — "Move fast. Build clear. Scale right."
- Dark-first: #061113 pages, #0A3C40 panels, #1B2528 cards, #EAF2EF text. Signal Lime #C9E835 is a rare signal (~5%): one CTA, active states, key metrics. Coral #FF6B4A only for warnings/errors. Never lime text on light backgrounds; never blue/purple AI gradients.
- Type: Geist Sans (500–600 headings, tracking −0.03/−0.04em) + Geist Mono uppercase labels ("AI PRODUCT ENGINEERING / 01"). No emoji, no buzzwords.
- Visual language: Q-Core mark, Signal Path lines, Product Grid modules, architecture diagrams. Never robots/brains/neural nets/particles.
- Tokens in tokens/*.css (import styles.css); components in components/*; full-screen references in ui_kits/; social/ads/deck/proposal templates in templates/.
