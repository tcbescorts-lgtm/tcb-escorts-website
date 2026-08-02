# TCB Escorts LLC — Website

Static, production-ready website for TCB Escorts LLC (nationwide pilot car / oversize load escort services). Plain HTML/CSS/JS — no build step, no backend required.

## Structure

```
index.html         Home
services.html       Lead / Chase / High Pole / Steer / Route Survey detail
about.html          Company story, standards, certifications
service-area.html   Nationwide coverage, all 50 states
careers.html         Join the pilot car network (application form)
contact.html        Get a quote (main form) + FAQ
style.css           All styles
script.js           Nav, forms, FAQ accordion, counters
logo.png, favicon-32.png, favicon-192.png, favicon-512.png
robots.txt, sitemap.xml, vercel.json
```

All files sit flat at the project root (no subfolders) — this matches exactly how GitHub's web upload tool saves them, so uploads never break image/CSS/JS paths. If you ever reorganize into folders, update every `href`/`src` reference across all six HTML files to match.

## One setup step before launch: connect the forms

The Get a Quote form (`contact.html`) and the driver application form (`careers.html`) submit through **Web3Forms** — a free service that emails form submissions straight to your inbox with zero backend code.

1. Go to https://web3forms.com and enter the inbox you want submissions sent to (e.g. admin@tcbescorts.com). No account or password required — you'll get an access key instantly by email.
2. The key goes in each HTML file, not `script.js`. In `contact.html` and `careers.html`, find:
   ```html
   <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
   ```
   and replace `YOUR_WEB3FORMS_ACCESS_KEY` with the key Web3Forms emails you.
3. Save, commit, and redeploy. Test both forms once live.

Until this is done, the forms will show a friendly error asking the visitor to call or email directly — they won't fail silently.

## Adding real photos

Right now the site uses illustrations and icons instead of photography. Two spots are wired up to accept real images automatically — just add a file with the exact name below to the project root and it appears with no code changes:

- **Homepage hero background** — save a wide photo (1920×1080 or similar, a truck/escort scene works well) as `hero-bg.jpg`. It displays behind the dark overlay on the homepage hero, matching the "photo behind bold headline" look of your SourceBlue-style inspiration. If the file isn't there, the hero just shows the dark gradient — no broken image, no error.
- **Interior page headers** — every other page (Services, About, Service Area, Careers, Contact) shares one optional background photo. Save it as `page-hero-bg.jpg` and it appears behind the dark overlay on all five headers at once. Same graceful fallback if it's missing.
- **Fleet gallery** — on the About page (`about.html`), there's a 6-photo grid under "Our Fleet." Save your vehicle photos as `fleet-1.jpg` through `fleet-6.jpg` and each one fills in automatically. Empty slots show a light "Add fleet-N.jpg" placeholder instead of a broken-image icon, so it's safe to launch before you have all six.

All three slots are built as fixed-ratio containers with `cover` cropping, so dropping in a new or higher-res photo later never shifts the layout — just replace the file (same filename) and it slots right in.

Photos should be reasonably compressed (under ~500KB each) so the site stays fast — most phone photos will need resizing first.

## Map

The Contact page embeds a Google Map pinned to 4780 I-55 North, Jackson, MS 39211 (no API key required). To change it, open `contact.html`, find the `<iframe src="https://maps.google.com/maps?q=...">` line, and replace the address (URL-encoded, spaces as `%20`).

## Phone number display policy

Per request, the phone number no longer appears as visible text in the header, top bar, hero, or any "Call Dispatch" button — those are now icon/label-only links that still dial `(601) 633-9096` via `tel:` when tapped or clicked. The number is still shown as text in two places for reference: the footer's Contact column (every page) and the Contact page's "Contact Info" card. Say the word if you'd like it removed from those too. A floating text-message button (bottom-right, every page) opens the visitor's messaging app pre-addressed to the same number via `sms:`.

## Updating content

Every page is plain HTML — open any `.html` file and edit the text directly. Shared styles live in `style.css`; shared behavior (nav, forms, FAQ) lives in `script.js`. There's no template engine, so header/footer markup is repeated on each page — if you change the nav or footer, update it on all six pages.

See the deployment guide provided separately for GitHub + Vercel setup, custom domain connection, and how to push future updates.
