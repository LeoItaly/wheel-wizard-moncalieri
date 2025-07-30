import Layout from "../../components/layout/Layout";
import SEOHead from "../../components/layout/SEOHead";
import Breadcrumb from "../../components/ui/breadcrumb";
import SectionTitle from "../../components/ui/SectionTitle";
import BodyText from "../../components/ui/BodyText";
import CTAButton from "../../components/ui/CTAButton";
import RichiediPreventivo from "../../components/ui/RichiediPreventivo";
import { Gem, CheckCircle, AlertTriangle } from "lucide-react";

const DiamantaturaCerchi = () => {
  const breadcrumbItems = [
    { name: "Servizi", url: "/servizi" },
    { name: "Diamantatura Cerchi in Lega", url: "/servizi/diamantatura-cerchi-in-lega" }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Diamantatura Cerchi in Lega Moncalieri | Officina Schettino"
        description="Diamantatura cerchi in lega a Moncalieri e Torino. Trattamento superficiale per ripristinare la lucentezza originale. Chiama ora."
        canonical="/servizi/diamantatura-cerchi-in-lega"
        breadcrumbs={breadcrumbItems}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Diamantatura Cerchi in Lega",
          "description": "Trattamento superficiale per ripristinare la lucentezza originale dei cerchi in lega",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Officina Schettino"
          },
          "areaServed": ["Moncalieri", "Torino"],
          "serviceType": "Riparazione Auto",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Diamantatura Cerchi in Lega",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Diamantatura Superficiale",
                  "description": "Ripristino della lucentezza originale dei cerchi"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Finitura di Lusso",
                  "description": "Effetto brillante e professionale per cerchi in lega"
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
                <Gem className="w-10 h-10 text-accent" />
              </div>
            </div>
            <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground leading-tight">
              Diamantatura Cerchi in Lega <span className="text-accent">Moncalieri</span>
            </h1>
            <BodyText size="lg" className="max-w-3xl mx-auto">
              Per un effetto brillante e come nuovo offriamo la diamantatura professionale dei cerchi in lega.
            </BodyText>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="font-heading font-bold text-2xl text-accent mb-4">Finitura di Lusso</h2>
                <BodyText className="mb-6">
                  La diamantatura è una tecnica di finitura esclusiva che dona ai cerchi un aspetto brillante 
                  e professionale, valorizzando l'estetica del veicolo con un effetto luminoso unico.
                </BodyText>
              </div>

              <div className="bg-card p-6 rounded-3xl shadow-card">
                <h3 className="font-heading font-bold text-lg text-accent mb-4">Caratteristiche</h3>
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
                <h3 className="font-heading font-bold text-lg text-accent mb-4">Diamantatura Cerchi in Lega</h3>
                <div className="aspect-[2/3] rounded-2xl overflow-hidden mb-4">
                  <img 
                    src="/assets/servizi/diamantatura.webp" 
                    alt="Diamantatura cerchi in lega - Officina Schettino Moncalieri" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={600}
                    height={400}
                  />
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
          <h2 className="font-heading font-bold text-3xl text-foreground mb-8">
            Altri Servizi Disponibili
          </h2>
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

      <RichiediPreventivo />
    </Layout>
  );
};

export default DiamantaturaCerchi;