# Blog seed data

Ready-to-import starter content so `/blog` isn't empty on first run:
**3 authors, 4 categories, 4 posts** (with Portable Text bodies + SEO fields).

`seed.ndjson` — newline-delimited JSON, one document per line, the format the
Sanity CLI imports natively. Documents use fixed `_id`s so re-importing with
`--replace` updates them instead of creating duplicates.

## Import

From the project root, with your Sanity env vars set in `.env.local`:

```bash
# one-time: install the CLI if you don't have it
npm i -g @sanity/cli

# import into your dataset (usually "production")
sanity dataset import sanity/seed/seed.ndjson production --replace
```

That's it — open `/blog` (or `/studio`) and the posts appear.

## Notes

- Posts reference authors/categories by `_id`; all references resolve within
  this single file, so order and a single import are enough.
- No images are included (NDJSON can't carry binaries). Cards and articles fall
  back to a gradient placeholder until you add a hero image in the Studio.
  To seed images too, use an asset-aware archive (`.tar.gz`) via
  `sanity dataset import`, or upload them per-post in `/studio`.
- To start clean instead of merging: `sanity dataset import seed.ndjson production --replace`
  is safe to re-run; it upserts by `_id`.
