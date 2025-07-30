import { MapPin, Clock, Phone, Car, Train, Bus } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import BodyText from "../ui/BodyText";

const LocationSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionTitle className="mb-6">
            Come raggiungerci
          </SectionTitle>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Column */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-card p-6 rounded-3xl shadow-card">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-accent mb-2">Indirizzo</h3>
                  <p className="font-body text-foreground">Corso Roma 5 – Moncalieri (TO)</p>
                </div>
              </div>
            </div>

            {/* Transportation */}
            <div className="bg-card p-6 rounded-3xl shadow-card">
              <h3 className="font-heading font-bold text-lg text-accent mb-4">Come arrivare</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Car className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body font-medium text-foreground">In auto</p>
                    <p className="text-sm text-muted-foreground">Uscita Moncalieri dalla tangenziale, parcheggio disponibile in zona</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Train className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body font-medium text-foreground">In metropolitana</p>
                    <p className="text-sm text-muted-foreground">Fermata Bengasi + 10 minuti a piedi o autobus</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Bus className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body font-medium text-foreground">In autobus</p>
                    <p className="text-sm text-muted-foreground">Linee 45 e 63 fermata Corso Roma</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact & Hours */}
            <div className="bg-card p-6 rounded-3xl shadow-card">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-heading font-bold text-lg text-accent mb-2">Contatti</h3>
                    <p className="font-body text-foreground mb-1">
                      <a href="tel:+393476735353" className="hover:text-accent transition-colors">
                        347 67 35 353
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground">Telefono e WhatsApp</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-heading font-bold text-lg text-accent mb-2">Orari</h3>
                    <div className="text-sm space-y-1">
                      <p className="text-foreground">Lunedì - Venerdì: 8:00 - 18:00</p>
                      <p className="text-foreground">Sabato: su appuntamento</p>
                      <p className="text-muted-foreground">Domenica: Chiuso</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-accent/10 p-6 rounded-3xl border border-accent/20">
              <BodyText className="text-center mb-4">
                Passa a trovarci o richiedi Preventivi Online
              </BodyText>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a 
                  href="tel:+393476735353"
                  className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-full font-body font-semibold hover:bg-accent/90 transition-colors"
                >
                  Chiama Ora
                </a>
                <a 
                  href="/contatti"
                  className="inline-flex items-center justify-center px-6 py-3 border border-accent text-accent rounded-full font-body font-semibold hover:bg-accent/10 transition-colors"
                >
                  Preventivo Online
                </a>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="bg-card p-6 rounded-3xl shadow-card">
              <h3 className="font-heading font-bold text-lg text-accent mb-4">Posizione</h3>
              <div className="aspect-video bg-muted rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                  <p className="text-muted-foreground">[MAP_PLACEHOLDER]</p>
                  <p className="text-sm text-muted-foreground mt-2">Mappa Interattiva</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;