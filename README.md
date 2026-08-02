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

## Updating content

Every page is plain HTML — open any `.html` file and edit the text directly. Shared styles live in `style.css`; shared behavior (nav, forms, FAQ) lives in `script.js`. There's no template engine, so header/footer markup is repeated on each page — if you change the nav or footer, update it on all six pages.

See the deployment guide provided separately for GitHub + Vercel setup, custom domain connection, and how to push future updates.
