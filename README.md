# TCB Escorts LLC: Website

Static site (plain HTML/CSS/JS, no build step, no backend). Deployed from GitHub to Vercel.

## Structure

Everything sits flat at the project root (no subfolders). This matches how GitHub's web upload works, so images and pages never lose their paths. Upload every file in this folder.

```
index.html, services.html, about.html, service-area.html, careers.html,
contact.html, resources.html              Main pages
blog-*.html                               10 articles (linked from resources.html)
privacy.html, terms.html, cookie-policy.html, booking-policy.html   Legal pages
style.css, script.js, i18n.js, analytics.js
pilot-car-*.webp, team-member-vest.webp   Photos (640px and 1200px versions)
partner-*.webp                            Partner logos
hero-bg.jpg, logo.png, logo-header.png, logo-emblem.png, favicons
robots.txt, sitemap.xml, vercel.json
```

## Forms (Web3Forms)

Both forms (contact.html and careers.html) post to Web3Forms with the access key in a hidden `access_key` input. The key is a public identifier by design. In the Web3Forms dashboard, set the retention period to 30 days so it matches the Privacy Policy.

## Analytics (Google Analytics 4)

`analytics.js` is the only place GA is installed (Measurement ID G-G45DSEGPS2). It loads Google Analytics only after a visitor clicks Accept on the cookie banner, treats a Global Privacy Control signal as Decline, and exposes a "Cookie Settings" footer link. Events: page views (automatic), `click_to_call`, `click_to_text`, `click_email`, `request_insurance_docs`, `generate_lead` (successful form). Do not paste a second GA snippet into any page, because that would double-count.

## Phone numbers and messaging

- Dispatch: (601) 633-9096. Office: (601) 612-0106.
- "Text Us" links use `sms:6016339096?body=Hi%2C%20TCB%20Escorts%20can%20you%20tell%20me%20more%20about%20this%3F`.
- "Request Insurance & Credentials" links use the same number with the message "Hi, TCB Escorts. May I request a copy of your insurance documentation and credentials?" The visitor presses Send. No insurance documents are published on the site.

## Maintenance notes

- Header and footer markup is repeated on each page; update all pages if you change them.
- If you edit an article, edit its blog-*.html file directly.
- Service coverage is the 48 contiguous states (Alaska and Hawaii are not served).
