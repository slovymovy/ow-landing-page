export const site = {
  name: 'OpenWords',
  origin: 'https://www.openwords.ai',
  email: 'admin@openwords.ai',
  appStoreUrl: 'https://apps.apple.com/us/app/openwords/id6754798978',
  googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.slovy.slovymovyapp',
  ogImage: '/OG_OW.png',
  gaMeasurementId: 'G-23FWM07P5G'
};

export const locales = {
  en: {
    code: 'en',
    base: '',
    label: 'English',
    nativeLabel: 'English',
    flag: 'GB',
    htmlLang: 'en'
  },
  de: {
    code: 'de',
    base: '/de',
    label: 'German',
    nativeLabel: 'Deutsch',
    flag: 'DE',
    htmlLang: 'de'
  },
  es: {
    code: 'es',
    base: '/es',
    label: 'Spanish',
    nativeLabel: 'Español',
    flag: 'ES',
    htmlLang: 'es'
  },
  it: {
    code: 'it',
    base: '/it',
    label: 'Italian',
    nativeLabel: 'Italiano',
    flag: 'IT',
    htmlLang: 'it'
  },
  nl: {
    code: 'nl',
    base: '/nl',
    label: 'Dutch',
    nativeLabel: 'Nederlands',
    flag: 'NL',
    htmlLang: 'nl'
  },
  pl: {
    code: 'pl',
    base: '/pl',
    label: 'Polish',
    nativeLabel: 'Polski',
    flag: 'PL',
    htmlLang: 'pl'
  },
  ru: {
    code: 'ru',
    base: '/ru',
    label: 'Russian',
    nativeLabel: 'Русский',
    flag: 'RU',
    htmlLang: 'ru'
  }
} as const;

export const languages = {
  english: {
    slug: 'english',
    name: 'English',
    flag: '🇬🇧',
    displayName: {
      en: 'English',
      pl: 'Angielski',
      nl: 'Engels',
      ru: 'Английский',
      it: 'Inglese',
      es: 'Inglés',
      de: 'Englisch'
    },
    localName: {
      en: 'English',
      pl: 'angielskiego',
      nl: 'Engels',
      ru: 'английский',
      it: 'inglese',
      es: 'inglés',
      de: 'Englisch'
    },
    vocabPhrase: {
      en: 'English vocabulary',
      pl: 'słownictwa angielskiego',
      nl: 'Engelse woordenschat',
      ru: 'английские слова',
      it: 'vocabolario inglese',
      es: 'vocabulario inglés',
      de: 'englischer Wortschatz'
    },
    learners: {
      en: 'non-native speakers building everyday, academic, or professional English vocabulary',
      pl: 'osobach uczących się języka angielskiego na potrzeby pracy, studiów oraz codziennego czytania',
      nl: 'iedereen die de Engelse woordenschat wil opbouwen voor werk, studie of dagelijks lezen',
      ru: 'тех, кто учит английскую лексику для работы, учёбы или чтения литературы в оригинале',
      it: 'chi studia l\'inglese per il lavoro, lo studio o la lettura quotidiana',
      es: 'quienes aprenden inglés para el trabajo, los estudios o la lectura diaria',
      de: 'alle, die ihren englischen Wortschatz für Beruf, Studium oder das tägliche Lesen aufbauen wollen'
    },
    examples: ['approach', 'reliable', 'evidence']
  },
  dutch: {
    slug: 'dutch',
    name: 'Dutch',
    flag: '🇳🇱',
    displayName: {
      en: 'Dutch',
      pl: 'Niderlandzki',
      nl: 'Nederlands',
      ru: 'Нидерландский',
      it: 'Olandese',
      es: 'Neerlandés',
      de: 'Niederländisch'
    },
    localName: {
      en: 'Dutch',
      pl: 'niderlandzkiego',
      nl: 'Nederlands',
      ru: 'нидерландский',
      it: 'olandese',
      es: 'neerlandés',
      de: 'Niederländisch'
    },
    vocabPhrase: {
      en: 'Dutch vocabulary',
      pl: 'słownictwa niderlandzkiego',
      nl: 'Nederlandse woordenschat',
      ru: 'нидерландские слова',
      it: 'vocabolario olandese',
      es: 'vocabulario neerlandés',
      de: 'niederländischer Wortschatz'
    },
    learners: {
      en: 'Dutch learners, NT2 students, and people living or working in the Netherlands or Belgium',
      pl: 'osobach uczących się języka niderlandzkiego na potrzeby codziennego życia, pracy lub przygotowujących się do egzaminów NT2',
      nl: 'NT2-leerders, expats en iedereen die de Nederlandse woordenschat doelgericht wil oefenen',
      ru: 'студентов курсов NT2, экспатов и всех, кто учит нидерландскую лексику для жизни и работы в стране',
      it: 'chi studia l\'olandese, gli studenti NT2 e chi vive o lavora nei Paesi Bassi o in Belgio',
      es: 'quienes aprenden neerlandés, los estudiantes de NT2 y quienes viven o trabajan en los Países Bajos o Bélgica',
      de: 'Niederländischlernende, NT2-Teilnehmende und alle, die in den Niederlanden oder Belgien leben oder arbeiten'
    },
    examples: ['afspraak', 'duidelijk', 'omgeving']
  },
  polish: {
    slug: 'polish',
    name: 'Polish',
    flag: '🇵🇱',
    displayName: {
      en: 'Polish',
      pl: 'Polski',
      nl: 'Pools',
      ru: 'Польский',
      it: 'Polacco',
      es: 'Polaco',
      de: 'Polnisch'
    },
    localName: {
      en: 'Polish',
      pl: 'polskiego',
      nl: 'Pools',
      ru: 'польский',
      it: 'polacco',
      es: 'polaco',
      de: 'Polnisch'
    },
    vocabPhrase: {
      en: 'Polish vocabulary',
      pl: 'słownictwa polskiego',
      nl: 'Poolse woordenschat',
      ru: 'польские слова',
      it: 'vocabolario polacco',
      es: 'vocabulario polaco',
      de: 'polnischer Wortschatz'
    },
    learners: {
      en: 'Polish learners, heritage speakers, and students preparing for language exams',
      pl: 'uczniach, studentach oraz wszystkich tych, którzy chcą świadomie i precyzyjnie poszerzać swój zasób słownictwa w języku polskim',
      nl: 'mensen die Pools leren, erfgoedsprekers (heritage speakers) en studenten die hun actieve woordenschat willen versterken',
      ru: 'тех, кто учит польский язык, а также для билингвов и студентов, которые готовятся к сдаче языковых экзаменов',
      it: 'chi studia il polacco, i parlanti di origine e gli studenti che si preparano agli esami di lingua',
      es: 'quienes aprenden polaco, los hablantes de herencia y los estudiantes que se preparan para exámenes de idioma',
      de: 'Polnischlernende, Herkunftssprecher und alle, die sich auf Sprachprüfungen vorbereiten'
    },
    examples: ['znaczenie', 'wymagać', 'przykład']
  },
  russian: {
    slug: 'russian',
    name: 'Russian',
    flag: '🇷🇺',
    displayName: {
      en: 'Russian',
      pl: 'Rosyjski',
      nl: 'Russisch',
      ru: 'Русский',
      it: 'Russo',
      es: 'Ruso',
      de: 'Russisch'
    },
    localName: {
      en: 'Russian',
      pl: 'rosyjskiego',
      nl: 'Russisch',
      ru: 'русский',
      it: 'russo',
      es: 'ruso',
      de: 'Russisch'
    },
    vocabPhrase: {
      en: 'Russian vocabulary',
      pl: 'słownictwa rosyjskiego',
      nl: 'Russische woordenschat',
      ru: 'русские слова',
      it: 'vocabolario russo',
      es: 'vocabulario ruso',
      de: 'russischer Wortschatz'
    },
    learners: {
      en: 'Russian learners and native speakers who want richer, more precise vocabulary',
      pl: 'osobach uczących się języka rosyjskiego oraz rodzimych użytkownikach (native speakerach), którzy chcą rozwijać bardziej precyzyjne i zaawansowane słownictwo',
      nl: 'iedereen die Russisch leert en voor moedertaalsprekers die een preciezere of geavanceerdere woordenschat willen opbouwen',
      ru: 'тех, кто изучает русский язык как иностранный, а также для носителей языка, желающих расширить свой активный словарный запас',
      it: 'chi studia il russo e i madrelingua che desiderano un vocabolario più ricco e preciso',
      es: 'quienes aprenden ruso y los hablantes nativos que quieren un vocabulario más rico y preciso',
      de: 'Russischlernende und Muttersprachler, die einen reicheren, präziseren Wortschatz aufbauen möchten'
    },
    examples: ['смысл', 'пример', 'точный']
  }
} as const;

// Languages that definitions + example sentences are translated into, shown in
// the "Every meaning, in your language" band on each /learn page. Names are
// localised to the page's own locale (SEO: single-language content signal).
// `exclude` drops the band entry that matches the page's own learn language.
export const translationLanguages = [
  { code: 'DE', name: { en: 'German', pl: 'Niemiecki', nl: 'Duits', ru: 'Немецкий', it: 'Tedesco', es: 'Alemán', de: 'Deutsch' } },
  { code: 'EN', exclude: 'english', name: { en: 'English', pl: 'Angielski', nl: 'Engels', ru: 'Английский', it: 'Inglese', es: 'Inglés', de: 'Englisch' } },
  { code: 'ES', name: { en: 'Spanish', pl: 'Hiszpański', nl: 'Spaans', ru: 'Испанский', it: 'Spagnolo', es: 'Español', de: 'Spanisch' } },
  { code: 'FR', name: { en: 'French', pl: 'Francuski', nl: 'Frans', ru: 'Французский', it: 'Francese', es: 'Francés', de: 'Französisch' } },
  { code: 'IT', name: { en: 'Italian', pl: 'Włoski', nl: 'Italiaans', ru: 'Итальянский', it: 'Italiano', es: 'Italiano', de: 'Italienisch' } },
  { code: 'NL', exclude: 'dutch', name: { en: 'Dutch', pl: 'Niderlandzki', nl: 'Nederlands', ru: 'Нидерландский', it: 'Olandese', es: 'Neerlandés', de: 'Niederländisch' } },
  { code: 'PL', exclude: 'polish', name: { en: 'Polish', pl: 'Polski', nl: 'Pools', ru: 'Польский', it: 'Polacco', es: 'Polaco', de: 'Polnisch' } },
  { code: 'TR', name: { en: 'Turkish', pl: 'Turecki', nl: 'Turks', ru: 'Турецкий', it: 'Turco', es: 'Turco', de: 'Türkisch' } },
  { code: 'CS', name: { en: 'Czech', pl: 'Czeski', nl: 'Tsjechisch', ru: 'Чешский', it: 'Ceco', es: 'Checo', de: 'Tschechisch' } },
  { code: 'RU', exclude: 'russian', name: { en: 'Russian', pl: 'Rosyjski', nl: 'Russisch', ru: 'Русский', it: 'Russo', es: 'Ruso', de: 'Russisch' } }
] as const;

export type LocaleCode = keyof typeof locales;
export type LanguageSlug = keyof typeof languages;

export const localeCodes = Object.keys(locales) as LocaleCode[];
export const languageSlugs = Object.keys(languages) as LanguageSlug[];

export function localizePath(locale: LocaleCode, path = '/') {
  const cleanPath = path === '/' ? '' : path.replace(/\/$/, '');
  const base = locales[locale].base;
  const full = `${base}${cleanPath}`;
  return full === '' ? '/' : `${full}/`;
}

export function absoluteUrl(path = '/') {
  return `${site.origin}${path}`;
}

export function alternateLinks(path = '/') {
  return localeCodes.map((locale) => ({
    lang: locale,
    href: absoluteUrl(localizePath(locale, path))
  }));
}

// Indexable pages that exist only in English (no locale variants), so they get a
// self-canonical and a bare sitemap entry — no hreflang alternates.
export const standalonePaths = ['/about/'];

export function allIndexablePaths() {
  const paths = ['/'];

  for (const lang of languageSlugs) {
    paths.push(`/learn/${lang}/`);
  }

  for (const locale of localeCodes.filter((code) => code !== 'en')) {
    paths.push(localizePath(locale, '/'));
    for (const lang of languageSlugs) {
      paths.push(localizePath(locale, `/learn/${lang}`));
    }
  }

  return paths;
}
