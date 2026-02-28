# mbaguidance.com — Handoff Document

## Current State (Feb 28, 2026)

**823 pages live.** 100 schools (50 original + 25 Tier 5 + 25 Tier 6). Homepage updated with Tier 6 filter. Expansion Phase 1 in progress.

### What Exists
- **100 school profiles** at `/schools/{slug}/` (M7 through Tier 6)
- **35 comparison pages** at `/compare/{a}-vs-{b}/`
- **22 guide pages** at `/guides/{slug}/`
- **25 blog posts** at `/blog/{slug}/`
- **5 ranking pages** at `/rankings/{category}/` (overall, finance, tech, consulting, entrepreneurship)
- **15 metro pages** at `/metro/{city}-mba-programs/`
- **Tools:** ROI calculator, GMAT target score calculator
- **FAQ pages** at `/faq/{topic}/`
- **Homepage:** Dashboard layout with stats ticker, headline, pathways, article list, top 10 table, GMAT inline tool, comparisons, newsletter CTA. Tier 5 and Tier 6 filter buttons added.

### What Was Just Completed (Session 4 — Schools 76-100)
1. **25 new Tier 6 schools added** (rankings 76-100), all with full data model:
   - NC State Jenkins (#76), Northeastern D'Amore-McKim (#77), Iowa Tippie (#78), SUNY Buffalo (#79), Oklahoma Price (#80)
   - Howard (#81), Oregon Lundquist (#82), Denver Daniels (#83), Alabama Manderson (#84), Arkansas Walton (#85)
   - TCU Neeley (#86), Utah Eccles (#87), Drexel LeBow (#88), Clemson (#89), UIC Liautaud (#90)
   - Missouri Trulaske (#91), DePaul Kellstadt (#92), SDSU Fowler (#93), Xavier Williams (#94), Marquette (#95)
   - Loyola Marymount (#96), Creighton Heider (#97), Tulane Freeman (#98), San Diego Knauss (#99), American Kogod (#100)
2. Each school has: real data (acceptance rate, GMAT, GPA, class size, salary, employment, tuition), opinionated verdict, program overview, culture, academics, careers, who should apply, watch out for, and 3 FAQs
3. Tier 6 CSS badge styling added (`.tier-badge.tier-6`)
4. Homepage filter button added for "76-100" tier
5. `tier_label` and `tier_desc` mappings updated to include tier 6
6. CSS_VERSION bumped from 6 to 7
7. Build verified: 823 pages generated successfully

### Previous Session Work (Session 3 — Schools 51-75)
1. 25 new Tier 5 schools added (rankings 51-75)
2. Tier 5 CSS badge styling, homepage filter button
3. CSS_VERSION bumped from 5 to 6
4. Build verified: 655 pages

### Earlier Sessions
1. Homepage headline: "Pick the right MBA without the 200+ hour research project."
2. All best practice docs pulled into `docs/`
3. `CLAUDE.md` fully updated with all doc references + marketingskills repo
4. CSS border-radius changed from 2px/4px to 8px/12px (rounded corners)
5. Dashboard homepage layout built (stats ticker, pathways, article list, data table, GMAT tool)

---

## The Expansion Plan

### Goal: 1,500-2,000+ pages (from current 823)

### 1. Expand Schools: 100 → 150
- **Tier 7 (101-150):** ~50 schools (TO ADD)
- Each profile generates 7 pages (profile + 6 subpages), so 50 more schools = ~350 more pages

### 2. Tag Schools with Specialty Strengths → Build 20-25 Specialty Ranking Pages

**The competitive advantage:** US News charges $30-40/yr for specialty rankings. Bloomberg charges $340-415/yr. FT charges $540-900/yr. We give it away free.

**Tag each school with specialty strengths**, then generate ranking pages at `/rankings/{specialty}/`.

#### 13 US News Specialties (match them)
1. Accounting
2. Entrepreneurship
3. Finance
4. Information Systems
5. International Business
6. Management
7. Marketing
8. Nonprofit Management
9. Production/Operations
10. Project Management
11. Real Estate
12. Supply Chain/Logistics
13. Quantitative Analysis

#### 8+ Career-Path Rankings (US News misses these)
14. Consulting
15. Private Equity & Venture Capital
16. Technology & Product
17. Healthcare Management
18. Data Science & AI
19. Sustainability & Social Impact
20. Product Management
21. AI & Machine Learning
22. Energy

### 3. Expand Comparisons

With 100+ schools, the comparison page opportunity grows massively:
- **Cross-tier comparisons:** "Is Kelley worth it vs applying to Ross?"
- **Regional matchups:** Every metro area pair
- **Specialty matchups:** "Best finance MBA: Wharton vs Booth vs Stern"
- Target: 75-100+ comparison pages (from current 35)

### 4. Expand Metros

Add 15-20 more metro pages beyond the current 15:
- Secondary markets: Nashville, Austin, Raleigh, Salt Lake City, Sacramento, Pittsburgh, etc.
- Each metro page lists schools in that region + cost of living + local employers

### 5. More Blog Posts

Expand from 25 to 50+:
- "Is [School] Worth It?" series for top 50 schools
- Salary deep-dives by industry
- Application strategy content
- Career-switcher guides

---

## Tech Stack

- **Build:** `python3 build.py` generates all HTML into `output/`
- **Preview:** `cd output && python3 -m http.server 8084`
- **Pattern:** All data inline in `build.py` (Provyx single-file pattern)
- **Stack:** Static HTML/CSS/JS. No frameworks. GitHub Pages hosting.
- **CSS:** `assets/css/style.css` with `CSS_VERSION = 7` cache-busting
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

Current state: 823 pages, 100 schools (Tiers 1-6 done). Build: python3 build.py.

Next steps in the expansion plan:

1. Tag all 100 schools with specialty strengths, then build 20-25 specialty ranking pages at /rankings/{specialty}/. This is the highest-value next step — free specialty rankings that US News charges $30-40/yr for.
2. After rankings: Expand comparisons from 35 to 75-100+.
3. After comparisons: Expand metros from 15 to 30+.
4. After metros: Add schools 101-150 (Tier 7).
5. Target: 1,500-2,000+ total pages.

Follow all writing rules in CLAUDE.md. Zero tolerance on false reframes, em-dashes, banned words. Stop at ~50% context, commit, update HANDOFF.md, provide resume prompt.
```
