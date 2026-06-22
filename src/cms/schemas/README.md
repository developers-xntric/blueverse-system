# Strapi Content Type Schemas

This directory contains the JSON schema definitions for Strapi content types.
These schemas map to the TypeScript types in `src/types/cms.ts`.

## Content Types

1. **global-setting** - Site-wide metadata (title, description, SEO)
2. **navbar** - Navigation bar (logo, links, CTA)
3. **footer** - Footer (logo, links, service links, copyright, social)
4. **home-page** - Homepage content (hero, stats, solutions, industries, etc.)
5. **waste-water-treatment-page** - WWTP page content
6. **vehicle-washing-page** - Vehicle washing page content
7. **esg-platform-page** - ESG platform page content
8. **contact-form** - Homepage contact form content
9. **wwtp-contact-form** - WWTP contact form content

## Reusable Components

- **nav-link** - Label + Href
- **stat** - Value + Label
- **partner** - Title + Subtitle + Logo + Points
- **industry** - Title + Image + Points + Description + Details
- **solution** - Title + Description + Image + Href
- **about-tab** - Name + Panel (with cards/mission/timeline)
- **office** - Title + Address
- **seo** - Meta title, description, OG tags

## Media Fields

All image fields support both Strapi media uploads and local fallback paths.
The frontend resolves images via `resolveMedia()` which checks CMS first, then local.
