---
layout: post
title: "Your Post Title Here"
# Max 60 chars. Lead with primary keyword. No trailing period.
# Example: "Food Cost Percentage: What Your Menu Is Really Telling You"

date: YYYY-MM-DD
# Use today's date. Controls sort order and URL.

author: Filip Bonev

category: manufacturing
# Valid: manufacturing | restaurant | cash-flow | pricing | fractional-cfo | founder-finance | coffee-roaster
# Use exactly one.

excerpt: "One or two sentences that summarise the post."
# Max 155 chars. Standalone sentence, not a teaser.
# Used in post cards and as meta description if meta_description is not set.

tags: [tag1, tag2]
# 2–4 lowercase tags.

read_time: 5
# Estimate: 200 words per minute. Round to nearest minute.

og_image: /assets/images/posts/YYYY-MM-DD-slug/og.jpg
# 1200×630px. Green (#0E4F47) background, white Ancizar Sans title, Point Numera wordmark.
# Folder name matches your post filename (without .md and without the date).

# meta_description: ""
# Only needed if different from excerpt. Max 155 chars.

# ── Bottom CTA overrides ──────────────────────────────────────────────
# The CTA block is added automatically at the end of every post.
# Leave all of the below commented out to use the defaults.

# cta_heading: "Your custom CTA heading here"
# cta_subtext: "One or two sentences. Operator-to-operator tone. No hype."

# cta_tool_url: https://tools.pointnumera.com/tools/TOOL-NAME/
# cta_tool_text: "Try the Tool Name"
# Uncomment these two when the article is a direct fit for a specific tool.
---

Opening paragraph — the hook. Start with a situation the reader recognises. No preamble, no "In this article...".

Second paragraph — develop the tension or the observation. What is the number hiding?

## First Section Heading

Body paragraph. Short: 2–4 sentences, one idea per paragraph.

{% include callout.html type="insight" text="Your key insight here. One or two sentences max." %}

Continue with the next point.

{% include pullquote.html text="A single sentence from this section worth standing out. Place roughly one-third through the post." %}

## Second Section Heading

Body continues.

![Alt text — describe what the image shows, not 'image of...'](/assets/images/posts/YYYY-MM-DD-slug/image-name.jpg)
_Optional caption in italics, directly below the image._

## Third Section Heading

Body continues.

{% include callout.html type="tip" text="A practical action the reader can take right now." %}

---

Closing paragraph — the takeaway. One concrete thing the reader can do or see differently. Do not summarise what they just read.

<!-- The CTA block is added automatically by the post layout. -->
<!-- Set cta_heading, cta_subtext, cta_tool_url in the frontmatter above to customise it. -->
---

## Images — Quick Process

### Adding images to a post

1. **Create a folder**: `assets/images/posts/YYYY-MM-DD-your-slug/`
   Name it after your post filename (without .md).

2. **Add images** — naming: lowercase, hyphens, no spaces.
   - Body images: 720px wide, JPG (photos) or PNG (diagrams)
   - OG image: exactly 1200×630px, save as `og.jpg`

3. **Reference in post body**:
   ```markdown
   ![Alt text](/assets/images/posts/YYYY-MM-DD-slug/image-name.jpg)
   _Optional caption._
   ```

4. **Reference OG image in frontmatter**:
   ```yaml
   og_image: /assets/images/posts/YYYY-MM-DD-slug/og.jpg
   ```

### OG image guidelines

- Background: green (#0E4F47) — ensures contrast for white title text
- Title: Ancizar Sans Bold, white, large
- Branding: "Point Numera" wordmark, bottom corner
- No stock photos — typography-only or simple shapes preferred
- File size: compress to under 200KB

### Preview locally

If Jekyll is installed:
```
bundle exec jekyll serve
```
Open http://localhost:4000

Otherwise push to `main` — GitHub Pages builds within ~60 seconds.
Post goes live at: `blog.pointnumera.com/YYYY/MM/DD/your-post-slug/`
