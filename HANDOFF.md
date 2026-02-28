# mbaguidance.com — Handoff Document

## Current State (Feb 28, 2026)

**1,290 pages live.** 150 schools (Tiers 1-7). 99 comparisons. 30 metros. 50 blog posts. 25 ranking pages. Tier 7 expansion complete.

### What Exists
- **150 school profiles** at `/schools/{slug}/` (M7 through Tier 7)
- **99 comparison pages** at `/compare/{a}-vs-{b}/`
- **22 guide pages** at `/guides/{slug}/`
- **50 blog posts** at `/blog/is-{slug}-worth-it/` (top 50 schools)
- **25 ranking pages** at `/rankings/{category}/` (overall + ROI + salary + selectivity + career-changers + 20 specialties)
- **30 metro pages** at `/locations/{slug}/`
- **Tools:** ROI calculator, GMAT target score calculator
- **FAQ pages** at `/faq/{topic}/`
- **Homepage:** Dashboard layout with stats ticker, headline, pathways, article list, top 10 table, GMAT inline tool, comparisons, newsletter CTA. Tier 5, Tier 6, and Tier 7 filter buttons.

### What Was Just Completed (Session 7 — Tier 7 Schools + Comparisons)

1. **50 new Tier 7 school profiles** (100 → 150 total). Schools ranked 101-150:
   - RIT Saunders, Detroit Mercy, South Florida Muma, Kennesaw State Coles, Duquesne Palumbo-Donahue, Quinnipiac, Loyola Chicago Quinlan, FIU Chapman, Stevens, JMU, UCF, New Hampshire Paul, Suffolk Sawyer, Louisville, UAB Collat, Gonzaga, Fairfield Dolan, Kent State Crawford, Portland State, SLU Chaifetz, Hofstra Zarb, Seton Hall Stillman, UNLV Lee, Memphis Fogelman, Northern Illinois, Dayton, Chapman Argyros, SJSU Lucas, North Texas Ryan, Mississippi State, San Francisco USF, Mercer Stetson, Elon Love, UTSA Alvarez, Kansas State, FAU, Hawaii Shidler, Old Dominion Strome, WVU Chambers, Ole Miss, Appalachian State Walker, Belmont Massey, Clark, Montana, SUNY New Paltz, Chatham, Clarkson Reh, UNC Wilmington Cameron, Iona LaPenta, Scranton Kania

2. **24 new comparison pages** (75 → 99 total). Tier 7 matchups:
   - **Atlanta:** Kennesaw State vs Mercer
   - **NYC Metro:** Stevens vs Hofstra, Seton Hall vs Stevens, Iona (Westchester)
   - **New England:** Suffolk vs UNH, Quinnipiac vs Fairfield
   - **Chicago:** Loyola Chicago vs Northern Illinois
   - **Pittsburgh:** Duquesne vs Chatham
   - **Florida:** USF Muma vs UCF, FIU vs FAU
   - **Pacific NW:** Portland State vs Gonzaga
   - **Bay Area:** SJSU vs USF
   - **California:** Chapman vs SJSU
   - **Virginia:** JMU vs Old Dominion
   - **Ohio:** Kent State vs Dayton
   - **Upstate NY:** Clarkson vs RIT
   - **Texas:** North Texas vs UTSA
   - **North Carolina:** Elon vs Appalachian State
   - **Southeast:** UAB vs Belmont, Louisville vs Dayton, Memphis vs Mississippi State, Ole Miss vs Memphis
   - **Value matchups:** Kansas State vs Mississippi State, WVU vs Montana
   - **Hospitality:** UNLV vs Hawaii
   - **Connecticut:** Quinnipiac vs Fairfield

3. **Infrastructure updates:**
   - Tier 7 CSS badge (`.tier-badge.tier-7`)
   - Homepage filter button: "101-150" with dynamic count
   - `tier_label` mapping: `7: "101-150"`
   - `tier_desc` for blog posts: `"top-150"` for ranks > 100

4. Build verified: 1,290 pages generated successfully

### Previous Session (Session 6 — Comparisons + Metros + Blog Expansion)

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

### Goal: 1,500-2,000+ pages (from current 1,290)

### 1. Expand Schools: 100 → 150 — DONE (1,290 pages)
50 Tier 7 schools added with full profiles, FAQs, subpages, and blog posts.

### 2. Specialty Ranking Pages — DONE (20 pages)
All 20 specialty rankings built with curated school lists.

### 3. Comparisons — DONE (99 pages, was 75)
24 new Tier 7 comparisons added. Regional, value, and specialty matchups.

### 4. Metros — DONE (30 pages, was 15)
15 new metros added. Major US markets covered.

### 5. Blog Posts — DONE (50 posts, was 25)
"Is [School] Worth It?" auto-generates for top 50 schools. Blog posts for schools 51-150 auto-generate from school data too.

### 6. Next Content Opportunities (to reach 1,500+)
- **Expand blog posts to all 150 schools** (currently auto-generating for top 50; extend to all 150 = +100 blog posts)
- **More standalone blog posts:** Salary deep-dives by industry, career-switcher guides, application strategy content (manual, not auto-generated)
- **Update rankings to include Tier 7 schools** in specialty ranking `filter_slugs` lists
- **More comparisons:** Cross-tier comparisons (Tier 7 vs Tier 5/6 schools), more regional matchups
- **New metros:** Add metros for Tier 7 school cities not yet covered (Norfolk, Spokane, Missoula, Starkville, etc.)
- **International schools:** INSEAD, LBS, IESE, etc.
- **Specialty guides:** Industry-specific MBA guides (consulting, tech, healthcare, finance)
- **Glossary pages:** MBA terminology, application terms, financial terms

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

Current state: 1,290 pages, 150 schools (Tiers 1-7), 99 comparisons, 30 metros, 50 blog posts, 25 ranking pages. Build: python3 build.py.

Next steps to reach 1,500+ pages:

1. Expand blog posts to all 150 schools (currently top 50 only). Update the blog generation loop to include all schools = +100 posts, bringing total to ~1,390 pages.
2. Add more standalone blog posts: salary deep-dives by industry (consulting, tech, finance, healthcare), career-switcher guides (engineers to MBA, military to MBA, teachers to MBA), application strategy content (essays, interviews, GMAT prep). These are manual content, not auto-generated. Target 20-30 new posts.
3. Add more comparisons involving Tier 7 schools. Cross-tier comparisons (Tier 7 vs Tier 5/6), more regional matchups. Target 15-20 new comparisons.
4. Update specialty ranking filter_slugs to include relevant Tier 7 schools.
5. Add new metro pages for Tier 7 school cities not yet covered.
6. Target: 1,500+ total pages.

Follow all writing rules in CLAUDE.md. Zero tolerance on false reframes, em-dashes, banned words. Stop at ~50% context, commit, update HANDOFF.md, provide resume prompt.
```
