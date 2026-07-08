# Harsh Nagar — Software Engineer Portfolio

A premium, animated portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion —
adapted from a 3D-creator template into a software engineer portfolio for Harsh Nagar
(Java Developer / Backend Developer).

## What's inside

- **Hero** — animated gradient headline, availability badge, magnetic "code mark" portrait
- **Marquee** — two scroll-driven rows of his tech stack (Java, Spring Boot, Python, OpenCV, etc.)
- **About** — scroll-revealed bio with four floating skill-category icons
- **Skills** — 5 numbered service-style skill blocks (Java Dev, Backend, AI/ML, API Dev, Problem Solving)
- **Projects** — 3 sticky, stacking project cards (Smart Email Assistant, Face Recognition System, PacMan)
- **Contact** — GitHub / LinkedIn / LeetCode / email links + resume download

All the original animation systems (FadeIn, Magnet, AnimatedText, scroll-linked marquee,
sticky-scaling project cards) are preserved exactly as specified.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Deploy with GitHub Pages (no Vercel needed)

This repo already has a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds
and publishes the site automatically every time you push to `main`.

**1. Create the repo on GitHub**
Go to [github.com/new](https://github.com/new), name it `harsh-nagar-portfolio`
(if you use a different name, update `base` in `vite.config.ts` to match), keep it public,
don't initialize with a README (this folder already has one).

**2. Push this folder to it**

```bash
cd harsh-nagar-portfolio
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/harshn845/harsh-nagar-portfolio.git
git push -u origin main
```

**3. Turn on Pages**
On GitHub: repo → **Settings** → **Pages** → under "Build and deployment", set **Source** to
**GitHub Actions**. That's it — the workflow will run automatically.

**4. Visit your site**
After the Action finishes (check the **Actions** tab for progress), it'll be live at:

```
https://harshn845.github.io/harsh-nagar-portfolio/
```

Every future `git push` to `main` re-deploys automatically — no manual build step needed.

## Notes

- Your resume PDF is already in `public/Harsh_Nagar_Resume.pdf` and wired up to the
  "Download Resume" button — swap that file any time you update your resume, no code changes needed.
- Update `src/data/content.ts` to tweak copy, projects, skills, or links in one place.
- The hero portrait image lives at `public/images/harsh-portrait.png` — swap that file to change
  the photo without touching any code (used in `HeroSection.tsx`).
