import SectionTitle from "./SectionTitle";
import BodyText from "./BodyText";
import CTAButton from "./CTAButton";
import { openWhatsApp } from "../../lib/utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface RichiediPreventivoProps {
  serviceName?: string;
  className?: string;
}

const RichiediPreventivo = ({ serviceName, className = "" }: RichiediPreventivoProps) => {
  const getWhatsAppMessage = () => {
    if (serviceName) {
      return `Ciao! Vorrei informazioni sul servizio di ${serviceName}.`;
    }
    return "Ciao! Vorrei informazioni sui vostri servizi di riparazione cerchi.";
  };

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="bg-card p-8 rounded-3xl shadow-card">
          <SectionTitle level="h3" className="mb-6">
            Richiedi un Preventivo
          </SectionTitle>
          <BodyText className="mb-8 max-w-2xl mx-auto">
            Contattaci per un preventivo gratuito. I nostri esperti valuteranno il danno e ti forniranno 
            la soluzione più adatta alle tue esigenze.
          </BodyText>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+393476735353"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground rounded-full font-body font-semibold hover:bg-accent/90 transition-colors"
            >
              Chiama: 347 67 35 353
            </a>
            <button 
              onClick={() => openWhatsApp(getWhatsAppMessage())}
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-full font-body font-semibold hover:bg-green-700 transition-colors group relative"
            >
              <FontAwesomeIcon icon={['fab', 'whatsapp']} className="w-4 h-4 mr-2" />
              WhatsApp
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-green-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Invia foto e misure
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RichiediPreventivo; 