# Aricord — website rebuild

A React (Vite + React Router) rebuild of aricord.com: same content and structure,
new visual design, and the issues from the earlier review fixed:

- No more dead "Read More" link — the hero CTA goes to a real section.
- "News & Insights" and "Careers" are working sections, not inert footer text.
- Home and About no longer repeat the same paragraphs — Home leads with outcomes,
  About carries the company story and team.
- Homepage now surfaces the "150+ years combined experience" line and adds a
  clear primary call to action.
- Every page has a real `<title>` and meta description.
- Contact form, phone numbers, and social links all work.

## Run it locally

The site is a React app built with Vite. In production a small Node server
(`server.js`) serves the built app from `dist/` and sends contact-form emails
with Nodemailer. Requires Node 20.19+.

```bash
npm install
cp .env.example .env   # then fill in the values (see "Microsoft 365 mail setup")
```

**Development** (hot reload) — run these in two terminals:
```bash
npm run dev      # React app on http://localhost:5173
npm run server   # contact API on :3000 (Vite proxies /api to it)
```

**Production:**
```bash
npm run build    # builds the app into dist/
npm start        # serves dist/ + /api/contact on http://localhost:3000
```

Old URLs such as `/about.html` redirect (301) to the new routes (`/about`).

## Deploy on Hostinger (Node.js app)

1. Upload the project (without `node_modules`, `dist` and `.env`) or connect the Git repo.
2. Set the build command to `npm run build`, the entry file to `server.js`
   and the start command to `npm start`. (The build needs the dev
   dependencies, so don't install with `--production`.)
3. Add the variables from `.env.example` as environment variables in hPanel
   (or create a `.env` file on the server). Never commit `.env`.
4. Restart the app and check the logs for `SMTP connection ready`.

## Microsoft 365 mail setup (aricord.com)

aricord.com email is hosted on Microsoft 365, so the server sends through
`smtp.office365.com:587` (STARTTLS) using OAuth2. One-time admin steps:

1. **Register an app** — Entra admin centre → App registrations → New
   registration (e.g. "Aricord Website Mailer"). Copy the *Application (client)
   ID* and *Directory (tenant) ID* into `MS_CLIENT_ID` / `MS_TENANT_ID`.
2. **Create a secret** — Certificates & secrets → New client secret. Copy the
   *value* into `MS_CLIENT_SECRET` (note its expiry date and renew before then).
3. **Add permission** — API permissions → Add → *APIs my organization uses* →
   **Office 365 Exchange Online** → Application permissions → `SMTP.SendAsApp`
   → **Grant admin consent**.
4. **Link the app to the mailbox** (Exchange Online PowerShell, as an admin):
   ```powershell
   Connect-ExchangeOnline
   # AppId = client ID; ObjectId = the app's Object ID under *Enterprise applications*
   New-ServicePrincipal -AppId <client-id> -ObjectId <enterprise-app-object-id>
   Add-MailboxPermission -Identity hello@aricord.com -User <enterprise-app-object-id> -AccessRights FullAccess
   Set-CASMailbox -Identity hello@aricord.com -SmtpClientAuthenticationDisabled $false
   ```
5. Set `SMTP_USER` to that mailbox and restart the app.

If your tenant still allows SMTP basic auth, you can skip the app and set
`SMTP_AUTH=password` with `SMTP_PASS` instead (step 4's `Set-CASMailbox` line
is still required).

## Files

- `index.html` — HTML shell that loads the React app (fonts, favicon)
- `src/main.jsx`, `src/App.jsx` — app entry and routing; `src/routes.js` lists every page with its title and meta description
- `src/pages/` — one component per page (Home, About, Offerings, …, blog posts)
- `src/components/` — layout (header, footer, terms modal, intro) and interactive pieces (tabs, client stories, showcase, news rows, contact form)
- `src/hooks/motion.js` — scroll reveal, count-up and play-on-view animation helpers
- `src/style.css` — design system (colors, type, layout) and responsive rules
- `public/assets/` — images (served as `/assets/...`)
- `server.js` — Express server: serves the built app from `dist/` and `POST /api/contact` (Nodemailer)
- `.env.example` — template for the mail secrets (copy to `.env`)

## What's new in this version

- **Team section** — each of the 6 team members now has a photo-style avatar
  card, name, role, a short "goal" line, and their LinkedIn link. The avatars
  are generated gradient placeholders (not real photos), and the goal lines
  are placeholder text clearly marked `(placeholder)` — swap both for real
  headshots and each person's own words before publishing. Real photos of
  real people shouldn't be faked, so this stays as an honest placeholder
  until you drop real images in.
- **Blog / News tabs** — the Insights section now has two tabs. "Blog" has
  four sample SAP-finance posts with a working "Read more" expand/collapse.
  "News" has three placeholder cards ready for real company or industry
  updates. Everything is labeled "Sample" until you replace it.

## Notes before you publish

- The contact form posts to `/api/contact` in `server.js`, which sends the
  email with Nodemailer. Mail credentials live in `.env` (see above).
- To use real team photos: replace each `.team-photo` div in `src/pages/About.jsx`
  with an `<img>` tag pointing at the headshot, and remove the matching
  `team-photo-N` gradient class.
- Team LinkedIn links and phone numbers were carried over from the live site —
  double check them before go-live.
- Fonts load from Google Fonts by CDN; there's a system-font fallback if the
  page is opened fully offline.
- The "Client Stories", "Blog", and "News" sections are placeholders honestly
  labeled as such — drop in real case studies and articles when ready.
