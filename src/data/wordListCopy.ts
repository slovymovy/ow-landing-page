import type { LocaleCode } from './site';

// UI copy for the word-list hub + list pages, per interface locale.
//
// All nine non-English locales were natively reviewed by the user (2026-07)
// after the initial Claude drafts — treat them as reviewed, like homeCopy.
// Strings that already exist reviewed in `homeCopy[locale]` (CTA text, the
// "Available on iOS & Android" eyebrow, the free-note, "How it works", the FAQ
// heading) are pulled from there in the page components and are NOT duplicated here.

export interface StepDef {
  title: string;
  body: string;
}

export interface WlFaqItem {
  q: string;
  a: string;
  open?: boolean;
}

export interface WordListCopy {
  // ── hub ──
  hubTitle: string;
  hubDescription: string;
  hubH1Html: string; // <em> wraps the gold accent
  hubSub: string;
  hubStepsH2: string;
  hubStepsSub: string;
  faq: WlFaqItem[];

  // hub card (500 most common)
  cardName: string;
  cardDesc: string;
  cardCount: string;

  // ── list ──
  listTitle: string;
  listDescription: string;
  listEyebrow: string;
  listH1Html: string;
  listSubhead: string;
  metricLabel: string;
  crumbCurrent: string;
  siblingsLabel: string;
  allLists: string;
  jumpLabel: string;
  bandTitle: string;
  listStepsH2: string;
  listStepsSub: string;
  // Templates for topic-list SEO (title tag = "{Title} — {listTitleSuffix}";
  // meta description = "{subtitle} {listMetaTail}").
  listTitleSuffix: string;
  listMetaTail: string;

  // steps (hub uses download/findList/addWords/learnCards; list uses download/openList/addWords/learnCards)
  stepDownload: StepDef;
  stepFindList: StepDef;
  stepOpenList: StepDef;
  stepAddWords: StepDef;
  stepLearnCards: StepDef;
}

export const wordListCopy: Record<LocaleCode, WordListCopy> = {
  en: {
    hubTitle: 'English Word Lists — Free Vocabulary Lists with Definitions | OpenWords',
    hubDescription:
      'English vocabulary lists, ordered by frequency with a short definition and translation for every word. Pick a list and drill it with one-tap flashcards in OpenWords.',
    hubH1Html: 'English <em>Word Lists</em>',
    hubSub:
      'Curated English vocabulary lists — every word with a short definition and translations. Pick a list, then learn it one tap at a time with spaced-repetition flashcards in OpenWords.',
    hubStepsH2: 'Lists ready to learn in OpenWords',
    hubStepsSub: 'Every list here is available in the app — from install to daily review in four steps.',
    faq: [
      {
        q: 'Should I learn words by frequency or by topic?',
        a: "Both have their place. A frequency list builds the foundation the fastest — the most common words appear everywhere, so they give the biggest jump in comprehension for the least effort. A topic list — travel, work, a hobby — gets you the specific vocabulary you'll actually use sooner. Many learners do both: a frequency list for coverage, topic lists for the words that matter to them.",
        open: true
      },
      {
        q: 'How many English words do you need to be fluent?',
        a: 'Around 3,000 word families get you to comfortable everyday fluency — but the first 1,000 already cover about 85% of ordinary conversation. Learning common, high-frequency words first is the fastest way to raise how much you understand.'
      },
      {
        q: "What's the difference between passive and active vocabulary?",
        a: 'Your passive vocabulary is the words you recognise when you read or hear them; your active vocabulary is the words you can actually produce when you speak or write. Passive is always the larger of the two — the real goal of study is moving words from passive to active, and meeting a word in more than one context, spread out over time, is what makes that shift happen.'
      },
      {
        q: "What's the fastest way to memorise a word list?",
        a: "Reading a list isn't the same as remembering it. Spaced repetition — reviewing each word right before you'd forget it — is far more effective than re-reading, especially when you meet the word in more than one form: recognition, recall, and in context."
      },
      {
        q: 'Why learn these lists in OpenWords?',
        a: "Because it closes the gap between seeing a word and owning it. Every word comes with a clear definition, examples and translations; you save the ones you want in a single tap; and spaced-repetition flashcards bring each one back — as recognition, recall and in-context cards — right before you'd forget it. It's free, needs no account, and works offline."
      }
    ],
    cardName: '500 Most Common Words',
    cardDesc: 'The common core — the 500 most frequent words cover a huge share of everyday English, each with a short definition.',
    cardCount: '500 words',
    listTitle: '500 Most Common English Words — Free Vocabulary List | OpenWords',
    listDescription:
      'The 500 most common English words, ordered by frequency with a short definition and translation for each. A beginner (A1) list — drill them with one-tap flashcards in OpenWords.',
    listEyebrow: 'English word list',
    listH1Html: '500 Most Common <em>English Words</em>',
    listSubhead:
      "Learn the words that do the heavy lifting first. The most frequent English words are the fastest route from recognising a few words to following what's going on — each with a short definition.",
    metricLabel: 'words',
    crumbCurrent: '500 most common words',
    siblingsLabel: 'English word lists',
    allLists: 'All English lists →',
    jumpLabel: 'Jump to',
    bandTitle: 'Words',
    listStepsH2: 'Learn this list in 4 steps in OpenWords',
    listStepsSub: 'Every word here — and the full dictionary — is built into the app.',
    listTitleSuffix: 'English vocabulary with translations | OpenWords',
    listMetaTail: 'English words with translations — learn them with one-tap flashcards in OpenWords.',
    stepDownload: { title: 'Download the app', body: 'Get OpenWords on iOS or Android — no account needed.' },
    stepFindList: { title: 'Find a list', body: 'Browse the curated lists or search for the words you need.' },
    stepOpenList: { title: 'Open this list', body: 'Find it in the app, or search for the words you need.' },
    stepAddWords: { title: 'Add words to your list', body: 'Tap to save the words you want to learn into your personal word list.' },
    stepLearnCards: { title: 'Learn with smart cards', body: 'Review with multi-format flashcards, scheduled by spaced repetition.' }
  },

  ru: {
    hubTitle: 'Списки английских слов: бесплатная лексика с переводом | OpenWords',
    hubDescription:
      'Частотные списки английских слов с краткими определениями и переводом. Выберите подборку и учите слова по карточкам в одно касание в OpenWords.',
    hubH1Html: 'Списки <em>английских слов</em>',
    hubSub:
      'Тщательно составленные списки слов с краткими определениями и переводом. Выберите подборку и учите слова в одно касание с помощью интервальных повторений в OpenWords.',
    hubStepsH2: 'Списки, готовые к изучению в OpenWords',
    hubStepsSub: 'Любой из этих списков доступен в приложении. Начните учить слова за четыре простых шага — от установки до первых повторений.',
    faq: [
      {
        q: 'Учить слова по частоте или по темам?',
        a: 'У каждого подхода свои плюсы. Частотный список помогает быстрее создать базу: такие слова встречаются повсюду и дают максимальный прогресс при минимальных усилиях. Тематический же список (путешествия, работа, хобби) сразу даёт лексику под конкретные задачи. Лучше всего совмещать: частотный список — для общего охвата, а тематические — для важных лично вам тем.',
        open: true
      },
      {
        q: 'Сколько английских слов нужно для свободного владения?',
        a: 'Около 3000 базовых слов (и их словоформ) достаточно для комфортного общения в быту, но даже первая 1000 покрывает около 85% устной речи. Начать с частых слов — самый быстрый способ заговорить и понимать окружающих.'
      },
      {
        q: 'Чем пассивный словарный запас отличается от активного?',
        a: 'Пассивный запас — это слова, которые вы узнаёте при чтении или на слух; активный — те, что вы используете сами. Пассивный запас всегда больше, и цель обучения — переводить слова в актив. В этом помогают регулярные повторения в разных контекстах.'
      },
      {
        q: 'Как быстрее всего запомнить список слов?',
        a: 'Прочитать список — не значит его запомнить. Интервальные повторения — когда вы возвращаетесь к слову прямо перед тем, как забыть его, — работают куда лучше перечитывания, особенно если слово встречается в разных форматах: узнавание, припоминание и в контексте.'
      },
      {
        q: 'Почему учить эти списки в OpenWords?',
        a: 'Потому что приложение сокращает дистанцию между «увидел слово» и «свободно использую его». У каждого слова есть понятное определение, примеры и переводы. Вы сохраняете нужную лексику в одно касание, а умные карточки вовремя возвращают её для повторения — как раз в тот момент, когда вы готовы её забыть. Бесплатно, без регистрации и работает офлайн.'
      }
    ],
    cardName: '500 самых частых слов',
    cardDesc: 'Лексическое ядро: 500 самых частых слов покрывают большую часть повседневного английского. У каждого слова есть краткое определение.',
    cardCount: '500 слов',
    listTitle: '500 самых частых английских слов — бесплатный список с переводом | OpenWords',
    listDescription:
      '500 самых частых английских слов с краткими определениями и переводом. Список для начинающих (A1) — учите слова по карточкам в одно касание в OpenWords.',
    listEyebrow: 'Список английских слов',
    listH1Html: '500 самых частых <em>английских слов</em>',
    listSubhead:
      'Начните со слов, которые составляют основу языка. Самые частые слова — это кратчайший путь от «узнаю пару фраз» к «понимаю, о чём речь». У каждого слова есть перевод.',
    metricLabel: 'слов',
    crumbCurrent: '500 самых частых слов',
    siblingsLabel: 'Списки английских слов',
    allLists: 'Все английские списки →',
    jumpLabel: 'Перейти к',
    bandTitle: 'Слова',
    listStepsH2: 'Выучите этот список за 4 шага в OpenWords',
    listStepsSub: 'Все слова из этого списка, как и весь наш словарь, уже встроены в приложение.',
    listTitleSuffix: 'английская лексика с переводом | OpenWords',
    listMetaTail: 'Английская лексика с переводом — учите её карточками в одно касание в OpenWords.',
    stepDownload: { title: 'Скачайте приложение', body: 'Установите OpenWords на iOS или Android без регистрации.' },
    stepFindList: { title: 'Найдите список', body: 'Просмотрите готовые списки или найдите нужные слова.' },
    stepOpenList: { title: 'Откройте этот список', body: 'Найдите его в приложении или поищите нужные слова.' },
    stepAddWords: { title: 'Добавьте слова к себе', body: 'Одним касанием сохраняйте нужные слова в личную подборку.' },
    stepLearnCards: { title: 'Учитесь по умным карточкам', body: 'Повторяйте слова в разных форматах по системе интервальных повторений.' }
  },

  nl: {
    hubTitle: 'Engelse woordenlijsten — gratis lijsten met vertaling | OpenWords',
    hubDescription:
      'Engelse woordenlijsten gesorteerd op frequentie, met een korte definitie en vertaling voor elk woord. Kies een lijst en oefen met flashcards in OpenWords.',
    hubH1Html: 'Engelse <em>woordenlijsten</em>',
    hubSub:
      'Zorgvuldig samengestelde Engelse woordenlijsten, met een korte definitie en vertaling voor elk woord. Kies een lijst en leer ze met één tik via spaced repetition-flashcards in OpenWords.',
    hubStepsH2: 'Woordenlijsten die direct klaarstaan in OpenWords',
    hubStepsSub: 'Elke lijst is direct beschikbaar in de app — van installatie tot je dagelijkse herhalingen in slechts vier stappen.',
    faq: [
      {
        q: 'Moet ik woorden leren op basis van frequentie of per thema?',
        a: "Beide benaderingen hebben hun voordelen. Een frequentielijst legt het snelst de basis: de meest voorkomende woorden kom je overal tegen, waardoor je met de minste moeite de grootste sprong in je begrip maakt. Een themalijst (zoals reizen, werk of hobby's) geeft je juist sneller de specifieke woordenschat die je daadwerkelijk gaat gebruiken. Veel studenten combineren beide: een frequentielijst voor de algemene basis en themalijsten voor de woorden die voor hen persoonlijk belangrijk zijn.",
        open: true
      },
      {
        q: 'Hoeveel Engelse woorden heb je nodig om de taal vloeiend te spreken?',
        a: "Met zo'n 3.000 woordfamilies red je je prima in het dagelijks leven, maar de eerste 1.000 woorden dekken al ongeveer 85% van de dagelijkse spreektaal. Beginnen met de meest voorkomende woorden is dan ook de snelste manier om je begrip te vergroten."
      },
      {
        q: 'Wat is het verschil tussen een passieve en actieve woordenschat?',
        a: 'Je passieve woordenschat bestaat uit woorden die je herkent tijdens het lezen of luisteren. Je actieve woordenschat bevat de woorden die je zelf gebruikt bij het spreken en schrijven. Je passieve kennis is altijd groter; het doel van oefenen is om woorden over te zetten van passief naar actief. Dit bereik je het best door een woord in verschillende contexten en met tussenpozen (spaced herhaling) tegen te komen.'
      },
      {
        q: 'Wat is de snelste manier om een woordenlijst te onthouden?',
        a: 'Een lijst doorlezen betekent nog niet dat je de woorden hebt onthouden. Spaced repetition —waarbij je een woord te zien krijgt nét voordat je het dreigt te vergeten— werkt vele malen beter dan simpelweg herlezen. Het is extra effectief als je de woorden op verschillende manieren traint: herkennen, actief ophalen en oefenen in context.'
      },
      {
        q: 'Waarom zou ik deze lijsten leren met OpenWords?',
        a: 'Omdat de app de kloof dicht tussen "een woord zien" en "het echt beheersen". Elk woord is voorzien van een duidelijke definitie, voorbeeldzinnen en vertalingen. Je slaat de woorden die je nodig hebt met één tik op, en onze spaced repetition-flashcards tonen ze opnieuw —voor herkenning, actieve herinnering en contextuele training— precies op het moment dat je ze dreigt te vergeten. Volledig gratis, zonder account en offline te gebruiken.'
      }
    ],
    cardName: '500 meest voorkomende woorden',
    cardDesc: 'De basis: de 500 meest voorkomende woorden dekken het grootste deel van het alledaagse Engels, elk voorzien van een korte definitie.',
    cardCount: '500 woorden',
    listTitle: '500 meest voorkomende Engelse woorden — gratis lijst met vertaling | OpenWords',
    listDescription:
      'De 500 meest voorkomende Engelse woorden gesorteerd op frequentie, elk met een korte definitie en vertaling. Een ideale lijst voor beginners (A1) — oefen ze met flashcards in OpenWords.',
    listEyebrow: 'Engelse woordenlijst',
    listH1Html: '500 meest voorkomende <em>Engelse woorden</em>',
    listSubhead:
      'Leer eerst de woorden die het zware werk verzetten. Het beheersen van de meest voorkomende Engelse woorden is de snelste manier om de overstap te maken van een paar losse termen herkennen naar begrijpen waar het gesprek echt over gaat. Elk woord is voorzien van een vertaling.',
    metricLabel: 'woorden',
    crumbCurrent: '500 meest voorkomende woorden',
    siblingsLabel: 'Engelse woordenlijsten',
    allLists: 'Alle Engelse lijsten →',
    jumpLabel: 'Ga naar',
    bandTitle: 'Woorden',
    listStepsH2: 'Leer deze lijst in 4 stappen met OpenWords',
    listStepsSub: 'Elk woord uit deze lijst —en het volledige woordenboek— is ingebouwd in de app.',
    listTitleSuffix: 'Engelse woordenschat met vertaling | OpenWords',
    listMetaTail: 'Engelse woordenschat met vertaling — leer ze met flashcards in OpenWords.',
    stepDownload: { title: 'Download de app', body: 'Installeer OpenWords op iOS of Android, zonder account.' },
    stepFindList: { title: 'Vind een lijst', body: 'Blader door de samengestelde lijsten of zoek naar specifieke woorden.' },
    stepOpenList: { title: 'Open deze lijst', body: 'Vind de lijst in de app of zoek direct naar de specifieke woorden die je nodig hebt.' },
    stepAddWords: { title: 'Voeg woorden toe', body: 'Sla de woorden die je wilt leren met één tik op in je persoonlijke lijst.' },
    stepLearnCards: { title: 'Oefen met slimme flashcards', body: 'Herhaal woorden op verschillende manieren via een spaced repetition-schema.' }
  },

  pl: {
    hubTitle: 'Listy angielskich słów — darmowe zestawy słownictwa z tłumaczeniem | OpenWords',
    hubDescription:
      'Listy angielskich słów uporządkowane według częstotliwości, z krótką definicją i tłumaczeniem dla każdego słówka. Wybierz zestaw i ćwicz z fiszkami w OpenWords.',
    hubH1Html: 'Listy <em>angielskich słów</em>',
    hubSub:
      'Starannie dobrane zestawy angielskiego słownictwa — każde słowo z krótką definicją i tłumaczeniem. Wybierz listę i opanuj ją dzięki powtórkom interwałowym w OpenWords.',
    hubStepsH2: 'Listy gotowe do nauki w OpenWords',
    hubStepsSub: 'Każda z tych list jest dostępna w aplikacji — przejdź od instalacji do codziennych powtórek w zaledwie czterech krokach.',
    faq: [
      {
        q: 'Czy lepiej uczyć się słów według częstotliwości, czy tematycznie?',
        a: 'Oba podejścia mają swoje zalety. Lista częstotliwości najszybciej buduje fundament — najpopularniejsze słowa pojawiają się wszędzie, więc zapewniają największy skok w rozumieniu języka przy minimalnym wysiłku. Z kolei lista tematyczna (podróże, praca, hobby) szybciej dostarcza konkretnego słownictwa, którego faktycznie używasz w praktyce. Wielu użytkowników łączy obie metody: lista częstotliwości służy im do zbudowania ogólnej bazy, a listy tematyczne do nauki słów ważnych dla nich osobiście.',
        open: true
      },
      {
        q: 'Ile angielskich słów trzeba znać, by mówić płynnie?',
        a: 'Około 3000 rodzin wyrazowych pozwala na swobodną komunikację na co dzień, ale już pierwszy tysiąc pokrywa blisko 85% codziennych rozmów. Nauka najczęstszych słów w pierwszej kolejności to najszybszy sposób na błyskawiczne zwiększenie zrozumienia.'
      },
      {
        q: 'Czym różni się słownictwo bierne od czynnego?',
        a: 'Słownictwo bierne to słowa, które rozpoznajesz podczas czytania lub słuchania. Słownictwo czynne to te, których samodzielnie używasz w mowie i piśmie. Zasób bierny jest zawsze większy, a głównym celem nauki jest aktywowanie słówek — czyli przenoszenie ich do zasobu czynnego. Najlepiej pomaga w tym regularne spotykanie danego słowa w różnych kontekstach na przestrzeni czasu.'
      },
      {
        q: 'Jak najszybciej zapamiętać listę słów?',
        a: 'Samo przeczytanie listy nie oznacza jej zapamiętania. System powtórek interwałowych — czyli wracanie do słowa tuż przed tym, jak wypadnie Ci z głowy — działa o niebo lepiej niż ponowne czytanie tekstu. Jest to szczególnie skuteczne, gdy ćwiczysz słowo w różnych formach: poprzez rozpoznawanie, aktywne przypominanie oraz osadzenie w kontekście.'
      },
      {
        q: 'Dlaczego warto uczyć się tych list w OpenWords?',
        a: 'Ponieważ aplikacja pozwala skutecznie zamknąć lukę między zwykłym „zobaczeniem” słowa a jego pełnym opanowaniem. Każde słowo zawiera jasną definicję, przykłady i tłumaczenia. Te, których potrzebujesz, zapisujesz jednym dotknięciem, a inteligentne fiszki oparte na powtórkach interwałowych przypominają Ci je (w formie rozpoznawania, przywoływania z pamięci i w kontekście) dokładnie wtedy, gdy tego potrzebujesz. Całkowicie za darmo, bez rejestracji i w trybie offline.'
      }
    ],
    cardName: '500 najczęstszych słów',
    cardDesc: 'Fundament języka — 500 najczęstszych słów stanowi ogromną część codziennego angielskiego. Każde słowo z krótką definicją.',
    cardCount: '500 słów',
    listTitle: '500 najczęstszych angielskich słów — darmowa lista z tłumaczeniem | OpenWords',
    listDescription:
      '500 najczęstszych angielskich słów uporządkowanych według częstotliwości występowania, każde z krótką definicją i tłumaczeniem. Idealny zestaw dla początkujących (A1) — ćwicz z fiszkami w OpenWords.',
    listEyebrow: 'Lista angielskich słów',
    listH1Html: '500 najczęstszych <em>angielskich słów</em>',
    listSubhead:
      'Zacznij od słów, które wykonują lwią część pracy. Opanowanie najczęstszych angielskich wyrazów to najszybsza droga, by przejść od kojarzenia pojedynczych słówek do swobodnego rozumienia sensu całej rozmowy. Każde słowo zawiera tłumaczenie.',
    metricLabel: 'słów',
    crumbCurrent: '500 najczęstszych słów',
    siblingsLabel: 'Listy angielskich słów',
    allLists: 'Wszystkie listy angielskiego →',
    jumpLabel: 'Przejdź do',
    bandTitle: 'Słowa',
    listStepsH2: 'Opanuj tę listę w 4 krokach z OpenWords',
    listStepsSub: 'Każde słowo z tej listy — oraz cały nasz słownik — są wbudowane bezpośrednio w aplikację.',
    listTitleSuffix: 'angielskie słownictwo z tłumaczeniem | OpenWords',
    listMetaTail: 'Angielskie słownictwo z tłumaczeniem — ucz się go z fiszkami w OpenWords.',
    stepDownload: { title: 'Pobierz aplikację', body: 'Zainstaluj OpenWords na iOS lub Androidzie — bez rejestracji.' },
    stepFindList: { title: 'Znajdź listę', body: 'Przeglądaj gotowe zestawy lub wyszukaj konkretne słowa.' },
    stepOpenList: { title: 'Otwórz tę listę', body: 'Znajdź ją w aplikacji lub wyszukaj konkretne słowa, których potrzebujesz.' },
    stepAddWords: { title: 'Dodaj słowa do swojej listy', body: 'Jednym dotknięciem zapisz wybrane słowa na osobistej liście.' },
    stepLearnCards: { title: 'Ucz się z inteligentnymi fiszkami', body: 'Ćwicz w wielu formatach zgodnie z systemem powtórek interwałowych.' }
  },

  de: {
    hubTitle: 'Englische Wortlisten — Kostenlose Vokabellisten mit Übersetzung | OpenWords',
    hubDescription:
      'Englische Vokabellisten nach Häufigkeit sortiert – mit kurzen Definitionen und Übersetzungen für jedes Wort. Wähle eine Liste und übe mit Karteikarten in OpenWords.',
    hubH1Html: 'Englische <em>Wortlisten</em>',
    hubSub:
      'Sorgfältig zusammengestellte englische Vokabellisten – jedes Wort mit kurzer Definition und Übersetzung. Wähle eine Liste und lerne sie Wort für Wort mit Spaced-Repetition-Karteikarten in OpenWords.',
    hubStepsH2: 'Sofort lernbereite Listen in OpenWords',
    hubStepsSub: 'Jede dieser Listen ist direkt in der App verfügbar – in nur vier Schritten von der Installation zur täglichen Routine.',
    faq: [
      {
        q: 'Sollte ich Wörter nach Häufigkeit oder nach Themen lernen?',
        a: 'Beides hat seine Daseinsberechtigung. Eine Häufigkeitsliste baut das Fundament am schnellsten auf: Da die häufigsten Wörter überall vorkommen, erzielst du mit minimalem Aufwand den größten Fortschritt beim Verstehen. Eine Themenliste (Reisen, Beruf, Hobbys) liefert dir dagegen schneller den spezifischen Wortschatz, den du im Alltag tatsächlich brauchst. Viele Lernende kombinieren beides: eine Häufigkeitsliste für die solide Basis und Themenlisten für die Wörter, die ihnen persönlich wichtig sind.',
        open: true
      },
      {
        q: 'Wie viele englische Wörter braucht man, um fließend zu sprechen?',
        a: 'Rund 3.000 Wortfamilien reichen für eine solide Alltagssicherheit aus, aber schon die ersten 1.000 Wörter decken etwa 85 % der alltäglichen Kommunikation ab. Zuerst die häufigsten Wörter zu lernen, ist der schnellste Weg, um dein Verständnis im Alltag spürbar zu steigern.'
      },
      {
        q: 'Was ist der Unterschied zwischen passivem und aktivem Wortschatz?',
        a: 'Dein passiver Wortschatz umfasst die Wörter, die du beim Lesen oder Hören verstehst. Dein aktiver Wortschatz besteht aus den Wörtern, die du selbst beim Sprechen und Schreiben parat hast. Der passive Wortschatz ist immer größer. Das eigentliche Ziel beim Lernen ist es, Wörter vom passiven in den aktiven Zustand zu überführen. Das gelingt am besten, wenn du einem Wort im Laufe der Zeit in unterschiedlichen Kontexten begegnest.'
      },
      {
        q: 'Wie merkt man sich eine Wortliste am schnellsten?',
        a: 'Eine Liste bloß durchzulesen bedeutet nicht, sie auch dauerhaft zu behalten. Spaced Repetition – also das Wiederholen eines Wortes genau in dem Moment, bevor du es vergessen würdest – funktioniert um Längen besser als bloßes Wiederlesen. Besonders effektiv ist es, wenn du das Wort in verschiedenen Modi trainierst: Erkennen, aktives Abrufen und Anwendung im Kontext.'
      },
      {
        q: 'Warum sollte ich diese Listen in OpenWords lernen?',
        a: 'Weil die App die Lücke zwischen „schon mal gesehen“ und „echt beherrscht“ schließt. Jedes Wort bietet klare Definitionen, Beispielsätze und Übersetzungen. Deine Favoriten speicherst du mit nur einem Tippen. Unsere Spaced-Repetition-Karteikarten rufen sie genau im richtigen Moment wieder auf – durch Erkennen, Abrufen und im Kontext, kurz bevor du sie vergisst. Kostenlos, ohne Registrierung und komplett offline nutzbar.'
      }
    ],
    cardName: 'Die 500 häufigsten Wörter',
    cardDesc: 'Der Grundwortschatz: Die 500 häufigsten Wörter decken einen riesigen Teil des Alltagsenglisch ab, jeweils komplett mit einer kurzen Definition.',
    cardCount: '500 Wörter',
    listTitle: 'Die 500 häufigsten englischen Wörter — Kostenlose Liste mit Übersetzung | OpenWords',
    listDescription:
      'Die 500 häufigsten englischen Wörter nach Häufigkeit sortiert, inklusive kurzer Definition und Übersetzung. Die perfekte Liste für Anfänger (A1) – übe direkt mit Karteikarten in OpenWords.',
    listEyebrow: 'Englische Wortliste',
    listH1Html: 'Die 500 häufigsten <em>englischen Wörter</em>',
    listSubhead:
      'Lerne zuerst die Wörter, die die meiste Arbeit erledigen. Der häufigste englische Wortschatz ist der schnellste Weg, um von „ich schnappe ein paar Wörter auf“ zu „ich verstehe, worum es im Gespräch geht“ zu gelangen. Jedes Wort enthält eine Übersetzung.',
    metricLabel: 'Wörter',
    crumbCurrent: 'Die 500 häufigsten Wörter',
    siblingsLabel: 'Englische Wortlisten',
    allLists: 'Alle englischen Listen →',
    jumpLabel: 'Direkt zu',
    bandTitle: 'Wörter',
    listStepsH2: 'Lerne diese Liste in 4 Schritten mit OpenWords',
    listStepsSub: 'Jedes Wort aus dieser Liste – und das gesamte Wörterbuch – sind direkt in die App integriert.',
    listTitleSuffix: 'englischer Wortschatz mit Übersetzung | OpenWords',
    listMetaTail: 'Englischer Wortschatz mit Übersetzung — lerne ihn mit Karteikarten in OpenWords.',
    stepDownload: { title: 'App herunterladen', body: 'Installiere OpenWords für iOS oder Android – komplett ohne Registrierung.' },
    stepFindList: { title: 'Liste finden', body: 'Stöbere durch fertige Listen oder suche gezielt nach bestimmten Wörtern.' },
    stepOpenList: { title: 'Öffne diese Liste', body: 'Finde sie direkt in der App oder suche gezielt nach den Wörtern, die du brauchst.' },
    stepAddWords: { title: 'Wörter hinzufügen', body: 'Speichere die Wörter, die du lernen möchtest, mit nur einem Tippen in deiner persönlichen Liste.' },
    stepLearnCards: { title: 'Mit smarten Karten lernen', body: 'Wiederhole Vokabeln in verschiedenen Formaten, perfekt getaktet durch ein Spaced-Repetition-Schema.' }
  },

  es: {
    hubTitle: 'Listas de vocabulario en inglés — Listas gratis con traducción | OpenWords',
    hubDescription:
      'Listas de vocabulario en inglés ordenadas por frecuencia, con una definición breve y traducción para cada palabra. Elige una lista y practícala con tarjetas en OpenWords.',
    hubH1Html: 'Listas de <em>vocabulario en inglés</em>',
    hubSub:
      'Listas de vocabulario en inglés cuidadosamente seleccionadas; cada palabra incluye una definición breve y su traducción. Elige una lista y aprende con un solo toque mediante repetición espaciada en OpenWords.',
    hubStepsH2: 'Listas preparadas para aprender en OpenWords',
    hubStepsSub: 'Todas estas listas están disponibles en la app: desde la instalación hasta tus repasos diarios en solo cuatro pasos.',
    faq: [
      {
        q: '¿Es mejor aprender palabras por frecuencia o por temas?',
        a: 'Ambos enfoques tienen su utilidad. Las listas por frecuencia construyen tu base de la forma más rápida: las palabras más comunes aparecen en todas partes, ofreciendo el mayor impulso en comprensión con el menor esfuerzo. Por otro lado, las listas temáticas (viajes, trabajo, pasatiempos) te dan directamente el vocabulario específico que vas a usar en la práctica. Muchos estudiantes combinan ambas: usan una lista de frecuencia para la base general y listas temáticas para las palabras que más les interesan personalmente.',
        open: true
      },
      {
        q: '¿Cuántas palabras en inglés se necesitan para hablar con fluidez?',
        a: 'Unas 3000 familias de palabras son suficientes para desenvolverse con comodidad en el día a día, pero las primeras 1000 ya cubren cerca del 85 % del habla cotidiana. Aprender primero las palabras más frecuentes es el camino más rápido para mejorar tu comprensión.'
      },
      {
        q: '¿Cuál es la diferencia entre el vocabulario pasivo y el activo?',
        a: 'El vocabulario pasivo está compuesto por las palabras que reconoces al leer o escuchar, mientras que el activo incluye aquellas que puedes usar por ti mismo al hablar o escribir. El pasivo siempre es mayor, y el objetivo de la práctica es transferir palabras del pasivo al activo. Encontrarte con una palabra en diferentes contextos y a intervalos espaciados en el tiempo es la clave para lograrlo.'
      },
      {
        q: '¿Cuál es la manera más rápida de memorizar una lista de palabras?',
        a: 'Leer una lista no significa memorizarla. La repetición espaciada —revisar una palabra justo antes de que la vayas a olvidar— funciona mucho mejor que la simple relectura. Es especialmente efectiva cuando interactúas con las palabras en diferentes formatos: reconocimiento, evocación y práctica en contexto.'
      },
      {
        q: '¿Por qué deberías aprender estas listas en OpenWords?',
        a: 'Porque la app acorta la distancia entre "ver una palabra" y "dominarla". Cada palabra viene con definiciones claras, ejemplos y traducciones. Puedes guardar las que necesites con un solo toque, y nuestras tarjetas con repetición espaciada te las muestran de nuevo (para reconocimiento, evocación y práctica en contexto) justo antes de que las olvides. Es gratis, no requiere registro y funciona sin conexión.'
      }
    ],
    cardName: 'Las 500 palabras más comunes',
    cardDesc: 'El núcleo esencial: las 500 palabras más frecuentes cubren una gran parte del inglés cotidiano, y cada una incluye una definición breve.',
    cardCount: '500 palabras',
    listTitle: 'Las 500 palabras más comunes en inglés — Lista gratis con traducción | OpenWords',
    listDescription:
      'Las 500 palabras más comunes en inglés ordenadas por frecuencia, con una definición breve y traducción para cada una. Una lista perfecta para principiantes (A1): practícalas con tarjetas en OpenWords.',
    listEyebrow: 'Lista de vocabulario en inglés',
    listH1Html: 'Las 500 palabras más comunes <em>en inglés</em>',
    listSubhead:
      'Aprende primero las palabras que hacen el trabajo pesado. Dominar las palabras más frecuentes en inglés es la vía más rápida para pasar de reconocer términos sueltos a entender de qué se habla en una conversación. Cada palabra incluye su traducción.',
    metricLabel: 'palabras',
    crumbCurrent: '500 palabras más comunes',
    siblingsLabel: 'Listas de vocabulario en inglés',
    allLists: 'Todas las listas de inglés →',
    jumpLabel: 'Ir a',
    bandTitle: 'Palabras',
    listStepsH2: 'Aprende esta lista en 4 pasos con OpenWords',
    listStepsSub: 'Cada palabra de esta lista —y el diccionario completo— están integrados en la app.',
    listTitleSuffix: 'vocabulario inglés con traducción | OpenWords',
    listMetaTail: 'Vocabulario inglés con traducción — apréndelo con tarjetas en OpenWords.',
    stepDownload: { title: 'Descarga la app', body: 'Instala OpenWords en iOS o Android, sin necesidad de registrarte.' },
    stepFindList: { title: 'Encuentra una lista', body: 'Explora las listas seleccionadas o busca las palabras específicas que necesitas.' },
    stepOpenList: { title: 'Abre esta lista', body: 'Encuéntrala dentro de la app o busca las palabras específicas que necesitas.' },
    stepAddWords: { title: 'Añade palabras a tu lista', body: 'Guarda las palabras que quieres aprender en tu lista personal con un solo toque.' },
    stepLearnCards: { title: 'Aprende con tarjetas inteligentes', body: 'Repasa con tarjetas en diferentes formatos gracias al sistema de repetición espaciada.' }
  },

  fr: {
    hubTitle: 'Listes de mots en anglais — Vocabulaire gratuit avec traduction | OpenWords',
    hubDescription:
      'Listes de vocabulaire anglais classées par fréquence, avec une définition courte et une traduction pour chaque mot. Choisissez une liste et étudiez-les avec des flashcards sur OpenWords.',
    hubH1Html: 'Listes de <em>mots anglais</em>',
    hubSub:
      'Des listes de vocabulaire anglais soigneusement sélectionnées, avec une définition courte et une traduction pour chaque mot. Choisissez une liste et maîtrisez-la mot à mot grâce à la répétition espacée sur OpenWords.',
    hubStepsH2: "Des listes prêtes à l'emploi dans OpenWords",
    hubStepsSub: 'Toutes ces listes sont disponibles dans l’application — passez de l’installation aux révisions quotidiennes en seulement quatre étapes.',
    faq: [
      {
        q: 'Faut-il apprendre les mots par fréquence ou par thème ?',
        a: "Les deux approches ont leur place. Une liste de fréquence permet de bâtir des fondations le plus rapidement possible : les mots les plus courants se retrouvent partout, offrant un maximum de compréhension pour un minimum d’effort. En revanche, une liste thématique (voyage, travail, passions) vous apporte plus vite le vocabulaire ciblé que vous allez réellement utiliser en pratique. Beaucoup d'apprenants combinent les deux : une liste de fréquence pour poser les bases générales, et des listes thématiques pour les mots qui comptent personnellement pour eux.",
        open: true
      },
      {
        q: 'Combien de mots anglais faut-il connaître pour parler couramment ?',
        a: "Environ 3 000 familles de mots permettent d'atteindre une autonomie confortable au quotidien, mais les 1 000 premiers mots couvrent déjà près de 85 % d’une conversation ordinaire. Commencer par apprendre les mots les plus fréquents est le moyen le plus rapide de booster votre compréhension."
      },
      {
        q: 'Quelle est la différence entre le vocabulaire passif et le vocabulaire actif ?',
        a: "Votre vocabulaire passif regroupe les mots que vous reconnaissez à la lecture ou à l’audition, tandis que votre vocabulaire actif comprend ceux que vous parvenez à utiliser vous-même à l'oral et à l'écrit. Le volume passif est toujours plus vaste, et le véritable but de la pratique est de transférer ces mots du passif vers l’actif. Rencontrer un mot dans plusieurs contextes et de manière espacée dans le temps est la clé pour y parvenir."
      },
      {
        q: 'Quelle est la méthode la plus rapide pour mémoriser une liste de mots ?',
        a: "Lire une liste ne suffit pas pour la retenir. Le système de répétition espacée — qui consiste à revoir un mot juste avant de l’oublier — fonctionne infiniment mieux que la simple relecture. C'est d'autant plus efficace lorsque vous sollicitez le mot sous différentes formes : la reconnaissance, le rappel actif et la mise en contexte."
      },
      {
        q: 'Pourquoi apprendre ces listes sur OpenWords ?',
        a: "Parce que l’application comble le fossé entre « voir un mot » et « le maîtriser ». Chaque mot est accompagné de définitions claires, d'exemples et de traductions. Vous sauvegardez ceux qu'il vous faut en un seul geste, et nos flashcards basées sur la répétition espacée vous les réaffichent (pour de la reconnaissance, du rappel ou de la pratique en contexte) juste avant que vous ne les oubliiez. C’est gratuit, sans inscription et disponible hors ligne."
      }
    ],
    cardName: 'Les 500 mots les plus courants',
    cardDesc: "Le socle essentiel : les 500 mots les plus fréquents couvrent une immense partie de l’anglais quotidien, chacun accompagné d'une définition courte.",
    cardCount: '500 mots',
    listTitle: 'Les 500 mots anglais les plus courants — Liste gratuite avec traduction | OpenWords',
    listDescription:
      'Les 500 mots anglais les plus courants classés par fréquence, avec une définition courte et une traduction pour chacun. Une liste idéale pour les débutants (A1) — entraînez-vous avec des flashcards sur OpenWords.',
    listEyebrow: 'Liste de vocabulaire anglais',
    listH1Html: 'Les 500 mots anglais <em>les plus courants</em>',
    listSubhead:
      "Apprenez d’abord les mots qui font tout le gros du travail. Maîtriser le vocabulaire anglais le plus fréquent est le moyen le plus rapide de passer de la reconnaissance de quelques mots isolés à la compréhension globale d'une conversation. Chaque mot inclut sa traduction.",
    metricLabel: 'mots',
    crumbCurrent: '500 mots les plus courants',
    siblingsLabel: 'Listes de vocabulaire anglais',
    allLists: "Toutes les listes d'anglais →",
    jumpLabel: 'Passer à',
    bandTitle: 'Mots',
    listStepsH2: 'Apprenez cette liste en 4 étapes avec OpenWords',
    listStepsSub: 'Chaque mot de cette liste — ainsi que l’intégralité du dictionnaire — est directement intégré à l’application.',
    listTitleSuffix: 'vocabulaire anglais avec traduction | OpenWords',
    listMetaTail: 'Vocabulaire anglais avec traduction — apprenez-le avec des flashcards sur OpenWords.',
    stepDownload: { title: 'Téléchargez l’application', body: 'Installez OpenWords sur iOS ou Android — sans inscription.' },
    stepFindList: { title: 'Trouvez une liste', body: 'Parcourez les listes sélectionnées ou recherchez les mots dont vous avez besoin.' },
    stepOpenList: { title: 'Ouvrez cette liste', body: 'Retrouvez-la directement dans l’application ou recherchez les mots spécifiques dont vous avez besoin.' },
    stepAddWords: { title: 'Ajoutez des mots à votre liste', body: 'En un seul geste, enregistrez les mots que vous souhaitez apprendre dans votre liste personnelle.' },
    stepLearnCards: { title: 'Apprenez avec des cartes intelligentes', body: 'Révisez avec des flashcards sous différents formats, planifiées selon un calendrier de répétition espacée.' }
  },

  it: {
    hubTitle: 'Liste di parole in inglese — Vocabolario gratuito con traduzione | OpenWords',
    hubDescription:
      'Liste di vocaboli inglesi ordinate per frequenza, con definizioni brevi e traduzioni per ogni parola. Scegli una lista e studiala con le flashcard su OpenWords.',
    hubH1Html: 'Liste di <em>parole in inglese</em>',
    hubSub:
      'Liste di vocaboli inglesi selezionate con cura, complete di una breve definizione e traduzione per ogni parola. Scegli una lista e imparala parola per parola con la ripetizione spaziata su OpenWords.',
    hubStepsH2: 'Liste pronte da studiare su OpenWords',
    hubStepsSub: "Ogni lista è disponibile nell'app: dall'installazione al ripasso quotidiano in soli quattro passaggi.",
    faq: [
      {
        q: 'È meglio imparare le parole per frequenza o per argomento?',
        a: 'Entrambi gli approcci hanno la loro utilità. Una lista di frequenza costruisce le basi più rapidamente: le parole più comuni compaiono ovunque, offrendo il massimo miglioramento della comprensione con il minimo sforzo. Una lista tematica (viaggi, lavoro, hobby) ti fornisce più velocemente il vocabolario specifico che userai davvero. Molti studenti combinano i due metodi: usano una lista di frequenza per la base generale e liste tematiche per le parole che contano di più per loro.',
        open: true
      },
      {
        q: 'Quante parole inglesi servono per parlare fluentemente?',
        a: "Circa 3.000 famiglie di parole garantiscono una buona scioltezza nel quotidiano, ma le prime 1.000 coprono già circa l'85% dei discorsi di tutti i giorni. Imparare prima le parole più frequenti è il modo più rapido per migliorare la comprensione."
      },
      {
        q: 'Qual è la differenza tra vocabolario passivo e attivo?',
        a: "Il vocabolario passivo è composto dalle parole che riconosci quando leggi o ascolti; il vocabolario attivo include le parole che riesci a usare autonomamente quando parli e scrivi. Il bagaglio passivo è sempre più ampio, e il vero obiettivo della pratica è trasferire i vocaboli dal passivo all'attivo. Incontrare una parola in contesti diversi e a intervalli di tempo regolari (ripetizione spaziata) è il modo migliore per riuscirci."
      },
      {
        q: 'Qual è il modo più rapido per memorizzare una lista di parole?',
        a: 'Leggere una lista non significa memorizzarla. La ripetizione spaziata —ovvero rivedere una parola un attimo prima di dimenticarla— funziona molto meglio della semplice rilettura. È ancora più efficace quando ti eserciti con le parole in formati diversi: riconoscimento, richiamo attivo e uso nel contesto.'
      },
      {
        q: 'Perché dovresti studiare queste liste su OpenWords?',
        a: 'Perché l\'app colma il divario tra il "vedere una parola" e il "padroneggiarla". Ogni parola è accompagnata da definizioni chiare, esempi e traduzioni. Puoi salvare quelle di cui hai bisogno con un solo tocco, e le nostre flashcard basate sulla ripetizione spaziata te le ripropongono (per il riconoscimento, il richiamo attivo e la pratica nel contesto) proprio un attimo prima che tu possa dimenticarle. È gratis, senza registrazione e funziona offline.'
      }
    ],
    cardName: 'Le 500 parole più comuni',
    cardDesc: "Il nucleo essenziale: le 500 parole più frequenti coprono gran parte dell'inglese di tutti i giorni, ciascuna con una breve definizione.",
    cardCount: '500 parole',
    listTitle: 'Le 500 parole inglesi più comuni — Lista gratuita con traduzione | OpenWords',
    listDescription:
      'Le 500 parole inglesi più comuni ordinate per frequenza, ciascuna con una breve definizione e traduzione. Una lista perfetta per principianti (A1) — esercitati con le flashcard su OpenWords.',
    listEyebrow: 'Lista di parole in inglese',
    listH1Html: 'Le 500 parole inglesi <em>più comuni</em>',
    listSubhead:
      'Impara prima le parole che fanno il lavoro pesante. Dominare i vocaboli inglesi più frequenti è la via più rapida per passare dal riconoscere qualche termine sparso al comprendere il senso di una conversazione. Ciascuna parola include la traduzione.',
    metricLabel: 'parole',
    crumbCurrent: '500 parole più comuni',
    siblingsLabel: 'Liste di parole in inglese',
    allLists: 'Tutte le liste di inglese →',
    jumpLabel: 'Vai a',
    bandTitle: 'Parole',
    listStepsH2: 'Impara questa lista in 4 passaggi con OpenWords',
    listStepsSub: "Ogni parola di questa lista —e l'intero dizionario— è integrata direttamente nell'app.",
    listTitleSuffix: 'vocabolario inglese con traduzione | OpenWords',
    listMetaTail: 'Vocabolario inglese con traduzione — imparalo con le flashcard su OpenWords.',
    stepDownload: { title: "Scarica l'app", body: 'Installa OpenWords su iOS o Android, senza registrazione.' },
    stepFindList: { title: 'Trova una lista', body: 'Esplora le liste selezionate o cerca le parole specifiche di cui hai bisogno.' },
    stepOpenList: { title: 'Apri questa lista', body: "Trovala all'interno dell'app o cerca i termini specifici di cui hai bisogno." },
    stepAddWords: { title: 'Aggiungi parole alla tua lista', body: 'Salva le parole che vuoi imparare nella tua lista personale con un solo tocco.' },
    stepLearnCards: { title: 'Impara con le flashcard intelligenti', body: 'Ripassa i vocaboli in diversi formati, con un programma basato sulla ripetizione spaziata.' }
  },

  cs: {
    hubTitle: 'Seznamy anglických slov — slovní zásoba zdarma s překladem | OpenWords',
    hubDescription:
      'Seznamy anglických slov seřazené podle četnosti. Každé slovo obsahuje krátkou definici a překlad. Vyberte si seznam a procvičujte ho pomocí kartiček v OpenWords.',
    hubH1Html: 'Seznamy <em>anglických slov</em>',
    hubSub:
      'Pečlivě sestavené seznamy anglické slovní zásoby – každé slovo má krátkou definici a překlad. Vyberte si seznam a ovládejte ho slovíčko po slovíčku díky intervalovému opakování v aplikaci OpenWords.',
    hubStepsH2: 'Seznamy připravené k učení v aplikaci OpenWords',
    hubStepsSub: 'Všechny tyto seznamy najdete přímo v aplikaci – od instalace ke každodennímu opakování ve čtyřech krocích.',
    faq: [
      {
        q: 'Je lepší učit se slova podle četnosti, nebo podle témat?',
        a: 'Oba přístupy mají své opodstatnění. Frekvenční seznam nejrychleji vybuduje základy – nejčastější slova potkáte všude, takže vám přinesou největší posun v porozumění s minimem úsilí. Tematické seznamy (cestování, práce, koníčky) vám zase rychleji dodají konkrétní slovní zásobu, kterou skutečně využijete v praxi. Mnoho studentů kombinuje obojí: frekvenční seznam pro celkový přehled a tematické seznamy pro slovíčka, která jsou pro ně osobně důležitá.',
        open: true
      },
      {
        q: 'Kolik anglických slov je potřeba pro plynulou komunikaci?',
        a: 'Přibližně 3 000 slovních rodin vám zajistí pohodlnou každodenní plynulost, ale hned prvních 1 000 slov pokryje kolem 85 % běžné řeči. Učit se nejprve nejčastější slova je ten nejrychlejší způsob, jak začít rozumět víc.'
      },
      {
        q: 'Jaký je rozdíl mezi pasivní a aktivní slovní zásobou?',
        a: 'Pasivní slovní zásobu tvoří slova, která rozpoznáte při čtení nebo poslechu. Aktivní slovní zásoba zahrnuje slova, která sami dokážete použít při mluvení a psaní. Pasivní zásoba je vždy větší a hlavním cílem procvičování je přesouvat slova z pasivní do aktivní. Toho nejlépe dosáhnete tím, že se se slovíčkem setkáváte v různých kontextech s časovými rozestupy (intervalové opakování).'
      },
      {
        q: 'Jak si nejrychleji zapamatovat seznam slov?',
        a: 'Pouhé přečtení seznamu neznamená, že jste si slova zapamatovali. Intervalové opakování – kdy se ke slovu vrátíte těsně předtím, než ho zapomenete – funguje o mnoho lépe než opakované čtení. Obzvlášť efektivní je, když se slovíčky pracujete v různých formátech: od rozpoznávání přes aktivní vybavování až po procvičování v kontextu.'
      },
      {
        q: 'Proč se tyto seznamy učit právě v OpenWords?',
        a: 'Protože aplikace překlenuje mezeru mezi tím, když slovo jen „vidíte“, a tím, když ho skutečně „ovládáte“. Každé slovo obsahuje srozumitelnou definici, příklady a překlady. Potřebná slovíčka si uložíte jedním klepnutím a naše kartičky s intervalovým opakováním vám je připomenou (při rozpoznávání, vybavování i v kontextu) přesně ve chvíli, kdy byste je začali zapomínat. Je to zdarma, bez registrace a funguje to offline.'
      }
    ],
    cardName: '500 nejčastějších slov',
    cardDesc: 'Jazykové jádro: 500 nejčastějších slov pokrývá obrovskou část každodenní angličtiny, každé včetně krátké definice.',
    cardCount: '500 slov',
    listTitle: '500 nejčastějších anglických slov — seznam s překladem zdarma | OpenWords',
    listDescription:
      '500 nejčastějších anglických slov seřazených podle četnosti, každé s krátkou definicí a překladem. Ideální seznam pro začátečníky (A1) – procvičujte je na kartičkách v OpenWords.',
    listEyebrow: 'Seznam anglických slov',
    listH1Html: '500 nejčastějších <em>anglických slov</em>',
    listSubhead:
      'Naučte se nejprve slova, která odvedou nejvíc těžké práce. Zvládnutí nejčastějších anglických slov je ta nejrychlejší cesta, jak přejít od rozpoznávání pár výrazů k tomu, že skutečně pochopíte, o čem je v rozhovoru řeč. U každého slova najdete překlad.',
    metricLabel: 'slov',
    crumbCurrent: '500 nejčastějších slov',
    siblingsLabel: 'Seznamy anglických slov',
    allLists: 'Všechny anglické seznamy →',
    jumpLabel: 'Přejít na',
    bandTitle: 'Slova',
    listStepsH2: 'Zvládněte tento seznam ve 4 krocích s OpenWords',
    listStepsSub: 'Každé slovo z tohoto seznamu – a dokonce i celý slovník – jsou integrované přímo v aplikaci.',
    listTitleSuffix: 'anglická slovní zásoba s překladem | OpenWords',
    listMetaTail: 'Anglická slovní zásoba s překladem — učte se ji pomocí kartiček v OpenWords.',
    stepDownload: { title: 'Stáhněte si aplikaci', body: 'Nainstalujte si OpenWords pro iOS nebo Android – zcela bez registrace.' },
    stepFindList: { title: 'Najděte si seznam', body: 'Procházejte hotové seznamy nebo vyhledejte konkrétní slova, která potřebujete.' },
    stepOpenList: { title: 'Otevřete tento seznam', body: 'Najděte ho přímo v aplikaci nebo vyhledejte konkrétní slova, která potřebujete.' },
    stepAddWords: { title: 'Přidejte slova do svého seznamu', body: 'Jedním klepnutím si uložte slovíčka, která se chcete učit, do osobního seznamu.' },
    stepLearnCards: { title: 'Učte se s chytrými kartičkami', body: 'Procvičujte slova v různých formátech podle plánu intervalového opakování.' }
  },

  tr: {
    hubTitle: 'İngilizce Kelime Listeleri — Türkçe Çevirili Ücretsiz Kelime Setleri | OpenWords',
    hubDescription:
      'Kullanım sıklığına göre sıralanmış, her kelime için kısa tanım ve Türkçe çeviri içeren İngilizce kelime listeleri. Bir liste seç ve OpenWords ile tek dokunuşla kelime kartlarıyla çalışmaya başla.',
    hubH1Html: 'İngilizce <em>Kelime Listeleri</em>',
    hubSub:
      "Özenle hazırlanmış İngilizce kelime listeleri — her kelime için kısa bir tanım ve çeviri. İstediğin listeyi seç ve OpenWords'ün aralıklı tekrar sistemiyle kelime kelime uzmanlaş.",
    hubStepsH2: 'OpenWords ile Öğrenmeye Hazır Listeler',
    hubStepsSub: 'Sitedeki tüm listeler uygulamada da mevcut; kurulumdan günlük tekrara geçmek sadece dört adım.',
    faq: [
      {
        q: 'Kelimeleri kullanım sıklığına göre mi yoksa konularına göre mi öğrenmeliyim?',
        a: 'Her iki yaklaşımın da kendine göre avantajları var. Sıklık listeleri en hızlı şekilde temel oluşturmanı sağlar; en yaygın kelimeler her yerde karşına çıkacağı için en az çabayla anlama becerinde büyük bir sıçrama yaşatır. Konu listeleri (seyahat, iş, hobiler) ise günlük hayatta gerçekten kullanacağın spesifik kelimeleri daha hızlı kazandırır. Birçok öğrenci ikisini bir arada yürütür: Genel kelime altyapısı için sıklık listelerini, kişisel olarak ihtiyaç duydukları alanlar içinse konu listelerini kullanırlar.',
        open: true
      },
      {
        q: 'Akıcı şekilde İngilizce konuşabilmek için kaç kelime bilmek gerekir?',
        a: "Yaklaşık 3.000 kelime ailesi günlük hayatta rahat bir akıcılık yakalamanı sağlar; ancak ilk 1.000 kelime bile günlük konuşmaların yaklaşık %85'ini kapsamaya yeterlidir. Öğrenmeye en sık kullanılan kelimelerle başlamak, anlama seviyeni artırmanın en hızlı yoludur."
      },
      {
        q: 'Pasif ve aktif kelime dağarcığı arasındaki fark nedir?',
        a: 'Pasif kelime dağarcığı, okurken veya dinlerken anlamını çıkarabildiğin kelimelerden oluşur. Aktif kelime dağarcığı ise konuşurken ve yazarken kendi başına kullanabildiğin kelimelerdir. Pasif dağarcık her zaman daha geniş bir alanı kapsar; dil öğrenimindeki asıl amaç, kelimeleri pasiften aktife taşımaktır. Bir kelimeyle zamana yayılmış şekilde farklı bağlamlarda karşılaşmak bu geçişi sağlar.'
      },
      {
        q: 'Bir kelime listesini ezberlemenin en hızlı yolu nedir?',
        a: 'Bir kelime listesini sadece okumak, onu hafızaya kazımakla aynı şey değildir. Aralıklı tekrar sistemi —yani bir kelimeyi tam unutmak üzereyken yeniden karşına çıkarmak— tekrar tekrar okumaktan çok daha etkilidir. Kelimeyi farklı formatlarda (tanıma, aktif hatırlama ve bağlam içinde kullanma) pratik ettiğinde bu yöntem çok daha güçlü sonuçlar verir.'
      },
      {
        q: 'Neden bu kelime listelerini OpenWords ile öğrenmelisin?',
        a: 'Çünkü OpenWords, bir kelimeyi sadece "görmek" ile ona gerçekten "hükmetmek" arasındaki boşluğu kapatır. Her kelime net bir tanım, örnek cümleler ve çevirilerle birlikte gelir. İhtiyacın olanları tek dokunuşla kaydedebilirsin. Aralıklı tekrar kartlarımız ise kelimeleri tam unutmak üzereyken (tanıma, hatırlama ve bağlam içi pratik olarak) karşına getirir. Üstelik tamamen ücretsizdir, kayıt gerektirmez ve çevrimdışı çalışır.'
      }
    ],
    cardName: 'En Sık Kullanılan 500 Kelime',
    cardDesc: 'Dilin çekirdeği: En sık kullanılan 500 kelime, her biri kısa bir tanım eşliğinde günlük İngilizcenin çok büyük bir kısmını kapsar.',
    cardCount: '500 Kelime',
    listTitle: 'En Sık Kullanılan 500 İngilizce Kelime — Türkçe Çevirili Ücretsiz Liste | OpenWords',
    listDescription:
      'Kullanım sıklığına göre sıralanmış, her biri kısa tanım ve Türkçe çeviri içeren en sık 500 İngilizce kelime. Yeni başlayanlar (A1) için ideal olan bu listeyi OpenWords kelime kartlarıyla hemen öğren.',
    listEyebrow: 'İngilizce Kelime Listesi',
    listH1Html: 'En Sık Kullanılan 500 <em>İngilizce Kelime</em>',
    listSubhead:
      'Önce asıl yükü sırtlayan kelimeleri öğren. En sık kullanılan İngilizce kelimeler, sadece birkaç kelimeyi yarım yamalak tanımaktan konuşulanları rahatça takip edebilmeye giden en hızlı yoldur. Her kelime Türkçe çevirisiyle birlikte sunulmuştur.',
    metricLabel: 'kelime',
    crumbCurrent: 'En Sık 500 Kelime',
    siblingsLabel: 'İngilizce Kelime Listeleri',
    allLists: 'Tüm İngilizce Listeleri →',
    jumpLabel: 'Doğrudan Git',
    bandTitle: 'Kelimeler',
    listStepsH2: 'Bu Listeyi OpenWords ile 4 Adımda Öğren',
    listStepsSub: 'Bu listedeki her kelime ve tüm sözlük altyapısı doğrudan uygulamanın içinde yer alır.',
    listTitleSuffix: 'Türkçe çevirili İngilizce kelimeler | OpenWords',
    listMetaTail: 'Türkçe çevirili İngilizce kelimeler — OpenWords kelime kartlarıyla öğren.',
    stepDownload: { title: 'Uygulamayı indir', body: "OpenWords'ü iOS veya Android'e yükle; kayıt olmana gerek yok." },
    stepFindList: { title: 'Bir liste bul', body: 'Hazır listelere göz at veya öğrenmek istediğin kelimeleri ara.' },
    stepOpenList: { title: 'Bu listeyi aç', body: 'Listeyi uygulama içinde kolayca bul veya ihtiyacın olan spesifik kelimeleri ara.' },
    stepAddWords: { title: 'Kelimeleri listene ekle', body: 'Öğrenmek istediğin kelimeleri tek dokunuşla kişisel listene kaydet.' },
    stepLearnCards: { title: 'Akıllı kelime kartlarıyla öğren', body: 'Aralıklı tekrar algoritmasına göre planlanan farklı formatlardaki kartlarla pratik yap.' }
  }
};
