import PageTitle from "../ui/PageTitle";
import Subtitle from "../ui/Subtitle";
import CTAButton from "../ui/CTAButton";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-card py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <PageTitle>
            NOVITÀ… DALLE SCINTILLE NASCE L'INNOVAZIONE
          </PageTitle>
          
          <Subtitle className="max-w-2xl mx-auto">
            Il Fabbro presenta una nuova soluzione per i tuoi cerchi in lega.
          </Subtitle>
          
          <div className="pt-8">
            <CTAButton to="/servizi">
              Scopri i nostri servizi
            </CTAButton>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
    </section>
  );
};

export default HeroSection;