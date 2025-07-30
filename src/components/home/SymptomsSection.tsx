import { CheckCircle } from "lucide-react";
import BodyText from "../ui/BodyText";
import { openWhatsApp } from "../../lib/utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SymptomsSection = () => {
  const symptoms = [
    "Il volante vibra",
    "Senti rumori strani",
    "Il cerchio ha ammaccature",
    "La gomma perde aria",
    "Il cerchio è deformato",
    "Senti vibrazioni a velocità alta",
    "Il cerchio ha graffi profondi",
    "La gomma si consuma in modo irregolare"
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-accent mb-6">
              Sintomi comuni di cerchi danneggiati
            </h2>
            <BodyText size="lg" className="max-w-2xl mx-auto">
              Se noti uno di questi sintomi, potrebbe essere il momento di far controllare i tuoi cerchi
            </BodyText>
          </div>

          {/* Symptoms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {symptoms.map((symptom, index) => {
              // Check if this symptom should be centered
              const shouldCenter = [
                "Il cerchio è deformato",
                "Senti vibrazioni a velocità alta", 
                "Il cerchio ha graffi profondi"
              ].includes(symptom);
              
              return (
                <div key={index} className="bg-card p-6 rounded-3xl shadow-card border border-accent/10">
                  <div className={`flex ${shouldCenter ? 'items-center justify-center text-center' : 'items-start'} space-x-3`}>
                    <CheckCircle className={`w-6 h-6 text-accent ${shouldCenter ? '' : 'mt-1'} flex-shrink-0`} />
                    <p className="font-body text-foreground">{symptom}</p>
                  </div>
                </div>
              );
            })}
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
                  è il tuo cerchio che ti sta chiedendo aiuto. Rivolgiti al Fabbro Schettino, l'unico che ha transformato l'esperienza in una nuova tecnologia per la riparazione dei cerchi in lega.
                </BodyText>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="tel:+393476735353"
                    className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-full font-body font-semibold hover:bg-accent/90 transition-colors"
                  >
                    Chiama Ora: 347 67 35 353
                  </a>
                  <button 
                    onClick={() => openWhatsApp("Ciao! Ho notato alcuni sintomi nei miei cerchi e vorrei un consulto.")}
                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-full font-body font-semibold hover:bg-green-700 transition-colors group relative"
                  >
                    <FontAwesomeIcon icon={['fab', 'whatsapp']} className="w-4 h-4 mr-2" />
                    WhatsApp
                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      Invia foto e misure
                    </span>
                  </button>
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