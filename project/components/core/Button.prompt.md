INOVAQO action button: lime signal primary for the ONE main CTA per view; secondary outline and ghost for everything else.

```jsx
<Button variant="primary" size="lg" arrow>Book a Discovery Call</Button>
<Button variant="secondary">See What We've Built</Button>
<Button variant="ghost">Learn more</Button>
```

Rules: only one primary per composition; CTAs use founder-friendly copy ("Book a Discovery Call", never "Contact Us" or "Submit"). In light-mode contexts wrap in `[data-theme="light"]` — primary stays usable but deep-teal-filled buttons are preferred there (set style background `var(--color-brand-teal)` / color mist).
