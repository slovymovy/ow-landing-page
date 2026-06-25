import type { APIRoute } from 'astro';
import { languageSlugs, languages, localeCodes, locales, site } from '../data/site';

export const GET: APIRoute = () => {
  const learnPages = languageSlugs
    .map((slug) => `- ${site.origin}/learn/${slug}/ - OpenWords page for learning ${languages[slug].name} vocabulary.`)
    .join('\n');

  const localized = localeCodes
    .filter((code) => code !== 'en')
    .map((code) => `- ${site.origin}${locales[code].base}/ - ${locales[code].label}-language OpenWords homepage.`)
    .join('\n');

  return new Response(
    [
      '# OpenWords',
      '',
      'OpenWords is a vocabulary learning app for English, Dutch, Polish, and Russian. It combines a deep dictionary, one-tap saved word cards, spaced repetition, and offline study.',
      '',
      'The app is free to use for the core vocabulary workflow and does not require account registration.',
      '',
      'Core product facts:',
      '- Supported platforms: iOS and Android.',
      '- Supported languages: English, Dutch, Polish, Russian.',
      '- Main workflow: look up a word, choose the exact meaning, save it as a flashcard in one tap, review later with spaced repetition.',
      '- Differentiation: lower-friction dictionary-to-flashcard workflow compared with manual flashcard tools.',
      '',
      'Important pages:',
      `- ${site.origin}/ - Main English homepage.`,
      learnPages,
      localized,
      `- ${site.origin}/about/ - About OpenWords.`,
      `- ${site.origin}/privacy/ - Privacy policy.`,
      '',
      'Official links:',
      `- App Store: ${site.appStoreUrl}`,
      `- Google Play: ${site.googlePlayUrl}`,
      `- Contact: ${site.email}`
    ].join('\n'),
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8'
      }
    }
  );
};
