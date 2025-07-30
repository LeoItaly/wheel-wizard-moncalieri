import Layout from "../../components/layout/Layout";
import SectionTitle from "../../components/ui/SectionTitle";
import BodyText from "../../components/ui/BodyText";
import CTAButton from "../../components/ui/CTAButton";
import { RotateCcw, CheckCircle, AlertTriangle } from "lucide-react";

const TornituraRisaMolatura = () => {
  return (
    <Layout>
      <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-background to-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
                <RotateCcw className="w-10 h-10 text-accent" />
              </div>
            </div>
            <SectionTitle>
              Tornitura / Molatura Cerchi
            </SectionTitle>
            <BodyText size="lg" className="max-w-3xl mx-auto">
              Raddrizziamo e correggiamo deformazioni attraverso processi di tornitura e molatura di precisione.
            </BodyText>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="font-heading font-bold text-2xl text-accent mb-4">Servizio Specializzato</h3>
                <BodyText className="mb-6">
                  La tornitura e molatura sono processi meccanici di precisione che permettono di correggere 
                  deformazioni e irregolarità dei cerchi in lega, ripristinando la geometria originale.
                </BodyText>
              </div>

              <div className="bg-card p-6 rounded-3xl shadow-card">
                <h4 className="font-heading font-bold text-lg text-accent mb-4">Problemi Risolti</h4>
                <div className="space-y-3">
                  {[
                    "Cerchi ovalizzati",
                    "Deformazioni da impatto",
                    "Irregolarità della superficie",
                    "Vibrazioni al volante"
                  ].map((problem, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{problem}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-card p-6 rounded-3xl shadow-card">
                <h4 className="font-heading font-bold text-lg text-accent mb-4">Processo</h4>
                <div className="aspect-video bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl flex items-center justify-center mb-4">
                  <div className="text-center">
                    <RotateCcw className="w-12 h-12 text-green-400 mx-auto mb-2" />
                    <p className="text-muted-foreground">[IMG_PLACEHOLDER]</p>
                    <p className="text-sm text-muted-foreground">Tornitura di precisione</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    "Analisi della deformazione",
                    "Lavorazione con macchinari CNC",
                    "Controllo qualità finale",
                    "Test di equilibratura"
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

export default TornituraRisaMolatura;