import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { absoluteUrl, allIndexablePaths, alternateLinks, localeCodes, standalonePaths } from '../data/site';

// Matches a leading locale segment (e.g. /de, /pl) so we can derive the
// locale-agnostic path before generating hreflang alternates.
const localePrefix = new RegExp(`^/(${localeCodes.filter((c) => c !== 'en').join('|')})(?=/|$)`);

export const GET: APIRoute = async () => {
  // English-only blog: the hub plus each published post, no hreflang alternates.
  const blogPaths = [
    '/blog/',
    ...(await getCollection('blog', ({ data }) => !data.draft)).map((post) => `/blog/${post.id}/`)
  ];

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

  // English-only pages: a bare entry with no hreflang alternates.
  const standaloneUrls = [...standalonePaths, ...blogPaths]
    .map((path) =>
      [
        '<url>',
        `<loc>${absoluteUrl(path)}</loc>`,
        '<changefreq>weekly</changefreq>',
        '<priority>0.8</priority>',
        '</url>'
      ].join('')
    )
    .join('');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}${standaloneUrls}</urlset>`,
    {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8'
      }
    }
  );
};
