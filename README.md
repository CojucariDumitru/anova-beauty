# ANOVA Beauty

Professional nail polish storefront — Luna, Edlen, Heylove & Sova.

## Run locally

```bash
cd Anova-beauty
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Admin (local only)

- URL: [http://localhost:3000/admin](http://localhost:3000/admin)
- Password: set `ADMIN_PASSWORD` in `.env.local`, or default `anova-admin`

## Deploy to Cloudflare Pages

### Option A — Cloudflare Dashboard (recommended)

1. [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Select repo **Anova-beauty**
3. Build settings:
   - **Framework preset:** None
   - **Build command:** `npm run build:cloudflare`
   - **Build output directory:** `out`
   - **Node.js version:** 22
4. **Save and Deploy**

Live URL: `https://anova-beauty.pages.dev` (or your custom domain)

### Option B — Deploy from your PC

```powershell
cd "C:\Users\abrax\OneDrive\Desktop\beauty store\Anova-beauty"
npm install
npx wrangler login
npm run deploy
```

### Option C — GitHub Actions → Cloudflare

Add secrets to the GitHub repo:

- `CLOUDFLARE_API_TOKEN` — [Create token](https://dash.cloudflare.com/profile/api-tokens) with **Cloudflare Pages Edit**
- `CLOUDFLARE_ACCOUNT_ID` — from Cloudflare dashboard sidebar

Push to `master` — workflow `.github/workflows/cloudflare.yml` deploys automatically.

## Notes

- Storefront, product pages, cart, and wishlist work on Cloudflare Pages.
- Admin needs `npm run dev` (API routes are stripped from the static build).
