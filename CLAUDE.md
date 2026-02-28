# MBA Guidance — Project Instructions

## Project Overview
- **Site:** mbaguidance.com — personal authority site for MBA admissions guidance
- **Author:** Rome Thorndike, Berkeley Haas MBA
- **Build:** `python3 build.py` generates all pages into `output/`
- **Preview:** `cd output && python3 -m http.server 8084`
- **Pattern:** All data inline in `build.py` (Provyx single-file pattern)
- **Stack:** Static HTML/CSS/JS. No frameworks. GitHub Pages hosting.
- **Current state:** 850 pages (100 schools, 35 comparisons, 22 guides, 25 blog posts, 25 rankings, 15 metros, tools, FAQ pages)

## Reference Documents — READ BEFORE CREATING/EDITING ANY PAGE

### Writing & Copy
- **`docs/ROME_WRITING_STYLE.md`** — Master writing style guide. Universal rules for voice, tone, AI tells to avoid, sentence-level quality. **MANDATORY for all content.**
- **`docs/LANDING-PAGE-FORMULA.md`** — Harry Dry / Marketing Examples 10-point landing page formula. Hook framework (Value + Objection = Hook). Use for homepage and any landing page design.
- **`docs/LANDING-PAGE-QUICK-REF.md`** — Quick reference for title approaches and hero section best practices.

### SEO & Content Strategy
- **`docs/SEO-BEST-PRACTICES.md`** — SEO requirements for every page: meta tags, schema, internal linking, E-E-A-T, pSEO quality standards, citation standards.
- **`docs/CONTENT-STRATEGY.md`** — Content pillars, buyer stage mapping, searchable vs shareable content, pSEO playbooks in use, expansion opportunities.

### External Reference Repo
- **`github.com/coreyhaines31/marketingskills`** — Marketing skills library. Key skills for this project:
  - `skills/programmatic-seo/` — 12 pSEO playbooks (comparisons, profiles, locations, curation, glossary, personas, etc.)
  - `skills/content-strategy/` — Content planning framework, searchable vs shareable, topic clusters, buyer stage mapping
  - `skills/copywriting/` — Copy frameworks and natural transitions
  - `skills/seo-audit/` — SEO audit checklist and AI writing detection
  - `skills/site-architecture/` — Navigation patterns, URL structure, hub-and-spoke models
  - `skills/schema-markup/` — Schema examples for all page types
  - `skills/ai-seo/` — AI/LLM discoverability optimization
  - `skills/competitor-alternatives/` — Comparison page content architecture

### Brand
- **`BRAND_GUIDELINES.md`** — Colors, typography, spacing, component library, logo usage

---

## Writing Voice

### Who We Sound Like
A knowledgeable friend who's been through the MBA process. Confident, experienced, slightly irreverent. Direct and analytical with occasional dry humor. We have the credential (Haas MBA) and the experience (enterprise sales at Salesforce and Microsoft). We earned the right to have opinions.

### ABSOLUTE RULES — Zero Tolerance

**NEVER use false reframes:**
- "not X, it's Y" / "isn't X. It's Y." / "less about X, more about Y"
- "The pattern isn't X. It's Y."
- Just say what the thing IS. Directly.

**NEVER use em-dashes (—) for parenthetical asides.** Use commas, periods, colons, or restructure. Em-dashes are the #1 AI writing tell.

**NEVER use these words/phrases:**
- robust, leverage, utilize, synergy, holistic, cutting-edge, seamless, nuanced
- "genuinely/truly/really/actually/quite/extremely"
- "continues to" (either it does or it doesn't)
- "game-changer", "paradigm shift", "navigate the landscape"
- "in today's market", "in today's fast-paced world"
- "delve", "foster", "bolster", "underscore", "unveil", "streamline"
- "furthermore", "moreover", "notwithstanding", "that being said"
- "X, full stop."
- "Whether you're a X, Y, or Z"
- "It's not just X, it's also Y"
- Starting sentences with "By [gerund]"

**NEVER use these structural patterns:**
- Unearned declarations: "The pattern here is clear:", "Here's the thing:", "The bottom line:", "The takeaway:", "What this means:"
- Performing casualness: "That's not a typo.", "Good question.", "And honestly?"
- Commentary after stats: "Let that sink in.", "You read that right."
- Forced casual: "Spoiler alert:", "Plot twist:", "Here's the kicker:"
- Rhetorical questions followed by immediate answers: "What does this mean? It means..."
- Dramatic dichotomies: "That's exciting if you want that, terrifying if you don't."
- Tautologies: "Time will tell", "Success depends on execution", "It remains to be seen"
- Either/Or with hedge: "That's either X or Y. Probably both."
- Empty affirmations after data: "That's impressive." — CUT IT.
- Patronizing explanations (readers know how percentages work)

### DO — What Reads as Human
- Use contractions (it's, don't, won't, they're, you'll)
- Vary sentence length dramatically. Short punches. Then longer sentences that give the reader room to breathe and absorb a more complex point.
- State opinions confidently when backed by evidence
- Let strong data speak for itself. Don't explain what the number means.
- Use specific numbers, not vague qualifiers
- Use rhetorical questions to challenge assumptions, not as filler
- End sections with specific, provocative questions or punchy observations
- Admit uncertainty occasionally ("the data is murky here", "nobody really knows")
- Use "you" sparingly but effectively
- Read aloud. If it sounds like a person talking to a smart friend, you're on track.
- Punchy metaphors and visceral imagery ("a literal money pit" not "unprofitable")
- Competitive framing: name winners and losers directly

### Sentence-Level Quality
- Every paragraph should be 2-5 sentences
- Mix single-sentence statements with longer passages
- Don't say things twice. If the data made the point, move on.
- Active voice: "Wharton dominates finance placement" not "Finance placement is dominated by Wharton"
- Cut every word that doesn't earn its spot

---

## Homepage Design — Harry Dry Formula Applied

The homepage uses the Dashboard layout with Harry Dry's landing page formula:

### Above the Fold
1. **Title:** Hook formula (Value + Objection). Under 8 words / 44 chars.
2. **Subtitle:** How we deliver the value. Specific, benefit-focused.
3. **Visual:** Stats ticker with real data (Avg M7 Salary, Highest GMAT, Most Selective, Schools Tracked, Comparisons)
4. **Social Proof:** Author credential + content counts
5. **CTA:** Pathway cards (Find School, Compare, Career Paths)

### Below the Fold
6. **Features:** Article list, Top 10 table, GMAT inline tool
7. **Social Proof:** Tools (ROI Calculator, GMAT Target Score)
8. **Comparisons:** Popular comparison links
9. **2nd CTA:** Newsletter signup ("Who's hiring MBAs this week?")

---

## SEO Requirements — Every Page

### Meta Tags (Required)
```html
<title>{Page Title} | MBA Guidance</title>  <!-- Under 60 chars, primary keyword included -->
<meta name="description" content="...">     <!-- 120-160 chars, action-oriented -->
<link rel="canonical" href="https://mbaguidance.com/{path}/">
<meta property="og:type" content="website">
<meta property="og:url" content="...">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:site_name" content="MBA Guidance">
<meta property="og:image" content="/assets/og-default.png">
<meta name="twitter:card" content="summary_large_image">
```

### Structured Data (JSON-LD)
- **Homepage:** WebSite schema
- **All inner pages:** BreadcrumbList schema
- **Pages with FAQs:** FAQPage schema (minimum 3 questions)
- **Blog/guide pages:** Article schema with author
- **Validate with:** https://search.google.com/test/rich-results

### CSS Cache-Busting
Always version CSS: `style.css?v={CSS_VERSION}`. Increment CSS_VERSION when CSS changes.

### Heading Structure
- One H1 per page (unique, contains primary keyword)
- H2s and H3s in sequential order. Never skip levels.
- Headings describe content, not decorative.

### Internal Linking
- Every content page: 3-5 internal links minimum
- Link to related school profiles from guides
- Link to related guides from school profiles
- Link to relevant comparison pages
- Link to ranking pages where appropriate
- Cross-link between related guides
- Use descriptive anchor text (not "click here")

### E-E-A-T Signals
- Author attribution on every content page (Rome Thorndike, Berkeley Haas MBA)
- First-hand experience demonstrated (personal anecdotes from Haas, MBA application process)
- Statistics cited with authoritative sources (US News, school employment reports, BLS, GMAC)
- Updated date visible on pages with time-sensitive data

---

## Content Depth Requirements

### Minimum Word Counts
| Page Type | Minimum Words |
|-----------|---------------|
| School profile | 1,200 |
| Comparison page | 2,000 |
| Guide page | 1,500 |
| Ranking page | 800 (intro + context) |
| Blog post | 1,500 |
| Hub/index page | 500 |

### School Profile Structure
1. **Stats grid** (acceptance rate, GMAT, GPA, class size, salary, employment)
2. **Verdict** (opinionated pull quote)
3. **Program Overview** (~200 words)
4. **Culture & Community** (~150 words)
5. **Academics & Curriculum** (~150 words)
6. **Career Outcomes** (~200 words)
7. **Who Should Apply** (~100 words)
8. **What to Watch Out For** (~100 words)
9. **Known For / Best For** (tags)
10. **FAQ section** (3-5 questions with substantive answers)
11. **Comparison links**
12. **Related rankings and guides**
13. **Author byline**
14. **Affiliate CTA**

### Comparison Page Structure
1. **Side-by-side stats table**
2. **Overview** (~200 words)
3. **Head-to-Head Analysis** by category (Academics, Careers, Culture, Location, Cost)
4. **Choose [School A] if...** (3-5 specific scenarios)
5. **Choose [School B] if...** (3-5 specific scenarios)
6. **The Honest Take** (~200 words)
7. **FAQ section** (3+ questions)

### Guide Page Structure
1. **Clear H1 with target keyword**
2. **Opening paragraph** addressing the reader's situation
3. **5-8 sections with H2 headings**
4. **Specific data points** with sources
5. **School recommendations** with links
6. **FAQ section** (3+ questions)
7. **Related guides** cross-links

---

## Content Quality Checks

### Before Publishing Any Page
- [ ] Primary keyword in title, H1, and first 100 words
- [ ] Meta description 120-160 characters, includes benefit
- [ ] No AI writing tells (em-dashes, false reframes, banned words)
- [ ] Every claim backed by data or personal experience
- [ ] 3-5 internal links minimum
- [ ] FAQ section with 3+ questions
- [ ] BreadcrumbList schema on inner pages
- [ ] FAQPage schema where FAQs exist
- [ ] Author byline present
- [ ] No placeholder values anywhere
- [ ] Page added to sitemap

### Citation Standards
- School-specific data: cite school's employment report or admissions page
- Rankings: cite source (US News, Financial Times, Bloomberg)
- Salary data: cite school employment reports, GMAC surveys, or BLS
- Industry statistics: cite Gartner, McKinsey, GMAC, LinkedIn
- Every statistic needs an authoritative source

---

## Technical Notes
- `CURRENT_YEAR = 2026` parameterized at top of build.py
- All data lives inline in build.py — no separate JSON files
- `CSS_VERSION` incremented when style.css changes (currently 5)
- Assets copied to output/ during build
- Sitemap generated automatically
- Preview server: port 8084
