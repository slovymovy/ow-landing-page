import english500 from './word-lists/english-500.json';
import footballWords from './word-lists/football-vocabulary.json';
import travelWords from './word-lists/travel-vocabulary.json';
import workWords from './word-lists/work-vocabulary.json';
import harryPotterWords from './word-lists/harry-potter-vocabulary.json';
import cookingWords from './word-lists/cooking-vocabulary.json';
import { homeCopy } from './copy';
import { wordListCopy, type StepDef, type WlFaqItem } from './wordListCopy';
import { topicListCopy } from './topicListCopy';
import { languages, localizePath, type LocaleCode } from './site';

// ── Types ──────────────────────────────────────────────────────────────────
export interface WordEntry {
  r?: number; // rank (frequency lists only)
  w: string; // English word / lemma
  d: string; // display text: English definition (en) or translation (other locales)
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
  t: Partial<Record<Exclude<LocaleCode, 'en'>, string>>;
}

// ── List registry ───────────────────────────────────────────────────────────
// `topic: false` = the frequency list (rank bands + bespoke reviewed copy).
// `topic: true`  = a thematic list (single ungrouped list, copy templated from
// its title/subtitle in topicListCopy). Ordered by `order` on the hub.
interface ListDef {
  slug: string;
  order: number;
  topic: boolean;
  words: RawWord[];
}

const REGISTRY: ListDef[] = [
  // `order` = hub display order, ranked by broad popularity (500 core stays first).
  { slug: '500-most-common', order: 1, topic: false, words: english500 as RawWord[] },
  { slug: 'travel-vocabulary', order: 2, topic: true, words: travelWords as RawWord[] },
  { slug: 'work-vocabulary', order: 3, topic: true, words: workWords as RawWord[] },
  { slug: 'cooking-vocabulary', order: 4, topic: true, words: cookingWords as RawWord[] },
  { slug: 'football-vocabulary', order: 5, topic: true, words: footballWords as RawWord[] },
  { slug: 'harry-potter-vocabulary', order: 6, topic: true, words: harryPotterWords as RawWord[] }
];

const byOrder = () => [...REGISTRY].sort((a, b) => a.order - b.order);
const find = (slug: string) => REGISTRY.find((l) => l.slug === slug);

export const orderedSlugs = () => byOrder().map((l) => l.slug);

// ── Path helpers ────────────────────────────────────────────────────────────
export const hubPath = (locale: LocaleCode) => localizePath(locale, '/word-lists/english');
export const listPath = (locale: LocaleCode, slug: string) => localizePath(locale, `/word-lists/english/${slug}`);

// ── Word entries: English shows the definition, other locales the translation ──
function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// A few source definitions reference another headword with a <w>…</w> tag; turn
// that into a highlight span. Result is trusted HTML (rendered with set:html).
function toHtml(text: string): string {
  return escapeHtml(text).replace(/&lt;w&gt;(.*?)&lt;\/w&gt;/g, '<span class="wref">$1</span>');
}

function entryText(word: RawWord, locale: LocaleCode): string {
  const raw = locale === 'en' ? word.d : word.t[locale as Exclude<LocaleCode, 'en'>] ?? word.d;
  return toHtml(raw);
}

// The frequency list is split into rank bands; topic lists stay a single list.
const FREQ_BANDS: { id: string; from: number; to: number }[] = [
  { id: 'band-1', from: 1, to: 100 },
  { id: 'band-2', from: 101, to: 300 },
  { id: 'band-3', from: 301, to: 500 }
];

function buildGroups(def: ListDef, locale: LocaleCode): WordGroup[] {
  if (def.topic) {
    return [{ id: 'list', entries: def.words.map((w) => ({ w: w.w, d: entryText(w, locale) })) }];
  }
  const bandTitle = wordListCopy[locale].bandTitle;
  const ranked: WordEntry[] = def.words.map((w, i) => ({ r: i + 1, w: w.w, d: entryText(w, locale) }));
  return FREQ_BANDS.map(({ id, from, to }) => ({
    id,
    title: bandTitle,
    accent: `${from}–${to}`,
    entries: ranked.filter((e) => e.r! >= from && e.r! <= to)
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
  const c = wordListCopy[locale];
  if (!def.topic) {
    return {
      metaTitle: c.listTitle,
      metaDescription: c.listDescription,
      h1Html: c.listH1Html,
      subhead: c.listSubhead,
      cardName: c.cardName,
      cardDesc: c.cardDesc,
      crumbCurrent: c.crumbCurrent
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
export function hubStepBlock(locale: LocaleCode): StepBlock {
  const c = wordListCopy[locale];
  return {
    eyebrow: homeCopy[locale].howItWorksEyebrow,
    h2: c.hubStepsH2,
    sub: c.hubStepsSub,
    note: homeCopy[locale].heroTagline,
    steps: [c.stepDownload, c.stepFindList, c.stepAddWords, c.stepLearnCards]
  };
}

export function listStepBlock(locale: LocaleCode): StepBlock {
  const c = wordListCopy[locale];
  return {
    eyebrow: homeCopy[locale].howItWorksEyebrow,
    h2: c.listStepsH2,
    sub: c.listStepsSub,
    note: homeCopy[locale].heroTagline,
    steps: [c.stepDownload, c.stepOpenList, c.stepAddWords, c.stepLearnCards]
  };
}

export function hubFaq(locale: LocaleCode): WlFaqItem[] {
  return wordListCopy[locale].faq;
}

// ── Hub cards (all lists, ordered) ───────────────────────────────────────────
export function hubCards(locale: LocaleCode): HubCard[] {
  const metricLabel = wordListCopy[locale].metricLabel;
  return byOrder().map((def) => {
    const copy = listCopy(def, locale);
    return {
      name: copy.cardName,
      desc: copy.cardDesc,
      count: `${def.words.length} ${metricLabel}`,
      href: listPath(locale, def.slug)
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

export function listData(locale: LocaleCode, slug: string): WordListData {
  const def = find(slug)!;
  const c = wordListCopy[locale];
  const ui = homeCopy[locale].ui;
  const copy = listCopy(def, locale);
  const path = listPath(locale, slug);
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
      { label: languages.english.displayName[locale], href: localizePath(locale, '/learn/english') },
      { label: ui.navWordLists, href: hubPath(locale) },
      { label: copy.crumbCurrent }
    ],
    siblings: {
      label: c.siblingsLabel,
      allHref: hubPath(locale),
      items: byOrder().map((d) => ({
        name: listCopy(d, locale).cardName,
        href: listPath(locale, d.slug),
        active: d.slug === slug
      }))
    },
    allListsText: c.allLists,
    jumpLabel: c.jumpLabel,
    groups: buildGroups(def, locale)
  };
}
