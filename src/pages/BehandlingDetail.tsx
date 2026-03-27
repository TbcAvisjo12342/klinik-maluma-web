import { useParams, Link } from "react-router-dom";
import { treatments } from "@/data/treatments";
import { ArrowLeft, Clock, CreditCard, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

import akupunkturImg from "@/assets/akupunktur.jpg";
import ansigtsakupunkturImg from "@/assets/ansigtsakupunktur.jpg";
import zenImg from "@/assets/zen-texture.jpg";
import detoxFodbadImg from "@/assets/detox-fodbad.jpg";
import faceMaskImg from "@/assets/face-mask.jpg";
import garraRufaImg from "@/assets/garra-rufa.jpg";
import saunaImg from "@/assets/sauna.jpg";
import treatmentBedImg from "@/assets/treatment-bed.jpg";
import sanziTreatmentImg from "@/assets/sanzi-treatment.jpg";
import diamantSlibningImg from "@/assets/diamant-slibning-new.png";
import cuppingImg from "@/assets/cupping-treatment.jpg";
import massagestolImg from "@/assets/massagestol-new.png";
import zoneterapiImg from "@/assets/zoneterapi-new.jpg";
import voksningImg from "@/assets/voksning.jpg";
import radiofrekvensImg from "@/assets/radiofrekvens.jpg";

const imageMap: Record<string, string> = {
  akupunktur: akupunkturImg,
  ansigtsakupunktur: ansigtsakupunkturImg,
  "japansk-ansigtsloftning": sanziTreatmentImg,
  "luksus-ansigtsbehandling": faceMaskImg,
  "diamant-slibning": diamantSlibningImg,
  cupping: cuppingImg,
  "garra-rufa": garraRufaImg,
  massagestol: massagestolImg,
  "infrarod-sauna-isbad": saunaImg,
  bars: treatmentBedImg,
  oreakupunktur: sanziTreatmentImg,
  zoneterapi: zoneterapiImg,
  voksning: voksningImg,
  radiofrekvens: radiofrekvensImg,
};

const BehandlingDetail = () => {
  const { slug } = useParams();
  const treatment = treatments.find((t) => t.slug === slug);

  if (!treatment) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-display font-semibold mb-4">Behandling ikke fundet</h1>
        <Button asChild variant="outline">
          <Link to="/behandlinger"><ArrowLeft className="w-4 h-4 mr-1" /> Tilbage til behandlinger</Link>
        </Button>
      </div>
    );
  }

  const heroImage = imageMap[treatment.slug];

  return (
    <>
      <section className="relative py-16 md:py-24 overflow-hidden">
        {heroImage && (
          <>
            <div className="absolute inset-0">
              <img src={heroImage} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/60" />
            </div>
          </>
        )}
        {!heroImage && <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />}
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/behandlinger" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Alle behandlinger
          </Link>
          <div>
            <h1 className="text-3xl md:text-5xl font-display font-semibold mb-3">{treatment.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {treatment.duration}</span>
              <span className="flex items-center gap-1"><CreditCard className="w-4 h-4" /> Fra {treatment.estimatedPrice}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-10">
            {treatment.content.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="text-2xl font-display font-semibold mb-3">{section.heading}</h2>
                )}
                {section.paragraphs?.map((p, j) => (
                  <p key={j} className="text-muted-foreground leading-relaxed mb-3">{p}</p>
                ))}
                {section.bullets && (
                  <ul className="space-y-2 mt-3">
                    {section.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1.5 text-xs">●</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-xl bg-card border text-center">
            <h3 className="font-display text-xl font-semibold mb-2">Vil du booke denne behandling?</h3>
            <p className="text-sm text-muted-foreground mb-6">Ring eller send en SMS – vi er meget fleksible med tider.</p>
            <Button asChild size="lg" className="rounded-full px-8">
              <a href="tel:+4540558451"><Phone className="w-4 h-4 mr-2" /> 40 55 84 51</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BehandlingDetail;
