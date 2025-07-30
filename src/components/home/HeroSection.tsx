import PageTitle from "../ui/PageTitle";
import Subtitle from "../ui/Subtitle";
import CTAButton from "../ui/CTAButton";
import { Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-card py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="font-heading font-bold text-4xl lg:text-6xl text-foreground leading-tight">
            Riparazioni Cerchi in Lega <span className="text-accent">Moncalieri</span>
          </h1>
          
          <Subtitle className="max-w-2xl mx-auto">
            Specialisti in riparazione cerchi in lega a Moncalieri e Torino. Saldatura, tornitura, verniciatura e diamantatura professionali.
          </Subtitle>
          
          <div className="pt-8 space-y-4">
            <CTAButton to="/servizi">
              Scopri i nostri servizi
            </CTAButton>
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <strong>Chiama ora:</strong>
              <a 
                href="tel:+393406914883"
                className="text-accent hover:text-accent/80 transition-colors font-medium flex items-center gap-1"
              >
                <Phone className="w-4 h-4" />
                340 69 14 883
              </a>
            </p>
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