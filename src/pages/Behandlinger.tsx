import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { treatments } from "@/data/treatments";
import { ArrowRight, Clock } from "lucide-react";

import akupunkturImg from "@/assets/akupunktur.jpg";
import ansigtsakupunkturImg from "@/assets/ansigtsakupunktur.jpg";
import zenImg from "@/assets/zen-texture.jpg";
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
  ansigtsakupunktur: earAcuImg,
  "japansk-ansigtsloftning": zenImg,
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

const Behandlinger = () => {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">Behandlinger</h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            Udforsk vores brede udvalg af holistiske behandlinger – alle udført med omhu og faglighed.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((t, i) => (
              <motion.div
                key={t.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
              >
                <Link
                  to={`/behandlinger/${t.slug}`}
                  className="group block rounded-xl border bg-card overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={imageMap[t.slug]}
                      alt={t.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="font-display text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                      {t.title}
                    </h2>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {t.duration}</span>
                      <span>Fra {t.estimatedPrice}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {t.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-3 text-sm text-primary font-medium">
                      Læs mere <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Behandlinger;
