export interface Treatment {
  slug: string;
  title: string;
  shortDescription: string;
  duration: string;
  estimatedPrice: string;
  icon: string;
  content: TreatmentSection[];
}

export interface TreatmentSection {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
}

export const treatments: Treatment[] = [
  {
    slug: "akupunktur",
    title: "Akupunktur",
    shortDescription: "Over 5.000 år gammel behandling fra traditionel kinesisk medicin. Tynde nåle stimulerer kroppens energibaner for smertelindring, afslapning og balance.",
    duration: "60–75 min",
    estimatedPrice: "550 kr.",
    icon: "✦",
    content: [
      {
        heading: "Hvad er akupunktur?",
        paragraphs: [
          "Akupunktur stammer fra Kina og er en del af traditionel kinesisk medicin. Behandlingsformen menes at være over 5.000 år gammel. Akupunktur har siden spredt sig til resten af verden og blev især populær i Europa og USA i 1900-tallet. I dag bruges den både som alternativ behandling og som supplement til almindelig lægebehandling."
        ],
      },
      {
        heading: "Hvordan foregår akupunktur?",
        paragraphs: [
          "Ved akupunktur stikker en uddannet behandler meget tynde nåle ind i bestemte punkter på kroppen. Disse punkter kaldes akupunkturpunkter og ligger langs kroppens energibaner, som kaldes meridianer."
        ],
        bullets: [
          "Du bliver lagt behagelig på en briks",
          "Jeg forklarer hele vejen hvad jeg gør så du kan føle dig tryg",
          "Tynde nåle sættes forsigtigt i huden",
          "Nålene sidder i kroppen i cirka 30-45 minutter"
        ],
      },
      {
        heading: "Hvordan påvirker akupunktur kroppen?",
        paragraphs: [
          "Ifølge traditionel kinesisk medicin har kroppen en livsenergi, kaldet qi, som strømmer gennem meridianerne. Hvis energien blokeres, kan man få smerter eller sygdom. Akupunktur skal hjælpe med at genoprette balancen og få energien til at flyde frit igen."
        ],
        bullets: [
          "Stimulere nervesystemet",
          "Øge kroppens produktion af endorfiner (smertelindrende stoffer)",
          "Forbedre blodcirkulationen",
          "Påvirke muskler og bindevæv"
        ],
      },
      {
        heading: "Hvad er akupunktur godt for?",
        bullets: [
          "Smerter i ryg, nakke og skuldre",
          "Hovedpine og migræne",
          "Sportsskader",
          "Spændinger og stress",
          "Søvnløshed",
          "Menstruationssmerter",
          "Allergi",
          "Kvalme",
          "Og meget mere..."
        ],
        paragraphs: [
          "Giv endelig et kald hvis du er i tvivl om jeg kan hjælpe. Effekten kan variere fra person til person, og det er vigtigt at søge en uddannet behandler."
        ],
      },
      {
        heading: "Cupping (kopping)",
        paragraphs: [
          "Cupping er en god og effektiv behandling efter akupunktur, især ved nakke-, skulder- og rygsmerter. Ved cupping placeres kopper på huden og der skabes undertryk (vakuum), så huden og det øverste bindevæv suges op i koppen."
        ],
        bullets: [
          "Lindrer muskelspændinger og smerter",
          "Øger blodcirkulationen",
          "Fremmer restitution efter sport",
          "Kan lindre hovedpine og migræne",
          "Dybt afslappende"
        ],
      },
    ],
  },
  {
    slug: "ansigtsakupunktur",
    title: "Ansigtsakupunktur",
    shortDescription: "Kosmetisk akupunktur der stimulerer hudens kollagenproduktion og reducerer fine linjer – et naturligt alternativ til Botox og fillers.",
    duration: "45–60 min",
    estimatedPrice: "650 kr.",
    icon: "❋",
    content: [
      {
        heading: "Hvad er ansigtsakupunktur?",
        paragraphs: [
          "Ansigtsakupunktur bygger på principper fra traditionel kinesisk medicin og klassisk akupunktur. Behandlingen stimulerer kroppens energibaner (meridianer), øger blodcirkulationen og aktiverer hudens egen produktion af kollagen."
        ],
      },
      {
        heading: "Hvad bruges det til?",
        bullets: [
          "Reducere fine linjer og rynker",
          "Forbedre hudens elasticitet",
          "Mindske hævelser og poser under øjnene",
          "Give mere glød og spændstighed",
          "Afhjælpe spændinger i kæbe og ansigt",
          "Hovedpine og stress"
        ],
        paragraphs: ["Det betragtes ofte som et naturligt alternativ til fx Botox og fillers."],
      },
      {
        heading: "Hvordan foregår en behandling?",
        bullets: [
          "Indledende samtale om helbred og ønsker",
          "Nåle placeres i specifikke punkter i ansigtet",
          "Ofte kombineret med nåle på kroppen for helhedsvirkning",
          "Behandlingen varer typisk 45–60 minutter"
        ],
        paragraphs: ["Man anbefaler ofte et forløb på 6–10 behandlinger for synlige resultater, og derefter 1 gang om måneden for vedligeholdelse."],
      },
      {
        heading: "Mulige men milde bivirkninger",
        bullets: [
          "Let rødme",
          "Små blå mærker",
          "Midlertidig ømhed"
        ],
        paragraphs: ["Må ikke modtages hvis man har fået botox eller filler inden for de sidste 6 måneder."],
      },
    ],
  },
  {
    slug: "japansk-ansigtsloftning",
    title: "Japansk Ansigtsløftning",
    shortDescription: "Naturligt facelift der kombinerer ansigtsmassage, akupressur og lymfedrænage. Løfter og opstrammer ansigtet uden kirurgi.",
    duration: "60 min",
    estimatedPrice: "700 kr.",
    icon: "✿",
    content: [
      {
        heading: "Hvad er japansk ansigtsløftning?",
        paragraphs: [
          "Japansk ansigtsløftning er en naturlig ansigtsbehandling, der kombinerer teknikker fra ansigtsmassage, akupressur og lymfedrænage. Den er inspireret af traditioner fra Japan og kaldes ofte et \"naturligt facelift\", fordi den arbejder med muskler, bindevæv og energibaner – uden kirurgi."
        ],
      },
      {
        heading: "Hvad er det godt for?",
        bullets: [
          "Reducerer spændinger i ansigt og kæbe",
          "Giver øget glød og friskere udstråling",
          "Mindsker hævelser omkring øjne og kinder",
          "Kan reducere fine linjer",
          "Dyb afslapning – aktiverer kroppens ro- og hvilesystem"
        ],
      },
      {
        heading: "Hvordan foregår det?",
        paragraphs: ["En behandling varer ca. 60 minutter og indeholder:"],
        bullets: [
          "Dyb afrikansk ansigts-zoneterapi med muskler, bindevæv og akupressurpunkter",
          "Lymfedrænage med blide strøg",
          "Dybderensende ansigtsmaske med hånd-/fod- eller hovedbundsmassage",
          "Afsluttende beroligende teknikker for balance og ro"
        ],
      },
      {
        heading: "Gør det ondt?",
        paragraphs: [
          "Normalt ikke. Nogle punkter kan være ømme ved spændinger, men behandlingen skal ikke føles smertefuld. Mange føler dyb afslapning og falder tit i en let søvn."
        ],
      },
      {
        heading: "Hvor længe holder effekten?",
        bullets: [
          "Ofte ses en friskere og mere \"løftet\" effekt med det samme",
          "Ved gentagne behandlinger kan resultatet holde længere",
          "Mange vælger et forløb på 4–6 behandlinger"
        ],
      },
    ],
  },
  {
    slug: "luksus-ansigtsmassage",
    title: "Luksus Ansigtsmassage",
    shortDescription: "Luksuriøs ansigtsbehandling med afrensning, forkur og dybdegående massage. 90 minutters ren forkælelse for huden.",
    duration: "90 min",
    estimatedPrice: "750 kr.",
    icon: "✧",
    content: [
      {
        heading: "Luksus ansigtsmassage med afrensning og forkur",
        paragraphs: [
          "En luksuriøs og effektiv ansigtsbehandling, der både plejer huden og giver dyb afslapning."
        ],
      },
      {
        heading: "Hvad indebærer behandlingen?",
        bullets: [
          "Afrensning – grundig rens af huden for at fjerne makeup, snavs og overskydende talg",
          "Forkur – koncentreret produkt med aktive ingredienser målrettet din hudtype",
          "Dybdegående ansigtsmassage der øger blodcirkulation og stimulerer lymfedrænage"
        ],
      },
      {
        heading: "Fordele ved behandlingen",
        bullets: [
          "Friskere og mere strålende hud",
          "Forbedret fugtbalance",
          "Mindre hævelse og spændinger",
          "Øget velvære og afslapning"
        ],
        paragraphs: ["Behandlingen egner sig til de fleste hudtyper og kan med fordel gentages som en del af en fast hudplejerutine."],
      },
    ],
  },
  {
    slug: "garra-rufa",
    title: "Garra Rufa Fiskespa",
    shortDescription: "Unik spa-oplevelse hvor små Garra Rufa-fisk eksfolierer huden på dine fødder og efterlader dem silkebløde.",
    duration: "15–30 min",
    estimatedPrice: "250 kr.",
    icon: "🐟",
    content: [
      {
        heading: "Hvad er Garra Rufa?",
        paragraphs: [
          "Garra Rufa er en lille karpefisk, som naturligt lever i Mellemøsten (bl.a. Tyrkiet). Den har ingen tænder, men små sugeskiver/munddele, som gør at den kan \"nappe\" i huden."
        ],
      },
      {
        heading: "Hvordan foregår en behandling?",
        bullets: [
          "Du vasker fødderne grundigt først",
          "Du sætter fødderne i et bassin med mange Garra Rufa-fisk",
          "Fiskene napper forsigtigt i det yderste lag døde hudceller",
          "Behandlingen varer typisk 15–30 minutter"
        ],
        paragraphs: ["Det kilder for mange – nogle oplever det som en let prikkende fornemmelse. Det føles som at gå på puder efter behandlingen."],
      },
      {
        heading: "Hvad er det godt for?",
        bullets: [
          "Fjerner døde hudceller (eksfoliering)",
          "Kan gøre huden blødere og glattere",
          "Øger midlertidigt blodcirkulationen i fødderne",
          "Nogle med psoriasis oplever symptomlindring"
        ],
      },
      {
        heading: "Sikkerhed",
        paragraphs: [
          "Klinikkens bassin har en pumpe der filtrerer vandet ca. 4 gange i døgnet. Fødderne afvaskes grundigt inden brug. Ikke egnet for personer med sår, hudsygdom, nedsat immunforsvar eller diabetes."
        ],
      },
    ],
  },
  {
    slug: "infrarod-sauna-isbad",
    title: "Infrarød Sauna & Isbad",
    shortDescription: "Dybdegående smertelindring, detox og restitution med infrarød sauna – eventuelt kombineret med forfriskende isbad.",
    duration: "30–60 min",
    estimatedPrice: "350 kr.",
    icon: "🔥",
    content: [
      {
        heading: "Infrarød sauna",
        paragraphs: [
          "Infrarød sauna er særligt god til dybdegående smertelindring i muskler og led, effektiv afgiftning via intens svedproduktion, samt forbedret blodcirkulation og stressreduktion. De infrarøde stråler trænger dybere ind i kroppen end traditionel varme."
        ],
      },
      {
        heading: "Fordele ved infrarød sauna",
        bullets: [
          "Smertelindring og restitution – lindrer ømme muskler, stive led og kroniske smerter",
          "Afgiftning (Detox) – øget svedproduktion udskiller affaldsstoffer",
          "Forbedret blodcirkulation og hjertefunktion",
          "Vægttab og forbrænding – op til 300-600 kalorier på 30 minutter",
          "Stressreduktion og velvære via endorfiner",
          "Hudpleje – forbedrer hudens elasticitet og glød"
        ],
      },
      {
        heading: "Isbad – for de modige",
        paragraphs: [
          "For de mere seje kan infrarød sauna kombineres med isbad. Kulden dæmper inflammation, mindsker hævelser og kan stimulere immunforsvaret. Typisk 2-5 minutter i 10-15°C vand (15-17°C for begyndere)."
        ],
        bullets: [
          "Hurtigere muskelrestitution",
          "Øger endorfiner og dopamin – forbedret humør og fokus",
          "Stimulerer immunforsvaret",
          "Bedre søvn via øget melatonin",
          "Øget energi og vågenhed"
        ],
      },
    ],
  },
  {
    slug: "bars",
    title: "BARS-behandling",
    shortDescription: "Blid berøring på 32 punkter på hovedet frigør begrænsende mønstre og skaber dyb mental ro og klarhed.",
    duration: "60 min",
    estimatedPrice: "500 kr.",
    icon: "◯",
    content: [
      {
        heading: "Hvad er BARS?",
        paragraphs: [
          "BARS er en alternativ behandlingsmetode udviklet inden for systemet Access Consciousness. BARS står for \"Body And Related Systems\". Metoden består af blid berøring på 32 specifikke punkter på hovedet. Ifølge tilhængere lagrer disse punkter tanker, følelser og overbevisninger, og ved at stimulere dem kan man \"frigøre\" begrænsende mønstre."
        ],
      },
      {
        heading: "Hvordan foregår en behandling?",
        bullets: [
          "Du ligger fuldt påklædt på en briks",
          "Behandleren holder let fingrene på forskellige punkter på hovedet",
          "En session varer typisk 60 minutter",
          "Det opleves ofte som meget afslappende"
        ],
      },
      {
        heading: "Hvad kan det hjælpe med?",
        bullets: [
          "Reducere stress og tankemylder",
          "Give bedre søvn",
          "Mindske angst",
          "Øge mental klarhed",
          "Skabe større ro i kroppen"
        ],
        paragraphs: ["BARS betragtes som en alternativ behandling. Det bør ikke erstatte lægelig eller psykologisk behandling ved diagnosticerede lidelser."],
      },
    ],
  },
  {
    slug: "oreakupunktur",
    title: "Øreakupunktur",
    shortDescription: "Stimulering af bestemte punkter på øret påvirker krop og psyke. Effektiv mod stress, smerter, søvnproblemer og afvænning.",
    duration: "45–60 min",
    estimatedPrice: "450 kr.",
    icon: "◎",
    content: [
      {
        heading: "Hvad er øreakupunktur?",
        paragraphs: [
          "Øreakupunktur er en behandlingsform, hvor man stimulerer bestemte punkter på øret for at påvirke kroppen og psyken. Metoden bygger på tanken om, at hele kroppen \"afspejles\" i øret – lidt som et kort over kroppen."
        ],
      },
      {
        heading: "Hvordan virker det?",
        paragraphs: [
          "Når et punkt i øret stimuleres med tynde nåle, små ørefrø eller nåleplastre, sendes signaler via nervesystemet til hjernen. Øret har mange nerveforbindelser, bl.a. til vagusnerven, hvilket kan forklare den beroligende effekt."
        ],
        bullets: [
          "Påvirker smerteoplevelse",
          "Reducerer stressniveau",
          "Balancerer hormoner",
          "Dæmper afhængighedstrang"
        ],
      },
      {
        heading: "Hvad bruges det til?",
        bullets: [
          "Stress og angst",
          "Søvnproblemer",
          "Smerter (ryg, nakke, hovedpine)",
          "Migræne",
          "Rygestop",
          "Alkohol- og stofafvænning",
          "Vægttab (appetitregulering)"
        ],
      },
      {
        heading: "Mulige bivirkninger",
        paragraphs: ["Bivirkningerne er milde:"],
        bullets: [
          "Let ømhed",
          "Små blå mærker",
          "Kortvarig svimmelhed"
        ],
      },
    ],
  },
];
