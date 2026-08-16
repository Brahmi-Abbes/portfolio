# Brahmi Abbes — Portfolio

Personal portfolio site for Brahmi Abbes, Laravel backend developer.

**Live:** https://portfolio-9vfzpe332-brahmi-abbes-projects.vercel.app/

## Stack

- HTML5
- Tailwind CSS (compiled via Tailwind CLI, not the CDN — see below)
- Vanilla JavaScript
- No frameworks, no bundler

## Structure

```
index.html                   # single-page site
css/
  style.css                  # custom styles (cards, hero, lightbox, etc.)
  tailwind.css                # compiled Tailwind output (generated, committed)
  tailwind-input.css          # Tailwind source (@tailwind directives)
js/
  script.js                    # source JS
  script.min.js                 # minified JS (generated, committed — what index.html loads)
assets/
  images/projects/              # project screenshots + video posters
  videos/                        # project demo videos
  Brahmi_Abbes_CV.pdf
tailwind.config.js
package.json
robots.txt
sitemap.xml
```

## Local setup

Only needed if you're changing styles/markup and want to regenerate the compiled CSS/JS:

```bash
npm install
npm run compile:all
```

This runs both `build:css` (Tailwind) and `build:js` (Terser minify) and overwrites `css/tailwind.css` and `js/script.min.js`.

> Note: the script is named `compile:all`, not `build` — Vercel auto-runs a script literally named `build` on deploy, and since the compiled files are already committed to the repo, there's nothing to build at deploy time.

## Deployment

Static site, deployed on **Vercel**. No build command, no output directory override — it just serves the repo as-is.

## Projects featured

- **[Pharmacera](https://github.com/Brahmi-Abbes/pharmacera)** — Laravel + Filament pharmacy management system (RBAC, FIFO stock, Docker)
- **[DevDz](https://github.com/Brahmi-Abbes/DevDz)** — Laravel community platform for Algerian developers
