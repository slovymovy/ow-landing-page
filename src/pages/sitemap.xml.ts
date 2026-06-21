import type { APIRoute } from 'astro';
import { absoluteUrl, allIndexablePaths, alternateLinks, localeCodes } from '../data/site';

// Matches a leading locale segment (e.g. /de, /pl) so we can derive the
// locale-agnostic path before generating hreflang alternates.
const localePrefix = new RegExp(`^/(${localeCodes.filter((c) => c !== 'en').join('|')})(?=/|$)`);

export const GET: APIRoute = () => {
  const urls = allIndexablePaths()
    .map((path) => {
      const alternates = alternateLinks(path.replace(localePrefix, '') || '/')
        .map((alternate) => `<xhtml:link rel="alternate" hreflang="${alternate.lang}" href="${alternate.href}" />`)
        .join('');

      return [
        '<url>',
        `<loc>${absoluteUrl(path)}</loc>`,
        alternates,
        '<changefreq>weekly</changefreq>',
        '<priority>0.8</priority>',
        '</url>'
      ].join('');
    })
    .join('');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`,
    {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8'
      }
    }
  );
};
