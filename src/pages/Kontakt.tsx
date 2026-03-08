import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import klinikkenSunnyImg from "@/assets/klinikken-sunny.jpg";

const Kontakt = () => {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">Kontakt</h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            Har du spørgsmål eller vil du booke en tid? Du er altid velkommen til at kontakte Tina.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-semibold mb-6">Kontaktoplysninger</h2>
                <div className="space-y-5">
                  <a href="tel:+4540558451" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">40 55 84 51</p>
                      <p className="text-sm text-muted-foreground">Hvis jeg er optaget, send gerne en SMS</p>
                    </div>
                  </a>

                  <a href="mailto:klinik.maluma@gmail.com" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">klinik.maluma@gmail.com</p>
                      <p className="text-sm text-muted-foreground">Skriv endelig en mail</p>
                    </div>
                  </a>

                  <a href="https://www.facebook.com/klinikmaluma" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">Facebook / Messenger</p>
                      <p className="text-sm text-muted-foreground">Skriv på Messenger</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Sibberupvej 13</p>
                      <p className="text-sm text-muted-foreground">4684 Holmegaard</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Kun efter aftale</p>
                      <p className="text-sm text-muted-foreground">Meget fleksibel – ring eller SMS</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button asChild size="lg" className="rounded-full px-8">
                <a href="tel:+4540558451">
                  <Phone className="w-4 h-4 mr-2" /> Ring til Tina
                </a>
              </Button>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden border h-64 md:h-80">
                <iframe
                  title="Klinik Maluma placering"
                  src="https://maps.google.com/maps?q=Klinik+Maluma,+Sibberupvej+13,+4684+Holmegaard,+Denmark&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="rounded-xl overflow-hidden border">
                <img src={klinikkenImg} alt="Klinik Maluma set udefra" className="w-full h-48 object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Kontakt;
