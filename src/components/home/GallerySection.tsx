import SectionTitle from "../ui/SectionTitle";

const GallerySection = () => {
  const images = [
    {
      id: 1,
      src: "/assets/homepage/cerchione.webp",
      alt: "Cerchio in lega danneggiato prima della riparazione - Officina Schettino Moncalieri Torino Nichelino",
      title: "Cerchio danneggiato prima della riparazione"
    },
    {
      id: 2,
      src: "/assets/homepage/cerchione-2.webp",
      alt: "Processo di riparazione cerchi in lega - Saldatura professionale a Moncalieri Torino Nichelino",
      title: "Processo di saldatura cerchi"
    },
    {
      id: 3,
      src: "/assets/homepage/fabbro.webp",
      alt: "Tornitura e molatura cerchi in lega - Lavorazione di precisione Moncalieri Torino Nichelino",
      title: "Tornitura e molatura cerchi"
    },
    {
      id: 5,
      src: "/assets/servizi/saldatura.webp",
      alt: "Saldatura cerchi in lega - Riparazione professionale Moncalieri Torino Nichelino",
      title: "Saldatura cerchi in lega"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionTitle className="mb-6">
            I Nostri Lavori
          </SectionTitle>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Scopri la qualità del nostro lavoro attraverso alcuni esempi dei cerchi che abbiamo riparato
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-3xl bg-card shadow-card aspect-square"
            >
              {/* Actual Image */}
              <img
                src={image.src}
                alt={image.alt}
                title={image.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;