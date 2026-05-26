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
  pl: {
    code: 'pl',
    base: '/pl',
    label: 'Polish',
    nativeLabel: 'Polski',
    flag: 'PL',
    htmlLang: 'pl'
  },
  nl: {
    code: 'nl',
    base: '/nl',
    label: 'Dutch',
    nativeLabel: 'Nederlands',
    flag: 'NL',
    htmlLang: 'nl'
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
    displayName: {
      en: 'English',
      pl: 'Angielski',
      nl: 'Engels',
      ru: 'Английский'
    },
    localName: {
      en: 'English',
      pl: 'angielskiego',
      nl: 'Engels',
      ru: 'английский'
    },
    vocabPhrase: {
      en: 'English vocabulary',
      pl: 'słownictwa angielskiego',
      nl: 'Engelse woordenschat',
      ru: 'английские слова'
    },
    learners: {
      en: 'non-native speakers building everyday, academic, or professional English vocabulary',
      pl: 'osób uczących się angielskiego do pracy, nauki i codziennego czytania',
      nl: 'niet-moedertaalsprekers die Engelse woordenschat voor werk, studie of dagelijks lezen opbouwen',
      ru: 'тех, кто учит английскую лексику для учебы, работы и чтения'
    },
    examples: ['approach', 'reliable', 'evidence']
  },
  dutch: {
    slug: 'dutch',
    name: 'Dutch',
    displayName: {
      en: 'Dutch',
      pl: 'Niderlandzki',
      nl: 'Nederlands',
      ru: 'Нидерландский'
    },
    localName: {
      en: 'Dutch',
      pl: 'niderlandzkiego',
      nl: 'Nederlands',
      ru: 'нидерландский'
    },
    vocabPhrase: {
      en: 'Dutch vocabulary',
      pl: 'słownictwa niderlandzkiego',
      nl: 'Nederlandse woordenschat',
      ru: 'нидерландские слова'
    },
    learners: {
      en: 'Dutch learners, NT2 students, and people living or working in the Netherlands or Belgium',
      pl: 'osób uczących się niderlandzkiego do życia, pracy lub egzaminów NT2',
      nl: 'NT2-leerders, expats en iedereen die Nederlandse woordenschat doelgericht wil oefenen',
      ru: 'студентов NT2, экспатов и всех, кто учит нидерландскую лексику для жизни и работы'
    },
    examples: ['afspraak', 'duidelijk', 'omgeving']
  },
  polish: {
    slug: 'polish',
    name: 'Polish',
    displayName: {
      en: 'Polish',
      pl: 'Polski',
      nl: 'Pools',
      ru: 'Польский'
    },
    localName: {
      en: 'Polish',
      pl: 'polskiego',
      nl: 'Pools',
      ru: 'польский'
    },
    vocabPhrase: {
      en: 'Polish vocabulary',
      pl: 'słownictwa polskiego',
      nl: 'Poolse woordenschat',
      ru: 'польские слова'
    },
    learners: {
      en: 'Polish learners, heritage speakers, and students preparing for language exams',
      pl: 'uczniów, studentów i osób, które chcą świadomie poszerzać słownictwo po polsku',
      nl: 'mensen die Pools leren, erfgoedsprekers en studenten die hun woordenschat willen versterken',
      ru: 'изучающих польский, билингвов и студентов, которые готовятся к экзаменам'
    },
    examples: ['znaczenie', 'wymagać', 'przykład']
  },
  russian: {
    slug: 'russian',
    name: 'Russian',
    displayName: {
      en: 'Russian',
      pl: 'Rosyjski',
      nl: 'Russisch',
      ru: 'Русский'
    },
    localName: {
      en: 'Russian',
      pl: 'rosyjskiego',
      nl: 'Russisch',
      ru: 'русский'
    },
    vocabPhrase: {
      en: 'Russian vocabulary',
      pl: 'słownictwa rosyjskiego',
      nl: 'Russische woordenschat',
      ru: 'русские слова'
    },
    learners: {
      en: 'Russian learners and native speakers who want richer, more precise vocabulary',
      pl: 'osób uczących się rosyjskiego oraz rodzimych użytkowników języka rozwijających precyzyjne słownictwo',
      nl: 'Russischleerders en moedertaalsprekers die preciezere woordenschat willen opbouwen',
      ru: 'изучающих русский и носителей, которые хотят расширять активный словарь'
    },
    examples: ['смысл', 'пример', 'точный']
  }
} as const;

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
