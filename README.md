# Handoff: Little Crafts by Jie — handmade crochet shop

## Overview

A small storefront + info site for **Little Crafts by Jie**, a UK-based handmade
crochet shop (bags, drawstring pouches, heart keychains, etc.). It is a portfolio /
catalogue site — **no checkout**. Orders happen through Jie's existing Google Form;
payment through a separate Google Form (PayPal / Ko-fi / bank). Commissions open and
close depending on her schedule.

Target stack (per the client): **Next.js, static-exported, hosted free on GitHub Pages.**
Product data and the "commissions open/closed" flag come from a **Google Sheet** Jie
edits herself — read live in the browser, so her changes show up without a redeploy.

## About the design files

This project was recreated in Next.js from an HTML design prototype (the original
`reference/` mocks and `snippets/` handoff copies have been removed now that the app
is built). The live code under `app/`, `components/`, and `lib/` is the source of truth
for layout, copy, colours, and behaviour.

## Fidelity

**High-fidelity.** Colours, type, spacing, rotations, and interactions are final.
Recreate the storefront UI faithfully. Exact tokens are listed below.

---

## Architecture / how it should be built

- **Next.js App Router**, `output: 'export'` (fully static). See `next.config.js`
  — note the `basePath`/`assetPrefix` for GitHub Pages project sites, and `images.unoptimized`.
- **One page per route**, all sharing a sticky `<Header>` and `<Footer>`:
  `/` (home), `/shop`, `/about`, `/commissions`, `/contact`.
  (The prototype fakes routing with state; in Next, use real routes.)
- **Data is fetched client-side** (e.g. a `useEffect`/`useSWR` in a `'use client'`
  component) from the published Google-Sheet CSV — NOT at build time — so Jie's edits
  appear live without a rebuild. The data layer lives in `lib/shop.js` with the two
  published-CSV URLs pasted in. While loading, render the striped placeholder cards.
- **Fonts** via `next/font/google`: `Baloo 2`, `Caveat`, `Nunito Sans`.
- **Deploy** with `.github/workflows/deploy.yml` (GitHub Actions → Pages). Add an empty
  `public/.nojekyll` too (the workflow also touches it) so `_next/` assets aren't hidden.

### The Google Sheet (Jie's "admin")

Two tabs, both Published-to-web as CSV:

**`Products` tab** — one row per product:

| name                   | price | category | in_stock | photo_url |
| ---------------------- | ----- | -------- | -------- | --------- |
| crochet heart keychain | 6     | all-time | yes      | https://… |

- `price` is a plain number; the site prefixes `£`.
- `category` is one of `all-time`, `limited`, `one-time` (free text; drives the filter tabs).
- `in_stock` is `yes`/`no` → controls the "sold out" badge + photo desaturation.
- `photo_url` is a link to the image (Google Drive direct link, Cloudinary, etc.).
  Empty = striped placeholder is shown.

**`settings` tab** — how Jie opens/closes commissions herself:

| commissions_open |
| ---------------- |
| no               |

She types `yes` or `no` in that one cell and saves; the banner across the site flips
within seconds. (`lib-shop.js > fetchCommissionsOpen()` reads it.)

---

## Screens / views

All pages share:

- **Page background:** `#F4EDD8` with a subtle dot-grid:
  `background-image: radial-gradient(rgba(137,113,91,0.13) 1.1px, transparent 1.4px); background-size: 22px 22px;`
- **Content width:** centered, `max-width: 1140px`, horizontal padding `28px`.
- **Header (sticky):** translucent cream (`rgba(244,237,216,0.92)` + `backdrop-filter: blur(8px)`),
  bottom border `2.5px dashed rgba(137,113,91,0.4)`. Left: round clay logo badge
  (46px, `#C78A72`, white ♥, rotated `-6deg`, dashed inset outline) + wordmark
  "little crafts by jie" (Shantell Sans 700, 21px) with "all handmade, all by me ♥"
  beneath (Caveat, 16px, accent-deep). Right: nav (`home · shop · about · commissions ·
contact`, Shantell Sans 600, 16px). **Active nav item** = a rotated accent-soft
  highlight swatch behind the label.
- **Footer:** top border `2.5px dashed`; logo badge + wordmark left; "© 2025 little
  crafts by jie · all handmade · uk delivery only" (Caveat, 19px, `#9c8a6f`) right.

### 1. Home (`/`)

- **Hero** — two columns. Left: Caveat eyebrow "✿ welcome to my little corner";
  H1 (Shantell Sans 700, 52px) "made by hand, **one stitch** at a time" where
  _one stitch_ sits in an accent-soft highlight box rotated `-1.5deg`; body paragraph
  (Nunito Sans, 18px, `#6b5743`); two buttons — primary "browse the shop", secondary
  "commission something". Right: a cluster of **three taped polaroids** (white frames,
  hard offset shadow, rotated -5°/+7°/-1.5°, each with a washi-tape strip and a Caveat
  caption: "crochet tote bag", "heart keychain", "drawstring bag").
- **Commission status note** — a sticky-note card (status-bg colour, rotated -0.6°,
  washi tape) showing "commissions are currently {open|closed}" + a "how it works" button.
  Hidden if disabled via setting.
- **Fresh from the hook** — section title (Shantell 34px) + Caveat subtitle; a 3-column
  grid of the newest products (polaroid cards, live from the sheet, with sold-out badge).
  Below: "browse by:" + dashed category-tag buttons (`all-time`, `limited`, `one-time`)
  linking into the filtered shop.
- **Dashed stitch divider**, then **About teaser** — polaroid (rotated -3°) + "hi, i'm jie!"
  blurb + "more about me →" button.

### 2. Shop (`/shop`)

- H1 "the shop" (Shantell 40px) + Caveat subtitle.
- **Filter tabs:** `all · all-time · limited · one-time` — paper-tag buttons; active tab
  is filled with the accent colour + dashed white inset outline.
- **Product grid:** 3 columns, gap 34px. Each card is a **polaroid**: white, `padding:14px
14px 18px`, hard shadow `4px 5px 0 rgba(74,59,46,0.14)`, gently rotated (cycle through
  ±0.8–2°), washi-tape strip top-left. Photo area 210px (cover image or striped
  placeholder). Top-right: category tag (accent fill, rotated 4°). If sold out: a "sold out"
  stamp (white, `#a8705c`, rotated -3°) bottom-left and the photo desaturates. Below: name
  (Shantell 700, 19px) + price (Caveat 700, 24px, accent-deep); full-width
  "request / commission" link-button (→ commission Google Form). Sold-out CTA reads
  "ask about this".
- **Empty filter state:** centered Caveat line "nothing here just yet — check back soon! ♥".

### 3. About (`/about`)

- H1 "about"; a centered polaroid (rotated -1.5°, caption "jie & the craft table ♥");
  three body paragraphs (Nunito 18px, line-height 1.85); two buttons (browse shop /
  commission info).

### 4. Commissions (`/commissions`)

- H1 "commissions"; sticky-note status card ("the form is currently {open|closed}");
  intro paragraph; **"how it works"** = 3 numbered step cards (round accent number badge,
  rotated -5°; Shantell title; body): 1 check the carrd · 2 fill the form · 3 pay & i make
  it. Then two buttons: "commission info (carrd) →" and "open commission form →". Then a
  **payments** section (paragraph about PayPal / Ko-fi / bank) and a card noting
  "+£3 delivery — uk delivery only!" with a "payment form →" button.

### 5. Contact (`/contact`)

- H1 "say hi ♥" + Caveat intro; three taped link cards (each white, slight rotation):
  **instagram**, **commission form**, **payment form** — each opens the respective link
  in a new tab.

---

## Interactions & behaviour

- **Navigation:** real Next routes; sticky header; active route highlighted.
- **External links** (commission form, payment form, carrd, instagram) open in a new tab
  (`target="_blank" rel="noopener"`).
- **Shop filter:** client-side, by `category`.
- **Hover states:** buttons/cards nudge with `transform: translate(-1px,-1px)` (the hard
  shadow makes them feel "pressable"); nav items shift to accent-deep colour.
- **Live data:** products + commission status refetch on load (and may poll/refetch on
  focus if you like). Show placeholder cards while loading; if the fetch fails, fall back
  to an empty state — don't crash.
- **No animations beyond the small hover nudges.**

## State management

- `products: Product[]` (fetched).
- `commissionsOpen: boolean` (fetched from settings tab).
- `filter: 'all' | 'all-time' | 'limited' | 'one-time'` (shop page).
- No global store needed; local component state + the fetch helpers is enough.

## Design tokens

**Fonts**

- Display / headings — **Shantell Sans**, 700 (also 600). Sizes: H1 hero 52px,
  page title 40px, section 34px, sub-heading 30/26px.
- Handwriting accents, captions, prices — **Caveat**, 600/700. 16–26px.
- Body — **Nunito Sans**, 400/600/700. Body 17–18px, line-height 1.65–1.85.
- Placeholder labels — monospace (Courier New), 9.5–11px.

**Colours**

- Page bg: `#F4EDD8` (+ dot-grid `rgba(137,113,91,0.13)`)
- Card / surface: `#ffffff`
- Text: heading `#3f3225`, body `#6b5743`, base `#4A3B2E`, faint `#9c8a6f`
- Accent **clay** (default): base `#C78A72`, soft `#F2E2DA`, deep `#9E6450`
- Accent **sage** (alt): `#9CA684` / `#E6EAD8` / `#6F7C56`
- Accent **berry** (alt): `#BC7E8C` / `#F1DEE3` / `#8E5360`
  _(The prototype exposes these three as a theme switch. Pick **clay** as the shipped
  default; the others are optional.)_
- Commission note — closed: bg `#F3E7C0`, dot `#B9A77F`; open: bg `#E2EBC8`, dot `#8DA86A`
- Sold-out text: `#a8705c`
- Dashed "stitch" lines/borders: `rgba(137,113,91,0.4)`; dashed button borders: `rgba(74,59,46,0.4)`

**Shadows (hard / offset — no blur)**

- Cards: `4px 5px 0 rgba(74,59,46,0.14)`
- Primary button: `3px 3px 0 rgba(74,59,46,0.22)`; secondary: `3px 3px 0 rgba(74,59,46,0.1)`
- Small badges: `1px 1px 0 rgba(74,59,46,0.18–0.2)`

**Washi tape** (decorative)
`repeating-linear-gradient(45deg, rgba(199,138,114,0.6) 0 7px, rgba(199,138,114,0.32) 7px 14px)`,
~64–96px wide, ~20–26px tall, rotated -4° to -7°.

**Radii**

- Buttons 5–6px · sticky note / number badges 4px · pills 999px · logo circle 50% ·
  polaroid frames are square (the white padding is the "frame").

**Rotations**

- Logo `-6deg`, cards `±0.8–2deg`, washi tape `-4 to -7deg`, sticky note `-0.6deg`,
  highlight swatch `-1.5deg`.

**Buttons**

- Primary: accent bg, white text, Shantell 600, `padding:14px 28px`, radius 6px, hard
  shadow, **inset dashed white outline** `1.5px dashed rgba(255,255,255,0.75); outline-offset:-6px`.
- Secondary: white bg, `1.5px dashed rgba(74,59,46,0.4)` border, hard shadow.

## Assets

- **Fonts:** Google Fonts (Baloo 2, Caveat, Nunito Sans) — via `next/font/google`.
- **Product images:** user-supplied, referenced by URL from the Google Sheet (Drive/Cloudinary).
  No bundled images. The ♥ marks and washi/stitch effects are pure CSS — no image/SVG assets.
- **External links already in the design:**
  - Commission form: `https://docs.google.com/forms/d/e/1FAIpQLScHT_4r3i00cCaYbQOrrD5AtiRTBnHefbrL2kYPZQi5ZfENwg/viewform`
  - Payment form: `https://forms.gle/EZ8rbwqQLeLeuQ879`
  - Commission info (carrd): `https://xuenjiegohcrafts.carrd.co/`
  - Instagram: confirm Jie's handle and update the placeholder `https://www.instagram.com/`.

## Project structure

- `app/` — App Router pages (`/`, `/shop`, `/about`, `/commissions`, `/contact`, `/size-guide`).
- `components/` — shared UI (Header, Footer, ShopGrid, ProductCard/Modal, Polaroid, etc.).
- `lib/shop.js` — data layer (CSV fetch + parse + normalise + settings); published-CSV URLs pasted in.
- `lib/ui.js`, `lib/links.js`, `lib/seed.js`, `lib/useShopData.js` — design tokens, links, seed fallback, hooks.
- `next.config.js` — Next static-export config for GitHub Pages (`repo` const sets the `basePath`).
- `public/products/` — product photos; `public/.nojekyll` keeps `_next/` assets visible on Pages.
- `.github/workflows/deploy.yml` — GitHub Actions workflow (build + deploy to Pages).

## Deploy checklist (quick)

1. Create a **public** GitHub repo named `little-crafts-by-jie` (or change the `repo` const in `next.config.js`).
2. Push this project to the `main` branch.
3. Repo Settings → Pages → Source = "GitHub Actions".
4. Visit `https://<username>.github.io/little-crafts-by-jie/`. Done.

See `SETUP.md` for Jie's day-to-day steps (adding products, photos, opening/closing commissions).
