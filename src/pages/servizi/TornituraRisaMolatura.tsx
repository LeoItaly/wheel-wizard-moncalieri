import Layout from "../../components/layout/Layout";
import SEOHead from "../../components/layout/SEOHead";
import Breadcrumb from "../../components/ui/breadcrumb";
import SectionTitle from "../../components/ui/SectionTitle";
import BodyText from "../../components/ui/BodyText";
import CTAButton from "../../components/ui/CTAButton";
import RichiediPreventivo from "../../components/ui/RichiediPreventivo";
import { RotateCcw, CheckCircle, AlertTriangle } from "lucide-react";

const TornituraRisaMolatura = () => {
  const breadcrumbItems = [
    { name: "Servizi", url: "/servizi" },
    { name: "Tornitura e Molatura Cerchi", url: "/servizi/tornitura-molatura-cerchi" }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Tornitura e Molatura Cerchi Moncalieri | Officina Schettino"
        description="Tornitura e molatura cerchi in lega a Moncalieri e Torino. Ripristino della forma originale con macchinari professionali. Chiama ora."
        canonical="/servizi/tornitura-molatura-cerchi"
        breadcrumbs={breadcrumbItems}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Tornitura e Molatura Cerchi in Lega",
          "description": "Ripristino della forma originale dei cerchi danneggiati attraverso tornitura e molatura di precisione",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Officina Schettino"
          },
          "areaServed": ["Moncalieri", "Torino"],
          "serviceType": "Riparazione Auto",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Tornitura e Molatura Cerchi",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Tornitura Cerchi",
                  "description": "Correzione deformazioni e irregolarità dei cerchi"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Molatura Cerchi",
                  "description": "Rifinitura superficiale per ripristinare la geometria"
                }
              }
            ]
          }
        }}
      />
      
      <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-background to-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
                <RotateCcw className="w-10 h-10 text-accent" />
              </div>
            </div>
            <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground leading-tight">
              Tornitura e Molatura Cerchi <span className="text-accent">Moncalieri</span>
            </h1>
            <BodyText size="lg" className="max-w-3xl mx-auto">
              Dopo la saldatura, in presenza di difetti, interveniamo con macchinari professionali per raddrizzare, tornire e molare il cerchio. Questo permette di ripristinare il profilo originale del cerchio e prepararlo per le fasi successive come la verniciatura o la diamantatura.
            </BodyText>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="font-heading font-bold text-2xl text-accent mb-4">Servizio Specializzato</h2>
                <BodyText className="mb-6">
                  La tornitura e molatura sono processi meccanici di precisione che permettono di correggere 
                  deformazioni e irregolarità dei cerchi in lega, ripristinando la geometria originale.
                </BodyText>
              </div>

              <div className="bg-card p-6 rounded-3xl shadow-card">
                <h3 className="font-heading font-bold text-lg text-accent mb-4">Problemi Risolti</h3>
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
                <h3 className="font-heading font-bold text-lg text-accent mb-4">Processo</h3>
                <div className="aspect-[3/4] max-w-xs mx-auto bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl flex items-center justify-center mb-4 overflow-hidden">
                  <img 
                    src="/assets/servizi/tornitura.webp" 
                    alt="Tornitura cerchi in lega Moncalieri" 
                    className="object-cover w-full h-full" 
                    loading="lazy"
                  />
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
          <h2 className="font-heading font-bold text-3xl text-foreground mb-8">
            Altri Servizi Disponibili
          </h2>
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

      <RichiediPreventivo />
    </Layout>
  );
};

export default TornituraRisaMolatura;