# Product UI kit

INOVAQO-branded product dashboard per Modules 3/6/14: calm dark surfaces, teal navigation, lime only for active states, mono metadata, readable tables, AI assistant panel with lime live indicator.

Self-contained HTML/CSS against `../../styles.css` tokens. In production, compose from `components/product/` (StatusBadge, DataTable, Tabs, EmptyState) and `components/core/`.

Rules embodied:
- Sidebar = Deep Technical Teal panel; page = Core Black Teal; cards = Graphite.
- Status logic: lime = active/success · coral = warning/error · cloud gray = info · graphite = disabled. Always dot + label.
- One lime button per view; UI type is restrained (13–15px, dashboard numbers 30–48px).
- AI assistant: dark panel, lime live dot, mono context metadata — AI-native but human-readable.
