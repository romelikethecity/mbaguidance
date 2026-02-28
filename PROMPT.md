# Context Window Prompt — mbaguidance.com

Copy everything below this line into a new Claude context window.

---

## Your Task

You are building **mbaguidance.com** — a personal authority site for MBA admissions guidance and career intelligence, authored by Rome Thorndike (Berkeley Haas MBA). The site generates ~93 static HTML pages from structured data using a Python build script, hosted on GitHub Pages.

**Read these files first (in this order):**
```
Read the file at /Users/rome/Documents/projects/mbaguidance/BRAND_GUIDELINES.md
Read the file at /Users/rome/Documents/projects/mbaguidance/HANDOFF.md
Read the file at /Users/rome/Documents/projects/mbaguidance/assets/css/style.css
```

- **BRAND_GUIDELINES.md** — Complete brand spec: colors (Navy/Gold/Warm Ivory), typography (Playfair Display + Source Sans 3), component patterns (school card, nav, hero, byline), icon/logo system
- **HANDOFF.md** — Full build spec: ~50 schools, page types, URL structure, SEO patterns, comparison pairs, build order
- **style.css** — Brand CSS foundation already written (variables, typography, buttons, cards, layout, responsive). Extend this, don't replace it.

You can also open `reference.html` in a browser to see all components rendered visually.

## What to Build

A Python build script (`build.py`) that generates a complete static site:
1. **Homepage** — navy hero, author byline, featured school cards, category links
2. **~50 school profile pages** — individual analysis pages with stats, verdict, affiliate CTAs
3. **School listing page** — filterable grid of all schools
4. **~25 comparison pages** — "{School A} vs {School B}" side-by-side
5. **5 ranking pages** — schools ranked by different criteria (overall, ROI, salary, selectivity, career changers)
6. **~8 guide pages** — editorial content (GMAT vs GRE, application timeline, essay writing, ROI analysis, best for tech/finance/consulting/career changers)
7. **About page** — author bio with Haas credential
8. **Services page** — consulting services placeholder
9. **Blog index** — placeholder for future editorial content

## Architecture Rules

1. **All data lives in `build.py`.** Schools, comparisons, rankings — everything is inline Python dicts/lists. No separate JSON or YAML files. This overrides the file structure in BRAND_GUIDELINES.md which suggests `data/schools.json`. Use the single-file pattern.
2. **Static HTML output.** Build script generates all HTML into `output/`. No server, no framework.
3. **Use the existing `assets/css/style.css`.** It already has the brand CSS foundation. Extend it with additional component styles as needed — do NOT replace it or create a new file. Do NOT invent new colors or fonts.
4. **SEO-first.** Every page needs title tags, meta descriptions, OG tags, canonical URLs, internal cross-links. Patterns are in the handoff.
5. **Opinionated content.** This is NOT a neutral directory. Every school gets an honest verdict with personality. The author went through this process at Berkeley Haas — the site reads like advice from someone who knows, not a college brochure.
6. **Personal brand throughout.** Author byline (Rome Thorndike · Berkeley Haas MBA) appears on school pages, guide pages, and the homepage. Use the initials circle ("RT") as photo placeholder.
7. **Affiliate link placeholders.** Use `class="affiliate-link"` with `href="#"` for GMAT/GRE prep CTAs. Place them contextually on school pages after the stats section.
8. **Year is parameterized.** `CURRENT_YEAR = 2026` at top of `build.py`.

## Brand System (Already Complete — Do NOT Deviate)

- **Colors:** Navy `#0A1628` (primary), Gold `#C9A84C` (accent/CTAs), Warm Ivory `#F7F5F0` (page background), White `#FFFFFF` (card surfaces)
- **Fonts:** Playfair Display (headings, school names, stats), Source Sans 3 (body, nav, buttons, labels)
- **Components defined in brand:** School card (navy header + gold badge + stats + verdict), nav bar, hero section, buttons (accent/primary/outline/ghost), author byline, gold rules
- **Sharp corners:** `border-radius: 2px` throughout — deliberate design choice for authority feel
- **Assets in `assets/`:** logo-primary-dark.svg, logo-primary-light.svg, icon.svg, favicon.svg, favicon-32.png, apple-touch-icon.png, og-default.png

## Build Order

### Phase 1: Foundation
1. `build.py` skeleton with school data model + all ~50 schools populated
2. Extend `style.css` with any additional component styles
3. Homepage template + generation
4. School listing page
5. All ~50 school profile pages

### Phase 2: High-Value Pages
6. 25 comparison pages
7. 5 ranking pages (overall, ROI, salary, selectivity, career changers)
8. About page
9. Services page

### Phase 3: Content Pages
10. 8 guide pages
11. Blog index placeholder

### Phase 4: Polish
12. Internal linking pass
13. sitemap.xml + robots.txt
14. OG tags using `assets/og-default.png`
15. Mobile responsive check

## Working Directory

```
/Users/rome/Documents/projects/mbaguidance/
```

## Reference Sites (for architecture patterns, NOT for design)

- **Provyx site** (`/Users/rome/Documents/projects/provyx-website/`) — look at `scripts/build.py` for how inline data + templates generate 346 pages. Follow this single-file pattern.
- **B2B Sales Tools** (`/Users/rome/Documents/projects/b2bsalestools/`) — sister site, same architecture, different brand

## Important

- Read BRAND_GUIDELINES.md and HANDOFF.md first before writing any code
- Start with `build.py` data model — get the school data structure right, then populate all ~50 schools before building templates
- The `build.py` script should copy `assets/` into `output/` as part of the build
- Generate a working site that can be previewed with `python3 -m http.server 8084` from the output directory
- Use the brand system exactly as specified — navy/gold/ivory, Playfair/Source Sans, sharp 2px corners
- School verdicts should have real personality — "if you can stomach the Valley kool-aid" not "a prestigious institution"
- Every page must be mobile-responsive
- Do NOT over-engineer. Start with Phase 1 and iterate.
