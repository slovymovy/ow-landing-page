import type { LocaleCode } from './site';

// Per-topic-list title + subtitle, per interface locale.
// Descriptive, keyword-bearing copy (for readers + SEO): the title is a clear
// noun phrase naming the topic, the subtitle says which words the list covers.
// en/nl/ru/pl are authored for review; de/es/fr/it/cs/tr are Claude drafts
// pending the user's native-review pass.
export interface TopicListCopy {
  title: Record<LocaleCode, string>;
  subtitle: Record<LocaleCode, string>;
}

export const topicListCopy: Record<string, TopicListCopy> = {
  // ── English lists ────────────────────────────────────────────────────────
  'football-vocabulary': {
    title: {
      en: 'Football Vocabulary',
      ru: 'Футбольная лексика',
      nl: 'Voetbalwoordenschat',
      pl: 'Słownictwo piłkarskie',
      de: 'Fußball-Wortschatz',
      es: 'Vocabulario de fútbol',
      fr: 'Vocabulaire du football',
      it: 'Vocabolario del calcio',
      cs: 'Fotbalová slovní zásoba',
      tr: 'Futbol Kelimeleri'
    },
    subtitle: {
      en: 'The English words for matches, players, positions, and tactics — everything you need to follow a game and talk about it.',
      ru: 'Английские слова о матчах, игроках, позициях и тактике — всё, чтобы следить за игрой и обсуждать её.',
      nl: 'De Engelse woorden voor wedstrijden, spelers, posities en tactiek — alles om een wedstrijd te volgen en erover te praten.',
      pl: 'Angielskie słowa dotyczące meczów, zawodników, pozycji i taktyki — wszystko, by śledzić grę i o niej rozmawiać.',
      de: 'Die englischen Wörter für Spiele, Spieler, Positionen und Taktik – alles, um ein Spiel zu verfolgen und darüber zu sprechen.',
      es: 'Las palabras en inglés para partidos, jugadores, posiciones y tácticas: todo para seguir un partido y hablar de él.',
      fr: 'Les mots anglais pour les matchs, les joueurs, les postes et les tactiques : tout pour suivre un match et en parler.',
      it: 'Le parole inglesi per partite, giocatori, ruoli e tattiche: tutto ciò che serve per seguire una partita e parlarne.',
      cs: 'Anglická slova pro zápasy, hráče, pozice a taktiku – vše, co potřebujete ke sledování zápasu a povídání o něm.',
      tr: 'Maçlar, oyuncular, pozisyonlar ve taktikler için İngilizce kelimeler — bir maçı takip etmek ve konuşmak için ihtiyacın olan her şey.'
    }
  },

  'travel-vocabulary': {
    title: {
      en: 'Travel Vocabulary',
      ru: 'Лексика для путешествий',
      nl: 'Reiswoordenschat',
      pl: 'Słownictwo podróżnicze',
      de: 'Reise-Wortschatz',
      es: 'Vocabulario de viajes',
      fr: 'Vocabulaire de voyage',
      it: 'Vocabolario di viaggio',
      cs: 'Cestovní slovní zásoba',
      tr: 'Seyahat Kelimeleri'
    },
    subtitle: {
      en: "The essential English words for airports, transport, hotels, and directions — everything you need to get around on a trip.",
      ru: 'Основные английские слова для аэропортов, транспорта, отелей и ориентирования — всё, чтобы не растеряться в поездке.',
      nl: 'De belangrijkste Engelse woorden voor vliegvelden, vervoer, hotels en de weg vragen — alles om je op reis te redden.',
      pl: 'Najważniejsze angielskie słowa na lotniska, transport, hotele i pytanie o drogę — wszystko, by poradzić sobie w podróży.',
      de: 'Die wichtigsten englischen Wörter für Flughäfen, Verkehrsmittel, Hotels und Wegbeschreibungen – alles, um auf Reisen zurechtzukommen.',
      es: 'Las palabras esenciales en inglés para aeropuertos, transporte, hoteles e indicaciones: todo para moverte en un viaje.',
      fr: "Les mots anglais essentiels pour les aéroports, les transports, les hôtels et l'orientation : tout pour se débrouiller en voyage.",
      it: 'Le parole inglesi essenziali per aeroporti, trasporti, hotel e indicazioni: tutto per muoverti in viaggio.',
      cs: 'Nejdůležitější anglická slova pro letiště, dopravu, hotely a hledání cesty – vše, co se vám na cestách hodí.',
      tr: 'Havaalanları, ulaşım, oteller ve yol tarifi için temel İngilizce kelimeler — seyahatte yolunu bulmak için ihtiyacın olan her şey.'
    }
  },

  'work-vocabulary': {
    title: {
      en: 'Workplace Vocabulary',
      ru: 'Лексика для работы',
      nl: 'Woordenschat voor werk',
      pl: 'Słownictwo w pracy',
      de: 'Wortschatz für den Beruf',
      es: 'Vocabulario del trabajo',
      fr: 'Vocabulaire professionnel',
      it: 'Vocabolario del lavoro',
      cs: 'Slovní zásoba do práce',
      tr: 'İş Yeri Kelimeleri'
    },
    subtitle: {
      en: 'The English words for meetings, emails, and everyday office tasks — practical vocabulary for the workplace.',
      ru: 'Английские слова для совещаний, электронной почты и повседневных офисных задач — практичная лексика для работы.',
      nl: 'De Engelse woorden voor vergaderingen, e-mails en dagelijkse kantoortaken — praktische woordenschat voor op het werk.',
      pl: 'Angielskie słowa na spotkania, e-maile i codzienne zadania w biurze — praktyczne słownictwo do pracy.',
      de: 'Die englischen Wörter für Meetings, E-Mails und alltägliche Büroaufgaben – praktischer Wortschatz für den Job.',
      es: 'Las palabras en inglés para reuniones, correos y tareas de oficina: vocabulario práctico para el trabajo.',
      fr: 'Les mots anglais pour les réunions, les e-mails et les tâches de bureau : un vocabulaire pratique pour le travail.',
      it: "Le parole inglesi per riunioni, e-mail e attività d'ufficio: vocabolario pratico per il lavoro.",
      cs: 'Anglická slova pro porady, e-maily a běžné kancelářské úkoly – praktická slovní zásoba do práce.',
      tr: 'Toplantılar, e-postalar ve günlük ofis işleri için İngilizce kelimeler — iş yeri için pratik kelimeler.'
    }
  },

  'harry-potter-vocabulary': {
    title: {
      en: 'Harry Potter Vocabulary',
      ru: 'Лексика «Гарри Поттера»',
      nl: 'Harry Potter-woordenschat',
      pl: "Słownictwo z Harry'ego Pottera",
      de: 'Harry-Potter-Wortschatz',
      es: 'Vocabulario de Harry Potter',
      fr: 'Vocabulaire de Harry Potter',
      it: 'Vocabolario di Harry Potter',
      cs: 'Slovní zásoba z Harryho Pottera',
      tr: 'Harry Potter Kelimeleri'
    },
    subtitle: {
      en: 'The English words and terms from the world of Harry Potter — vocabulary to read the books and enjoy the story.',
      ru: 'Английские слова и термины из мира «Гарри Поттера» — лексика, чтобы читать книги в оригинале и наслаждаться историей.',
      nl: 'De Engelse woorden en termen uit de wereld van Harry Potter — woordenschat om de boeken te lezen en van het verhaal te genieten.',
      pl: "Angielskie słowa i terminy ze świata Harry'ego Pottera — słownictwo, by czytać książki w oryginale i cieszyć się historią.",
      de: 'Die englischen Wörter und Begriffe aus der Welt von Harry Potter – Wortschatz, um die Bücher zu lesen und die Geschichte zu genießen.',
      es: 'Las palabras y los términos en inglés del mundo de Harry Potter: vocabulario para leer los libros y disfrutar de la historia.',
      fr: "Les mots et termes anglais de l'univers de Harry Potter : le vocabulaire pour lire les livres et savourer l'histoire.",
      it: 'Le parole e i termini inglesi del mondo di Harry Potter: il vocabolario per leggere i libri e goderti la storia.',
      cs: 'Anglická slova a termíny ze světa Harryho Pottera – slovní zásoba, abyste si přečetli knihy v originále a užili si příběh.',
      tr: 'Harry Potter dünyasından İngilizce kelimeler ve terimler — kitapları okumak ve hikâyenin tadını çıkarmak için kelimeler.'
    }
  },

  'cooking-vocabulary': {
    title: {
      en: 'Cooking Vocabulary',
      ru: 'Кулинарная лексика',
      nl: 'Kookwoordenschat',
      pl: 'Słownictwo kulinarne',
      de: 'Koch-Wortschatz',
      es: 'Vocabulario de cocina',
      fr: 'Vocabulaire de cuisine',
      it: 'Vocabolario di cucina',
      cs: 'Kuchařská slovní zásoba',
      tr: 'Mutfak Kelimeleri'
    },
    subtitle: {
      en: 'The English words for ingredients, cooking methods, and kitchen equipment — vocabulary for recipes and the kitchen.',
      ru: 'Английские слова для ингредиентов, способов приготовления и кухонной утвари — лексика для рецептов и кухни.',
      nl: 'De Engelse woorden voor ingrediënten, bereidingswijzen en keukengerei — woordenschat voor recepten en de keuken.',
      pl: 'Angielskie słowa dotyczące składników, technik gotowania i sprzętu kuchennego — słownictwo do przepisów i kuchni.',
      de: 'Die englischen Wörter für Zutaten, Zubereitungsarten und Küchengeräte – Wortschatz für Rezepte und die Küche.',
      es: 'Las palabras en inglés para ingredientes, técnicas de cocina y utensilios: vocabulario para recetas y la cocina.',
      fr: 'Les mots anglais pour les ingrédients, les techniques de cuisson et les ustensiles : le vocabulaire des recettes et de la cuisine.',
      it: 'Le parole inglesi per ingredienti, tecniche di cottura e utensili: il vocabolario per le ricette e la cucina.',
      cs: 'Anglická slova pro suroviny, způsoby přípravy a kuchyňské náčiní – slovní zásoba pro recepty a kuchyni.',
      tr: 'Malzemeler, pişirme yöntemleri ve mutfak gereçleri için İngilizce kelimeler — tarifler ve mutfak için kelimeler.'
    }
  },

  // ── Dutch lists ──────────────────────────────────────────────────────────
  // NOTE: the Dutch `500-most-common` list is rendered as the core frequency list
  // (topic:false), so its copy lives in wordListCopyNl (bespoke fields), not here.
  'just-arrived': {
    title: {
      en: 'Survival Vocabulary for Newcomers',
      nl: 'Overlevingswoordenschat voor nieuwkomers',
      ru: 'Лексика для новоприбывших',
      pl: 'Słownictwo przetrwania dla nowo przybyłych',
      de: 'Überlebens-Wortschatz für Neuankömmlinge',
      es: 'Vocabulario de supervivencia para recién llegados',
      fr: 'Vocabulaire de survie pour les nouveaux arrivants',
      it: 'Vocabolario di sopravvivenza per i nuovi arrivati',
      cs: 'Základní slovní zásoba pro nově příchozí',
      tr: 'Yeni Gelenler için Temel Kelimeler'
    },
    subtitle: {
      en: "The essential Dutch words you'll see on signs, doors, and machines — a survival list for your first days in the Netherlands.",
      nl: 'De belangrijkste Nederlandse woorden die je op borden, deuren en automaten ziet — een overlevingslijst voor je eerste dagen in Nederland.',
      ru: 'Основные нидерландские слова, которые вы увидите на вывесках, дверях и в автоматах, — набор для первых дней в Нидерландах.',
      pl: 'Najważniejsze niderlandzkie słowa, które zobaczysz na tablicach, drzwiach i w automatach — lista przetrwania na pierwsze dni w Niderlandach.',
      de: 'Die wichtigsten niederländischen Wörter, die du auf Schildern, Türen und Automaten siehst – eine Überlebensliste für deine ersten Tage in den Niederlanden.',
      es: 'Las palabras neerlandesas esenciales que verás en carteles, puertas y máquinas: una lista de supervivencia para tus primeros días en los Países Bajos.',
      fr: 'Les mots néerlandais essentiels que vous verrez sur les panneaux, les portes et les distributeurs : une liste de survie pour vos premiers jours aux Pays-Bas.',
      it: 'Le parole olandesi essenziali che vedrai su cartelli, porte e distributori: una lista di sopravvivenza per i tuoi primi giorni nei Paesi Bassi.',
      cs: 'Nejdůležitější nizozemská slova, která uvidíte na cedulích, dveřích a automatech – seznam pro přežití prvních dnů v Nizozemsku.',
      tr: "Tabelalarda, kapılarda ve makinelerde göreceğin temel Felemenkçe kelimeler — Hollanda'daki ilk günlerin için bir hayatta kalma listesi."
    }
  },

  'knm-exam': {
    title: {
      en: 'KNM Exam Vocabulary',
      nl: 'Woordenschat voor het KNM-examen',
      ru: 'Лексика для экзамена KNM',
      pl: 'Słownictwo do egzaminu KNM',
      de: 'Wortschatz für die KNM-Prüfung',
      es: 'Vocabulario del examen KNM',
      fr: "Vocabulaire de l'examen KNM",
      it: "Vocabolario dell'esame KNM",
      cs: 'Slovní zásoba ke zkoušce KNM',
      tr: 'KNM Sınavı Kelimeleri'
    },
    subtitle: {
      en: 'The key Dutch words for the KNM (Knowledge of Dutch Society) integration exam — the terms you need to pass.',
      nl: 'De belangrijkste Nederlandse woorden voor het KNM-examen (Kennis van de Nederlandse Maatschappij) — de begrippen die je nodig hebt om te slagen.',
      ru: 'Ключевые нидерландские слова для интеграционного экзамена KNM (Знание нидерландского общества) — термины, которые нужно знать, чтобы сдать.',
      pl: 'Kluczowe niderlandzkie słowa do egzaminu integracyjnego KNM (Znajomość społeczeństwa niderlandzkiego) — pojęcia niezbędne, by zdać.',
      de: 'Die wichtigsten niederländischen Wörter für die KNM-Prüfung (Kenntnis der niederländischen Gesellschaft) – die Begriffe, die du zum Bestehen brauchst.',
      es: 'Las palabras neerlandesas clave para el examen de integración KNM (Conocimiento de la Sociedad Neerlandesa): los términos que necesitas para aprobar.',
      fr: "Les mots néerlandais clés pour l'examen d'intégration KNM (Connaissance de la société néerlandaise) : les termes nécessaires pour réussir.",
      it: "Le parole olandesi chiave per l'esame di integrazione KNM (Conoscenza della società olandese): i termini che ti servono per superarlo.",
      cs: 'Klíčová nizozemská slova k integrační zkoušce KNM (Znalost nizozemské společnosti) – pojmy, které potřebujete ke složení.',
      tr: 'KNM (Hollanda Toplumu Bilgisi) uyum sınavı için temel Felemenkçe kelimeler — geçmek için bilmen gereken terimler.'
    }
  },

  supermarket: {
    title: {
      en: 'Supermarket & Grocery Vocabulary',
      nl: 'Woordenschat voor de supermarkt',
      ru: 'Лексика для супермаркета',
      pl: 'Słownictwo na zakupy spożywcze',
      de: 'Wortschatz für den Supermarkt',
      es: 'Vocabulario del supermercado',
      fr: 'Vocabulaire du supermarché',
      it: 'Vocabolario del supermercato',
      cs: 'Slovní zásoba do supermarketu',
      tr: 'Süpermarket Kelimeleri'
    },
    subtitle: {
      en: 'The everyday Dutch words for groceries, food, and the checkout — practical vocabulary for shopping at the supermarket.',
      nl: 'De alledaagse Nederlandse woorden voor boodschappen, eten en de kassa — praktische woordenschat om in de supermarkt te winkelen.',
      ru: 'Повседневные нидерландские слова для продуктов, еды и кассы — практичная лексика для покупок в супермаркете.',
      pl: 'Codzienne niderlandzkie słowa dotyczące produktów, jedzenia i kasy — praktyczne słownictwo na zakupy w supermarkecie.',
      de: 'Die alltäglichen niederländischen Wörter für Lebensmittel, Essen und die Kasse – praktischer Wortschatz für den Einkauf im Supermarkt.',
      es: 'Las palabras neerlandesas cotidianas para la compra, la comida y la caja: vocabulario práctico para comprar en el supermercado.',
      fr: 'Les mots néerlandais du quotidien pour les courses, la nourriture et la caisse : un vocabulaire pratique pour faire ses courses au supermarché.',
      it: 'Le parole olandesi di tutti i giorni per la spesa, il cibo e la cassa: vocabolario pratico per fare acquisti al supermercato.',
      cs: 'Každodenní nizozemská slova pro potraviny, jídlo a pokladnu – praktická slovní zásoba na nákupy v supermarketu.',
      tr: 'Ürünler, yiyecek ve kasa için günlük Felemenkçe kelimeler — süpermarkette alışveriş için pratik kelimeler.'
    }
  },

  'at-the-doctor': {
    title: {
      en: "Doctor's Visit Vocabulary",
      nl: 'Woordenschat voor de huisarts',
      ru: 'Лексика для визита к врачу',
      pl: 'Słownictwo na wizytę u lekarza',
      de: 'Wortschatz für den Arztbesuch',
      es: 'Vocabulario para la consulta médica',
      fr: 'Vocabulaire pour la consultation médicale',
      it: 'Vocabolario per la visita medica',
      cs: 'Slovní zásoba k návštěvě lékaře',
      tr: 'Doktor Ziyareti Kelimeleri'
    },
    subtitle: {
      en: "The Dutch words for the doctor's office, symptoms, and the pharmacy — how to describe how you feel and understand the advice.",
      nl: 'De Nederlandse woorden voor de huisartsenpraktijk, klachten en de apotheek — hoe je omschrijft hoe je je voelt en het advies begrijpt.',
      ru: 'Нидерландские слова для приёма у врача, симптомов и аптеки — как описать самочувствие и понять рекомендации.',
      pl: 'Niderlandzkie słowa na wizytę u lekarza, objawy i aptekę — jak opisać samopoczucie i zrozumieć zalecenia.',
      de: 'Die niederländischen Wörter für die Arztpraxis, Beschwerden und die Apotheke – wie du beschreibst, wie du dich fühlst, und die Ratschläge verstehst.',
      es: 'Las palabras neerlandesas para la consulta del médico, los síntomas y la farmacia: cómo describir cómo te sientes y entender los consejos.',
      fr: 'Les mots néerlandais pour le cabinet médical, les symptômes et la pharmacie : comment décrire ce que vous ressentez et comprendre les conseils.',
      it: 'Le parole olandesi per lo studio medico, i sintomi e la farmacia: come descrivere come ti senti e capire i consigli.',
      cs: 'Nizozemská slova pro ordinaci lékaře, potíže a lékárnu – jak popsat, jak se cítíte, a porozumět radám.',
      tr: 'Doktor muayenehanesi, belirtiler ve eczane için Felemenkçe kelimeler — kendini nasıl hissettiğini anlatmak ve tavsiyeleri anlamak için.'
    }
  },

  family: {
    title: {
      en: 'Family Vocabulary',
      nl: 'Woordenschat over de familie',
      ru: 'Лексика о семье',
      pl: 'Słownictwo o rodzinie',
      de: 'Familien-Wortschatz',
      es: 'Vocabulario de la familia',
      fr: 'Vocabulaire de la famille',
      it: 'Vocabolario della famiglia',
      cs: 'Slovní zásoba o rodině',
      tr: 'Aile Kelimeleri'
    },
    subtitle: {
      en: 'The Dutch words for family members and relationships — vocabulary for talking about your family.',
      nl: 'De Nederlandse woorden voor familieleden en relaties — woordenschat om over je familie te praten.',
      ru: 'Нидерландские слова для членов семьи и родственных связей — лексика, чтобы говорить о своей семье.',
      pl: 'Niderlandzkie słowa dotyczące członków rodziny i relacji — słownictwo, by rozmawiać o swojej rodzinie.',
      de: 'Die niederländischen Wörter für Familienmitglieder und Beziehungen – Wortschatz, um über deine Familie zu sprechen.',
      es: 'Las palabras neerlandesas para los miembros de la familia y las relaciones: vocabulario para hablar de tu familia.',
      fr: 'Les mots néerlandais pour les membres de la famille et les relations : le vocabulaire pour parler de votre famille.',
      it: 'Le parole olandesi per i familiari e le relazioni: vocabolario per parlare della tua famiglia.',
      cs: 'Nizozemská slova pro členy rodiny a vztahy – slovní zásoba, abyste mluvili o své rodině.',
      tr: 'Aile üyeleri ve ilişkiler için Felemenkçe kelimeler — ailen hakkında konuşmak için kelimeler.'
    }
  }
};
