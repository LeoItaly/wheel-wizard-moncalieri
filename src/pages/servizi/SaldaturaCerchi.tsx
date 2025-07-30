import Layout from "../../components/layout/Layout";
import SEOHead from "../../components/layout/SEOHead";
import Breadcrumb from "../../components/ui/breadcrumb";
import SectionTitle from "../../components/ui/SectionTitle";
import BodyText from "../../components/ui/BodyText";
import CTAButton from "../../components/ui/CTAButton";
import RichiediPreventivo from "../../components/ui/RichiediPreventivo";
import { Wrench, CheckCircle, AlertTriangle } from "lucide-react";
import { openWhatsApp } from "../../lib/utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

  const breadcrumbItems = [
    { name: "Servizi", url: "/servizi" },
    { name: "Saldatura Cerchi in Lega", url: "/servizi/saldatura-cerchi-in-lega" }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Saldatura Cerchi in Lega Moncalieri | Officina Schettino"
        description="Saldatura cerchi in lega a Moncalieri e Torino. Riparazione professionale di crepe e rotture. Chiama ora per preventivo gratuito."
        canonical="/servizi/saldatura-cerchi-in-lega"
        breadcrumbs={breadcrumbItems}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Saldatura Cerchi in Lega",
          "description": "Riparazione professionale di crepe e rotture nei cerchi in lega con tecniche avanzate di saldatura",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Officina Schettino"
          },
          "areaServed": ["Moncalieri", "Torino"],
          "serviceType": "Riparazione Auto",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Saldatura Cerchi in Lega",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Saldatura Crepe Cerchi",
                  "description": "Riparazione di crepe da impatto con buche"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Saldatura Fessure Cerchi",
                  "description": "Riparazione di fessure longitudinali"
                }
              }
            ]
          }
        }}
      />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-background to-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
                <Wrench className="w-10 h-10 text-accent" />
              </div>
            </div>
            <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground leading-tight">
              Saldatura Cerchi in Lega <span className="text-accent">Moncalieri</span>
            </h1>
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
                <h2 className="font-heading font-bold text-2xl text-accent mb-4">Il Nostro Processo</h2>
                <BodyText className="mb-6">
                  La saldatura cerchi in lega è una procedura delicata che richiede competenze specifiche e attrezzature professionali. 
                  Il nostro team utilizza tecniche avanzate per garantire riparazioni durevoli e sicure.
                </BodyText>
              </div>

              <div className="bg-card p-6 rounded-3xl shadow-card">
                <h3 className="font-heading font-bold text-lg text-accent mb-4">Tipi di Danni Riparabili</h3>
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
                <h3 className="font-heading font-bold text-lg text-accent mb-4">Vantaggi del Servizio</h3>
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
                <h3 className="font-heading font-bold text-lg text-accent mb-4">Saldatura Cerchi in Lega</h3>
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <img 
                    src="/assets/servizi/saldatura.webp" 
                    alt="Saldatura cerchi in lega - Officina Schettino Moncalieri" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={600}
                    height={400}
                  />
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

      {/* Richiedi Preventivo Section */}
      <RichiediPreventivo serviceName="saldatura cerchi in lega" />
    </Layout>
  );
};

export default SaldaturaCerchi;