# OpenWords Website

Static SEO-focused website for OpenWords, built with Astro.

## Commands

- `npm install` - install dependencies
- `npm run dev` - start local development server
- `npm run build` - build static files into `dist/`
- `npm run preview` - preview the built site

## Content Structure

- `src/data/site.ts` controls languages, locale routes, app links, and sitemap paths.
- `src/data/copy.ts` controls homepage and learn-page copy for English, Polish, Dutch, and Russian.
- `src/pages/learn/[language].astro` generates English learn pages.
- `src/pages/[locale]/learn/[language].astro` generates localized learn pages.

Word-list pages are intentionally not included yet. Add them later under `/word-lists/[language]` once the lists are ready.
