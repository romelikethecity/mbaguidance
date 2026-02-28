# mbaguidance.com — Handoff Document

## Current State (Feb 28, 2026)

**930 pages live.** 100 schools (Tiers 1-6). 75 comparisons. 30 metros. 50 blog posts. 25 ranking pages. Expansion Phase 1 complete for comparisons, metros, and blog posts.

### What Exists
- **100 school profiles** at `/schools/{slug}/` (M7 through Tier 6)
- **75 comparison pages** at `/compare/{a}-vs-{b}/`
- **22 guide pages** at `/guides/{slug}/`
- **50 blog posts** at `/blog/is-{slug}-worth-it/` (top 50 schools)
- **25 ranking pages** at `/rankings/{category}/` (overall + ROI + salary + selectivity + career-changers + 20 specialties)
- **30 metro pages** at `/locations/{slug}/`
- **Tools:** ROI calculator, GMAT target score calculator
- **FAQ pages** at `/faq/{topic}/`
- **Homepage:** Dashboard layout with stats ticker, headline, pathways, article list, top 10 table, GMAT inline tool, comparisons, newsletter CTA. Tier 5 and Tier 6 filter buttons.

### What Was Just Completed (Session 6 — Comparisons + Metros + Blog Expansion)

1. **40 new comparison pages** (35 → 75 total). Categories added:
   - **Cross-tier reach comparisons:** Duke vs Kellogg, Yale vs Columbia, Dartmouth vs Yale, Cornell vs Stern, Ross vs Kellogg, Emory vs Duke, Wharton vs Columbia
   - **Regional matchups:** Georgia Tech vs Emory (Atlanta), BU vs Northeastern (Boston), BC vs BU (Boston), GW vs Georgetown (DC), SMU vs McCombs (Texas), Pitt Katz vs Tepper (Pittsburgh), Warrington vs Herbert (Florida), Rutgers vs Fordham (NYC area), UGA vs Georgia Tech (Georgia), UCSD vs UCI (SoCal), Leeds vs Daniels (Colorado), Temple vs Drexel (Philly), Howard vs American (DC), USC vs Haas (California), UC Davis vs UCI (UC system), SDSU vs USD (San Diego), LMU vs Pepperdine (LA), DePaul vs UIC (Chicago)
   - **Midwest matchups:** Notre Dame vs Kelley, Ohio State vs Kelley, WashU vs Kelley, Wisconsin vs Minnesota, Illinois vs Kelley
   - **Specialty/program comparisons:** Babson vs BU (entrepreneurship), ASU vs Arizona (state flagships), Wake Forest vs UNC, Baylor vs TCU, Texas A&M vs Baylor, Tennessee vs Vanderbilt, Iowa vs Wisconsin
   - **Southern comparisons:** Vanderbilt vs UNC, UNC vs Duke (NC neighbors), Georgetown vs Darden (DC/VA)

2. **15 new metro pages** (15 → 30 total). New metros:
   - Austin, Pittsburgh, Salt Lake City, Denver-Boulder, San Diego, Miami-South Florida
   - Central Indiana, Cincinnati, Columbus OH, Milwaukee-Madison, St. Louis
   - Phoenix-Tempe, Orange County, Portland-Eugene, New Jersey

3. **Blog posts expanded** from 25 to 50 (top 50 schools now get "Is [School] Worth It?" posts)

4. Build verified: 930 pages generated successfully

### Previous Session (Session 5 — Specialty Rankings + Fixes)
1. 20 new specialty ranking pages at `/rankings/{specialty}/`
2. Duplicate schools fixed (Bentley replaced Northeastern duplicate, Syracuse replaced Tulane duplicate)
3. Overall ranking limit expanded from 50 to 100
4. Build verified: 850 pages

### Previous Session (Session 4 — Schools 76-100)
1. 25 new Tier 6 schools added (rankings 76-100)
2. Tier 6 CSS badge, homepage filter button
3. CSS_VERSION bumped from 6 to 7
4. Build verified: 823 pages

### Earlier Sessions
1. Schools 51-75 (Tier 5), CSS_VERSION 5→6
2. Homepage dashboard layout, branding, docs setup
3. Original 50 schools, 35 comparisons, 22 guides, 15 metros

---

## The Expansion Plan

### Goal: 1,500-2,000+ pages (from current 930)

### 1. Expand Schools: 100 → 150 (NEXT PRIORITY)
- **Tier 7 (101-150):** ~50 schools (TO ADD)
- Each profile generates 7 pages (profile + 6 subpages), so 50 more schools = ~350 more pages
- This brings page count to ~1,280

### 2. Specialty Ranking Pages — DONE (20 pages)
All 20 specialty rankings built with curated school lists.

### 3. Comparisons — DONE (75 pages, was 35)
40 new comparisons added. Cross-tier, regional, and specialty matchups. Could add more as Tier 7 schools are added.

### 4. Metros — DONE (30 pages, was 15)
15 new metros added. Major US markets covered. Could add more niche markets later.

### 5. Blog Posts — DONE (50 posts, was 25)
"Is [School] Worth It?" expanded to top 50. Auto-generates from school data.

### 6. Future Content Opportunities (after schools 101-150)
- **More comparisons:** Add comparisons involving Tier 7 schools (~20-30 more)
- **More blog posts:** Salary deep-dives by industry, career-switcher guides, application strategy (manual content, not auto-generated)
- **International schools:** INSEAD, LBS, IESE, etc.
- **Specialty guides:** Industry-specific MBA guides (consulting, tech, healthcare, finance)
- **More metros:** Niche markets as new schools are added

---

## Tech Stack

- **Build:** `python3 build.py` generates all HTML into `output/`
- **Preview:** `cd output && python3 -m http.server 8084`
- **Pattern:** All data inline in `build.py` (Provyx single-file pattern)
- **Stack:** Static HTML/CSS/JS. No frameworks. GitHub Pages hosting.
- **CSS:** `assets/css/style.css` with `CSS_VERSION = 7` cache-busting
- **Rankings:** 25 total (5 metric-based + 20 specialty with curated `filter_slugs`)
- **Fonts:** Playfair Display (headings), Source Sans 3 (body)
- **Colors:** Navy `#0A1628`, Gold `#C9A84C`, Warm Ivory `#F7F5F0`

## Reference Documents (ALL in project)

| Document | Location | Purpose |
|----------|----------|---------|
| CLAUDE.md | project root | Master instructions for page generation |
| BRAND_GUIDELINES.md | project root | Colors, typography, components |
| LANDING-PAGE-FORMULA.md | docs/ | Harry Dry 10-point formula |
| LANDING-PAGE-QUICK-REF.md | docs/ | Title approaches, hero best practices |
| ROME_WRITING_STYLE.md | docs/ | Writing voice, banned words, AI tells |
| SEO-BEST-PRACTICES.md | docs/ | Meta tags, schema, linking, E-E-A-T |
| CONTENT-STRATEGY.md | docs/ | Pillars, buyer stages, pSEO playbooks |

**External repo:** `github.com/coreyhaines31/marketingskills` (pSEO playbooks, content strategy, copywriting, schema, site architecture, AI SEO)

## Author & Positioning

- **Author:** Rome Thorndike, Berkeley Haas MBA
- **Voice:** Confident, experienced, slightly irreverent. A knowledgeable friend. Not a consultancy or brochure.
- **Credential:** Haas MBA + enterprise sales at Salesforce and Microsoft

## Writing Rules (Critical)

Read `CLAUDE.md` and `docs/ROME_WRITING_STYLE.md` before creating ANY content.

**Zero tolerance:**
- No false reframes ("not X, it's Y")
- No em-dashes for parenthetical asides
- No banned words (robust, leverage, genuinely, truly, actually, etc.)
- No unearned declarations ("Here's the thing:", "The bottom line:")
- No performing casualness ("That's not a typo.", "Spoiler alert:")

**Do:**
- Use contractions
- Vary sentence length dramatically
- Let data speak for itself
- State opinions confidently when backed by evidence
- Specific numbers, not vague qualifiers

## Business Model

1. **Phase 1 (now):** Build site, expand to 1,500+ pages, establish search presence
2. **Phase 2 (with traffic):** GMAT/GRE prep affiliate links ($50-150/conversion)
3. **Phase 3:** Admissions consulting lead gen + 1:1 services

## Resume Prompt

Copy-paste to continue in a new window:

```
Continue building mbaguidance.com. Project at /Users/rome/Documents/projects/mbaguidance/. Read CLAUDE.md and HANDOFF.md for full context.

Current state: 930 pages, 100 schools (Tiers 1-6), 75 comparisons, 30 metros, 50 blog posts, 25 ranking pages. Build: python3 build.py.

Next steps in the expansion plan:

1. Add schools 101-150 (Tier 7). 50 more schools = ~350 more pages. Research schools ranked ~101-150 in US News. Same data model as existing schools: real data, opinionated verdicts, full profiles with FAQs. Add tier 7 CSS badge, homepage filter button, update tier_label/tier_desc mappings.
2. Add comparisons involving new Tier 7 schools (~20-30 new comparisons).
3. Add more standalone blog posts: salary deep-dives by industry, career-switcher guides, application strategy content (these are manual, not auto-generated from school data).
4. Target: 1,500+ total pages.

Follow all writing rules in CLAUDE.md. Zero tolerance on false reframes, em-dashes, banned words. Stop at ~50% context, commit, update HANDOFF.md, provide resume prompt.
```
