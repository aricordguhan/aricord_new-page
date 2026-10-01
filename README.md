# Aricord — website rebuild

A static, dependency-free rebuild of aricord.com: same content and structure,
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

No build step or install required — it's plain HTML/CSS/JS.

**Option 1 — just open it**
Double-click `index.html`, or drag it into a browser window.

**Option 2 — local server (recommended, needed for some browsers' security rules)**
```bash
cd aricord-site
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.

## Files

- `index.html` — all page content and structure
- `style.css` — design system (colors, type, layout) and responsive rules
- `script.js` — mobile nav, scroll reveal, contact form, terms modal

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

- The contact form uses a `mailto:` link (no backend) — swap the placeholder
  `hello@aricord.com` in `script.js` for your real inbox, or wire it to a form
  service (Formspree, Netlify Forms, etc.) if you want submissions without
  opening the visitor's email client.
- To use real team photos: replace each `.team-photo` div in `index.html`
  with an `<img>` tag pointing at the headshot, and remove the matching
  `team-photo-N` gradient class.
- Team LinkedIn links and phone numbers were carried over from the live site —
  double check them before go-live.
- Fonts load from Google Fonts by CDN; there's a system-font fallback if the
  page is opened fully offline.
- The "Client Stories", "Blog", and "News" sections are placeholders honestly
  labeled as such — drop in real case studies and articles when ready.
