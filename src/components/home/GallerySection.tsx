import SectionTitle from "../ui/SectionTitle";

const GallerySection = () => {
  const images = [
    { id: 1, alt: "Cerchio in lega prima della riparazione" },
    { id: 2, alt: "Processo di saldatura cerchi" },
    { id: 3, alt: "Tornitura e molatura cerchi" },
    { id: 4, alt: "Verniciatura cerchi in lega" },
    { id: 5, alt: "Diamantatura cerchi finita" },
    { id: 6, alt: "Cerchio riparato risultato finale" }
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-3xl bg-card shadow-card hover:shadow-xl transition-all duration-300 aspect-square"
            >
              {/* Placeholder for images */}
              <div className="w-full h-full bg-gradient-to-br from-accent/10 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <p className="text-sm text-muted-foreground px-4">[IMG_PLACEHOLDER]</p>
                  <p className="text-xs text-muted-foreground px-4 mt-1">{image.alt}</p>
                </div>
              </div>
              
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