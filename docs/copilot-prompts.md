<!-- Copilot prompts and templates. No secrets included. -->
# Copilot Prompts

This file contains useful Copilot/GPT prompt templates we used recently (or placeholders to refine). Copy-paste the prompts below into ChatGPT or your assistant of choice and adapt context-specific fields (site name, keywords, URLs).

---

## SEO Landing Pages

Purpose: generate SEO-optimized landing pages (title, meta description, H1, sections, CTAs, keywords).

Prompt:
```
Write an SEO-optimized landing page for "<PRODUCT_OR_SERVICE>" targeted at users searching for "<PRIMARY_KEYWORD>" in <COUNTRY_OR_LANGUAGE>.

Include:
- Title tag (<= 60 chars) containing the primary keyword
- Meta description (<= 155 chars) with a clear CTA
- H1 and 3-5 H2 sections with natural keyword use
- Short hero paragraph, features list, benefits, social proof/example use cases, FAQ (3 questions)
- Suggested URL slug and canonical URL
- JSON-LD breadcrumb and Organization schema snippet

Tone: professional, conversion-focused, accessible to non-technical buyers.

Output as copyable Markdown with the meta tags at the top.
``` 

Placeholder notes: replace <PRODUCT_OR_SERVICE>, <PRIMARY_KEYWORD>, and locale values.

---

## Sitemap + Robots

Purpose: generate `sitemap.xml` and `robots.txt` content for Next.js sites (with dynamic routes and locales).

Prompt:
```
Generate a `sitemap.xml` and `robots.txt` for a Next.js site hosted on Vercel at https://example.com.

Requirements:
- Include canonical URLs for pages: /, /products, /products/<slug> (dynamic), /about, /contact
- Add hreflang entries for `en` and `es` (if applicable)
- For `robots.txt` disallow admin routes under /admin and block crawling of /api/* but allow all else
- Include sitemap location in `robots.txt`

Output two separate files, clearly labeled: `sitemap.xml` and `robots.txt`.
```

Placeholder notes: swap `https://example.com` and list of paths.

---

## GA4 Tracking

Purpose: add GA4 to Next.js with privacy considerations (consent, gtag, or server-side measurement via Vercel).

Prompt:
```
Provide a Next.js-compatible snippet and setup instructions to add GA4 tracking (Measurement ID: G-XXXXXXX) without exposing secrets.

Include:
- Client-side `gtag` initialization in `_app` or `layout.tsx` with environment variable usage for the ID
- Consent gating example (show how to delay `gtag('config', ...)` until consent)
- Server-side measurement suggestions (Measurement Protocol) and note on not logging PII
- Short checklist for GDPR/CCPA compliance (consent, opt-out, data retention)

Output copyable code blocks for insertion and a short checklist.
```

Placeholder notes: Replace `G-XXXXXXX` with the real GA4 ID in env.

---

## Organization Schema (sameAs)

Purpose: produce Organization JSON-LD with `sameAs` links for rich results.

Prompt:
```
Generate a JSON-LD `Organization` schema for "<COMPANY_NAME>" including `name`, `url`, `logo`, `contactPoint` (support), `sameAs` array with social profiles, and `address` (if available).

Keep fields minimal and privacy-safe; do not include personal emails or phone numbers unless public business contacts.

Output only the JSON-LD block.
```

Placeholder notes: provide social URLs in `sameAs` and replace placeholders.

---

## Product Data Normalization

Purpose: normalize product data for import or JSON-LD product schema generation.

Prompt:
```
Normalize this product record to a canonical schema: {id, title, description, price, currency, availability, sku, brand, images[], category, tags[]}. 

Rules:
- Trim whitespace, convert prices to numbers, map common availability terms to Schema.org (`InStock`, `OutOfStock`, `PreOrder`)
- Normalize category names to lowercase, slugify the `id` if missing
- Validate image URLs (http/https) and return the first 3 images
- Produce a JSON-LD `Product` block using the normalized fields

Input: <PASTE_PRODUCT_JSON>

Output: normalized JSON and JSON-LD `Product` schema.
```

Placeholder notes: replace `<PASTE_PRODUCT_JSON>` with the product payload.

---

## Vercel/Next.js CVE Update

Purpose: generate an actionable checklist and PR description for updating Next.js and related dependencies to remediate CVEs.

Prompt:
```
Create a checklist and a detailed PR description to update Next.js and related dependencies to address known CVEs.

Include:
- Steps to audit current versions (`npm ls next react react-dom`), identify vulnerable packages
- Suggested upgrade target versions and rationale (link to release notes)
- Migration/compatibility notes (breaking changes to test)
- Example `package.json` diff or `npm install` commands
- CI tests to run and smoke-test steps for the deployed preview on Vercel
- Suggested PR title and body with bulletized risk/impact and rollback instructions
```

Placeholder notes: run `npm outdated`/`npm audit` locally to fill exact versions and CVE IDs.

---

Notes and usage:
- These prompts are templates — replace bracketed placeholders before use.
- Do not paste secrets (private API keys, service account JSON) into prompts.
- Keep outputs (especially JSON-LD) compact and validate with Google Rich Results and Schema validators.

If you want, I can:
- Expand any section into more detailed, copy-ready snippets for `layout.tsx`, `robots.txt`, or `sitemap.xml`.




# Create ZIP outside the repo
$destDir = "C:\Users\Home\Documents\_Resiklo_Website"
New-Item -ItemType Directory -Force -Path $destDir | Out-Null

$zip = Join-Path $destDir "resiklo-web-26-03-13-A.zip"
if (Test-Path $zip) { Remove-Item $zip -Force }
# Collect files (exclude heavy folders + images)
$files = Get-ChildItem -Recurse -File -Force | Where-Object {
  $_.FullName -notmatch '\\node_modules\\' -and
  $_.FullName -notmatch '\\.next\\' -and
  $_.FullName -notmatch '\\.git\\' -and
  $_.FullName -notmatch '\\.vercel\\' -and
  $_.Name -notlike '*.zip' -and
  $_.Extension -notmatch '(\.png|\.jpg|\.jpeg|\.webp|\.gif|\.svg)$'
}
Compress-Archive -Path $files.FullName -DestinationPath $zip -Force
Write-Host "Created: $zip"


/plastic-shredder-machines
http://localhost:3050//plastic-crusher
http://localhost:3050//plastic-extrusion-machines
resiklo.org/double-axis-shredder
resiklo.org/recycling-machines

netstat -ano | findstr :3050
taskkill /PID 12345 /F


https://analytics.google.com/
https://search.google.com/search-console/about

