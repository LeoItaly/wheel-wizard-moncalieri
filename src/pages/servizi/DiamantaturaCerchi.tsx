import Layout from "../../components/layout/Layout";
import SectionTitle from "../../components/ui/SectionTitle";
import BodyText from "../../components/ui/BodyText";
import CTAButton from "../../components/ui/CTAButton";
import { Gem, CheckCircle, AlertTriangle } from "lucide-react";

const DiamantaturaCerchi = () => {
  return (
    <Layout>
      <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-background to-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
                <Gem className="w-10 h-10 text-accent" />
              </div>
            </div>
            <SectionTitle>
              Diamantatura Cerchi in Lega
            </SectionTitle>
            <BodyText size="lg" className="max-w-3xl mx-auto">
              Rifiniamo la superficie con finitura diamantata per un effetto brillante e professionale.
            </BodyText>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="font-heading font-bold text-2xl text-accent mb-4">Finitura di Lusso</h3>
                <BodyText className="mb-6">
                  La diamantatura è una tecnica di finitura esclusiva che dona ai cerchi un aspetto brillante 
                  e professionale, valorizzando l'estetica del veicolo con un effetto luminoso unico.
                </BodyText>
              </div>

              <div className="bg-card p-6 rounded-3xl shadow-card">
                <h4 className="font-heading font-bold text-lg text-accent mb-4">Caratteristiche</h4>
                <div className="space-y-3">
                  {[
                    "Effetto brillante e luminoso",
                    "Resistenza all'usura",
                    "Facilità di pulizia",
                    "Valore estetico aggiunto"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-card p-6 rounded-3xl shadow-card">
                <h4 className="font-heading font-bold text-lg text-accent mb-4">Processo Diamantatura</h4>
                <div className="aspect-video bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-2xl flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Gem className="w-12 h-12 text-amber-400 mx-auto mb-2" />
                    <p className="text-muted-foreground">[IMG_PLACEHOLDER]</p>
                    <p className="text-sm text-muted-foreground">Diamantatura al tornio</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    "Preparazione superficie",
                    "Lavorazione al tornio diamantato",
                    "Controllo precisione",
                    "Protezione finale"
                  ].map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <SectionTitle level="h3" className="mb-8">
            Altri Servizi Disponibili
          </SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CTAButton to="/servizi/saldatura-cerchi-in-lega" variant="secondary">
              Saldatura
            </CTAButton>
            <CTAButton to="/servizi/tornitura-molatura-cerchi" variant="secondary">
              Tornitura Molatura
            </CTAButton>
            <CTAButton to="/servizi/verniciatura-cerchi-in-lega" variant="secondary">
              Verniciatura
            </CTAButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DiamantaturaCerchi;