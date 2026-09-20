# Apoorv Sharma — Portfolio

A combined personal website: a professional software-engineering portfolio and a
personal-life section (coffee, photography, hiking, travel, and more). This is
the **v2 rebuild** — a ground-up rewrite on a modern stack.

## Tech stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router) + TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with a token-based
  design system and class-based dark mode
- **Animation:** Framer Motion
- **Icons:** react-icons
- **Hosting:** Vercel (planned)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Project structure

```
src/
  app/                 # routes (App Router)
    page.tsx           # home
    about/ projects/ experience/ resume/ personal/
    layout.tsx         # root layout (nav + footer + theme)
    globals.css        # design tokens + Tailwind
  components/
    layout/            # NavBar, Footer
    theme/             # ThemeScript, ThemeToggle
    ui/                # Container, Section, Button
    Typewriter.tsx
  lib/
    site.ts            # site config (name, nav, socials)
public/
  assets/              # headshot, logo
  resume/              # resume PDF
```

## Roadmap

See the living plan doc for phases and the full task list. In short:

- **Phase 1** — Professional site (Home, About, Projects, Experience, Resume)
- **Phase 2** — Personal Life pages (Blog, Photography, Coffee)
- **Phase 3** — Exploration world map + location pages
- **Phase 4** — Polish, SEO, analytics, launch
