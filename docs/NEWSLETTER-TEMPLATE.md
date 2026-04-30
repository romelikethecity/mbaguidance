# MBA Guidance Weekly Briefing — Newsletter Template

## Overview
- **Name:** MBA Hiring Intel / Weekly Briefing
- **Frequency:** Weekly
- **List:** `mbaguidance` (via newsletter-subscribe.rome-workers.workers.dev)
- **Status:** Collecting subscribers. First issue TBD when outside subs justify it.

## Structure (from site mockup)

The SVG mockup at `/assets/newsletter-preview.svg` shows the format we're promising subscribers. The actual newsletter should match this structure:

### 1. Who's Hiring This Week
- 3-5 companies with MBA-relevant roles
- Each row: **Company name** | Role title | # of openings | Salary (pill badge)
- Source: live job postings (LinkedIn, company career pages, Handshake)
- Format: table or clean rows

### 2. Salary Trends
- Bar chart or data table by industry (Consulting, Finance, Tech PM, Marketing)
- Compare to prior period when possible
- Source: job postings, school employment reports, GMAC

### 3. Placement Intel
- 3 bullet points on which schools are placing where
- Name specific schools and companies
- Source: school employment reports, LinkedIn data, press releases

### 4. Admissions Intel (optional, rotate in)
- Deadline reminders
- Application tips
- Round results as they come out

## Voice
Same as site: direct, data-first, opinionated. Read ROME_WRITING_STYLE.md before writing. No em dashes, no filler, no AI tells.

## Technical
- Sending via Cloudflare Worker + Resend (same as other newsletters)
- D1 subscriber table: `mbaguidance` list
- GA4 property: G-N0ZQVR88NY
- Signup event: `newsletter_signup` with `event_label` for form location
