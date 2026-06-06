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
- Add products with bottle + applied-look image URLs

## Deploy to GitHub Pages

1. Push this repo to GitHub as **Anova-beauty**
2. **Settings → Pages → Source:** GitHub Actions
3. Live site: `https://CojucariDumitru.github.io/Anova-beauty/`

```powershell
git remote add origin https://github.com/CojucariDumitru/Anova-beauty.git
git push -u origin master
```

### Static preview

```bash
npm run build:pages
npx serve out
```

## Notes

- Storefront, product pages, cart, and wishlist work on GitHub Pages.
- Admin needs `npm run dev` (API routes are not in the static export).
