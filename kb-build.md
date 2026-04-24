# Point Numera — Build KB
> For use by Claude Code, Codex, and any coding/design session.
> Last updated: [DATE]
> See kb-content.md for brand voice, ICP, and content strategy.
> See kb-tools.md for tool-specific architecture and build rules.

---

## 1. Reference Links

| Resource | URL |
|---|---|
| Live site | https://www.pointnumera.com |
| Framer template (base theme) | https://advocacy-template.framer.website |
| Blog | https://blog.pointnumera.com |
| Booking | https://cal.com/pointnumera |
| Contact | info@pointnumera.com |

---

## 2. Brand Colors

| Role | Name | Hex |
|---|---|---|
| Primary | Primary Green | `#0E4F47` |
| Accent / CTA | Contrast Yellow | `#F4ECBD` |
| Secondary / Cards | Secondary Green | `#A4D6A4` |
| Background | Near-black | `#0a0f0e` |
| Surface | Dark surface | `#111a18` |
| Border | Dark border | `#1e2e2b` |
| Text primary | Off-white | `#f0ede4` |
| Text muted | Muted teal-grey | `#8a9e9a` |
| Error | Red | `#e65c5c` |
| Success | Green | `#4ecb71` |
| Warning | Amber | `#e6c35c` |

### CSS Variables
```css
:root {
  --green-primary: #0E4F47;
  --green-secondary: #A4D6A4;
  --yellow: #F4ECBD;
  --dark: #0a0f0e;
  --dark-surface: #111a18;
  --dark-border: #1e2e2b;
  --text-primary: #f0ede4;
  --text-muted: #8a9e9a;
  --error: #e65c5c;
  --success: #4ecb71;
  --warning: #e6c35c;
}
```

---

## 3. Typography

| Role | Font | Weights |
|---|---|---|
| Headings | Ancizar Sans | Variable 100–900, use 600–700 for headings |
| Body | PT Sans | 400 regular, 700 bold, 400 italic |

- Ancizar Sans: variable font (.ttf), hosted locally in Framer project
- PT Sans: Google Fonts — `https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400&display=swap`
- H1: 52–64px · H2: 36–42px · H3: 24px
- Body: 16px, line-height 1.7
- Eyebrow labels: 11–12px, uppercase, letter-spacing 0.1em

### Punctuation

- Do not use the `&mdash;` HTML entity anywhere in the codebase.
- Use a comma, colon, or plain hyphen (`-`) instead, chosen by context:
  - Before a clarification or example → comma
  - Before a consequence or elaboration → colon
  - In a parenthetical aside → comma or parentheses
  - As a separator in a label or heading → colon
- Never introduce a literal em dash character either.

---

## 4. Spacing System

```css
:root {
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 32px;
  --space-xl: 64px;
  --space-xxl: 96px;
}
```

**Rules:**
- Section padding: 80–120px top/bottom
- Card padding: 24–32px
- Button padding: 12px 24px
- Input padding: 12px 14px
- Gap between cards: 24px

---

## 5. Border Radius

```css
:root {
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-pill: 999px;
}
```

**Rules:**
- Buttons → `--radius-pill`
- Cards → `--radius-md`
- Tool containers → `--radius-md`
- Input fields → 6px

---

## 6. Shadows

The main site uses a flat design — no shadows. Keep tools consistent with this.

Exception: a subtle shadow may be used on result cards inside tools where elevation helps identify the primary output:
```css
--shadow-card: 0 10px 30px rgba(0, 0, 0, 0.25);
```
Use sparingly — only when it aids clarity, never for decoration.

---

## 7. Grid & Layout

```
Max container width: 1200px
Content / text width: 720px
Column gap: 24px
```

**For tools:**
- Desktop: two-column where useful (inputs left, results right)
- Mobile: single column, stacked
- Tool container max-width: 960px

---

## 8. Form Input Design

```css
input, select, textarea {
  background: #111a18;
  border: 1px solid #1e2e2b;
  color: #f0ede4;
  padding: 12px 14px;
  border-radius: 6px;
  font-family: 'PT Sans', sans-serif;
  font-size: 16px;
}

input:focus {
  border-color: #F4ECBD;
  outline: none;
}

input:hover {
  border-color: #A4D6A4;
}

input.error {
  border-color: #e65c5c;
}
```

- Labels: `#f0ede4`, 14px, PT Sans, margin-bottom 6px
- Helper text: `#8a9e9a`, 12px, below the input

---

## 9. Section Background Pattern

The live site alternates section backgrounds — this is the core visual rhythm. Never use the same background for two consecutive sections.

| Section type | Background | Text colour |
|---|---|---|
| Hero | `#0a0f0e` (near-black) | `#f0ede4` |
| Feature / card sections | `#A4D6A4` (secondary green) | `#0a0f0e` |
| Pricing / CTA / contact | `#0E4F47` (primary green) | `#f0ede4` |
| About / editorial | White or off-white | `#0a0f0e` |
| Footer | `#0E4F47` or `#0a0f0e` | `#f0ede4` |

---

## 10. Navigation

- Sticky nav, `#0E4F47` background on scroll, transparent over dark hero
- Logo: wordmark "Point Numera" with geometric bracket/page-fold icon left
- Nav links: Services, Process, Pricing, About, FAQ
- CTA button: "Get in touch" — outlined pill style
- Mobile: hamburger menu top right
- No dropdown menus

---

## 11. UI Patterns & Components

### Eyebrow label
```
[PN icon] SECTION NAME
```
- Icon: PN bracket SVG ~16px
- Text: 13–14px, uppercase, letter-spacing 0.1em
- Used at the start of every major section

### Service / feature cards
- Full-width on `#A4D6A4` background
- Number label top-left (01, 02, 03...) in small text
- H3 heading, 2–3 line description
- Outlined CTA button — dark border, dark text, no fill

### Buttons
- Primary CTA: `#F4ECBD` fill, dark text — hero CTAs only
- Secondary / outlined: transparent, border matches text colour
- All caps label, moderate letter-spacing
- Shape: pill (`--radius-pill`)

### Inner page hero
- Full-width `#0E4F47` background
- Small eyebrow label centred (e.g. "FREE TOOL")
- Large H1 centred, subtitle below
- Optional decorative abstract shape in darker green tone

---

## 12. Logo & Brand Mark

- Wordmark: "Point Numera" with geometric bracket/page-fold icon
- White on dark backgrounds, dark on light backgrounds
- Do not recreate — use existing Framer asset
- Framer CDN: `https://framerusercontent.com/images/AoPfCAxRNXza13jDgsO8Uvs.svg`

---

## 13. Site Architecture

| Page | Platform | URL | Notes |
|---|---|---|---|
| Main site | Framer | pointnumera.com | Single-page with anchors |
| Blog | Framer | pointnumera.com/blog | To be built in Framer |
| Partners | Framer | pointnumera.com/partners | To be built in Framer |
| Tool landing pages | Framer | pointnumera.com/tools/[tool-name] | SEO pages — embed or link to tool |
| Tool files (functional) | GitHub Pages | fibonev.github.io/point-numera-tools/tools/[tool-name] | Calculator logic |

**Deprecated:** Jekyll + Cloudflare proxy approach — do not use.

---

## 14. SEO Architecture for Tools

Tools run on GitHub Pages. SEO lives on the Framer site.

1. Build the tool as a static HTML/CSS/JS file on GitHub Pages
2. Create a landing page on Framer at `pointnumera.com/tools/[tool-name]`
3. The Framer page contains: H1, intro copy, embedded tool (iframe), explanatory text, FAQ, CTA
4. Write blog posts on Framer that link to tool landing pages
5. Google indexes Framer pages — PN domain gets the authority, not GitHub

**Iframe embed pattern:**
```html
<iframe
  src="https://fibonev.github.io/point-numera-tools/tools/[tool-name]/index.html"
  width="100%"
  height="700px"
  frameborder="0"
  style="border-radius: 8px;"
></iframe>
```

---

## 15. Tool Styling Rules

- Background: `#0a0f0e` or `#111a18` — never white
- Text: `#f0ede4`
- Inputs: follow Section 8 exactly
- Result highlight: `#F4ECBD` (yellow)
- Secondary accent: `#A4D6A4`
- Font: PT Sans from Google Fonts
- No external UI libraries (no Bootstrap, Tailwind, Material UI)
- Vanilla JS only unless there is a strong reason otherwise

---

## 16. AI Build Rules

**Always use:**
- PN colour variables from Section 2
- PT Sans for body/UI, Ancizar Sans for headings
- Dark theme — `#0a0f0e` or `#111a18`
- Alternating section backgrounds per Section 9
- Pill-shaped buttons
- Plain-language labels

**Never use:**
- White backgrounds
- Generic SaaS colour palettes (blue, purple, etc.)
- External UI frameworks
- Shadows except the defined card shadow
- Unnecessary animations
