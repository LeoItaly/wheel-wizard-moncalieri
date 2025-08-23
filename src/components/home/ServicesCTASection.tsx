import SectionTitle from "../ui/SectionTitle";
import CTAButton from "../ui/CTAButton";
import { Wrench, RotateCcw, Palette, Gem } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServicesCTASection = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Saldatura",
      icon: Wrench,
      color: "from-blue-500/20 to-blue-600/20",
      link: "/servizi/saldatura-cerchi-in-lega"
    },
    {
      id: 2,
      title: "Tornitura",
      icon: RotateCcw,
      color: "from-green-500/20 to-green-600/20",
      link: "/servizi/tornitura-molatura-cerchi"
    },
    {
      id: 3,
      title: "Verniciatura",
      icon: Palette,
      color: "from-purple-500/20 to-purple-600/20",
      link: "/servizi/verniciatura-cerchi-in-lega"
    },
    {
      id: 4,
      title: "Diamantatura",
      icon: Gem,
      color: "from-amber-500/20 to-amber-600/20",
      link: "/servizi/diamantatura-cerchi-in-lega"
    }
  ];

  const handleServiceClick = (link: string) => {
    navigate(link);
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionTitle level="h3" className="mb-4">
            I Nostri Servizi Specializzati
          </SectionTitle>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Riportiamo i tuoi cerchi in lega alla perfezione originale con tecniche professionali
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-card p-6 rounded-2xl shadow-card border border-border text-center cursor-pointer hover:shadow-lg hover:border-accent/30 transition-all duration-300"
                onClick={() => handleServiceClick(service.link)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleServiceClick(service.link);
                  }
                }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-heading font-semibold text-lg text-foreground">
                  {service.title}
                </h4>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <CTAButton to="/servizi">
            Scopri Tutti i Servizi
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTASection;