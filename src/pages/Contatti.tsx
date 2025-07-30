import Layout from "../components/layout/Layout";
import SectionTitle from "../components/ui/SectionTitle";
import BodyText from "../components/ui/BodyText";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const Contatti = () => {
  const teamMembers = [
    {
      name: "Dennis",
      phone: "347 67 35 353",
      email: "dennis@officinaschettino.it",
      role: "Specialista Riparazioni"
    },
    {
      name: "Franco", 
      phone: "011 64 12 345",
      email: "franco@officinaschettino.it",
      role: "Maestro Artigiano"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-background to-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <SectionTitle>
              Siamo una squadra
            </SectionTitle>
            <BodyText size="lg" className="max-w-3xl mx-auto">
              Siamo padre e figlio con una passione per il lavoro ben fatto. La nostra esperienza combinata 
              e l'attenzione ai dettagli ci permettono di offrire un servizio di riparazione cerchi di altissima qualità.
            </BodyText>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-3xl shadow-card border border-border text-center space-y-6"
              >
                {/* Profile Photo Placeholder */}
                <div className="w-32 h-32 bg-gradient-to-br from-accent/20 to-accent/30 rounded-full mx-auto flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/30 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">👨‍🔧</span>
                    </div>
                    <p className="text-xs text-muted-foreground">[IMG_PLACEHOLDER]</p>
                  </div>
                </div>

                {/* Member Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-accent mb-1">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-3">
                      <Phone className="w-5 h-5 text-accent" />
                      <a 
                        href={`tel:${member.phone.replace(/\s/g, '')}`}
                        className="font-body text-foreground hover:text-accent transition-colors"
                      >
                        {member.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-3">
                      <Mail className="w-5 h-5 text-accent" />
                      <a 
                        href={`mailto:${member.email}`}
                        className="font-body text-foreground hover:text-accent transition-colors"
                      >
                        {member.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <SectionTitle level="h3" className="mb-6">
                  Informazioni di Contatto
                </SectionTitle>
              </div>

              {/* Address */}
              <div className="bg-card p-6 rounded-3xl shadow-card">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h4 className="font-heading font-bold text-lg text-accent mb-2">Indirizzo</h4>
                    <p className="font-body text-foreground">Corso Roma 5</p>
                    <p className="font-body text-foreground">10024 Moncalieri (TO)</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-card p-6 rounded-3xl shadow-card">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h4 className="font-heading font-bold text-lg text-accent mb-3">Orari di Apertura</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-body text-foreground">Lunedì - Venerdì</span>
                        <span className="font-body text-accent font-medium">8:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-body text-foreground">Sabato</span>
                        <span className="font-body text-accent font-medium">Su appuntamento</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-body text-foreground">Domenica</span>
                        <span className="font-body text-muted-foreground">Chiuso</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-accent/10 p-6 rounded-3xl border border-accent/20">
                <h4 className="font-heading font-bold text-lg text-accent mb-4">Contatto Rapido</h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="tel:+393476735353"
                    className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-full font-body font-semibold hover:bg-accent/90 transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Chiama Ora
                  </a>
                  <a 
                    href="mailto:info@officinaschettino.it"
                    className="inline-flex items-center justify-center px-6 py-3 border border-accent text-accent rounded-full font-body font-semibold hover:bg-accent/10 transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="bg-card p-6 rounded-3xl shadow-card">
                <h4 className="font-heading font-bold text-lg text-accent mb-4">Come Trovarci</h4>
                <div className="aspect-video bg-muted rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                    <p className="text-muted-foreground">[MAP_PLACEHOLDER]</p>
                    <p className="text-sm text-muted-foreground mt-2">Mappa Interattiva</p>
                    <p className="text-xs text-muted-foreground mt-1">Corso Roma 5, Moncalieri (TO)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contatti;