const Privatlivspolitik = () => {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">Privatlivspolitik</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl prose prose-neutral">
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Dataansvarlig</h2>
              <p>
                Klinik Maluma<br />
                Tina Godtfeldt<br />
                Sibberupvej 13, 4684 Holmegaard<br />
                Email: klinik.maluma@gmail.com<br />
                Telefon: 40 55 84 51
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Hvilke oplysninger indsamler vi?</h2>
              <p>
                Når du booker en behandling, indsamler vi dit navn, telefonnummer og eventuelt din emailadresse.
                Ved visse behandlinger kan det være nødvendigt at notere helbredsoplysninger for at sikre en sikker behandling.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Formål med behandling af data</h2>
              <p>
                Dine personoplysninger bruges udelukkende til at administrere dine bookinger, levere den aftalte behandling
                og kontakte dig i forbindelse hermed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Opbevaring</h2>
              <p>
                Dine oplysninger opbevares sikkert og slettes, når de ikke længere er nødvendige for det formål,
                de blev indsamlet til.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Dine rettigheder</h2>
              <p>
                Du har ret til at få indsigt i, berigtiget eller slettet dine personoplysninger.
                Kontakt os på klinik.maluma@gmail.com, hvis du ønsker at gøre brug af dine rettigheder.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Klage</h2>
              <p>
                Hvis du ønsker at klage over behandlingen af dine personoplysninger, kan du kontakte
                Datatilsynet via <a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.datatilsynet.dk</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privatlivspolitik;
