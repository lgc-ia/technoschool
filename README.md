# TechnoSchool Landing Page

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-000000?style=for-the-badge&logo=framer&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide-F56565?style=for-the-badge&logo=lucide&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

> Projet TechnoSchool LGC – landing page Next.js (App Router)

## Stack technique

- **Framework**: Next.js 16 (App Router, Turbopack) + React 18 + TypeScript 5.
- **Animations**: [Motion](https://motion.dev/) (ex Framer Motion).
- **Icônes**: `lucide-react`.
- **Styles**: CSS applicatif dans `src/app/globals.css` — aucun build Tailwind à l'exécution.
- **Accessibilité**: attributs ARIA sur la navigation (burger `aria-haspopup/aria-expanded`, rôles menu).

## Démarrage rapide

```bash
npm install
npm run dev          # http://localhost:3000
```

## Scripts

- `npm run dev` — serveur de développement Next (port 3000).
- `npm run build` — build de production.
- `npm start` — démarre le serveur Next en production.
- `npm run type-check` — vérification TypeScript (`tsc --noEmit`).

## Structure du projet

```
technoschool/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # layout racine (Server Component) + metadata + favicons
│   │   ├── page.tsx        # route `/` — compose toutes les sections (Server Component)
│   │   └── globals.css     # styles globaux (CSS applicatif compilé statiquement)
│   └── components/         # sections (toutes "use client" à cause de motion)
│       ├── Nav.tsx         # navigation ancrée (desktop + burger mobile)
│       ├── Hero.tsx
│       ├── Formations.tsx
│       ├── Team.tsx
│       ├── Statistics.tsx
│       ├── Testimonials.tsx
│       ├── Events.tsx
│       ├── CTA.tsx
│       ├── Footer.tsx
│       ├── ContactInquiryDialog.tsx
│       └── Particles.tsx   # canvas animé (Hero + bandes latérales)
├── public/
│   ├── asset/              # images et médias servis à la racine (/asset/...)
│   └── favicon/            # icônes et manifest
├── next.config.mjs         # basePath / assetPrefix configurables
├── tsconfig.json
└── package.json
```

## Sections de la landing page

La page assemble, dans l'ordre : `Nav` → `Hero` → `Formations` → `Team` → `Statistics` → `Testimonials` → `Events` → `CTA` → `Footer`.

## Déploiement sous un sous-chemin (ex. GitHub Pages)

Le site peut être servi sous un sous-chemin (ex. `/technoschool`). Configuration via variables d'environnement au build :

- `GITHUB_PAGES=true` en production → active automatiquement `/technoschool`.
- `NEXT_PUBLIC_BASE_PATH=/chemin` (ou `BASE_PATH=/chemin`) → définit un sous-chemin explicite.

Quand un `basePath` est défini, les images Next sont servies en mode `unoptimized` (compatibles hébergement statique).

Exemples :

```bash
# PowerShell (Windows)
$env:GITHUB_PAGES = "true"; npm run build

# Bash
GITHUB_PAGES=true npm run build
```

## Assets statiques

Tout fichier sous `public/` est servi à la racine :

- `public/asset/...` → `/asset/...`
- `public/favicon/...` → `/favicon/...` (référencé dans `src/app/layout.tsx`).

## Notes de migration

- L'ancienne configuration Vite a été retirée au profit de Next.js 16.
- `src/app/page.tsx` est un Server Component ; les composants interactifs portent eux-mêmes `"use client"`.
- Une migration progressive vers davantage de Server Components reste possible section par section.
