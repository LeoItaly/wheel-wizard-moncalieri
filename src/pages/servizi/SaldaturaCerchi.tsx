import Layout from "../../components/layout/Layout";
import SectionTitle from "../../components/ui/SectionTitle";
import BodyText from "../../components/ui/BodyText";
import CTAButton from "../../components/ui/CTAButton";
import { Wrench, CheckCircle, AlertTriangle } from "lucide-react";

const SaldaturaCerchi = () => {
  const benefits = [
    "Riparazione economica rispetto alla sostituzione",
    "Mantenimento delle caratteristiche originali",
    "Garanzia sulla qualità del lavoro",
    "Tempi di consegna rapidi"
  ];

  const damages = [
    "Crepe da impatto con buche",
    "Fessure longitudinali", 
    "Rotture da collisione",
    "Micro-fratture da stress"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-background to-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
                <Wrench className="w-10 h-10 text-accent" />
              </div>
            </div>
            <SectionTitle>
              Saldatura Cerchi in Lega
            </SectionTitle>
            <BodyText size="lg" className="max-w-3xl mx-auto">
              Ripariamo crepe e fessure con tecniche di saldatura specializzate, restituendo struttura e sicurezza al tuo cerchio.
            </BodyText>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Process Description */}
            <div className="space-y-8">
              <div>
                <h3 className="font-heading font-bold text-2xl text-accent mb-4">Il Nostro Processo</h3>
                <BodyText className="mb-6">
                  La saldatura cerchi in lega è una procedura delicata che richiede competenze specifiche e attrezzature professionali. 
                  Il nostro team utilizza tecniche avanzate per garantire riparazioni durevoli e sicure.
                </BodyText>
              </div>

              <div className="bg-card p-6 rounded-3xl shadow-card">
                <h4 className="font-heading font-bold text-lg text-accent mb-4">Tipi di Danni Riparabili</h4>
                <div className="space-y-3">
                  {damages.map((damage, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{damage}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card p-6 rounded-3xl shadow-card">
                <h4 className="font-heading font-bold text-lg text-accent mb-4">Vantaggi del Servizio</h4>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Section */}
            <div className="space-y-8">
              <div className="bg-card p-6 rounded-3xl shadow-card">
                <h4 className="font-heading font-bold text-lg text-accent mb-4">Prima e Dopo</h4>
                <div className="space-y-4">
                  <div className="aspect-video bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-2" />
                      <p className="text-muted-foreground">[IMG_PLACEHOLDER]</p>
                      <p className="text-sm text-muted-foreground">Cerchio danneggiato</p>
                    </div>
                  </div>
                  
                  <div className="aspect-video bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-2" />
                      <p className="text-muted-foreground">[IMG_PLACEHOLDER]</p>
                      <p className="text-sm text-muted-foreground">Cerchio riparato</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 p-6 rounded-3xl border border-accent/20">
                <h4 className="font-heading font-bold text-lg text-accent mb-4">Garanzia e Sicurezza</h4>
                <BodyText className="mb-4">
                  Tutti i nostri lavori di saldatura sono garantiti e rispettano gli standard di sicurezza più rigorosi. 
                  Eseguiamo test di resistenza per assicurare la durata nel tempo.
                </BodyText>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="tel:+393476735353"
                    className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-full font-body font-semibold hover:bg-accent/90 transition-colors"
                  >
                    Preventivo Gratuito
                  </a>
                  <CTAButton to="/contatti" variant="secondary">
                    Maggiori Info
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <SectionTitle level="h3" className="mb-8">
            Altri Servizi Disponibili
          </SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CTAButton to="/servizi/tornitura-molatura-cerchi" variant="secondary">
              Tornitura Molatura
            </CTAButton>
            <CTAButton to="/servizi/verniciatura-cerchi-in-lega" variant="secondary">
              Verniciatura
            </CTAButton>
            <CTAButton to="/servizi/diamantatura-cerchi-in-lega" variant="secondary">
              Diamantatura
            </CTAButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SaldaturaCerchi;