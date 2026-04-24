# Point Numera — Blog KB

> For use by Claude in chat (writing assistance, SEO review, post drafting) and by coding agents (Jekyll build, layout design, component creation).
> Last updated: [DATE]
> Read together with kb-build.md (design tokens) and kb-content.md (brand voice, ICP, tone).

---

## 1. Blog Overview

**URL:** https://blog.pointnumera.com
**Platform:** Jekyll (static site generator), hosted on GitHub Pages
**Repo:** fibonev/point-numera-blog
**CNAME:** blog.pointnumera.com → fibonev.github.io
**Purpose:** Thought leadership and SEO content for Point Numera's two ICPs — hardware/manufacturing founders and restaurant operators. Posts drive organic traffic, build trust, and convert readers toward a discovery call.

**Primary CTA across all posts:** Book a call → https://cal.com/pointnumera

---

## 2. Repo & File Structure

```
point-numera-blog/
├── _config.yml               # Jekyll config: title, URL, permalink, plugins
├── _layouts/
│   ├── default.html          # Base layout: head, nav, footer
│   ├── home.html             # Homepage: post list
│   └── post.html             # Single post layout
├── _includes/
│   ├── nav.html              # Sticky navigation bar
│   ├── footer.html           # Site footer
│   ├── callout.html          # Callout box component
│   ├── pullquote.html        # Pull quote component
│   ├── cta-block.html        # In-post CTA block (book a call)
│   ├── post-card.html        # Post card used on homepage
│   └── related-posts.html    # Related posts by category
├── _posts/                   # All blog posts live here
│   └── YYYY-MM-DD-slug.md    # Post files — naming convention is mandatory
├── assets/
│   ├── css/
│   │   └── main.css          # All styles — uses PN design tokens
│   ├── js/
│   │   └── main.js           # Reading progress bar, mobile nav toggle
│   └── images/               # Post images and og-images
│       └── posts/
│           └── [slug]/       # One folder per post for images
├── CNAME                     # Contains: blog.pointnumera.com
├── index.html                # Homepage (uses home layout)
├── 404.html                  # Custom 404 page
└── feed.xml                  # RSS feed (auto-generated via jekyll-feed)
```

---

## 3. Post Front Matter Schema

Every post starts with a YAML front matter block. Required fields are marked.

```yaml
---
layout: post # REQUIRED — always "post"
title: "Your Post Title Here" # REQUIRED — used as H1, browser tab, OG title
date: YYYY-MM-DD # REQUIRED — controls sort order
author: Filip Bonev # REQUIRED — always "Filip Bonev"
category: manufacturing # REQUIRED — see Section 4 for valid values
excerpt: "One or two sentences..." # REQUIRED — used in post cards and meta description
tags: [cash flow, pricing, margins] # OPTIONAL — 2–4 lowercase tags
read_time: 5 # OPTIONAL — estimated minutes, shown in post hero
og_image: /assets/images/posts/[slug]/og.jpg # OPTIONAL — 1200×630px OG image for LinkedIn
meta_description: "..." # OPTIONAL — if omitted, excerpt is used. Max 155 chars.
---
```

**Front matter rules:**

- `title` — max 60 characters for SEO. No trailing period.
- `excerpt` — max 155 characters. Write it as a standalone sentence, not a teaser.
- `meta_description` — if different from excerpt, write it here. Otherwise omit.
- `og_image` — always produce a 1200×630px image per post. Store in `/assets/images/posts/[slug]/og.jpg`. If missing, a fallback OG image is used.
- `tags` — 2–4 tags max. Use existing tags before creating new ones.
- `read_time` — estimate: 200 words per minute. Round to nearest minute.

---

## 4. Categories

Valid category values. Use exactly one per post.

| Category          | Use for                                                                                      |
| ----------------- | -------------------------------------------------------------------------------------------- |
| `manufacturing`   | Hardware, production, inventory, capacity, industrial SMEs                                   |
| `restaurant`      | Food cost, menu margin, hospitality, horeca operators                                        |
| `cash-flow`       | Cash management, working capital — applies to both ICPs                                      |
| `pricing`         | Pricing strategy, margin architecture — applies to both ICPs                                 |
| `fractional-cfo`  | Explainers about the fractional CFO model, what it is, who it's for                          |
| `founder-finance` | General founder-facing financial clarity content                                             |
| `coffee-roaster`  | Specialty coffee roasters and café operators — pricing, white label, batch costing, capacity |

**Homepage and nav filter by category.** Do not create new categories without updating the nav filter.

---

## 5. Writing a New Post — Step by Step

1. Create file: `_posts/YYYY-MM-DD-your-post-slug.md`
   - Use today's date. Slug is lowercase, hyphens only, no special characters.
   - Example: `_posts/2025-05-12-food-cost-percentage-explained.md`

2. Write the front matter block (Section 3).

3. Write the body in Markdown (Section 6 — Markdown reference).

4. Use includes for special components (Section 7 — Components).

5. Add OG image to `/assets/images/posts/[slug]/og.jpg`.

6. Push to `main` branch. GitHub Actions deploys automatically.

7. Post is live at `blog.pointnumera.com/YYYY/MM/DD/your-post-slug/`

---

## 6. Markdown Reference — Body Elements

Standard Markdown supported by Jekyll/Kramdown. Use these elements and no others.

### Headings

```markdown
## Section heading → H2 — main section breaks

### Sub-heading → H3 — sub-sections within a section
```

- H1 is generated automatically from `title` in front matter. Never write an H1 in the body.
- Use H2 for major sections. Use H3 sparingly — only when a section has genuine sub-topics.
- Do not skip heading levels (H2 → H4).

### Paragraph

Plain text. Two line breaks = new paragraph. Keep paragraphs short: 2–4 sentences max. This is a blog, not a report.

### Bold and italic

```markdown
**bold text**
_italic text_
```

- Bold: use for key terms or figures you want to stand out. Max 1–2 per section.
- Italic: use for emphasis or to introduce a term. Avoid overuse.

### Unordered list

```markdown
- Item one
- Item two
- Item three
```

### Ordered list

```markdown
1. First step
2. Second step
3. Third step
```

### Horizontal rule (divider)

```markdown
---
```

Use to separate major sections when a heading alone is not enough. Do not overuse.

### Image with caption

```markdown
![Alt text describing the image](/assets/images/posts/[slug]/image-name.jpg)
_Caption text below the image._
```

- Alt text is mandatory — describe the image content, not "image of..."
- Caption is optional — use italic on the line directly below the image.
- Images stored in `/assets/images/posts/[slug]/`.
- Max width in post layout: 720px (enforced by CSS).
- Preferred formats: JPG for photos, PNG for diagrams/charts.

### Inline link

```markdown
[link text](https://url.com)
```

- Internal links: use relative paths — `/2025/05/01/post-slug/`
- External links: open in new tab — handled automatically by JS in main.js

### Blockquote (use sparingly — prefer pull quote component)

```markdown
> This is a blockquote. Use for external citations or sourced quotes only.
```

---

## 7. Components (Jekyll Includes)

These are pre-built HTML components. Use them by inserting the include tag in the Markdown body. They render as styled HTML blocks.

---

### Callout Box

Use for: key insight, warning, tip, or fact you want to visually separate from body text.

```liquid
{% include callout.html
  type="insight"
  text="Your margin problem often shows up in cash flow first. By the time you see it on the P&L, it has already cost you." %}
```

**`type` values:**
| Value | Background | Use for |
|---|---|---|
| `insight` | `#0E4F47` (primary green) | Key insight or observation |
| `tip` | `#111a18` with yellow border | Practical tip or action |
| `warning` | `#111a18` with red border | Common mistake or risk |
| `example` | `#111a18` with secondary green border | Real-world example |

---

### Pull Quote

Use for: a single sentence from the post body that you want to stand out typographically. Do not use for external quotes.

```liquid
{% include pullquote.html
  text="The dish you sell the most is rarely the one that makes you the most money." %}
```

One pull quote per post. Place it roughly one-third to halfway through the post.

---

### CTA Block

Use for: in-post call to action. Insert once per post — either mid-post (if the post is long, 800+ words) or at the end.

```liquid
{% include cta-block.html
  heading="Want clarity on your numbers?"
  subtext="We work with manufacturing founders and restaurant operators across the Benelux. No pitch — just a conversation about where your margins are going."
  button_text="Book a free call"
  button_url="https://cal.com/pointnumera" %}
```

**Rules:**

- Heading: max 8 words. Benefit-led, not feature-led.
- Subtext: 1–2 sentences. Operator-to-operator tone. No hype.
- Button text: action verb + object. "Book a free call" is the default — only change if the context strongly calls for it.
- Do not use more than one CTA block per post.

---

### Related Posts

Automatically rendered at the bottom of every post. No manual include needed — the post layout handles it. Shows up to 3 posts from the same category.

---

### Previous / Next Navigation

Automatically rendered at the bottom of every post. No manual include needed.

---

## 8. Post Structure Template

Copy this for every new post. Replace placeholder content.

```markdown
---
layout: post
title: "Your Title Here"
date: YYYY-MM-DD
author: Filip Bonev
category: [category]
excerpt: "One or two sentences that summarise the post."
tags: [tag1, tag2]
read_time: X
---

Opening paragraph — the hook. Start with a situation founders recognise. No preamble.

Second paragraph — develop the tension or the observation.

## First Section Heading

Body paragraphs. Short. 2–4 sentences each.

{% include callout.html type="insight" text="Your callout text here." %}

Continue body.

{% include pullquote.html text="A key sentence from this section." %}

## Second Section Heading

Body continues.

## Third Section Heading

Body continues.

---

Closing paragraph — the takeaway. One concrete thing the reader can do or see differently. No vague reflection.

{% include cta-block.html
  heading="Want clarity on your numbers?"
  subtext="We work with manufacturing founders and restaurant operators across the Benelux. No pitch — just a conversation."
  button_text="Book a free call"
  button_url="https://cal.com/pointnumera" %}
```

---

## 9. SEO Guidelines

### Title tag

- Populated from `title` in front matter.
- Format: `[Post Title] — Point Numera`
- Max 60 characters (title only, not including brand suffix).
- Lead with the primary keyword. Do not write clever titles that bury the keyword.
- Example: "Food Cost Percentage: What Your Menu Is Really Telling You"

### Meta description

- Populated from `meta_description` or `excerpt`.
- Max 155 characters.
- Must include primary keyword naturally.
- Write as a standalone sentence — not a teaser, not a question.
- Example: "Most restaurant operators calculate food cost wrong. Here is how to read it as a margin signal, not just a percentage."

### URL / permalink

- Auto-generated from filename: `YYYY-MM-DD-slug.md` → `/YYYY/MM/DD/slug/`
- Slug: 3–6 words, hyphen-separated, lowercase, no stop words if avoidable.
- Good: `food-cost-percentage-explained`
- Bad: `how-to-understand-your-food-cost-percentage-as-a-restaurant-owner`

### Heading structure

- One H1 only (auto-generated from title).
- H2 for main sections. H3 for sub-sections.
- Primary keyword should appear in at least one H2.

### Keyword usage

- Primary keyword: appears in title, meta description, first paragraph, and at least one H2.
- Secondary keywords: used naturally in body. Never forced.
- No keyword stuffing. Write for the reader first.

### Internal linking

- Every post should link to at least one other post (related content) or one tool page.
- Use descriptive anchor text — not "click here" or "read more".
- Example: `[how to calculate food cost percentage](/2025/04/10/food-cost-percentage/)`

### External links

- Link to credible sources when citing data or research.
- External links open in new tab (handled by JS).
- Do not link to competitors.

### Open Graph (LinkedIn sharing)

- `og:title` — populated from `title`
- `og:description` — populated from `meta_description` or `excerpt`
- `og:image` — populated from `og_image`. Must be 1200×630px.
- `og:type` — `article`
- `og:url` — canonical post URL

**OG image rules:**

- Dark background matching PN brand (`#0a0f0e` or `#0E4F47`)
- Post title in large Ancizar Sans or PT Sans Bold
- "Point Numera" wordmark bottom-left or bottom-right
- No stock photos. Abstract shapes or typography-only is preferred.
- File: `/assets/images/posts/[slug]/og.jpg`, 1200×630px, compressed.

### Structured data (Article schema)

Injected automatically by the post layout. Covers: headline, datePublished, dateModified, author, publisher, image. No manual action needed per post.

### Post length

- Minimum: 500 words (short-form insight post)
- Optimal: 800–1,500 words (core SEO content)
- Long-form: 1,500–3,000 words (pillar content, use sparingly)
- Do not pad. Every sentence should earn its place.

---

## 10. Content Pillars and Post Types

### Pillar 1 — Operator Insights

Real situations founders face. Financial signal hidden inside an operational problem.

- Hook: recognisable situation
- Body: what the numbers are revealing
- Takeaway: one concrete action

### Pillar 2 — Financial Frameworks Explained Simply

Break down a concept (food cost %, contribution margin, 13-week cash flow) without jargon.

- Hook: the concept stated as a problem founders have
- Body: plain-language explanation with a real example
- Takeaway: how to apply it

### Pillar 3 — Fractional CFO Explainers

What is a fractional CFO. Who needs one. What they do inside a business.

- Hook: a common misconception or the moment a founder realised they needed one
- Body: honest explanation of the model
- Takeaway: how to know if it applies to you

### Pillar 4 — Restaurant Finance

Food cost, menu margin, cash flow, labour cost, rent ratios.

- Hook: operator-to-operator, Filip's own restaurant experience where relevant
- Body: practical framework with NL horeca-accurate numbers
- Takeaway: one thing to check this week

### Pillar 5 — Manufacturing / Hardware Finance

Capacity planning, pricing, production cost visibility, working capital in a manufacturing context.

- Hook: the plateau or pressure point the founder is feeling
- Body: what the numbers usually show in this situation
- Takeaway: where to look first

---

## 11. Tone Rules for Blog Posts

These extend kb-content.md for the specific format of a post.

- First person throughout. Filip is the author. Never "Point Numera believes..."
- Start with a situation, not a definition. Never open with "In this article, I will..."
- Short paragraphs. 2–4 sentences. One idea per paragraph.
- No jargon without explanation. If you use a term, define it in plain language in the same sentence.
- No filler transitions. "Furthermore", "In conclusion", "It is worth noting" — delete them all.
- Numbers and examples ground every post. Do not make abstract claims without a concrete case.
- NL horeca numbers for restaurant posts: use locally accurate dish prices, food costs, rent ranges.
- End on a takeaway, not a reflection. The last paragraph before the CTA should tell the reader what to do or see differently — not summarise what they just read.

---

## 12. Claude's Role When Writing Posts

When helping Filip write or refine a blog post, Claude should:

1. **Check the structure** against the post template in Section 8.
2. **Check the front matter** against the schema in Section 3 — flag any missing required fields.
3. **Check the tone** against Section 11 and kb-content.md Section 6.
4. **Check the SEO** against Section 9 — confirm title length, meta description, keyword placement.
5. **Suggest component placement** — flag where a callout, pull quote, or CTA block would add value.
6. **Never add hype or superlatives.** If a sentence sounds like marketing copy, rewrite it as an observation.
7. **Flag jargon** — any term that a non-finance founder might not immediately understand should be explained inline or removed.
8. **Preserve Filip's voice** — do not make the writing more formal, more consultant-like, or more polished at the cost of directness.

When asked to draft a post, Claude should:

- Ask for: topic, target ICP, primary keyword, any specific examples or numbers to include.
- Produce: a complete draft with front matter, following the post template.
- Do not pad. If the post is 600 words and complete, it is complete.
