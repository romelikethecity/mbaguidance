# mbaguidance.com — Handoff Document

## Current State (Feb 28, 2026)

**655 pages live.** 75 schools (50 original + 25 new Tier 5). Homepage updated with Tier 5 filter. Expansion Phase 1 in progress.

### What Exists
- **75 school profiles** at `/schools/{slug}/` (M7 through Tier 5)
- **35 comparison pages** at `/compare/{a}-vs-{b}/`
- **22 guide pages** at `/guides/{slug}/`
- **25 blog posts** at `/blog/{slug}/`
- **5 ranking pages** at `/rankings/{category}/` (overall, finance, tech, consulting, entrepreneurship)
- **15 metro pages** at `/metro/{city}-mba-programs/`
- **Tools:** ROI calculator, GMAT target score calculator
- **FAQ pages** at `/faq/{topic}/`
- **Homepage:** Dashboard layout with stats ticker, headline, pathways, article list, top 10 table, GMAT inline tool, comparisons, newsletter CTA. Tier 5 filter button added.

### What Was Just Completed (Session 3 — Schools 51-75)
1. **25 new Tier 5 schools added** (rankings 51-75), all with full data model:
   - UGA Terry (#51), UC Irvine Merage (#52), Texas A&M Mays (#53), Pitt Katz (#54), Rutgers (#55)
   - Baylor Hankamer (#56), Temple Fox (#57), Fordham Gabelli (#58), Miami Herbert (#59), Colorado Leeds (#60)
   - Baruch Zicklin (#61), William & Mary Mason (#62), Arizona Eller (#63), UCSD Rady (#64), Case Western Weatherhead (#65)
   - South Carolina Moore (#66), Kansas (#67), Auburn Harbert (#68), Cincinnati Lindner (#69), UMass Isenberg (#70)
   - Chapman Argyros (#71), Pepperdine Graziadio (#72), Stevens (#73), Tennessee Haslam (#74), Kentucky Gatton (#75)
2. Each school has: real data (acceptance rate, GMAT, GPA, class size, salary, employment, tuition), opinionated verdict, program overview, culture, academics, careers, who should apply, watch out for, and 3 FAQs
3. Tier 5 CSS badge styling added (`.tier-badge.tier-5`)
4. Homepage filter button added for "51-75" tier
5. `tier_label` and `tier_desc` mappings updated to include tier 5
6. CSS_VERSION bumped from 5 to 6
7. Build verified: 655 pages generated successfully

### Previous Session Work
1. Homepage headline: "Pick the right MBA without the 200+ hour research project."
2. All best practice docs pulled into `docs/`
3. `CLAUDE.md` fully updated with all doc references + marketingskills repo
4. CSS border-radius changed from 2px/4px to 8px/12px (rounded corners)
5. Dashboard homepage layout built (stats ticker, pathways, article list, data table, GMAT tool)

---

## The Expansion Plan

### Goal: 1,500-2,000+ pages (from current 480)

### 1. Expand Schools: 50 → 150

Add 100 more schools to the `SCHOOLS` list in `build.py`. Each school needs the full data model:

```python
{
    "name": "Full Official Name",
    "short_name": "Display Name",
    "slug": "url-slug",
    "ranking": 51,
    "tier": 3,  # 1=M7, 2=Top15, 3=Top25, 4=Notable
    "acceptance_rate": 28.0,
    "avg_gmat": 690,
    "avg_gpa": 3.4,
    "class_size": 200,
    "avg_salary": 135000,
    "employment_rate": 89,
    "tuition": 55000,
    "location": "City, ST",
    "founded": 1920,
    "strengths": ["Supply Chain", "Operations"],
    "best_for": ["Operations", "Supply Chain"],
    "verdict": "Opinionated one-liner...",
    "program_overview": "...",
    "culture": "...",
    "academics": "...",
    "career_outcomes": "...",
    "who_should_apply": "...",
    "watch_out_for": "...",
    "known_for": ["tag1", "tag2"],
    "faq": [("Question?", "Answer.")],
}
```

**School tiers (expanded):**
- Tier 1 (M7): 7 schools (done)
- Tier 2 (Top 15): 8 schools (done)
- Tier 3 (Top 25): 10 schools (done)
- Tier 4 (Top 50): 25 schools (done)
- Tier 5 (51-75): 25 schools (DONE — session 3)
- **Tier 5 (76-100):** ~25 schools (TO ADD — next batch)
- **Tier 6 (101-150):** ~50 schools (TO ADD)

Schools like Loyola Marymount, Pepperdine, San Diego, etc. have public GMAT/salary data and get searched. Each profile is a valuable long-tail keyword page.

### 2. Build Specialty Rankings: 20-25 New Ranking Pages

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

With 150 schools, the comparison page opportunity grows massively:
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
- **CSS:** `assets/css/style.css` with `CSS_VERSION = 5` cache-busting
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
