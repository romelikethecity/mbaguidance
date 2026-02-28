# MBA Guidance — Brand Guidelines

> **Direction: "The Strategist"**
> McKinsey-meets-Harvard — deep navy authority with gold accents that whisper "you belong here."

---

## Brand Overview

**Site:** mbaguidance.com
**Author:** Rome Thorndike, Berkeley Haas MBA
**Audience:** Prospective MBA applicants (25-32), current MBA students, recent grads
**Positioning:** Personal authority site — a knowledgeable friend who's been through it, not a corporate admissions consultancy. Direct, opinionated, data-backed.
**Tone:** Confident, experienced, slightly irreverent. Think senior partner giving you real advice over coffee, not a brochure.

---

## Logo & Wordmark

### Primary Wordmark
- "MBA GUIDANCE" in Playfair Display Bold, all uppercase
- Letter-spacing: 0.04em
- A 2px gold rule (#C9A84C) runs the full width underneath
- Below the rule: "by Rome Thorndike · Berkeley Haas MBA" in Source Sans 3 SemiBold, 11px, uppercase, letter-spacing 0.14em, color #6B7280

### Logo Files
- `assets/logo-primary-dark.svg` — Navy wordmark on transparent (for light backgrounds)
- `assets/logo-primary-light.svg` — White wordmark on transparent (for dark/navy backgrounds)
- `assets/icon.svg` — Shield icon, standalone (for small contexts)
- `assets/favicon.svg` — Simplified favicon mark
- `assets/favicon-32.png` — 32x32 favicon
- `assets/favicon-16.png` — 16x16 favicon
- `assets/og-logo.png` — 1200x630 OpenGraph image template

### Icon Concept
Abstract shield/crest formed from the letters "M" and "G" — nods to university crests without being literal. Gold on navy, or navy on light backgrounds.

### Usage Rules
- Minimum clear space around the wordmark: 1x the height of "MBA"
- Never place the logo on busy backgrounds without a solid container
- The gold rule is not optional — it's part of the wordmark
- Author byline always appears with the wordmark on the homepage and about page; optional on interior pages

---

## Color Palette

### Primary Colors
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Navy** (Primary) | `#0A1628` | 10, 22, 40 | Headers, nav, hero sections, primary buttons, text on light BG |
| **Navy Mid** (Secondary) | `#1B2D4A` | 27, 45, 74 | Secondary sections, card headers, hover states |
| **Gold** (Accent) | `#C9A84C` | 201, 168, 76 | CTAs, highlights, rules, rankings, accent elements |
| **Gold Light** | `#E8D5A0` | 232, 213, 160 | Subtle accent backgrounds, hover tints |

### Background & Surface Colors
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Warm Ivory** (Background) | `#F7F5F0` | 247, 245, 240 | Page background |
| **White** (Surface) | `#FFFFFF` | 255, 255, 255 | Cards, content containers |
| **Navy Dark** (Dark BG) | `#0E1B30` | 14, 27, 48 | Footer, dark sections, hero overlays |

### Text Colors
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Text Primary** | `#1A1A1A` | 26, 26, 26 | Body text, headings on light BG |
| **Text Secondary** | `#6B7280` | 107, 114, 128 | Captions, labels, meta text |
| **Text on Dark** | `#E8E4DC` | 232, 228, 220 | Body text on navy backgrounds |
| **Border** | `#D4CFC4` | 212, 207, 196 | Card borders, dividers |

### CSS Variables
```css
:root {
  --color-primary: #0A1628;
  --color-secondary: #1B2D4A;
  --color-accent: #C9A84C;
  --color-accent-light: #E8D5A0;
  --color-bg: #F7F5F0;
  --color-bg-dark: #0E1B30;
  --color-surface: #FFFFFF;
  --color-text: #1A1A1A;
  --color-text-secondary: #6B7280;
  --color-text-on-dark: #E8E4DC;
  --color-border: #D4CFC4;
}
```

---

## Typography

### Font Stack
```css
/* Import from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@400;600;700&display=swap');

--font-heading: 'Playfair Display', Georgia, 'Times New Roman', serif;
--font-body: 'Source Sans 3', 'Segoe UI', Helvetica, Arial, sans-serif;
```

### Heading Font — Playfair Display
- **Role:** All headings (h1-h4), school names, hero text, pull quotes
- **Weights used:** 400 (Regular), 600 (SemiBold), 700 (Bold)
- **Character:** Elegant transitional serif with high contrast strokes. Feels authoritative and editorial without being stuffy.

### Body Font — Source Sans 3
- **Role:** Body text, navigation, buttons, labels, meta text, CTAs
- **Weights used:** 400 (Regular), 600 (SemiBold), 700 (Bold)
- **Character:** Clean, readable sans-serif designed by Adobe for extended reading. Professional without being clinical.

### Type Scale
```css
/* Headings */
h1 { font-family: var(--font-heading); font-size: 48px; font-weight: 700; line-height: 1.15; color: var(--color-primary); }
h2 { font-family: var(--font-heading); font-size: 36px; font-weight: 700; line-height: 1.2; color: var(--color-primary); }
h3 { font-family: var(--font-heading); font-size: 26px; font-weight: 600; line-height: 1.25; color: var(--color-primary); }
h4 { font-family: var(--font-heading); font-size: 20px; font-weight: 600; line-height: 1.3; color: var(--color-primary); }

/* Body */
.body-lg { font-family: var(--font-body); font-size: 18px; line-height: 1.7; color: var(--color-text); }
.body    { font-family: var(--font-body); font-size: 16px; line-height: 1.7; color: var(--color-text); }
.body-sm { font-family: var(--font-body); font-size: 14px; line-height: 1.6; color: var(--color-text-secondary); }

/* Labels & Meta */
.label { font-family: var(--font-body); font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--color-text-secondary); }
.stat-value { font-family: var(--font-heading); font-size: 22px; font-weight: 700; color: var(--color-primary); }
```

---

## Component Patterns

### School Card
The primary reusable component across all programmatic pages.

**Structure:**
1. **Header bar** — Navy (#0A1628) background containing:
   - School name in Playfair Display 26px Bold, white
   - Ranking badge: Gold (#C9A84C) background, navy text, 11px uppercase Source Sans 3 Bold
   - 32px gold rule underneath the school name
2. **Stats row** — Two or three key metrics (Acceptance Rate, Avg. GMAT, Avg. Salary):
   - Label: 11px uppercase Source Sans 3 SemiBold, letter-spacing 0.08em, color #6B7280
   - Value: Playfair Display 22px Bold, navy
3. **Verdict section** — Separated by a 1px border top:
   - Italic pull quote style: 14px Source Sans 3, italic, navy
4. **Action buttons:**
   - Primary: Navy background, white text, 12px uppercase Source Sans 3 Bold
   - Secondary: Transparent with navy border, navy text

**Borders:** 1px solid #D4CFC4, border-radius 2px (sharp, not rounded — deliberate choice for authority feel)

### Navigation
- Background: White (#FFFFFF)
- Border-bottom: 1px solid #D4CFC4
- Logo left, nav links right
- Links: Source Sans 3 12px SemiBold, color #6B7280, letter-spacing 0.02em
- Active link: color #0A1628 with 2px gold underline
- CTA button in nav: Gold background, navy text

### Hero / Page Headers
- Full-width navy (#0A1628) background
- Gold accent rule (2px, 60px wide) as a design element
- Heading in white Playfair Display
- Subheading in #E8E4DC Source Sans 3

### Blog / Article Pages
- Max content width: 720px
- Heading: Playfair Display
- Body: Source Sans 3 16px, line-height 1.7
- Pull quotes: Playfair Display italic, left-bordered with gold 3px rule
- Author byline: Circular photo + "Rome Thorndike · Berkeley Haas MBA" in small caps

### Comparison Pages (X vs Y)
- Two-column layout at desktop
- Each school in its own card with the standard school card component
- Shared comparison table below with alternating warm ivory / white rows
- Winner highlights in gold accent

### CTA Sections
- **Primary CTA (affiliate/consulting):** Gold (#C9A84C) background, navy text, bold
- **Secondary CTA:** Navy background, white text
- **Tertiary/ghost:** Transparent with navy border
- Button text: Source Sans 3 13px Bold, letter-spacing 0.03em, uppercase
- Border-radius on buttons: 2px (matching card sharpness)
- Padding: 13px 28px

---

## Spacing & Layout

```css
/* Spacing scale */
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
--space-3xl: 64px;
--space-4xl: 96px;

/* Layout */
--max-width: 1200px;
--content-width: 720px;  /* Blog/article content */
--grid-gap: 24px;
--card-padding: 24px;
--section-padding: 64px 0;
--nav-height: 64px;
```

### Grid System
- School listing pages: 3-column grid at desktop, 2 at tablet, 1 at mobile
- Comparison pages: 2-column at desktop, stacked at mobile
- Blog index: 2-column featured + 3-column grid below

---

## Responsive Breakpoints

```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
```

---

## Image & Asset Guidelines

- **School logos:** Display as grayscale or muted by default; color on hover
- **Author photo:** Circular crop, 48-64px in bylines, larger on about page
- **OpenGraph images:** Navy background, school name in Playfair Display, gold accent elements, MBA Guidance branding at bottom
- **Favicon:** Simplified gold "M" shield icon on navy background

---

## SEO & Meta Patterns

### Title Format
- School pages: `{School Name} MBA Profile — Acceptance Rate, GMAT, Salary | MBA Guidance`
- Comparison pages: `{School A} vs {School B} — Which MBA Is Right for You? | MBA Guidance`
- Blog posts: `{Title} | MBA Guidance`
- Homepage: `MBA Guidance — Admissions Intelligence from a Haas MBA Grad`

### Meta Description Pattern
- School pages: `Everything you need to know about {School Name}'s MBA program: {acceptance_rate}% acceptance rate, {avg_gmat} average GMAT, ${salary}K average salary. Real analysis from a Berkeley Haas MBA grad.`

---

## File Structure (Expected)

```
mbaguidance.com/
├── index.html
├── about.html
├── schools/
│   ├── index.html          # All schools listing
│   ├── stanford-gsb.html
│   ├── harvard-business-school.html
│   └── ...
├── compare/
│   ├── index.html
│   ├── wharton-vs-hbs.html
│   └── ...
├── blog/
│   ├── index.html
│   └── posts/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   ├── images/
│   ├── logo-primary-dark.svg
│   ├── logo-primary-light.svg
│   ├── icon.svg
│   ├── favicon.svg
│   ├── favicon-32.png
│   ├── favicon-16.png
│   └── og-logo.png
├── generate_schools.py      # Programmatic page generator
├── generate_comparisons.py  # Comparison page generator
└── data/
    ├── schools.json         # School data
    └── comparisons.json     # Comparison pairs
```
