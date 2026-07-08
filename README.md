# TouchIT Solutions — Website

Enterprise ICT marketing site for **TouchIT Solutions**, built with the Next.js App Router.

> Innovating Today. Transforming Tomorrow.

## Stack

- **Next.js 14** (App Router) + **React 18**
- **TypeScript** (strict)
- **Tailwind CSS** with theme-aware CSS-variable design tokens
- **Framer Motion** — scroll reveals & count-up
- **next-themes** — light / dark mode (system-aware, no flash)
- **lucide-react** — iconography
- `next/font` — Plus Jakarta Sans (display) + Inter (body)

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

## Project structure

```
sanity.config.ts          # embedded Studio config (mounted at /studio)
src/
├── app/
│   ├── layout.tsx        # fonts, metadata, JSON-LD, theme provider, chrome
│   ├── page.tsx          # homepage sections + WebSite/Service schema
│   ├── globals.css       # design tokens + component primitives
│   ├── sitemap.ts        # dynamic sitemap (static routes + posts)
│   ├── robots.ts         # robots directives
│   ├── blog/
│   │   ├── page.tsx          # listing (category filter)
│   │   └── [slug]/page.tsx   # article (metadata, TOC, share, related, schema)
│   └── studio/[[...tool]]/   # embedded Sanity Studio route
├── components/
│   ├── providers/        # ThemeProvider (next-themes)
│   ├── layout/           # Navbar, Footer, CommandMenu, ScrollProgress, BackToTop, WhatsAppButton
│   ├── sections/         # Hero, Stats, Services, FeaturedSolutions, WhyUs, Process,
│   │                     # Industries, Partners, Clients, Testimonials, CtaBanner, Contact
│   ├── blog/             # PortableText, PostCard, BlogList, TableOfContents, ShareButtons
│   └── ui/               # CircuitMesh, Reveal, Counter, SectionHeading, Container
├── data/                 # services.ts, site.ts  (all copy/config lives here)
├── sanity/
│   ├── env.ts            # project id / dataset / api version (build-safe)
│   ├── structure.ts      # Studio desk structure
│   ├── schemaTypes/      # post, author, category, blockContent
│   └── lib/              # client, image, queries, fetch, types, readingTime
└── lib/                  # utils.ts (cn), site-url.ts (absolute URLs)
```

## Design tokens

Colours and surfaces are CSS variables in `globals.css`, mapped into Tailwind
(`tailwind.config.ts`) as semantic names — `bg`, `surface`, `content`, `muted`,
`line`, plus fixed brand colours `royal`, `azure`, `cyanx`, `ink`, `success`.
Switching `[data-theme]` swaps the whole palette; the hero's `CircuitMesh`
canvas re-reads `--hero-net` each frame so the animation recolours with the theme.

## The signature element

`CircuitMesh` (`src/components/ui/CircuitMesh.tsx`) draws a live network of
drifting nodes with data-pulses travelling along the links — an echo of the
circuit traces in the TouchIT logo. It honours `prefers-reduced-motion`.

## Editing content

All text, stats, services, partners, client stories and testimonials live in
`src/data/`. Update those files — no component edits needed for copy changes.
Replace `public/logo.jpeg` with a production logo (an SVG is recommended).

## Blog (Sanity CMS)

The blog is powered by **Sanity** with an embedded Studio — no separate deploy.

**Content model** (`src/sanity/schemaTypes/`): `post` (title, slug, excerpt, hero
image, author ref, categories, publishedAt, Portable Text body, SEO title/description),
`author`, `category`, and `blockContent` (rich text).

**Routes**

- `/studio` — the embedded Sanity Studio (editing UI). Excluded from robots.
- `/blog` — listing with client-side category filter (`src/app/blog/page.tsx`).
- `/blog/[slug]` — article with hero image, reading time, author, table of
  contents, breadcrumbs, share buttons, related articles, and
  `BlogPosting` + `BreadcrumbList` JSON-LD.

**Connect a project**

1. `cp .env.local.example .env.local`
2. Create a free project at <https://www.sanity.io/manage>, copy the **Project ID**.
3. Fill in `NEXT_PUBLIC_SANITY_PROJECT_ID` (+ dataset, usually `production`).
4. Add `http://localhost:3000` and your production URL to the project's
   **CORS origins** in the Sanity dashboard.
5. `npm run dev`, open `/studio`, create an Author, a Category and a Post.

Until a project id is set, data fetches degrade to empty states and the app
still builds — nothing crashes.

### Starter content

`sanity/seed/seed.ndjson` contains **3 authors, 4 categories and 4 posts** so
`/blog` isn't empty on first run. After connecting your project:

```bash
npm run seed          # sanity dataset import ... --replace
```

See `sanity/seed/README.md` for details (it upserts by `_id`, so it's safe to
re-run).

Content revalidates every 60s (ISR). Fenced code blocks: `npm i @sanity/code-input`,
register `codeInput()` in `sanity.config.ts`, and add `{ type: "code" }` to
`blockContentType`.

## SEO

- `src/app/sitemap.ts` — static routes + every blog post (`/sitemap.xml`).
- `src/app/robots.ts` — allows all, disallows `/studio`, links the sitemap.
- **Per-route metadata**: `metadataBase` + Organization schema in the root
  layout; canonical + WebSite/Service schema on the home page; canonical + OG on
  `/blog`; dynamic `generateMetadata` (canonical, OG `article`, Twitter card,
  author, published time, tags) on each post.
- Set `NEXT_PUBLIC_SITE_URL` so canonicals, OG URLs and the sitemap are absolute.

## Still needs a backend

- **Careers** — vacancies + application flow.
- **Contact form** — connect `Contact.tsx`'s `onSubmit` to an API route, CRM or
  email service (e.g. Resend). It currently shows a local confirmation only.
- **Client portal / support tickets / live chat / AI assistant** — auth + services.

Deploy to **Vercel** for zero-config hosting; add the env vars in the project settings.
