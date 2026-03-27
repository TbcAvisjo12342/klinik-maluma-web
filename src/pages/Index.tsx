import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { treatments } from "@/data/treatments";
import { ArrowRight, Star, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroSpa from "@/assets/hero-spa.jpg";
import hopProducts from "@/assets/hop-products.jpg";
import bjorkProducts from "@/assets/bjork-products.png";
import sanziProducts from "@/assets/sanzi-products.jpg";
import tinaImg from "@/assets/tina-enhanced.jpg";
import klinikkenSunnyImg from "@/assets/klinikken-sunny.jpg";

import akupunkturImg from "@/assets/akupunktur.jpg";
import garraRufaImg from "@/assets/garra-rufa.jpg";
import saunaImg from "@/assets/sauna.jpg";
import zenImg from "@/assets/zen-texture.jpg";
import faceMaskImg from "@/assets/face-mask.jpg";
import ansigtsakupunkturImg from "@/assets/ansigtsakupunktur.jpg";
import sanziTreatmentImg from "@/assets/sanzi-treatment.jpg";
import treatmentBedImg from "@/assets/treatment-bed.jpg";
import diamantSlibningImg from "@/assets/diamant-slibning-new.png";
import cuppingImg from "@/assets/cupping-treatment.jpg";
import massagestolImg from "@/assets/massagestol-new.png";
import zoneterapiImg from "@/assets/zoneterapi-new.jpg";
import voksningImg from "@/assets/voksning.jpg";
import radiofrekvensImg from "@/assets/radiofrekvens.jpg";
import diplomerImg from "@/assets/diplomer.jpg";

const treatmentImageMap: Record<string, string> = {
  akupunktur: akupunkturImg,
  ansigtsakupunktur: ansigtsakupunkturImg,
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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const Index = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroSpa} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="inline-block text-sm font-medium tracking-widest uppercase text-primary mb-4">
              Holistisk velvære i Holmegaard
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold leading-tight text-foreground mb-6">
              Find balancen
              <br />
              <span className="text-primary">i krop & sind</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Klinik Maluma tilbyder akupunktur, ansigtsbehandlinger, BARS og
              meget mere i trygge, rolige rammer. Drevet med
              hjerte for dit velbefindende.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/behandlinger">
                  Se behandlinger <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <a href="tel:+4540558451">
                  <Phone className="w-4 h-4 mr-1" /> Ring nu
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-8 border-y bg-card">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 text-center">
          <div className="flex items-center gap-2">
            <div className="flex" style={{ color: "hsl(45, 93%, 47%)" }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">4,9 på Google</span>
          </div>
          <div className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">19</span> anbefalinger på Facebook – 100%
          </div>
          <div className="text-sm text-muted-foreground">
            Over <span className="font-semibold text-foreground">6 års</span> erfaring
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                <img src={tinaImg} alt="Indehaver af Klinik Maluma" className="w-full h-full object-cover object-top" />
              </div>
              <button
                onClick={() => setLightboxOpen(true)}
                className="absolute -bottom-4 -right-4 rounded-xl overflow-hidden w-40 h-28 border-4 border-background shadow-lg hidden md:block cursor-pointer hover:scale-105 transition-transform"
              >
                <img src={diplomerImg} alt="Diplomer og certificeringer" className="w-full h-full object-cover" />
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-sm font-medium tracking-widest uppercase text-primary mb-3 block">Om os</span>
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
                Passion for dit velbefindende
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vi er uddannede akupunktører og har over 6 års erfaring med holistiske behandlinger. 
                Med en bred vifte af certificeringer inden for akupunktur, ansigtsbehandlinger og BARS 
                tilbyder vi skræddersyede behandlinger i trygge, rolige rammer.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I Klinik Maluma handler det om at lytte til din krop og finde den rette balance. 
                Alle behandlinger udføres med omhu, tid og nærvær.
              </p>
              <Button asChild variant="outline" className="rounded-full px-6">
                <Link to="/kontakt">Lær mig at kende <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatments grid */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
              Behandlinger
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Fra traditionel akupunktur til unikke oplevelser som Garra Rufa fiskespa
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.map((t, i) => (
              <motion.div
                key={t.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
              >
                <Link
                  to={`/behandlinger/${t.slug}`}
                  className="group block h-full rounded-xl border bg-background overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={treatmentImageMap[t.slug]}
                      alt={t.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold mb-1.5 group-hover:text-primary transition-colors">
                      {t.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {t.shortDescription}
                    </p>
                    <div className="mt-3 text-xs text-primary font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Læs mere <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
              Produkter i klinikken
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Kvalitetsprodukter der bruges i behandlingerne og kan købes med hjem
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Hop", desc: "Shampoo og plejeprodukter", img: hopProducts },
              { name: "Bjørk", desc: "Shampoo, styling og pleje", img: bjorkProducts },
              { name: "Sanzi Beauty", desc: "Hudplejeserie – bruges til alle behandlinger", img: sanziProducts },
            ].map((p) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-xl border bg-card overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={`${p.name} produkter`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-display text-xl font-semibold mb-2">{p.name}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Klar til at booke?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Åbningstider kun efter aftale – men vi er meget fleksible. Ring eller send en SMS.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8">
              <a href="tel:+4540558451">
                <Phone className="w-4 h-4 mr-2" /> 40 55 84 51
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/kontakt">Se kontaktinfo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white"
              onClick={() => setLightboxOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={diplomerImg}
              alt="Diplomer og certificeringer"
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
