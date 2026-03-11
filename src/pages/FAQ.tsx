import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Hvordan booker jeg en tid?",
    a: "Ring til os på 40 55 84 51 eller send en SMS. Du kan også skrive på Messenger eller sende en mail til klinik.maluma@gmail.com. Vi er meget fleksible med tider.",
  },
  {
    q: "Hvad er jeres åbningstider?",
    a: "Klinik Maluma har kun åbent efter aftale, men vi er meget fleksible. Hvis vi er optaget af en klient og ikke lige tager telefonen, så send gerne en SMS.",
  },
  {
    q: "Gør akupunktur ondt?",
    a: "De fleste mærker kun et lille stik eller en let prikken. Mange føler sig afslappede under behandlingen, og de fleste falder faktisk i søvn.",
  },
  {
    q: "Hvor mange behandlinger har jeg brug for?",
    a: "Det varierer fra person til person og afhænger af behandlingstypen. For ansigtsakupunktur anbefales typisk 6-10 behandlinger, mens andre behandlinger kan give effekt efter én gang. Tina rådgiver dig ved den første konsultation.",
  },
  {
    q: "Kan akupunktur kombineres med anden behandling?",
    a: "Ja, mange af behandlingerne kan kombineres. For eksempel kan akupunktur suppleres med cupping for ekstra effekt. Tina hjælper dig med at finde den bedste kombination.",
  },
  {
    q: "Er der nogen der ikke bør få akupunktur?",
    a: "Akupunktur er sikkert for de fleste. Personer med blødersygdom, eller som tager blodfortyndende medicin, bør dog konsultere deres læge først. Gravide bør oplyse om graviditeten.",
  },
  {
    q: "Hvad skal jeg gøre før en behandling?",
    a: "Du behøver ikke forberede dig på noget særligt. Spis gerne et let måltid et par timer inden og undgå alkohol. Bær løstsiddende tøj for nemmere adgang til akupunkturpunkterne.",
  },
  {
    q: "Kan jeg købe produkter i klinikken?",
    a: "Ja, Klinik Maluma sælger Hop shampoo og plejeprodukter, Bjørk shampoo, styling og pleje, samt Sanzi hudplejeserie, som også bruges til alle behandlinger.",
  },
  {
    q: "Hvor finder jeg jer?",
    a: "Klinik Maluma ligger på Sibberupvej 13, 4684 Holmegaard. Du er altid velkommen til at ringe for rutevejledning.",
  },
];

const FAQ = () => {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">Ofte stillede spørgsmål</h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            Find svar på de mest almindelige spørgsmål om vores behandlinger og klinik.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border rounded-xl px-6 bg-card">
                <AccordionTrigger className="text-left font-display text-lg font-medium hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default FAQ;
