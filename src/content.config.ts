import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { blogTags } from './data/blog';

// Blog posts live as markdown in src/content/blog/<slug>.md. The file name is
// the URL slug → /blog/<slug>/. Frontmatter drives the card, the post header,
// and the SEO/JSON-LD; the markdown body is the article prose (raw HTML for
// figures, callouts, pull quotes and the inline product promo is allowed).
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    // Card + post title (serif). Wraps freely, never truncated.
    title: z.string(),
    // Italic serif dek shown under the H1 on the post page.
    dek: z.string(),
    // 1–2 sentence card blurb on the hub.
    excerpt: z.string(),
    // <meta name="description"> for the post page.
    description: z.string(),
    // Optional cleaner OG/Twitter title + description; fall back to title/description.
    ogTitle: z.string().optional(),
    ogDescription: z.string().optional(),
    // Filter keys — must come from the controlled set (see src/data/blog.ts).
    tags: z.array(z.enum(blogTags)).nonempty(),
    // Optional display pills on the card; defaults to the tag labels.
    pills: z.array(z.string()).optional(),
    // Breadcrumb / section label, e.g. "Learning tips".
    category: z.string(),
    // ISO date (YYYY-MM-DD); rendered "Jun 18, 2026". Accepts a quoted string or
    // a bare YAML date (which the parser hands us as a Date) and normalises to
    // the YYYY-MM-DD string the rest of the code expects.
    date: z
      .union([z.string(), z.date()])
      .transform((value) =>
        value instanceof Date ? value.toISOString().slice(0, 10) : value
      ),
    readMins: z.number().int().positive(),
    author: z.string().default('Dina'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false)
  })
});

export const collections = { blog };
