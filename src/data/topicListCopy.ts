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
  },

  // ── Russian lists ────────────────────────────────────────────────────────
  'family-and-people': {
    title: {
      en: 'Family & People Vocabulary',
      ru: 'Лексика о семье и людях',
      nl: 'Woordenschat over familie en mensen',
      pl: 'Słownictwo o rodzinie i ludziach',
      de: 'Wortschatz für Familie und Menschen',
      es: 'Vocabulario de la familia y las personas',
      fr: 'Vocabulaire de la famille et des personnes',
      it: 'Vocabolario della famiglia e delle persone',
      cs: 'Slovní zásoba o rodině a lidech',
      tr: 'Aile ve İnsan Kelimeleri'
    },
    subtitle: {
      en: 'The Russian words for family members, relationships, and describing people — vocabulary for talking about the people around you.',
      ru: 'Русские слова для членов семьи, родственных связей и описания людей — лексика, чтобы говорить о близких и окружающих.',
      nl: 'De Russische woorden voor familieleden, relaties en het beschrijven van mensen — woordenschat om over de mensen om je heen te praten.',
      pl: 'Rosyjskie słowa dotyczące członków rodziny, relacji i opisywania ludzi — słownictwo, by rozmawiać o bliskich i otoczeniu.',
      de: 'Die russischen Wörter für Familienmitglieder, Beziehungen und das Beschreiben von Menschen – Wortschatz, um über die Menschen um dich herum zu sprechen.',
      es: 'Las palabras rusas para los miembros de la familia, las relaciones y la descripción de personas: vocabulario para hablar de la gente que te rodea.',
      fr: 'Les mots russes pour les membres de la famille, les relations et la description des personnes : le vocabulaire pour parler de votre entourage.',
      it: 'Le parole russe per i familiari, le relazioni e la descrizione delle persone: vocabolario per parlare delle persone intorno a te.',
      cs: 'Ruská slova pro členy rodiny, vztahy a popisování lidí – slovní zásoba, abyste mluvili o lidech kolem sebe.',
      tr: 'Aile üyeleri, ilişkiler ve insanları tarif etmek için Rusça kelimeler — çevrendeki insanlar hakkında konuşmak için kelimeler.'
    }
  },

  'food-and-kitchen': {
    title: {
      en: 'Food & Kitchen Vocabulary',
      ru: 'Лексика о еде и кухне',
      nl: 'Woordenschat over eten en koken',
      pl: 'Słownictwo o jedzeniu i kuchni',
      de: 'Wortschatz für Essen und Küche',
      es: 'Vocabulario de la comida y la cocina',
      fr: 'Vocabulaire de la nourriture et de la cuisine',
      it: 'Vocabolario del cibo e della cucina',
      cs: 'Slovní zásoba o jídle a kuchyni',
      tr: 'Yemek ve Mutfak Kelimeleri'
    },
    subtitle: {
      en: 'The Russian words for everyday meals, drinks, kitchen objects, and simple cooking — vocabulary for the table and the kitchen.',
      ru: 'Русские слова для повседневной еды, напитков, кухонных предметов и простой готовки — лексика для стола и кухни.',
      nl: 'De Russische woorden voor alledaagse maaltijden, dranken, keukenspullen en eenvoudig koken — woordenschat voor aan tafel en in de keuken.',
      pl: 'Rosyjskie słowa dotyczące codziennych posiłków, napojów, przedmiotów kuchennych i prostego gotowania — słownictwo przydatne przy stole i w kuchni.',
      de: 'Die russischen Wörter für alltägliche Mahlzeiten, Getränke, Küchengegenstände und einfaches Kochen – Wortschatz für den Tisch und die Küche.',
      es: 'Las palabras rusas para las comidas diarias, las bebidas, los utensilios de cocina y la cocina sencilla: vocabulario para la mesa y la cocina.',
      fr: 'Les mots russes pour les repas du quotidien, les boissons, les objets de cuisine et la cuisine simple : le vocabulaire de la table et de la cuisine.',
      it: 'Le parole russe per i pasti di tutti i giorni, le bevande, gli oggetti da cucina e la cucina semplice: vocabolario per la tavola e la cucina.',
      cs: 'Ruská slova pro každodenní jídla, nápoje, kuchyňské předměty a jednoduché vaření – slovní zásoba ke stolu i do kuchyně.',
      tr: 'Günlük yemekler, içecekler, mutfak eşyaları ve basit yemek pişirme için Rusça kelimeler — sofra ve mutfak için kelimeler.'
    }
  },

  'city-and-transport': {
    title: {
      en: 'City & Transport Vocabulary',
      ru: 'Лексика о городе и транспорте',
      nl: 'Woordenschat over stad en vervoer',
      pl: 'Słownictwo o mieście i transporcie',
      de: 'Wortschatz für Stadt und Verkehr',
      es: 'Vocabulario de la ciudad y el transporte',
      fr: 'Vocabulaire de la ville et des transports',
      it: 'Vocabolario della città e dei trasporti',
      cs: 'Slovní zásoba o městě a dopravě',
      tr: 'Şehir ve Ulaşım Kelimeleri'
    },
    subtitle: {
      en: 'The Russian words for public transport, city places, vehicles, and getting around — vocabulary for finding your way in the city.',
      ru: 'Русские слова для общественного транспорта, городских мест и передвижения — лексика, чтобы ориентироваться в городе.',
      nl: 'De Russische woorden voor het openbaar vervoer, plekken in de stad, voertuigen en de weg vinden — woordenschat om je in de stad te redden.',
      pl: 'Rosyjskie słowa dotyczące transportu publicznego, miejsc w mieście, pojazdów i poruszania się — słownictwo, by odnaleźć się w mieście.',
      de: 'Die russischen Wörter für öffentliche Verkehrsmittel, Orte in der Stadt, Fahrzeuge und Wegbeschreibungen – Wortschatz, um dich in der Stadt zurechtzufinden.',
      es: 'Las palabras rusas para el transporte público, los lugares de la ciudad, los vehículos y los desplazamientos: vocabulario para moverte por la ciudad.',
      fr: 'Les mots russes pour les transports en commun, les lieux de la ville, les véhicules et les déplacements : le vocabulaire pour vous repérer en ville.',
      it: 'Le parole russe per i mezzi pubblici, i luoghi della città, i veicoli e gli spostamenti: vocabolario per orientarti in città.',
      cs: 'Ruská slova pro veřejnou dopravu, místa ve městě a dopravní prostředky – slovní zásoba, abyste se ve městě neztratili.',
      tr: 'Toplu taşıma, şehirdeki yerler, taşıtlar ve yol bulma için Rusça kelimeler — şehirde yolunu bulmak için kelimeler.'
    }
  },

  'home-and-housing': {
    title: {
      en: 'House & Home Vocabulary',
      ru: 'Лексика о доме и жилье',
      nl: 'Woordenschat over huis en wonen',
      pl: 'Słownictwo o domu i mieszkaniu',
      de: 'Wortschatz für Haus und Wohnung',
      es: 'Vocabulario de la casa y el hogar',
      fr: 'Vocabulaire de la maison et du logement',
      it: 'Vocabolario della casa',
      cs: 'Slovní zásoba o domě a bydlení',
      tr: 'Ev ve Yaşam Kelimeleri'
    },
    subtitle: {
      en: 'The Russian words for rooms, basic furniture, and everyday activities at home — vocabulary for talking about where you live.',
      ru: 'Русские слова для комнат, основной мебели и повседневных домашних дел — лексика, чтобы говорить о своём доме.',
      nl: 'De Russische woorden voor kamers, basismeubels en dagelijkse bezigheden thuis — woordenschat om over je woning te praten.',
      pl: 'Rosyjskie słowa dotyczące pokoi, podstawowych mebli i codziennych zajęć w domu — słownictwo, by rozmawiać o swoim mieszkaniu.',
      de: 'Die russischen Wörter für Zimmer, grundlegende Möbel und alltägliche Tätigkeiten zu Hause – Wortschatz, um über dein Zuhause zu sprechen.',
      es: 'Las palabras rusas para las habitaciones, los muebles básicos y las actividades cotidianas en casa: vocabulario para hablar de tu hogar.',
      fr: 'Les mots russes pour les pièces, les meubles de base et les activités quotidiennes à la maison : le vocabulaire pour parler de votre logement.',
      it: 'Le parole russe per le stanze, i mobili di base e le attività quotidiane in casa: vocabolario per parlare di dove vivi.',
      cs: 'Ruská slova pro pokoje, základní nábytek a každodenní činnosti doma – slovní zásoba, abyste mluvili o svém bydlení.',
      tr: 'Odalar, temel mobilyalar ve evdeki günlük işler için Rusça kelimeler — yaşadığın yer hakkında konuşmak için kelimeler.'
    }
  },

  'shopping-and-money': {
    title: {
      en: 'Shopping & Money Vocabulary',
      ru: 'Лексика о покупках и деньгах',
      nl: 'Woordenschat over winkelen en geld',
      pl: 'Słownictwo o zakupach i pieniądzach',
      de: 'Wortschatz für Einkaufen und Geld',
      es: 'Vocabulario de compras y dinero',
      fr: "Vocabulaire des achats et de l'argent",
      it: 'Vocabolario degli acquisti e del denaro',
      cs: 'Slovní zásoba o nakupování a penězích',
      tr: 'Alışveriş ve Para Kelimeleri'
    },
    subtitle: {
      en: 'The Russian words for shops, prices, paying, and everyday money matters — practical vocabulary for shopping.',
      ru: 'Русские слова для магазинов, цен, оплаты и повседневных денежных вопросов — практичная лексика для покупок.',
      nl: 'De Russische woorden voor winkels, prijzen, betalen en alledaagse geldzaken — praktische woordenschat om inkopen te doen.',
      pl: 'Rosyjskie słowa dotyczące sklepów, cen, płacenia i codziennych spraw pieniężnych — praktyczne słownictwo na zakupy.',
      de: 'Die russischen Wörter für Geschäfte, Preise, das Bezahlen und alltägliche Geldangelegenheiten – praktischer Wortschatz zum Einkaufen.',
      es: 'Las palabras rusas para las tiendas, los precios, los pagos y los asuntos de dinero cotidianos: vocabulario práctico para ir de compras.',
      fr: "Les mots russes pour les magasins, les prix, le paiement et les questions d'argent du quotidien : un vocabulaire pratique pour faire ses achats.",
      it: 'Le parole russe per i negozi, i prezzi, i pagamenti e le questioni di denaro quotidiane: vocabolario pratico per fare acquisti.',
      cs: 'Ruská slova pro obchody, ceny, placení a každodenní peněžní záležitosti – praktická slovní zásoba na nákupy.',
      tr: 'Mağazalar, fiyatlar, ödeme ve günlük para işleri için Rusça kelimeler — alışveriş için pratik kelimeler.'
    }
  },

  'health-and-body': {
    title: {
      en: 'Body & Health Vocabulary',
      ru: 'Лексика о теле и здоровье',
      nl: 'Woordenschat over lichaam en gezondheid',
      pl: 'Słownictwo o ciele i zdrowiu',
      de: 'Wortschatz für Körper und Gesundheit',
      es: 'Vocabulario del cuerpo y la salud',
      fr: 'Vocabulaire du corps et de la santé',
      it: 'Vocabolario del corpo e della salute',
      cs: 'Slovní zásoba o těle a zdraví',
      tr: 'Vücut ve Sağlık Kelimeleri'
    },
    subtitle: {
      en: 'The Russian words for parts of the body, common medical terms, and basic health phrases — how to describe how you feel.',
      ru: 'Русские слова для частей тела, распространённых медицинских терминов и базовых фраз о здоровье — как описать самочувствие.',
      nl: 'De Russische woorden voor lichaamsdelen, veelvoorkomende medische termen en basiszinnen over gezondheid — hoe je omschrijft hoe je je voelt.',
      pl: 'Rosyjskie słowa dotyczące części ciała, popularnych terminów medycznych i podstawowych zwrotów o zdrowiu — jak opisać samopoczucie.',
      de: 'Die russischen Wörter für Körperteile, gängige medizinische Begriffe und grundlegende Gesundheitsausdrücke – wie du beschreibst, wie du dich fühlst.',
      es: 'Las palabras rusas para las partes del cuerpo, los términos médicos comunes y las frases básicas de salud: cómo describir cómo te sientes.',
      fr: 'Les mots russes pour les parties du corps, les termes médicaux courants et les expressions de base sur la santé : comment décrire ce que vous ressentez.',
      it: 'Le parole russe per le parti del corpo, i termini medici comuni e le frasi di base sulla salute: come descrivere come ti senti.',
      cs: 'Ruská slova pro části těla, běžné lékařské výrazy a základní fráze o zdraví – jak popsat, jak se cítíte.',
      tr: 'Vücudun bölümleri, yaygın tıbbi terimler ve temel sağlık ifadeleri için Rusça kelimeler — kendini nasıl hissettiğini anlatmak için.'
    }
  },

  'clothes-and-appearance': {
    title: {
      en: 'Clothes & Appearance Vocabulary',
      ru: 'Лексика об одежде и внешности',
      nl: 'Woordenschat over kleding en uiterlijk',
      pl: 'Słownictwo o ubraniach i wyglądzie',
      de: 'Wortschatz für Kleidung und Aussehen',
      es: 'Vocabulario de la ropa y la apariencia',
      fr: "Vocabulaire des vêtements et de l'apparence",
      it: "Vocabolario dell'abbigliamento e dell'aspetto",
      cs: 'Slovní zásoba o oblečení a vzhledu',
      tr: 'Kıyafet ve Görünüş Kelimeleri'
    },
    subtitle: {
      en: 'The Russian words for everyday clothing, accessories, and describing how people look — vocabulary for talking about what people wear.',
      ru: 'Русские слова для повседневной одежды, аксессуаров и описания внешности — лексика, чтобы говорить о том, как выглядят и во что одеты люди.',
      nl: 'De Russische woorden voor alledaagse kleding, accessoires en het beschrijven van hoe mensen eruitzien — woordenschat om over kleding en uiterlijk te praten.',
      pl: 'Rosyjskie słowa dotyczące codziennych ubrań, dodatków i opisywania wyglądu — słownictwo, by rozmawiać o tym, jak ludzie wyglądają i co noszą.',
      de: 'Die russischen Wörter für Alltagskleidung, Accessoires und das Beschreiben des Aussehens – Wortschatz, um darüber zu sprechen, wie Menschen aussehen und was sie tragen.',
      es: 'Las palabras rusas para la ropa de diario, los accesorios y la descripción del aspecto: vocabulario para hablar de cómo se ve y se viste la gente.',
      fr: "Les mots russes pour les vêtements de tous les jours, les accessoires et la description de l'apparence : le vocabulaire pour parler de ce que portent les gens.",
      it: "Le parole russe per l'abbigliamento di tutti i giorni, gli accessori e la descrizione dell'aspetto: vocabolario per parlare di come appaiono e si vestono le persone.",
      cs: 'Ruská slova pro každodenní oblečení, doplňky a popisování vzhledu – slovní zásoba, abyste mluvili o tom, jak lidé vypadají a co nosí.',
      tr: 'Günlük kıyafetler, aksesuarlar ve insanların görünüşünü tarif etmek için Rusça kelimeler — insanların ne giydiği hakkında konuşmak için kelimeler.'
    }
  },

  'weather-and-nature': {
    title: {
      en: 'Weather & Nature Vocabulary',
      ru: 'Лексика о погоде и природе',
      nl: 'Woordenschat over weer en natuur',
      pl: 'Słownictwo o pogodzie i przyrodzie',
      de: 'Wortschatz für Wetter und Natur',
      es: 'Vocabulario del clima y la naturaleza',
      fr: 'Vocabulaire de la météo et de la nature',
      it: 'Vocabolario del meteo e della natura',
      cs: 'Slovní zásoba o počasí a přírodě',
      tr: 'Hava Durumu ve Doğa Kelimeleri'
    },
    subtitle: {
      en: 'The Russian words for seasons, weather conditions, plants, and natural landscapes — vocabulary for talking about the world outside.',
      ru: 'Русские слова для времён года, погоды, растений и природных ландшафтов — лексика, чтобы говорить о мире вокруг.',
      nl: 'De Russische woorden voor seizoenen, weersomstandigheden, planten en natuurlandschappen — woordenschat om over de wereld buiten te praten.',
      pl: 'Rosyjskie słowa dotyczące pór roku, pogody, roślin i krajobrazów — słownictwo, by rozmawiać o świecie na zewnątrz.',
      de: 'Die russischen Wörter für Jahreszeiten, Wetterlagen, Pflanzen und Naturlandschaften – Wortschatz, um über die Welt draußen zu sprechen.',
      es: 'Las palabras rusas para las estaciones del año, el clima, las plantas y los paisajes naturales: vocabulario para hablar del mundo exterior.',
      fr: 'Les mots russes pour les saisons, la météo, les plantes et les paysages naturels : le vocabulaire pour parler du monde extérieur.',
      it: 'Le parole russe per le stagioni, il meteo, le piante e i paesaggi naturali: vocabolario per parlare del mondo là fuori.',
      cs: 'Ruská slova pro roční období, počasí, rostliny a přírodní krajinu – slovní zásoba, abyste mluvili o světě venku.',
      tr: 'Mevsimler, hava koşulları, bitkiler ve doğal manzaralar için Rusça kelimeler — dışarıdaki dünya hakkında konuşmak için kelimeler.'
    }
  }
};
