---
name: Cloning Tilda-built sites
description: Gotchas when scraping/cloning a site built on the Tilda website builder (tildacdn.com assets)
---

Tilda sites serve images from two CDN hosts: `static.tildacdn.com` (original uploads) and
`optim.tildacdn.com` (auto-optimized/resized variants, often referenced directly in `<img>`/`background-image`
via `-/format/webp/...` path segments). An asset-URL scraper that only matches `static.tildacdn.com` will
silently miss `optim.tildacdn.com` references — cross-check both hosts against the collected URL set before
assuming a page's images are fully downloaded.

**Why:** in a full-site clone, a couple of hero/section images were missing after the bulk-download pass
because the regex/collector only covered `static.tildacdn.com`.
**How to apply:** when re-scraping or downloading assets from a Tilda site, grep raw HTML for both
`static.tildacdn.com` and `optim.tildacdn.com` and reconcile any URLs found only in the page HTML but absent
from the downloaded-asset map before building pages.
