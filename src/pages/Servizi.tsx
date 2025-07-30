import Layout from "../components/layout/Layout";
import SEOHead from "../components/layout/SEOHead";
import Breadcrumb from "../components/ui/breadcrumb";
import SectionTitle from "../components/ui/SectionTitle";
import BodyText from "../components/ui/BodyText";
import CTAButton from "../components/ui/CTAButton";
import { useNavigate } from "react-router-dom";

const Servizi = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      id: 1,
      title: "Saldatura Cerchi in Lega",
      description: "Riparazione professionale di crepe e rotture nei cerchi in lega con tecniche avanzate di saldatura.",
      image: "/assets/servizi/saldatura.webp",
      link: "/servizi/saldatura-cerchi-in-lega"
    },
    {
      id: 2,
      title: "Tornitura e Molatura",
      description: "Ripristino della forma originale dei cerchi danneggiati attraverso tornitura e molatura di precisione.",
      image: null, // Placeholder - no image yet
      link: "/servizi/tornitura-molatura-cerchi"
    },
    {
      id: 3,
      title: "Verniciatura Cerchi",
      description: "Rifinitura e protezione dei cerchi con verniciature di alta qualità e finiture personalizzate.",
      image: "/assets/servizi/verniciatura.webp",
      link: "/servizi/verniciatura-cerchi-in-lega",
      imagePosition: "object-top" // Position image to show top part
    },
    {
      id: 4,
      title: "Diamantatura",
      description: "Trattamento superficiale per ripristinare la lucentezza originale dei cerchi in lega.",
      image: "/assets/servizi/diamantatura.webp",
      link: "/servizi/diamantatura-cerchi-in-lega",
      imagePosition: "object-top" // Position image to show top part
    }
  ];

  const handleServiceClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    navigate(link);
    window.scrollTo(0, 0);
  };

  const breadcrumbItems = [
    { name: "Servizi", url: "/servizi" }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Servizi Cerchi in Lega | Officina Schettino"
        description="Servizi completi per cerchi in lega: saldatura, tornitura, verniciatura e diamantatura a Moncalieri e Torino. Scopri i nostri servizi professionali."
        canonical="/servizi"
        breadcrumbs={breadcrumbItems}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Servizi Riparazione Cerchi in Lega",
          "description": "Servizi completi per la riparazione di cerchi in lega: saldatura, tornitura, verniciatura e diamantatura",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Officina Schettino"
          },
          "areaServed": ["Moncalieri", "Torino"],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Servizi Cerchi in Lega",
            "itemListElement": services.map(service => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": service.title,
                "description": service.description
              }
            }))
          }
        }}
      />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-background to-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground leading-tight">
              Servizi Cerchi in Lega <span className="text-accent">Moncalieri</span>
            </h1>
            <BodyText size="lg" className="max-w-3xl mx-auto">
              Offriamo un servizio completo per riportare i tuoi cerchi alla forma e all'estetica originale. Ecco cosa possiamo fare per te!
            </BodyText>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-card rounded-3xl shadow-card overflow-hidden border border-border hover:border-accent/30 transition-colors duration-300">
                <div className="aspect-video bg-muted">
                  {service.image ? (
                    <img 
                      src={service.image} 
                      alt={`${service.title} - Officina Schettino Moncalieri`}
                      className={`w-full h-full object-cover ${service.imagePosition || 'object-center'}`}
                      loading="lazy"
                      width={600}
                      height={400}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      <div className="text-center">
                        <div className="text-4xl mb-2">🔧</div>
                        <div className="text-sm">Immagine in arrivo</div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h2 className="font-heading font-bold text-xl text-accent mb-3">
                    {service.title}
                  </h2>
                  <BodyText className="mb-4">
                    {service.description}
                  </BodyText>
                  <CTAButton to={service.link} variant="secondary">
                    Scopri di più
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Servizi;