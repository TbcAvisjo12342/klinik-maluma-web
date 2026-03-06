import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { treatments } from "@/data/treatments";
import { ArrowRight, Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-accent/30" />
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
              meget mere i trygge, rolige rammer. Drevet af Tina Godtfeldt med
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
            <div className="flex text-yellow-500">
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

      {/* Treatments grid */}
      <section className="py-20 md:py-28">
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
                  className="group block h-full rounded-xl border bg-card p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <span className="text-3xl mb-4 block">{t.icon}</span>
                  <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {t.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {t.shortDescription}
                  </p>
                  <div className="mt-4 text-xs text-primary font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Læs mere <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
              Produkter i klinikken
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Kvalitetsprodukter der bruges i behandlingerne og kan købes med hjem
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { name: "Hop", desc: "Shampoo og plejeprodukter" },
              { name: "Bjørk", desc: "Shampoo, styling og pleje" },
              { name: "Sanzi Beauty", desc: "Hudplejeserie – bruges til alle behandlinger" },
            ].map((p) => (
              <div key={p.name} className="rounded-xl border bg-background p-6 text-center">
                <h3 className="font-display text-lg font-semibold mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Klar til at booke?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Åbningstider kun efter aftale – men meget fleksibel. Ring eller send en SMS.
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
    </>
  );
};

export default Index;
