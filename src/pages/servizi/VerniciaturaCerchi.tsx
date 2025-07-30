import Layout from "../../components/layout/Layout";
import SEOHead from "../../components/layout/SEOHead";
import Breadcrumb from "../../components/ui/breadcrumb";
import SectionTitle from "../../components/ui/SectionTitle";
import BodyText from "../../components/ui/BodyText";
import CTAButton from "../../components/ui/CTAButton";
import RichiediPreventivo from "../../components/ui/RichiediPreventivo";
import { Palette, CheckCircle, AlertTriangle } from "lucide-react";

const VerniciaturaCerchi = () => {
  const breadcrumbItems = [
    { name: "Servizi", url: "/servizi" },
    { name: "Verniciatura Cerchi in Lega", url: "/servizi/verniciatura-cerchi-in-lega" }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Verniciatura Cerchi in Lega Moncalieri | Officina Schettino"
        description="Verniciatura cerchi in lega a Moncalieri e Torino. Verniciature professionali a polvere per ripristinare l'aspetto originale. Chiama ora."
        canonical="/servizi/verniciatura-cerchi-in-lega"
        breadcrumbs={breadcrumbItems}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Verniciatura Cerchi in Lega",
          "description": "Rifinitura e protezione dei cerchi con verniciature di alta qualità e finiture personalizzate",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Officina Schettino"
          },
          "areaServed": ["Moncalieri", "Torino"],
          "serviceType": "Riparazione Auto",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Verniciatura Cerchi in Lega",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Verniciatura a Polvere",
                  "description": "Verniciatura professionale con polveri epossidiche"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Trattamento Anti-corrosione",
                  "description": "Protezione contro corrosione e ossidazione"
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
                <Palette className="w-10 h-10 text-accent" />
              </div>
            </div>
            <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground leading-tight">
              Verniciatura Cerchi in Lega <span className="text-accent">Moncalieri</span>
            </h1>
            <BodyText size="lg" className="max-w-3xl mx-auto">
              Rinnoviamo l'aspetto dei cerchi con verniciature professionali a polvere per ripristinare la bellezza originale.
            </BodyText>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="font-heading font-bold text-2xl text-accent mb-4">Verniciatura Professionale</h2>
                <BodyText className="mb-6">
                  La verniciatura cerchi richiede tecniche specializzate e prodotti di alta qualità per garantire 
                  un risultato duraturo e resistente alle intemperie e all'usura quotidiana.
                </BodyText>
              </div>

              <div className="bg-card p-6 rounded-3xl shadow-card">
                <h3 className="font-heading font-bold text-lg text-accent mb-4">Problemi Risolti</h3>
                <div className="space-y-3">
                  {[
                    "Vernice scrostata o sbiadita",
                    "Graffi superficiali",
                    "Corrosione e ossidazione",
                    "Danni estetici"
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
                <h3 className="font-heading font-bold text-lg text-accent mb-4">Verniciatura Cerchi in Lega</h3>
                <div className="aspect-[3/2] rounded-2xl overflow-hidden mb-4">
                  <img 
                    src="/assets/servizi/verniciatura.webp" 
                    alt="Verniciatura cerchi in lega - Officina Schettino Moncalieri" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={600}
                    height={400}
                  />
                </div>
                <div className="space-y-3">
                  {[
                    "Sverniciatura e preparazione",
                    "Trattamento anti-corrosione",
                    "Applicazione primer",
                    "Verniciatura e lucidatura finale"
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

export default VerniciaturaCerchi;