import { defineConfig } from 'astro/config';

// Open outbound links (absolute http(s) URLs not on openwords.ai) in a new tab.
// Applies to all markdown-rendered content, e.g. blog post bodies. Relative
// links (e.g. "/") are internal and stay in the same tab.
function rehypeExternalLinks() {
  return (tree) => {
    const walk = (node) => {
      if (
        node.type === 'element' &&
        node.tagName === 'a' &&
        typeof node.properties?.href === 'string' &&
        /^https?:\/\//i.test(node.properties.href) &&
        !/(^|\.)openwords\.ai/i.test(new URL(node.properties.href).hostname)
      ) {
        node.properties.target = '_blank';
        node.properties.rel = ['noopener', 'noreferrer'];
      }
      node.children?.forEach(walk);
    };
    walk(tree);
  };
}

export default defineConfig({
  site: 'https://www.openwords.ai',
  output: 'static',
  markdown: {
    rehypePlugins: [rehypeExternalLinks]
  }
});
