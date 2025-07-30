import { MapPin, Clock, Phone, Car, Train, Bus } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import BodyText from "../ui/BodyText";
import { openWhatsApp } from "../../lib/utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";

const LocationSection = () => {
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/contatti');
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionTitle className="mb-6">
            Come raggiungerci
          </SectionTitle>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Column */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-card p-6 rounded-3xl shadow-card">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-accent mb-2">Indirizzo</h3>
                  <a 
                    href="https://maps.google.com/?q=Corso+Roma+5,+10024+Moncalieri+TO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-foreground hover:text-accent transition-colors"
                  >
                    <p>Corso Roma 5, 10024 Moncalieri (TO)</p>
                  </a>
                </div>
              </div>
            </div>

            {/* Transportation */}
            <div className="bg-card p-6 rounded-3xl shadow-card">
              <h3 className="font-heading font-bold text-lg text-accent mb-4">Come arrivare</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Car className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body font-medium text-foreground">In auto</p>
                    <p className="text-sm text-muted-foreground">Dalla tangenziale, uscita Moncalieri, segui per il centro, siamo a due minuti da Piazza Bengasi. Parcheggio disponibile in zona.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Train className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body font-medium text-foreground">In metropolitana</p>
                    <p className="text-sm text-muted-foreground">Fermata Bengasi (capolinea, linea 1), poi dieci minuti a piedi o due fermate in bus.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Bus className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body font-medium text-foreground">In autobus</p>
                    <p className="text-sm text-muted-foreground">Linea 45-63 - fermata Corso Roma / Vittime del Vajont.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact & Hours */}
            <div className="bg-card p-6 rounded-3xl shadow-card">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-heading font-bold text-lg text-accent mb-2">Contatti</h3>
                    <p className="font-body text-foreground mb-1">
                      <a href="tel:+393476735353" className="hover:text-accent transition-colors">
                        347 67 35 353
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground">Telefono e WhatsApp</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-heading font-bold text-lg text-accent mb-2">Orari</h3>
                    <div className="text-sm space-y-1">
                      <p className="text-foreground">Lunedì - Venerdì: 8:30-12:30 / 14:00-18:30</p>
                      <p className="text-foreground">Sabato: su appuntamento</p>
                      <p className="text-muted-foreground">Domenica: Chiuso</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-accent/10 p-6 rounded-3xl border border-accent/20">
              <BodyText className="text-center mb-4">
                Passa a trovarci o richiedi Preventivi Online
              </BodyText>
              <BodyText className="text-center mb-6 text-sm text-muted-foreground">
                Inviare foto e misure dei cerchi su WhatsApp
              </BodyText>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a 
                  href="tel:+393476735353"
                  className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-full font-body font-semibold hover:bg-accent/90 transition-colors w-full sm:w-auto"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Chiama Ora
                </a>
                <button 
                  onClick={() => openWhatsApp()}
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-full font-body font-semibold hover:bg-green-700 transition-colors group relative w-full sm:w-auto"
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

          {/* Map Column */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="bg-card p-6 rounded-3xl shadow-card">
              <h3 className="font-heading font-bold text-lg text-accent mb-4">Posizione</h3>
              <div className="space-y-4">
                <div className="aspect-video bg-muted rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2325.150415334889!2d7.671687075373457!3d45.003899464034255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788127df7607d6b%3A0xfbcd3dca3b91b991!2sCorso%20Roma%2C%205%2C%2010024%20Moncalieri%20TO!5e1!3m2!1sen!2sit!4v1753880837609!5m2!1sen!2sit"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Wheel Wizard Moncalieri - Corso Roma 5"
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="text-center">
                  <a 
                    href="https://maps.google.com/?q=Corso+Roma+5,+10024+Moncalieri+TO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body font-medium text-foreground hover:text-accent transition-colors"
                  >
                    <p className="mb-1">
                      Corso Roma, 5, 10024 Moncalieri TO
                    </p>
                  </a>
                  <p className="text-sm text-muted-foreground">
                    La nostra officina si trova qui
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;