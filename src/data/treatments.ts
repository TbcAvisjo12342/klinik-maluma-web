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
    duration: "ca. 30 min",
    estimatedPrice: "325 kr.",
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
          "Nålene sidder i kroppen i cirka 20-30 minutter"
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
          "Giv endelig et kald hvis du er i tvivl om jeg kan hjælpe. Effekten kan variere fra person til person, og det er vigtigt at søge en uddannet behandler.",
          "Ved længere forløb eller vedligeholdelse: 250 kr."
        ],
      },
    ],
  },
  {
    slug: "ansigtsakupunktur",
    title: "Ansigtsakupunktur",
    shortDescription: "Kosmetisk akupunktur der stimulerer hudens kollagenproduktion og reducerer fine linjer – et naturligt alternativ til Botox og fillers.",
    duration: "ca. 30 min",
    estimatedPrice: "250 kr.",
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
          "Behandlingen varer typisk 30 minutter"
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
        paragraphs: ["Må ikke modtages hvis man har fået Botox eller filler inden for de sidste 3 måneder."],
      },
    ],
  },
  {
    slug: "japansk-ansigtsloftning",
    title: "Japansk Ansigtslifting",
    shortDescription: "Naturligt facelift der kombinerer ansigtsmassage, akupressur og lymfedrænage. Løfter og opstrammer ansigtet uden kirurgi.",
    duration: "ca. 60 min",
    estimatedPrice: "550 kr.",
    icon: "✿",
    content: [
      {
        heading: "Hvad er japansk ansigtslifting?",
        paragraphs: [
          "Japansk ansigtslifting er en naturlig ansigtsbehandling, der kombinerer teknikker fra ansigtsmassage, akupressur og lymfedrænage. Den er inspireret af traditioner fra Japan og kaldes ofte et \"naturligt facelift\", fordi den arbejder med muskler, bindevæv og energibaner – uden kirurgi."
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
    slug: "luksus-ansigtsbehandling",
    title: "Luksus Ansigtsbehandling",
    shortDescription: "Luksuriøs ansigtsbehandling med afrensning, forkur og dybdegående massage. 90 minutters ren forkælelse for huden.",
    duration: "ca. 90 min",
    estimatedPrice: "675 kr.",
    icon: "✧",
    content: [
      {
        heading: "Luksus ansigtsbehandling med afrensning og forkur",
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
    slug: "diamant-slibning",
    title: "Diamant Slibning",
    shortDescription: "Avanceret hudfornyelse med diamantslibning der fjerner døde hudceller og stimulerer cellefornyelsen for en glattere og mere strålende hud.",
    duration: "ca. 120 min",
    estimatedPrice: "795 kr.",
    icon: "💎",
    content: [
      {
        heading: "Hvad er diamant slibning?",
        paragraphs: [
          "Diamant slibning (diamant mikrodermabrasion) er en skånsom og effektiv hudplejebehandling, hvor et diamantbesat hoved forsigtigt eksfolierer det yderste lag af huden. Behandlingen fjerner døde hudceller, urenheder og fine linjer, og stimulerer hudens naturlige cellefornyelse."
        ],
      },
      {
        heading: "Hvordan foregår behandlingen?",
        bullets: [
          "Huden renses grundigt inden behandlingen",
          "Et diamantbesat hoved føres henover huden med let tryk",
          "Døde hudceller suges væk samtidig med slibningen",
          "Afslutning med beroligende serum og fugtighedscreme",
          "Behandlingen varer ca. 120 minutter inkl. efterbehandling"
        ],
      },
      {
        heading: "Hvad er det godt for?",
        bullets: [
          "Forfinelse af porer og hudtekstur",
          "Reduktion af fine linjer og rynker",
          "Behandling af pigmentforandringer og solfejl",
          "Forbedring af ar og acne-ar",
          "Øget optagelse af hudplejeprodukter",
          "Mere strålende og ungdommeligt udseende"
        ],
      },
      {
        heading: "Hvem kan få behandlingen?",
        paragraphs: [
          "Diamant slibning egner sig til de fleste hudtyper. Det anbefales at undgå direkte sol i dagene efter behandlingen og at bruge solbeskyttelse. Ved meget følsom hud eller aktive hudproblemer bør du konsultere behandleren forinden."
        ],
      },
    ],
  },
  {
    slug: "cupping",
    title: "Cupping (Kopping)",
    shortDescription: "Traditionel behandling med kopper der skaber undertryk på huden. Lindrer muskelspændinger, øger blodcirkulationen og fremmer restitution.",
    duration: "ca. 15–20 min",
    estimatedPrice: "200 kr.",
    icon: "⊙",
    content: [
      {
        heading: "Hvad er cupping?",
        paragraphs: [
          "Cupping (kopping) er en traditionel behandlingsform med rødder i kinesisk medicin. Ved cupping placeres kopper på huden, og der skabes et undertryk (vakuum), så huden og det øverste bindevæv suges op i koppen. Dette øger blodcirkulationen lokalt og hjælper med at løsne spændinger."
        ],
      },
      {
        heading: "Hvordan foregår en behandling?",
        bullets: [
          "Kopper placeres på de områder der har behov – typisk ryg, nakke eller skuldre",
          "Undertryk skabes enten med varme eller mekanisk",
          "Kopperne sidder på i 5–15 minutter",
          "Behandlingen varer ca. 15–20 minutter i alt"
        ],
      },
      {
        heading: "Hvad er cupping godt for?",
        bullets: [
          "Lindrer muskelspændinger og smerter",
          "Øger blodcirkulationen",
          "Fremmer restitution efter sport",
          "Kan lindre hovedpine og migræne",
          "Dybt afslappende",
          "Mindsker inflammation"
        ],
      },
      {
        heading: "Er der bivirkninger?",
        paragraphs: [
          "Der kan forekomme midlertidige runde mærker på huden, som typisk forsvinder efter et par dage. Behandlingen bør undgås ved blødningsforstyrrelser eller åbne sår."
        ],
      },
    ],
  },
  {
    slug: "garra-rufa",
    title: "Garra Rufa Fiskespa",
    shortDescription: "Unik spa-oplevelse hvor små Garra Rufa-fisk eksfolierer huden på dine fødder og efterlader dem silkebløde.",
    duration: "30 min",
    estimatedPrice: "85 kr.",
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
          "Undlad at smøre fødder og ben med medicinske cremer inden behandlingen",
          "Du sætter fødderne i et bassin med mange Garra Rufa-fisk",
          "Fiskene napper forsigtigt i det yderste lag døde hudceller",
          "Behandlingen varer 30 minutter"
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
        heading: "Priser",
        paragraphs: [
          "Enkelt behandling (30 min): 85 kr. 10-turskort: 550 kr."
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
    slug: "massagestol",
    title: "Massagestol",
    shortDescription: "Slap af i vores avancerede massagestol der bearbejder hele kroppen med varme og massage. Perfekt til en hurtig pause i hverdagen.",
    duration: "20 min",
    estimatedPrice: "45 kr.",
    icon: "🪑",
    content: [
      {
        heading: "Hvad er massagestolbehandling?",
        paragraphs: [
          "Vores professionelle massagestol tilbyder en fuldkropsmassage der kombinerer forskellige massageteknikker. Stolen bearbejder ryg, nakke, skuldre, arme og ben med præcise bevægelser og behagelig varme."
        ],
      },
      {
        heading: "Hvad kan du forvente?",
        bullets: [
          "20 minutters fuldkropsmassage",
          "Forskellige massageprogrammer tilpasset dine behov",
          "Varmebehandling for ekstra afslapning",
          "Bearbejdning af spændinger i ryg, nakke og skuldre"
        ],
      },
      {
        heading: "Hvem er det for?",
        paragraphs: [
          "Massagestolen er perfekt til dig, der ønsker en hurtig og effektiv afspænding. Den er også ideel som supplement til andre behandlinger – fx efter infrarød sauna og isbad."
        ],
      },
      {
        heading: "Priser",
        paragraphs: [
          "Enkelt behandling (20 min): 45 kr. 10-turskort: 350 kr."
        ],
      },
    ],
  },
  {
    slug: "infrarod-sauna-isbad",
    title: "Infrarød Sauna & Isbad",
    shortDescription: "Dybdegående smertelindring, detox og restitution med infrarød sauna – eventuelt kombineret med forfriskende isbad.",
    duration: "30–60 min",
    estimatedPrice: "100 kr.",
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
      {
        heading: "Priser",
        paragraphs: [
          "Infrarød sauna (30 min): 100 kr. Isbad (30 min): 100 kr. Infrarød sauna & isbad kombi (60 min): 200 kr. – plus 20 min i massagestolen."
        ],
      },
    ],
  },
  {
    slug: "bars",
    title: "BARS-behandling",
    shortDescription: "Blid berøring på 32 punkter på hovedet frigør begrænsende mønstre og skaber dyb mental ro og klarhed.",
    duration: "ca. 45 min",
    estimatedPrice: "350 kr.",
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
          "En session varer typisk 45 minutter",
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
    duration: "30–45 min",
    estimatedPrice: "250 kr.",
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
  {
    slug: "zoneterapi",
    title: "Zoneterapi",
    shortDescription: "Blid massage af dine fødder. Stimulerer bestemte zoner for at forbedre blodcirkulation, afslapning og kroppens egen evne til at hele.",
    duration: "45 min",
    estimatedPrice: "450 kr.",
    icon: "🦶",
    content: [
      {
        heading: "Hvad er zoneterapi?",
        paragraphs: [
          "Blid massage af dine fødder. Vi har utrolig mange punkter under og på vores fødder. Nogle punkter kan dog være ømme.",
          "Man stimulerer bestemte zoner på fødderne, hvilket kan forbedre blodcirkulationen, hjælpe kroppen med at slappe af og støtte kroppens egen evne til at hele.",
          "En meget afslappende behandling."
        ],
      },
      {
        heading: "Hvad kan zoneterapi afhjælpe?",
        bullets: [
          "Stress og spændinger",
          "Hovedpine eller migræne",
          "Søvnproblemer",
          "Fordøjelsesproblemer",
          "Hormonelle ubalancer",
          "Smerter i kroppen",
          "Generel afslapning og velvære"
        ],
      },
      {
        heading: "Hvem kan få zoneterapi?",
        paragraphs: [
          "Zoneterapi er velegnet til de fleste. Det er en skånsom behandling, der kan tilpasses den enkeltes behov. Ved graviditet, blodpropper eller alvorlige fodsygdomme bør du konsultere din læge først."
        ],
      },
    ],
  },
  {
    slug: "voksning",
    title: "Voksning",
    shortDescription: "Effektiv hårfjerning med varm voks. Glattere hud i 3–6 uger – hårene bliver finere over tid ved regelmæssig behandling.",
    duration: "15–30 min",
    estimatedPrice: "250 kr.",
    icon: "✨",
    content: [
      {
        heading: "Hvad er voksning?",
        paragraphs: [
          "Voksning er en metode til hårfjerning, hvor man påfører varm eller kold voks på huden og trækker den af igen, så hårene rykkes ud fra roden."
        ],
      },
      {
        heading: "Hvad oplever man?",
        bullets: [
          "Glattere hud – håret fjernes fra roden, så huden føles glat i længere tid end ved barbering",
          "Holder længere – resultatet varer typisk 3–6 uger, fordi håret skal vokse ud igen fra roden",
          "Hårene kan blive finere over tid – ved regelmæssig voksning oplever mange at hårene bliver tyndere og færre",
          "Mindre stubbe – i modsætning til barbering får man ikke de samme skarpe stubbe"
        ],
      },
      {
        heading: "Godt at vide",
        bullets: [
          "Det kan gøre lidt ondt 😬",
          "Man kan få rødme eller irritation lige efter",
          "Hårene skal være lidt lange (ca. 3–5 mm) før de kan vokses igen"
        ],
      },
      {
        heading: "Priser",
        paragraphs: [
          "Fra 250 kr. – f.eks. underben. Varighed 15–30 min afhængig af område."
        ],
      },
    ],
  },
  {
    slug: "radiofrekvens",
    title: "Radiofrekvens",
    shortDescription: "Ikke-invasiv skønhedsteknologi der opvarmer hudens dybere lag for at stimulere kollagen og elastin. Strammer huden og reducerer rynker.",
    duration: "15–30 min",
    estimatedPrice: "350 kr.",
    icon: "📡",
    content: [
      {
        heading: "Hvad er radiofrekvens?",
        paragraphs: [
          "En radiofrekvens maskine er en ikke-invasiv skønhedsteknologi, der opvarmer hudens dybere lag for at stimulere kollagen- og elastinproduktion. Behandlingen strammer slap hud, reducerer rynker og forbedrer hudens struktur."
        ],
      },
      {
        heading: "Hovedfunktioner og fordele",
        bullets: [
          "Hudopstramning – opvarmning (op til 43°C) remodellerer kollagen, hvilket gør huden fastere",
          "Anti-aging – reducerer fine linjer, rynker og rødme",
          "Kropskonturering – reducerer strækmærker"
        ],
      },
      {
        heading: "Anbefalet forløb",
        paragraphs: [
          "For de bedste resultater anbefales et kurforløb på 8–12 behandlinger, som efterfølgende vedligeholdes.",
          "15–30 min alt efter område. Fra 350 kr."
        ],
      },
    ],
  },
];
