# Futuristic Tech School Landing Page

> Projet TechSchool LGC – version Next.js

## Détails techniques

- Pile: Next.js 14 (App Router) + React 18 + TypeScript + Motion (animations).
- Styles: CSS utilitaire déjà compilée (pas de build Tailwind requis à l’exécution).
- Entrée: `app/page.tsx` rend `src/App.tsx` côté client ("use client").
- Layout racine: `app/layout.tsx` + `app/globals.css` (importe `src/index.css`).
- Accessibilité: attributs ARIA conservés (burger `aria-haspopup/aria-expanded`, rôles menu).
- TypeScript: configuration Next (`jsx: preserve`, plugin Next) et types Next/React/DOM.
- Assets statiques: tout fichier sous `public/` est servi à la racine (`/asset/...`).

## Scripts utiles

- `npm run dev` - lance Next en développement (port 3000 par défaut).
- `npm run build` - build de production Next.
- `npm start` - démarre le serveur Next en production.
- `npx tsc --noEmit` - vérification TypeScript.

## Déploiement (basePath sous-sous-dossier)

- Le site peut être servi sous un sous-chemin (ex. GitHub Pages: `/LGC-techSchool`).
- Configuration via variables d’environnement au build:
  - `GITHUB_PAGES=true` en production: active automatiquement `/LGC-techSchool`.
  - ou `NEXT_PUBLIC_BASE_PATH=/chemin` (ou `BASE_PATH=/chemin`) pour définir un sous-chemin explicite.
- Quand un `basePath` est défini, les images Next sont servies en mode `unoptimized` (compatibles hébergement statique).

Exemples:
- PowerShell (Windows): `$env:GITHUB_PAGES = "true"; npm run build`
- Bash: `GITHUB_PAGES=true npm run build`

## Structure (extrait)

- `app/layout.tsx` - layout HTML racine et import global CSS.
- `app/page.tsx` - page d’accueil, rend `src/App`.
- `src/components/` - sections (Hero, Formations, Team, Events, etc.) et UI.
- `src/components/Nav.tsx` - barre de navigation ancrée (desktop + burger mobile).
- `public/asset/` et `public/assets/` - fichiers statiques servis par Next.

## Notes de migration

- L’ancienne configuration Vite a été retirée. Les scripts utilisent désormais Next.
- Les composants qui emploient `window`/`document` restent côté client via `app/page.tsx`.
- Vous pouvez ultérieurement migrer progressivement vers des Server Components si besoin.

## Technologies du MVP

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-000000?style=for-the-badge&logo=framer&logoColor=white)
