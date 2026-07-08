import english500 from './word-lists/english-500.json';
import footballWords from './word-lists/football-vocabulary.json';
import travelWords from './word-lists/travel-vocabulary.json';
import workWords from './word-lists/work-vocabulary.json';
import harryPotterWords from './word-lists/harry-potter-vocabulary.json';
import cookingWords from './word-lists/cooking-vocabulary.json';
import nlJustArrived from './word-lists/nl-just-arrived.json';
import nl500Common from './word-lists/nl-500-most-common.json';
import nlKnmExam from './word-lists/nl-knm-exam.json';
import nlSupermarket from './word-lists/nl-supermarket.json';
import nlAtTheDoctor from './word-lists/nl-at-the-doctor.json';
import nlFamily from './word-lists/nl-family.json';
import ruFamilyAndPeople from './word-lists/ru-family-and-people.json';
import ruFoodAndKitchen from './word-lists/ru-food-and-kitchen.json';
import ruCityAndTransport from './word-lists/ru-city-and-transport.json';
import ruHomeAndHousing from './word-lists/ru-home-and-housing.json';
import ruShoppingAndMoney from './word-lists/ru-shopping-and-money.json';
import ruHealthAndBody from './word-lists/ru-health-and-body.json';
import ruClothesAndAppearance from './word-lists/ru-clothes-and-appearance.json';
import ruWeatherAndNature from './word-lists/ru-weather-and-nature.json';
import plAdministrationAndDocuments from './word-lists/pl-administration-and-documents.json';
import plHealthcareAndDentist from './word-lists/pl-healthcare-and-dentist.json';
import plRentingAndHousing from './word-lists/pl-renting-and-housing.json';
import plHomeAndHousehold from './word-lists/pl-home-and-household.json';
import { homeCopy } from './copy';
import { wordListCopy, wordListCopyNl, wordListCopyPl, wordListCopyRu, type StepDef, type WlFaqItem, type WordListCopy } from './wordListCopy';
import { topicListCopy } from './topicListCopy';
import { languages, localizePath, type LanguageSlug, type LocaleCode } from './site';

// ── Types ──────────────────────────────────────────────────────────────────
export interface WordEntry {
  r?: number; // rank (frequency lists only)
  w: string; // headword / lemma (in the taught language)
  d: string; // display text: definition (taught locale) or translation (other locales)
}

export interface WordGroup {
  id: string;
  title?: string; // omitted for ungrouped topic lists
  accent?: string;
  entries: WordEntry[];
}

export interface Metric {
  num: string;
  label: string;
}

export interface Crumb {
  label: string;
  href?: string;
}

export interface SiblingItem {
  name: string;
  href: string;
  active?: boolean;
}

export interface HubCard {
  name: string;
  desc: string;
  count: string;
  href: string;
}

export interface StepBlock {
  eyebrow: string;
  h2: string;
  sub: string;
  steps: StepDef[];
  note: string;
}

interface RawWord {
  w: string;
  d: string;
  // Translation per interface locale; the taught language's own locale is
  // absent (that locale shows the definition instead).
  t: Partial<Record<LocaleCode, string>>;
  // Sense clarification per locale, shown only to disambiguate rows whose
  // translation collides with another word in the same list (e.g. jouw/uw → "your").
  c?: Partial<Record<LocaleCode, string>>;
}

// ── List registry ───────────────────────────────────────────────────────────
// Every list belongs to a taught `language` (the vocabulary it teaches) and is
// either the frequency list (`topic: false` — rank bands + bespoke reviewed
// copy) or a thematic list (`topic: true` — single ungrouped list, copy
// templated from its title/subtitle in topicListCopy). `order` = hub order.
interface ListDef {
  language: LanguageSlug;
  slug: string;
  order: number;
  // `topic` selects the COPY source: false = bespoke frequency-list copy in
  // wordListCopy(Nl); true = templated from topicListCopy.
  topic: boolean;
  // `ranked` selects the RENDERING: rank numbers + frequency bands vs. a single
  // plain list. Defaults to `!topic`. Set explicitly to `false` for a list that
  // wants bespoke copy but is NOT ordered by frequency (so no rank numbers).
  ranked?: boolean;
  words: RawWord[];
}

const REGISTRY: ListDef[] = [
  // English lists — `order` ranked by broad popularity (500 core stays first).
  { language: 'english', slug: '500-most-common', order: 1, topic: false, words: english500 as RawWord[] },
  { language: 'english', slug: 'travel-vocabulary', order: 2, topic: true, words: travelWords as RawWord[] },
  { language: 'english', slug: 'work-vocabulary', order: 3, topic: true, words: workWords as RawWord[] },
  { language: 'english', slug: 'cooking-vocabulary', order: 4, topic: true, words: cookingWords as RawWord[] },
  { language: 'english', slug: 'football-vocabulary', order: 5, topic: true, words: footballWords as RawWord[] },
  { language: 'english', slug: 'harry-potter-vocabulary', order: 6, topic: true, words: harryPotterWords as RawWord[] },

  // Dutch lists — `order` follows the source content ordering. `500-most-common`
  // is the Dutch core list: bespoke copy like English's, but the source words are
  // ordered pedagogically (A1), not by corpus frequency, so `ranked: false` drops
  // the rank numbers + frequency bands. The rest are thematic.
  { language: 'dutch', slug: 'just-arrived', order: 1, topic: true, words: nlJustArrived as RawWord[] },
  { language: 'dutch', slug: '500-most-common', order: 2, topic: false, ranked: false, words: nl500Common as RawWord[] },
  { language: 'dutch', slug: 'knm-exam', order: 3, topic: true, words: nlKnmExam as RawWord[] },
  { language: 'dutch', slug: 'supermarket', order: 4, topic: true, words: nlSupermarket as RawWord[] },
  { language: 'dutch', slug: 'at-the-doctor', order: 5, topic: true, words: nlAtTheDoctor as RawWord[] },
  { language: 'dutch', slug: 'family', order: 6, topic: true, words: nlFamily as RawWord[] },

  // Russian lists — all thematic (no frequency/core list), ordered by everyday
  // usefulness. Source: ru_lists_export.csv via gen_ru.py.
  { language: 'russian', slug: 'family-and-people', order: 1, topic: true, words: ruFamilyAndPeople as RawWord[] },
  { language: 'russian', slug: 'food-and-kitchen', order: 2, topic: true, words: ruFoodAndKitchen as RawWord[] },
  { language: 'russian', slug: 'city-and-transport', order: 3, topic: true, words: ruCityAndTransport as RawWord[] },
  { language: 'russian', slug: 'home-and-housing', order: 4, topic: true, words: ruHomeAndHousing as RawWord[] },
  { language: 'russian', slug: 'shopping-and-money', order: 5, topic: true, words: ruShoppingAndMoney as RawWord[] },
  { language: 'russian', slug: 'health-and-body', order: 6, topic: true, words: ruHealthAndBody as RawWord[] },
  { language: 'russian', slug: 'clothes-and-appearance', order: 7, topic: true, words: ruClothesAndAppearance as RawWord[] },
  { language: 'russian', slug: 'weather-and-nature', order: 8, topic: true, words: ruWeatherAndNature as RawWord[] },

  // Polish lists — all thematic (no frequency/core list), aimed at everyday
  // life in Poland; ordered by a newcomer's priorities. Source:
  // pl_lists_export.csv via gen_pl.py.
  { language: 'polish', slug: 'administration-and-documents', order: 1, topic: true, words: plAdministrationAndDocuments as RawWord[] },
  { language: 'polish', slug: 'healthcare-and-dentist', order: 2, topic: true, words: plHealthcareAndDentist as RawWord[] },
  { language: 'polish', slug: 'renting-and-housing', order: 3, topic: true, words: plRentingAndHousing as RawWord[] },
  { language: 'polish', slug: 'home-and-household', order: 4, topic: true, words: plHomeAndHousehold as RawWord[] }
];

const byOrder = (language: LanguageSlug) =>
  REGISTRY.filter((l) => l.language === language).sort((a, b) => a.order - b.order);
const find = (language: LanguageSlug, slug: string) =>
  REGISTRY.find((l) => l.language === language && l.slug === slug);

export const orderedSlugs = (language: LanguageSlug) => byOrder(language).map((l) => l.slug);

// The interface locale in which a list shows the definition rather than a
// translation — i.e. the locale that matches the taught language.
const DEF_LOCALE: Partial<Record<LanguageSlug, LocaleCode>> = { english: 'en', dutch: 'nl', russian: 'ru', polish: 'pl' };
const defLocale = (language: LanguageSlug): LocaleCode => DEF_LOCALE[language] ?? 'en';

// Per-language UI copy map (falls back to English chrome if a language has none).
const COPY_MAPS: Partial<Record<LanguageSlug, Record<LocaleCode, WordListCopy>>> = {
  dutch: wordListCopyNl,
  russian: wordListCopyRu,
  polish: wordListCopyPl
};
const copyFor = (language: LanguageSlug): Record<LocaleCode, WordListCopy> => COPY_MAPS[language] ?? wordListCopy;

// UI copy for a given interface locale + taught language (hub meta, labels…).
export const wlCopy = (locale: LocaleCode, language: LanguageSlug): WordListCopy => copyFor(language)[locale];

// ── Path helpers ────────────────────────────────────────────────────────────
export const hubPath = (locale: LocaleCode, language: LanguageSlug) =>
  localizePath(locale, `/word-lists/${languages[language].slug}`);
export const listPath = (locale: LocaleCode, language: LanguageSlug, slug: string) =>
  localizePath(locale, `/word-lists/${languages[language].slug}/${slug}`);

// ── Word entries: taught locale shows the definition, others the translation ──
function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// A few source definitions reference another headword with a <w>…</w> tag; turn
// that into a highlight span. Result is trusted HTML (rendered with set:html).
function toHtml(text: string): string {
  return escapeHtml(text).replace(/&lt;w&gt;(.*?)&lt;\/w&gt;/g, '<span class="wref">$1</span>');
}

function entryText(word: RawWord, locale: LocaleCode, def: LocaleCode): string {
  // The taught locale shows the definition. Other locales show the translation,
  // falling back to the English translation (not the definition) so a reader
  // never sees an untranslated sentence in the taught language.
  const raw = locale === def ? word.d : word.t[locale] ?? word.t.en ?? word.d;
  return toHtml(raw);
}

function countBy<T>(items: T[], key: (t: T) => string | undefined): Set<string> {
  const counts = new Map<string, number>();
  for (const it of items) {
    const k = key(it);
    if (k) counts.set(k, (counts.get(k) ?? 0) + 1);
  }
  const dups = new Set<string>();
  for (const [k, n] of counts) if (n > 1) dups.add(k);
  return dups;
}

// The frequency list is split into rank bands; topic lists stay a single list.
const FREQ_BANDS: { id: string; from: number; to: number }[] = [
  { id: 'band-1', from: 1, to: 100 },
  { id: 'band-2', from: 101, to: 300 },
  { id: 'band-3', from: 301, to: 500 }
];

function buildGroups(def: ListDef, locale: LocaleCode): WordGroup[] {
  const dl = defLocale(def.language);
  // A row is a "duplicate" (and so gets a sense clarification, when one exists)
  // if either its translation OR its headword is shared with another row — the
  // list is keyed by word-sense, so a word with several meanings repeats. The
  // taught locale shows unique definitions, so it needs no clarifications.
  const dupTranslations = locale === dl ? new Set<string>() : countBy(def.words, (w) => w.t[locale]);
  const dupLemmas = locale === dl ? new Set<string>() : countBy(def.words, (w) => w.w);
  const render = (w: RawWord): string => {
    let html = entryText(w, locale, dl);
    const clar = w.c?.[locale];
    const translation = w.t[locale];
    const isDup = (translation && dupTranslations.has(translation)) || dupLemmas.has(w.w);
    if (clar && locale !== dl && isDup) {
      html += ` <span class="wclar">(${escapeHtml(clar)})</span>`;
    }
    return html;
  };
  const isRanked = def.ranked ?? !def.topic;
  if (!isRanked) {
    return [{ id: 'list', entries: def.words.map((w) => ({ w: w.w, d: render(w) })) }];
  }
  const bandTitle = copyFor(def.language)[locale].bandTitle!;
  const rankedEntries: WordEntry[] = def.words.map((w, i) => ({ r: i + 1, w: w.w, d: render(w) }));
  return FREQ_BANDS.map(({ id, from, to }) => ({
    id,
    title: bandTitle,
    accent: `${from}–${to}`,
    entries: rankedEntries.filter((e) => e.r! >= from && e.r! <= to)
  }));
}

// ── Per-list copy: bespoke for the frequency list, templated for topic lists ──
interface ListCopy {
  metaTitle: string;
  metaDescription: string;
  h1Html: string;
  subhead: string;
  cardName: string;
  cardDesc: string;
  crumbCurrent: string;
}

function listCopy(def: ListDef, locale: LocaleCode): ListCopy {
  const c = copyFor(def.language)[locale];
  if (!def.topic) {
    return {
      metaTitle: c.listTitle!,
      metaDescription: c.listDescription!,
      h1Html: c.listH1Html!,
      subhead: c.listSubhead!,
      cardName: c.cardName!,
      cardDesc: c.cardDesc!,
      crumbCurrent: c.crumbCurrent!
    };
  }
  const t = topicListCopy[def.slug];
  const title = t.title[locale];
  const subtitle = t.subtitle[locale];
  return {
    metaTitle: `${title} — ${c.listTitleSuffix}`,
    metaDescription: `${subtitle} ${c.listMetaTail}`,
    h1Html: escapeHtml(title),
    subhead: subtitle,
    cardName: title,
    cardDesc: subtitle,
    crumbCurrent: title
  };
}

// ── Shared "how it works" step blocks (CTA/eyebrow/note from homeCopy) ───────
export function hubStepBlock(locale: LocaleCode, language: LanguageSlug): StepBlock {
  const c = copyFor(language)[locale];
  return {
    eyebrow: homeCopy[locale].howItWorksEyebrow,
    h2: c.hubStepsH2,
    sub: c.hubStepsSub,
    note: homeCopy[locale].heroTagline,
    steps: [c.stepDownload, c.stepFindList, c.stepAddWords, c.stepLearnCards]
  };
}

export function listStepBlock(locale: LocaleCode, language: LanguageSlug): StepBlock {
  const c = copyFor(language)[locale];
  return {
    eyebrow: homeCopy[locale].howItWorksEyebrow,
    h2: c.listStepsH2,
    sub: c.listStepsSub,
    note: homeCopy[locale].heroTagline,
    steps: [c.stepDownload, c.stepOpenList, c.stepAddWords, c.stepLearnCards]
  };
}

export function hubFaq(locale: LocaleCode, language: LanguageSlug): WlFaqItem[] {
  return copyFor(language)[locale].faq;
}

// ── Hub cards (all lists for a language, ordered) ─────────────────────────────
export function hubCards(locale: LocaleCode, language: LanguageSlug): HubCard[] {
  const metricLabel = copyFor(language)[locale].metricLabel;
  return byOrder(language).map((def) => {
    const copy = listCopy(def, locale);
    return {
      name: copy.cardName,
      desc: copy.cardDesc,
      count: `${def.words.length} ${metricLabel}`,
      href: listPath(locale, language, def.slug)
    };
  });
}

// ── List page data ──────────────────────────────────────────────────────────
export interface WordListData {
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  h1Html: string;
  subhead: string;
  metrics: Metric[];
  breadcrumb: Crumb[];
  siblings: { label: string; allHref: string; items: SiblingItem[] };
  allListsText: string;
  jumpLabel: string;
  groups: WordGroup[];
}

export function listData(locale: LocaleCode, language: LanguageSlug, slug: string): WordListData {
  const def = find(language, slug)!;
  const c = copyFor(language)[locale];
  const ui = homeCopy[locale].ui;
  const copy = listCopy(def, locale);
  const path = listPath(locale, language, slug);
  return {
    path,
    title: copy.metaTitle,
    description: copy.metaDescription,
    eyebrow: c.listEyebrow,
    h1Html: copy.h1Html,
    subhead: copy.subhead,
    metrics: [{ num: String(def.words.length), label: c.metricLabel }],
    breadcrumb: [
      { label: 'OpenWords', href: localizePath(locale, '/') },
      { label: languages[language].displayName[locale], href: localizePath(locale, `/learn/${languages[language].slug}`) },
      { label: ui.navWordLists, href: hubPath(locale, language) },
      { label: copy.crumbCurrent }
    ],
    siblings: {
      label: c.siblingsLabel,
      allHref: hubPath(locale, language),
      items: byOrder(language).map((d) => ({
        name: listCopy(d, locale).cardName,
        href: listPath(locale, language, d.slug),
        active: d.slug === slug
      }))
    },
    allListsText: c.allLists,
    jumpLabel: c.jumpLabel,
    groups: buildGroups(def, locale)
  };
}
