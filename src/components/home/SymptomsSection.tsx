import { CheckCircle, AlertTriangle } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import BodyText from "../ui/BodyText";

const SymptomsSection = () => {
  const symptoms = [
    "Il volante vibra",
    "Senti rumori strani", 
    "Perdi pressione",
    "La macchina sbandella o le gomme si consumano male"
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <SectionTitle className="mb-6">
              Hai preso una buca, colpito un marciapiede, sentito un botto?
            </SectionTitle>
            <BodyText className="max-w-3xl mx-auto">
              I cerchi in lega sono componenti delicati che possono subire danni anche con piccoli urti. 
              Riconoscere i segnali è importante per la tua sicurezza e per evitare danni maggiori.
            </BodyText>
          </div>

          {/* Symptoms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {symptoms.map((symptom, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-3xl shadow-card border border-border hover:border-accent/30 transition-colors duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <p className="font-body font-medium text-foreground">{symptom}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-card p-8 rounded-3xl shadow-card border border-accent/20">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-accent mb-3">
                  Non ignorare questi segnali
                </h3>
                <BodyText className="mb-4">
                  Non ignorare questi segnali: è il tuo cerchio che ti sta chiedendo aiuto. Rivolgiti al Fabbro Schettino…
                </BodyText>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="tel:+393476735353"
                    className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-full font-body font-semibold hover:bg-accent/90 transition-colors"
                  >
                    Chiama Ora: 347 67 35 353
                  </a>
                  <a 
                    href="/contatti"
                    className="inline-flex items-center px-6 py-3 border border-accent text-accent rounded-full font-body font-semibold hover:bg-accent/10 transition-colors"
                  >
                    Preventivo Online
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SymptomsSection;