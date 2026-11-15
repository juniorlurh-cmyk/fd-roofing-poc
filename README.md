# FD Roofing (Pty) Ltd — Website POC

A redesign concept for **FD Roofing (Pty) Ltd**, a roofing and waterproofing
contractor in Kilner Park, Pretoria — built to a sellable standard.

- **Live:** https://juniorlurh-cmyk.github.io/fd-roofing-poc/
- **Stack:** React 19 · Vite 8 · React Router 7 · GitHub Pages
- **Current website (for comparison):** https://fdroofing.co.za

## Content verification register

| Content | Source | Status |
|---|---|---|
| Name, address, phone, email | Google Business / Cylex listings | ✅ Verified |
| Google rating 4.6 / 13 reviews | Google listing (snapshot Feb 2026) | ✅ Verified — confirm before publishing |
| "14 years experience" | Company's own website | 🟡 Company-stated |
| "Work is guaranteed" | Company's own website | 🟡 Company-stated |
| Working-at-heights / medical compliance | Company's own About page | 🟡 Company-stated |
| Letter of good standing on request | Company's own About page | 🟡 Company-stated |
| Operating hours | Public listings (sources differ slightly) | 🟡 Needs owner confirmation |
| Review quotes | Public Google reviews | ✅ Verified excerpts |
| Service list (6 lines) | Company's own website | ✅ Verified |
| Roof types (slate/concrete/steel/flat) | Company's own website | ✅ Verified |
| Thatch → Harvey tile conversions | Facebook / public material | 🟡 Confirm service prominence |
| Service-area list | Inferred from Pretoria geography | ⚪ Indicative |
| Insights demand scores | Internal estimates for discussion | ⚪ Indicative — not audited |
| Project photography | Stock images (Unsplash) | ⚪ Placeholder — replace with job photos |

## Explicitly NOT claimed

- No CIDB / NHBRC / B-BBEE badges — unverified.
- No project counts, no invented staff names, no fake testimonials.
- No insurance claims beyond what the company's own material states.

## AI features

- Floating chat assistant (Groq; FAQ fallback without key).
- `/insights` — demand analytics, AI briefing, model-planned charts
  (propose → eval → reflect gate), exportable HTML report.
- Secret `VITE_AI_API_KEY` wired in Actions; `web/.env.local` for local dev
  (gitignored — never commit; the repo is public).

## Owner checklist before go-live

1. Confirm hours (listings differ: Google 08:00–18:00 M–F vs Cylex 07:00–18:00).
2. Supply real job photos (repairs, waterproofing, thatch conversion before/after).
3. Confirm thatch-conversion service prominence.
4. Verify registration details if legal-entity line is needed.
5. Decide whether the site replaces or supplements fdroofing.co.za.
