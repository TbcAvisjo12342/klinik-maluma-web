import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { treatments } from "@/data/treatments";
import { ArrowRight, Clock } from "lucide-react";

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
                  className="group flex gap-5 p-6 rounded-xl border bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <span className="text-4xl shrink-0">{t.icon}</span>
                  <div className="flex-1 min-w-0">
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
