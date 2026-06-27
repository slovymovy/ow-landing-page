// Controlled tag set for the blog. Filter keys are lowercase; labels are the
// display text on the hub filter bar and the card pills.
export const blogTags = [
  'learning',
  'dutch',
  'english',
  'polish',
  'russian',
  'exams',
  'product'
] as const;

export type BlogTag = (typeof blogTags)[number];

export const tagLabels: Record<BlogTag, string> = {
  learning: 'Learning tips',
  dutch: 'Dutch',
  english: 'English',
  polish: 'Polish',
  russian: 'Russian',
  exams: 'Exams',
  product: 'Product'
};

// "Jun 18, 2026" — UTC so the rendered date never shifts by timezone.
export function formatBlogDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC'
  });
}