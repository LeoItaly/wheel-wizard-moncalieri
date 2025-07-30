import Layout from "../components/layout/Layout";
import SEOHead from "../components/layout/SEOHead";
import Breadcrumb from "../components/ui/breadcrumb";
import SectionTitle from "../components/ui/SectionTitle";
import BodyText from "../components/ui/BodyText";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { openWhatsApp } from "../lib/utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contatti = () => {
  const teamMembers = [
    {
      name: "Dennis",
      phone: "340 69 14 883",
      email: "schettino.f97@gmail.com",
      role: "Specialista Riparazioni"
    },
    {
      name: "Franco", 
      phone: "347 67 35 353",
      email: "schettino.f97@gmail.com",
      role: "Maestro Artigiano"
    }
  ];

  const breadcrumbItems = [
    { name: "Contatti", url: "/contatti" }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Contatti Officina Schettino Moncalieri | Fabbro e Riparazioni Cerchi"
        description="Contatti Officina Schettino a Moncalieri. Fabbro specializzato in riparazioni cerchi in lega. Chiama Dennis o Franco per preventivo gratuito."
        canonical="/contatti"
        breadcrumbs={breadcrumbItems}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contatti Officina Schettino",
          "description": "Contatti per riparazioni cerchi in lega e servizi di fabbro a Moncalieri",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "Officina Schettino",
            "telephone": ["+393406914883", "+393476735353"],
            "email": "schettino.f97@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Via Torino 2",
              "addressLocality": "Moncalieri",
              "postalCode": "10024",
              "addressRegion": "TO",
              "addressCountry": "IT"
            }
          }
        }}
      />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-background to-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground leading-tight">
              Contatti <span className="text-accent">Officina Schettino</span>
            </h1>
            <BodyText size="lg" className="max-w-3xl mx-auto">
              Siamo padre e figlio con una passione per il lavoro ben fatto. Da anni ci occupiamo con serietà e attenzione di lavori da Fabbro e abbiamo deciso di ampliarci aggiungendo la riparazione dei cerchi in lega. Per noi ogni cliente è importante e ogni lavoro viene curato come se fosse per la nostra famiglia.
            </BodyText>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Team Members Cards - Left Side */}
            <div className="space-y-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-card p-8 rounded-3xl shadow-card border border-border hover:border-accent/30 transition-colors duration-300"
                >
                  {/* Member Info */}
                  <div className="space-y-4">
                    <div>
                      <h2 className="font-heading font-bold text-2xl text-accent mb-1">{member.name}</h2>
                      <p className="text-muted-foreground">{member.role}</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-accent" />
                        <a 
                          href={`tel:${member.phone.replace(/\s/g, '')}`}
                          className="font-body text-foreground hover:text-accent transition-colors"
                        >
                          {member.phone}
                        </a>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-accent" />
                        <a 
                          href={`mailto:${member.email}`}
                          className="font-body text-foreground hover:text-accent transition-colors"
                        >
                          {member.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Team Image - Right Side */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="bg-card p-6 rounded-3xl shadow-card">
                <div className="flex flex-col">
                  <div className="aspect-[714/736] rounded-2xl overflow-hidden">
                    <img 
                      src="/assets/about-us/padre-figlio.webp" 
                      alt="Dennis e Franco Schettino - Padre e Figlio Officina Moncalieri" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={714}
                      height={736}
                    />
                  </div>
                  <div className="text-center mt-4">
                    <p className="font-body font-medium text-foreground">
                      Franco e Dennis
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Padre e Figlio
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <SectionTitle level="h3" className="mb-6">
                  Informazioni di Contatto
                </SectionTitle>
              </div>

              {/* Address */}
              <div className="bg-card p-6 rounded-3xl shadow-card">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h4 className="font-heading font-bold text-lg text-accent mb-2">Indirizzo</h4>
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

              {/* Hours */}
              <div className="bg-card p-6 rounded-3xl shadow-card">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h4 className="font-heading font-bold text-lg text-accent mb-2">Orari di Apertura</h4>
                    <div className="space-y-1 text-sm">
                                             <p className="text-foreground">Lunedì - Venerdì: 8:30-12:30 / 14:00-18:30</p>
                      <p className="text-foreground">Sabato: su appuntamento</p>
                      <p className="text-muted-foreground">Domenica: Chiuso</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-accent/10 p-6 rounded-3xl border border-accent/20">
                <h4 className="font-heading font-bold text-lg text-accent mb-4">Contatto Rapido</h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="tel:+393476735353"
                    className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-full font-body font-semibold hover:bg-accent/90 transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Chiama Ora
                  </a>
                  <button 
                    onClick={() => openWhatsApp()}
                    className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-full font-body font-semibold hover:bg-green-700 transition-colors"
                  >
                    <FontAwesomeIcon icon={['fab', 'whatsapp']} className="w-4 h-4 mr-2" />
                    WhatsApp
                  </button>
                  <a 
                    href="mailto:schettino.f97@gmail.com"
                    className="inline-flex items-center justify-center px-6 py-3 border border-accent text-accent rounded-full font-body font-semibold hover:bg-accent/10 transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="bg-card p-6 rounded-3xl shadow-card">
                <h4 className="font-heading font-bold text-lg text-accent mb-4">Come Trovarci</h4>
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
    </Layout>
  );
};

export default Contatti;