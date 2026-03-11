import { treatments } from "@/data/treatments";
import { Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Priser = () => {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">Priser</h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            Her finder du en oversigt over priser. Kontakt os for præcise priser og pakketilbud.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-xl border overflow-hidden">
            <div className="grid grid-cols-[1fr_auto_auto] gap-4 p-4 bg-muted text-sm font-medium text-muted-foreground">
              <span>Behandling</span>
              <span>Varighed</span>
              <span className="text-right">Pris</span>
            </div>
            {treatments.map((t) => (
              <Link
                key={t.slug}
                to={`/behandlinger/${t.slug}`}
                className="grid grid-cols-[1fr_auto_auto] gap-4 p-4 border-t hover:bg-muted/50 transition-colors items-center"
              >
                <span className="font-medium text-foreground flex items-center gap-2">
                  <span className="text-lg">{t.icon}</span> {t.title}
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {t.duration}
                </span>
                <span className="text-right font-semibold text-primary">{t.estimatedPrice}</span>
              </Link>
            ))}
          </div>

          <p className="text-sm text-muted-foreground text-center mt-6">
            * Priserne er vejledende. Kontakt klinikken for aktuelle priser og pakkeløsninger.
          </p>
        </div>
      </section>
    </>
  );
};

export default Priser;
