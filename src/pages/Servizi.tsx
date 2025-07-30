import Layout from "../components/layout/Layout";
import SectionTitle from "../components/ui/SectionTitle";
import BodyText from "../components/ui/BodyText";
import CTAButton from "../components/ui/CTAButton";
import { Wrench, RotateCcw, Palette, Gem } from "lucide-react";

const Servizi = () => {
  const services = [
    {
      id: 1,
      title: "Saldatura Cerchi in Lega",
      description: "Ripariamo crepe e fessure con tecniche di saldatura specializzate, restituendo struttura e sicurezza al tuo cerchio.",
      icon: Wrench,
      link: "/servizi/saldatura-cerchi-in-lega",
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      id: 2,
      title: "Tornitura / Molatura Cerchi", 
      description: "Raddrizziamo e correggiamo deformazioni attraverso processi di tornitura e molatura di precisione.",
      icon: RotateCcw,
      link: "/servizi/tornitura-molatura-cerchi",
      color: "from-green-500/20 to-green-600/20"
    },
    {
      id: 3,
      title: "Verniciatura Cerchi in Lega",
      description: "Trattiamo, verniciamo e lucidiamo la superficie per un risultato estetico perfetto e duraturo.",
      icon: Palette,
      link: "/servizi/verniciatura-cerchi-in-lega", 
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      id: 4,
      title: "Diamantatura Cerchi in Lega",
      description: "Rifiniamo la superficie con finitura diamantata per un effetto brillante e professionale.",
      icon: Gem,
      link: "/servizi/diamantatura-cerchi-in-lega",
      color: "from-amber-500/20 to-amber-600/20"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-background to-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <SectionTitle>
              Offriamo un servizio completo per riportare i tuoi cerchi alla forma e all'estetico originale
            </SectionTitle>
            <BodyText size="lg" className="max-w-3xl mx-auto">
              Con oltre 20 anni di esperienza nel settore, utilizziamo tecnologie avanzate e tecniche tradizionali 
              per garantire riparazioni di alta qualità che rispettano gli standard di sicurezza e durata.
            </BodyText>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={service.id}
                  className="group bg-card p-8 rounded-3xl shadow-card border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Image Placeholder */}
                    <div className="md:w-1/3">
                      <div className={`aspect-square bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                        <div className="text-center">
                          <IconComponent className="w-12 h-12 text-accent mx-auto mb-2" />
                          <p className="text-xs text-muted-foreground">[IMG_PLACEHOLDER]</p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:w-2/3 space-y-4">
                      <h3 className="font-heading font-bold text-2xl text-accent group-hover:text-accent/80 transition-colors">
                        {service.title}
                      </h3>
                      <BodyText>
                        {service.description}
                      </BodyText>
                      <div className="pt-4">
                        <CTAButton to={service.link} variant="secondary">
                          Scopri di più
                        </CTAButton>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-card p-8 lg:p-12 rounded-3xl shadow-card">
            <SectionTitle level="h3" className="mb-6">
              Hai bisogno di una riparazione?
            </SectionTitle>
            <BodyText className="mb-8 max-w-2xl mx-auto">
              Contattaci per un preventivo gratuito. I nostri esperti valuteranno il danno e ti forniranno 
              la soluzione più adatta alle tue esigenze.
            </BodyText>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+393476735353"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground rounded-full font-body font-semibold hover:bg-accent/90 transition-colors"
              >
                Chiama: 347 67 35 353
              </a>
              <CTAButton to="/contatti" variant="secondary">
                Richiedi Preventivo
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Servizi;