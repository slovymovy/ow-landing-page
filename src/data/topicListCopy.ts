import type { LocaleCode } from './site';

// Per-topic-list title + subtitle, per interface locale.
// en/ru/nl/pl come from the source content files; de/es/fr/it/cs/tr are Claude
// drafts pending the user's native-review pass (added list by list).
export interface TopicListCopy {
  title: Record<LocaleCode, string>;
  subtitle: Record<LocaleCode, string>;
}

export const topicListCopy: Record<string, TopicListCopy> = {
  'football-vocabulary': {
    title: {
      en: 'Football',
      ru: 'Футбол',
      nl: 'Voetbal',
      pl: 'Piłka nożna',
      de: 'Fußball',
      es: 'Fútbol',
      fr: 'Football',
      it: 'Calcio',
      cs: 'Fotbal',
      tr: 'Futbol'
    },
    subtitle: {
      en: 'The words that make watching football more fun.',
      ru: 'Слова, которые сделают просмотр футбола ещё интереснее.',
      nl: 'De woorden die voetbal kijken nog leuker maken.',
      pl: 'Słowa, które umilą oglądanie piłki nożnej.',
      de: 'Die Wörter, die das Fußballschauen noch unterhaltsamer machen.',
      es: 'Las palabras que hacen más divertido ver el fútbol.',
      fr: 'Les mots qui rendent le football encore plus agréable à regarder.',
      it: 'Le parole che rendono più divertente guardare il calcio.',
      cs: 'Slova, díky kterým bude sledování fotbalu ještě zábavnější.',
      tr: 'Futbol izlemeyi daha keyifli hâle getiren kelimeler.'
    }
  },

  'travel-vocabulary': {
    title: {
      en: 'Travel Essentials',
      ru: 'В дорогу!',
      nl: 'Op reis',
      pl: 'W podróży',
      de: 'Auf Reisen',
      es: 'De viaje',
      fr: 'En voyage',
      it: 'In viaggio',
      cs: 'Na cestách',
      tr: 'Seyahatte'
    },
    subtitle: {
      en: 'Navigate airports, transport, and accommodation with confidence.',
      ru: 'Всё необходимое для навигации в аэропортах, транспорте и отелях.',
      nl: 'Vind moeiteloos je weg op vliegvelden, in het OV en bij accommodaties.',
      pl: 'Słownictwo ułatwiające poruszanie się po lotniskach, dworcach i hotelach.',
      de: 'Finde dich an Flughäfen, in Verkehrsmitteln und Unterkünften mühelos zurecht.',
      es: 'Muévete con confianza por aeropuertos, transportes y alojamientos.',
      fr: 'Circulez en toute confiance dans les aéroports, les transports et les hébergements.',
      it: 'Muoviti con sicurezza tra aeroporti, trasporti e alloggi.',
      cs: 'Zorientujte se s jistotou na letištích, v dopravě i v ubytování.',
      tr: 'Havaalanlarında, ulaşımda ve konaklamada kendinden emin şekilde yolunu bul.'
    }
  },

  'work-vocabulary': {
    title: {
      en: 'At Work',
      ru: 'На работе',
      nl: 'Op de werkvloer',
      pl: 'W pracy',
      de: 'Bei der Arbeit',
      es: 'En el trabajo',
      fr: 'Au travail',
      it: 'Al lavoro',
      cs: 'V práci',
      tr: 'İş yerinde'
    },
    subtitle: {
      en: 'Vocabulary for daily tasks, meetings, and workplace communication.',
      ru: 'Лексика для повседневных задач, совещаний и общения с коллегами.',
      nl: "Woordenschat voor dagelijkse taken, meetings en communicatie met collega's.",
      pl: 'Słownictwo przydatne w codziennych zadaniach, na spotkaniach i w biurze.',
      de: 'Wortschatz für alltägliche Aufgaben, Meetings und die Kommunikation im Job.',
      es: 'Vocabulario para las tareas diarias, las reuniones y la comunicación en el trabajo.',
      fr: 'Le vocabulaire des tâches quotidiennes, des réunions et de la communication au travail.',
      it: 'Il vocabolario per le attività quotidiane, le riunioni e la comunicazione sul lavoro.',
      cs: 'Slovní zásoba pro každodenní úkoly, porady a komunikaci na pracovišti.',
      tr: 'Günlük görevler, toplantılar ve iş yerindeki iletişim için kelimeler.'
    }
  },

  'harry-potter-vocabulary': {
    title: {
      en: 'Watching Harry Potter',
      ru: 'Смотрим «Гарри Поттера»',
      nl: 'Harry Potter kijken',
      pl: "Oglądamy Harry'ego Pottera",
      de: 'Harry Potter schauen',
      es: 'Viendo Harry Potter',
      fr: 'En regardant Harry Potter',
      it: 'Guardando Harry Potter',
      cs: 'Sledujeme Harryho Pottera',
      tr: 'Harry Potter izlerken'
    },
    subtitle: {
      en: 'Words for wizards, spells, and magical adventures.',
      ru: 'Лексика о волшебниках, заклинаниях и магических приключениях.',
      nl: 'Woorden voor tovenaars, spreuken en magische avonturen.',
      pl: 'Słówka dla czarodziejów: zaklęcia, magia i Hogwart.',
      de: 'Wörter für Zauberer, Zaubersprüche und magische Abenteuer.',
      es: 'Palabras sobre magos, hechizos y aventuras mágicas.',
      fr: 'Des mots pour les sorciers, les sortilèges et les aventures magiques.',
      it: 'Parole per maghi, incantesimi e avventure magiche.',
      cs: 'Slovíčka o kouzelnících, kouzlech a magických dobrodružstvích.',
      tr: 'Büyücüler, büyüler ve sihirli maceralar için kelimeler.'
    }
  },

  'cooking-vocabulary': {
    title: {
      en: 'In the Kitchen',
      ru: 'На кухне',
      nl: 'In de keuken',
      pl: 'W kuchni',
      de: 'In der Küche',
      es: 'En la cocina',
      fr: 'Dans la cuisine',
      it: 'In cucina',
      cs: 'V kuchyni',
      tr: 'Mutfakta'
    },
    subtitle: {
      en: 'Ingredients, cooking techniques, and essential kitchen tools.',
      ru: 'Ингредиенты, кулинарные техники и кухонная утварь.',
      nl: 'Ingrediënten, kooktechnieken en onmisbaar keukengerei.',
      pl: 'Składniki, techniki kulinarne i niezbędne przybory kuchenne.',
      de: 'Zutaten, Kochtechniken und unverzichtbare Küchenhelfer.',
      es: 'Ingredientes, técnicas de cocina y utensilios básicos.',
      fr: 'Ingrédients, techniques de cuisine et ustensiles indispensables.',
      it: 'Ingredienti, tecniche di cottura e utensili da cucina indispensabili.',
      cs: 'Suroviny, kuchařské techniky a nezbytné kuchyňské náčiní.',
      tr: 'Malzemeler, pişirme teknikleri ve temel mutfak gereçleri.'
    }
  }
};
