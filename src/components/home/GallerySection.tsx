import SectionTitle from "../ui/SectionTitle";

const GallerySection = () => {
  const images = [
    {
      id: 1,
      src: "/assets/homepage/cerchione.webp",
      alt: "Cerchio in lega danneggiato prima della riparazione - Officina Schettino Moncalieri",
      title: "Cerchio danneggiato prima della riparazione"
    },
    {
      id: 2,
      src: "/assets/homepage/cerchione-2.webp",
      alt: "Processo di riparazione cerchi in lega - Saldatura professionale a Moncalieri",
      title: "Processo di saldatura cerchi"
    },
    {
      id: 3,
      src: "/assets/homepage/fabbro.webp",
      alt: "Tornitura e molatura cerchi in lega - Lavorazione di precisione Torino",
      title: "Tornitura e molatura cerchi"
    },
    {
      id: 5,
      src: "/assets/servizi/saldatura.webp",
      alt: "Saldatura cerchi in lega - Riparazione professionale Moncalieri",
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
              className="group relative overflow-hidden rounded-3xl bg-card shadow-card hover:shadow-xl transition-all duration-300 aspect-square"
            >
              {/* Actual Image */}
              <img
                src={image.src}
                alt={image.alt}
                title={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <p className="font-semibold">Visualizza dettagli</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;