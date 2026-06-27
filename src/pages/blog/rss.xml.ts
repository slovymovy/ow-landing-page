import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { absoluteUrl } from '../../data/site';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => +new Date(b.data.date) - +new Date(a.data.date)
  );

  const items = posts
    .map((post) => {
      const url = absoluteUrl(`/blog/${post.id}/`);
      const pubDate = new Date(`${post.data.date}T00:00:00Z`).toUTCString();
      return [
        '<item>',
        `<title>${escapeXml(post.data.title)}</title>`,
        `<link>${url}</link>`,
        `<guid isPermaLink="true">${url}</guid>`,
        `<pubDate>${pubDate}</pubDate>`,
        `<description>${escapeXml(post.data.excerpt)}</description>`,
        '</item>'
      ].join('');
    })
    .join('');

  const channel = [
    `<title>${escapeXml('OpenWords Blog')}</title>`,
    `<link>${absoluteUrl('/blog/')}</link>`,
    `<description>${escapeXml('Practical guides on learning vocabulary that lasts — spaced repetition, language-specific tips, and exam prep.')}</description>`,
    '<language>en-us</language>',
    `<atom:link href="${absoluteUrl('/blog/rss.xml')}" rel="self" type="application/rss+xml" />`,
    items
  ].join('');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>` +
      `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel>${channel}</channel></rss>`,
    {
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8'
      }
    }
  );
};
