# SETUP.md — getting Little Crafts by Jie live (click-by-click)

A checklist for the setup session. Anything marked **(Jie)** she does herself;
**(you)** is the technical bit. After setup, her day-to-day is just editing the sheet.

---

## 0. Before you start

- A laptop, ~45–60 min.
- Decide the repo name now (used in `next.config.js`), e.g. `little-crafts-by-jie`.

---

## 1. Accounts + 2FA (10 min)

1. **(Jie)** Create a GitHub account at https://github.com/signup — pick a username
   you're happy to see in the URL (`https://<username>.github.io/...`).
2. **(Jie)** Turn on 2FA: GitHub → top-right avatar → **Settings → Password and
   authentication → Two-factor authentication → Enable**. Use an authenticator app.
3. **(Jie)** Confirm 2FA is on for the **Google** account too (myaccount.google.com →
   Security → 2-Step Verification).

> Why: deploys are automated, so these two logins are the keys to the site. 2FA is the
> single most important safeguard.

---

## 2. The Google Sheet — Jie's "admin" (10 min)

1. **(Jie)** New Google Sheet, name it `littlecrafts_products`.
2. **Tab 1 — rename to `Products`.** Row 1 headers, exactly:
   `name | price | category | in_stock | photo_url | description`
   Add a few product rows. Rules:
   - `price` = number only (e.g. `6`) — the site adds the `£`.
   - `category` = one of `all-time`, `limited`, `one-time`.
   - `in_stock` = `yes` or `no`.
   - `photo_url` = the photo's file name, e.g. `red-heart.png` (see step 2b), or leave
     blank for now.
   - `description` = a short friendly sentence about the make. Optional — leave it
     blank and the site shows a gentle default line.
     > Sizing note: product **measurements** aren't a sheet column — they live on the
     > **Size Guide** page (a drawn image in the code). Jie doesn't type sizes per
     > product. If you ever want per-item sizes shown on cards, the code already reads
     > an optional `size` column, so you can just add one to this tab later.
3. **Tab 2 — add a tab, rename to `settings`.** Row 1: `commissions_open`. Row 2: `no`
   (or `yes`). This one cell is how Jie opens/closes commissions.
4. **Publish both tabs:** _File → Share → Publish to web_.
   - In the dialog: under **Link**, pick **Products**, format **Comma-separated values
     (.csv)** → **Publish** → copy the URL. **(you: paste into `lib/shop.js` as
     `SHEET_CSV_URL`.)**
   - Repeat for **settings** → that URL goes in `SETTINGS_CSV_URL`.
   - Leave "Automatically republish when changes are made" ticked.

> ⚠️ Only publish these two tabs. Anything published is public. Keep private notes/orders
> in a different, unpublished sheet.

### 2b. Photos

Product photos live **inside the site** in the `public/products/` folder (this is the
most reliable option, loads fastest, and works in the UK). In the sheet's `photo_url`
cell you can just type the **file name** — the site automatically looks in `/products/`.

- `red-heart.png` &nbsp;→&nbsp; shows `public/products/red-heart.png`.
- A full `https://...` link or a `/path` also works, if you ever host elsewhere.
- Empty `photo_url` is fine — the site shows a neutral placeholder.
- The name in the sheet must match the uploaded file **exactly**, including capital
  letters. Easiest rule: name every file lower-case with hyphens (`red-heart.png`).

**Adding a new product's photo (no command line, auto-deploys):**

1. Go to the repo on **github.com** → open the `public/products` folder.
2. **Add file → Upload files**, drag the photo in, then **Commit changes**.
3. That commit automatically rebuilds and republishes the site (~1–2 min — watch the
   **Actions** tab).
4. In the sheet, put the file's name in `photo_url` (e.g. `red-heart.png`). It appears on
   the next page refresh.

> Editing a product's **price, stock, name or description** never needs a redeploy — those
> update straight from the sheet in seconds. Only a _new image file_ needs the upload above.

> ⚠️ **Google Drive links don't work for photos.** Drive blocks "hotlinking" images onto
> other sites (every embed format is blocked), so share/`uc?export=view` links show a blank
> placeholder. Keep photos in `public/products/` as above.

---

## 3. The code → her repo (10 min) **(you)**

1. Scaffold/finish the Next.js app from the handoff README (or import the existing project).
2. Edit **`next.config.js`**: set `const repo = '<the-repo-name>'`
   (or `''` if you'll use a custom domain / a `<username>.github.io` repo).
3. Edit **`lib/shop.js`**: paste the two CSV URLs from step 2.
4. Make sure these exist:
   - `public/.nojekyll` (empty file)
   - `.github/workflows/deploy.yml` (already included in this project)
5. Create the repo **under Jie's account**: GitHub → **New repository** →
   owner = **Jie**, name = the repo name, **Public**, Create.
6. **(Jie)** Add you as collaborator: repo **Settings → Collaborators → Add people** →
   your GitHub username. (Lets you push now and help later.)
7. Push the code:
   ```bash
   git init
   git add .
   git commit -m "initial site"
   git branch -M main
   git remote add origin https://github.com/<jie-username>/<repo>.git
   git push -u origin main
   ```

---

## 4. Turn on GitHub Pages (2 min) **(you)**

1. Repo **Settings → Pages**.
2. **Build and deployment → Source → "GitHub Actions"**.
3. Go to the **Actions** tab — the "Deploy to GitHub Pages" workflow runs on the push
   (~1–2 min). Green tick = live.
4. Visit `https://<jie-username>.github.io/<repo>/`. 🎉

If something looks unstyled (missing CSS/JS), it's almost always the `basePath`/`repo`
value in `next.config.js` or a missing `public/.nojekyll` — fix and push again.

---

## 5. (Optional) Custom domain (~15 min + DNS wait) **(you)**

1. **(Jie)** Buy a domain — Cloudflare, Porkbun, or Namecheap (~£8–12/yr). Choose one
   with **free WHOIS privacy**.
2. In the repo: **Settings → Pages → Custom domain** → type the domain (e.g.
   `littlecraftsbyjie.com`) → **Save**. (This commits a `CNAME` file to the repo.)
3. At the **domain registrar's DNS** settings, add records:

   **For an apex domain** (`littlecraftsbyjie.com`) — four A records pointing at GitHub:

   ```
   A   @   185.199.108.153
   A   @   185.199.109.153
   A   @   185.199.110.153
   A   @   185.199.111.153
   ```

   (Optional, recommended: also add the `www` subdomain as a CNAME →
   `CNAME  www  <jie-username>.github.io`.)

   **OR for a `www`-only / subdomain** (`www.littlecraftsbyjie.com`):

   ```
   CNAME   www   <jie-username>.github.io
   ```

4. Wait for DNS to propagate (minutes to a few hours). Back in **Settings → Pages**,
   once the domain check passes, tick **Enforce HTTPS** (free certificate).
5. If using a custom domain, set `repo = ''` in `next.config.js` and push, so paths are
   served from the domain root instead of `/<repo>/`.

---

## 6. Hand it over to Jie

Show her the only things she'll ever touch:

- **Add / edit / remove a product** → edit the **Products** tab (name, price, category,
  in_stock, photo_url, description). Live in seconds.
- **Sold out** → set `in_stock` to `no`.
- **Open/close commissions** → set `commissions_open` to `yes`/`no` in the **settings** tab.
- She does **not** need GitHub for any of this. GitHub is only for code/design changes
  (rare) — e.g. updating the Size Guide drawing — and those just need a `git push`,
  which auto-deploys.

## Quick troubleshooting

- **Products not updating:** the sheet edit saves automatically; the site refetches on
  load — hard-refresh. Confirm the tab is still _Published to web_ and the CSV URL matches.
- **Photos not showing:** the `photo_url` name must match a file in `public/products/`
  **exactly**, including capital letters (the live site is case-sensitive). Google Drive
  links won't work — Drive blocks hotlinking.
- **Site unstyled after deploy:** `repo`/`basePath` mismatch or missing `.nojekyll`.
- **Commissions banner stuck:** check the `settings` tab cell value and that the tab is published.
