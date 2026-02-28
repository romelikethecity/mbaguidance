# SEO Best Practices — MBA Guidance

*Consolidated from aimarketpulse, croreport, provyx, and verum-website projects.*

---

## Required Elements — Every Page

### Head Section
```html
<title>{Page Title} | MBA Guidance</title>  <!-- Under 60 chars, primary keyword -->
<meta name="description" content="...">     <!-- 120-160 chars, action-oriented -->
<link rel="canonical" href="https://mbaguidance.com/{path}/">
<meta property="og:type" content="website">
<meta property="og:url" content="https://mbaguidance.com/{path}/">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:site_name" content="MBA Guidance">
<meta property="og:image" content="https://mbaguidance.com/assets/og-default.png">
<meta name="twitter:card" content="summary_large_image">
```

### Structured Data (JSON-LD)
| Page Type | Required Schema |
|-----------|----------------|
| Homepage | WebSite |
| All inner pages | BreadcrumbList |
| Pages with FAQs | FAQPage (min 3 questions) |
| Blog/guide pages | Article with author |
| School profiles | (future: EducationalOrganization) |
| Rankings | ItemList |
| Validate | https://search.google.com/test/rich-results |

### Heading Structure
- One H1 per page (unique, contains primary keyword)
- H2s and H3s in sequential order. Never skip levels.
- Headings describe content, not decorative.

---

## Internal Linking Strategy

### Minimum Links Per Page
- Every content page: 3-5 internal links minimum
- School profiles: link to related comparisons, guides, rankings
- Guides: link to relevant school profiles and comparisons
- Comparisons: link to both school profiles and related guides
- Blog posts: link to guides, tools, and school profiles
- Rankings: link to every school mentioned

### Anchor Text Rules
- Descriptive anchor text (never "click here")
- Use school short names: "Stanford GSB" not "this school"
- Vary anchor text across pages targeting same destination

### Hub-and-Spoke Model
```
/schools/ (hub)
├── /schools/stanford-gsb/ (spoke)
├── /schools/harvard-business-school/ (spoke)
└── /schools/wharton/ (spoke)

/compare/ (hub)
├── /compare/hbs-vs-stanford-gsb/ (spoke)
└── /compare/wharton-vs-booth/ (spoke)

/guides/ (hub)
├── /guides/gmat-vs-gre/ (spoke)
└── /guides/mba-application-timeline/ (spoke)
```

---

## E-E-A-T Signals

### Experience
- Author attribution on every content page (Rome Thorndike, Berkeley Haas MBA)
- First-hand experience demonstrated (personal anecdotes from Haas, application process)
- Specific school visits, campus observations, alumni network references

### Expertise
- Statistics cited with authoritative sources (US News, school employment reports, BLS, GMAC)
- Updated date visible on pages with time-sensitive data

### Authoritativeness
- Consistent author bio across all pages
- About page with credentials and background
- Consistent NAP (Name, Authorship, Publication) across the site

### Trustworthiness
- Honest pros AND cons for every school
- Data sources cited
- No misleading claims about acceptance chances

---

## Programmatic SEO (pSEO) Pages

MBA Guidance uses multiple pSEO playbooks from the marketingskills repo:

| Playbook | Implementation | Count |
|----------|---------------|-------|
| Comparisons | `/compare/[school-a]-vs-[school-b]/` | 35 |
| Profiles | `/schools/[slug]/` | 50 |
| Locations | `/metro/[city]-mba-programs/` | 15 |
| Curation | `/rankings/[category]/` | 5 |
| Glossary | `/faq/[topic]/` | 5 |

### Quality Requirements for pSEO Pages
- Every page must provide unique value (not just variable swaps)
- Conditional content based on data (tier-specific advice, salary-based recommendations)
- Minimum word counts enforced (see CLAUDE.md)
- 3+ FAQ questions with substantive answers per page
- BreadcrumbList + FAQPage schema on all

### Avoiding Thin Content
- School subpages (curriculum, careers, etc.) must have unique analysis per school
- Comparison pages must give specific "choose X if..." guidance
- Metro pages must include local context (employers, cost of living, schools in region)

---

## Content Freshness

- `CURRENT_YEAR` parameterized in build.py (currently 2026)
- All salary/acceptance/GMAT data tagged with year
- Titles include year where appropriate: "Is [School] Worth It? ROI Analysis (2026)"
- Rebuild triggers updated dates across all pages

---

## Technical SEO

### URL Structure
- Always use subfolders, not subdomains
- Trailing slash on all URLs
- Lowercase, hyphenated slugs
- Clean, descriptive paths: `/compare/hbs-vs-stanford-gsb/` not `/compare/?a=hbs&b=gsb`

### Sitemap
- Auto-generated during build (`sitemap.xml`)
- All pages included
- Updated on every build

### Page Speed
- Static HTML (no JS frameworks)
- Single CSS file with cache-busting version
- No external JS dependencies (except Google Fonts)
- Minimal inline styles

### CSS Cache-Busting
`style.css?v={CSS_VERSION}` — increment on every CSS change

---

## Citation Standards

| Data Type | Authoritative Source |
|-----------|---------------------|
| Rankings | US News, Financial Times, Bloomberg, QS |
| School data | School's employment report, admissions page |
| Salary data | School employment reports, GMAC surveys, BLS |
| Industry stats | Gartner, McKinsey, GMAC, LinkedIn |
| Test data | GMAC (GMAT), ETS (GRE) |

---

## Reference Sources

- **Programmatic SEO playbooks:** `github.com/coreyhaines31/marketingskills` → `skills/programmatic-seo/`
- **Content strategy:** `github.com/coreyhaines31/marketingskills` → `skills/content-strategy/`
- **AI SEO:** `github.com/coreyhaines31/marketingskills` → `skills/ai-seo/`
- **Schema markup:** `github.com/coreyhaines31/marketingskills` → `skills/schema-markup/`
- **Site architecture:** `github.com/coreyhaines31/marketingskills` → `skills/site-architecture/`
