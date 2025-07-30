import Layout from "../components/layout/Layout";
import SEOHead from "../components/layout/SEOHead";
import HeroSection from "../components/home/HeroSection";
import ServicesCTASection from "../components/home/ServicesCTASection";
import GallerySection from "../components/home/GallerySection";
import SymptomsSection from "../components/home/SymptomsSection";
import LocationSection from "../components/home/LocationSection";

const Index = () => {
  return (
    <Layout>
      <SEOHead 
        title="Riparazioni Cerchi in Lega Moncalieri | Officina Schettino"
        description="Riparazione cerchi in lega a Moncalieri e Torino. Saldatura, tornitura, verniciatura e diamantatura cerchi professionali. Chiama ora per preventivo gratuito."
        canonical="/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Come funziona la riparazione cerchi in lega?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "La riparazione cerchi in lega include saldatura, tornitura, verniciatura e diamantatura. Ogni intervento è personalizzato in base al danno specifico del cerchio."
              }
            },
            {
              "@type": "Question", 
              "name": "Quanto costa riparare un cerchio in lega?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Il costo varia in base al tipo di danno e al servizio richiesto. Offriamo preventivi gratuiti e onesti per ogni riparazione."
              }
            },
            {
              "@type": "Question",
              "name": "Servite anche Torino oltre a Moncalieri?",
              "acceptedAnswer": {
                "@type": "Answer", 
                "text": "Sì, serviamo Moncalieri, Torino e tutta l'area metropolitana. Siamo specializzati in riparazioni cerchi in lega professionali."
              }
            }
          ]
        }}
      />
      <HeroSection />
      <ServicesCTASection />
      <GallerySection />
      <SymptomsSection />
      <LocationSection />
    </Layout>
  );
};

export default Index;
