import Layout from "../components/layout/Layout";
import SEOHead from "../components/layout/SEOHead";
import Breadcrumb from "../components/ui/breadcrumb";
import SectionTitle from "../components/ui/SectionTitle";
import BodyText from "../components/ui/BodyText";

const CookiePolicy = () => {
  const breadcrumbItems = [
    { name: "Cookie Policy", url: "/cookie-policy" }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Cookie Policy | Officina Schettino"
        description="Cookie Policy di Officina Schettino. Informazioni sui cookie utilizzati per riparazioni cerchi in lega a Moncalieri."
        canonical="/cookie-policy"
        breadcrumbs={breadcrumbItems}
      />
      
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground leading-tight mb-6">
                Cookie Policy
              </h1>
              <BodyText>
                Ultima modifica: {new Date().toLocaleDateString('it-IT')}
              </BodyText>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-card space-y-6">
              <div>
                <h2 className="font-heading font-bold text-xl text-accent mb-4">1. Cosa sono i Cookie</h2>
                <BodyText>
                  I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo 
                  quando visiti il nostro sito web. Ci aiutano a fornire una migliore esperienza 
                  di navigazione e a capire come utilizzi il nostro sito.
                </BodyText>
              </div>

              <div>
                <h2 className="font-heading font-bold text-xl text-accent mb-4">2. Tipi di Cookie Utilizzati</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg text-accent mb-2">Cookie Tecnici</h3>
                    <BodyText>
                      Necessari per il funzionamento del sito web. Non richiedono consenso.
                    </BodyText>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg text-accent mb-2">Cookie Analitici</h3>
                    <BodyText>
                      Ci aiutano a capire come i visitatori interagiscono con il nostro sito.
                    </BodyText>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg text-accent mb-2">Cookie di Marketing</h3>
                    <BodyText>
                      Utilizzati per mostrare pubblicità personalizzata e misurare l'efficacia delle campagne.
                    </BodyText>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-heading font-bold text-xl text-accent mb-4">3. Cookie di Terze Parti</h2>
                <BodyText>
                  Il nostro sito potrebbe utilizzare cookie di terze parti come:
                </BodyText>
                <ul className="list-disc list-inside mt-3 space-y-2 text-foreground">
                  <li>Google Analytics per l'analisi del traffico</li>
                  <li>Google Maps per la visualizzazione delle mappe</li>
                  <li>Social media plugins</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading font-bold text-xl text-accent mb-4">4. Gestione dei Cookie</h2>
                <BodyText>
                  Puoi gestire le tue preferenze sui cookie attraverso:
                </BodyText>
                <ul className="list-disc list-inside mt-3 space-y-2 text-foreground">
                  <li>Le impostazioni del tuo browser</li>
                  <li>Il banner di consenso sul nostro sito</li>
                  <li>Strumenti di opt-out delle terze parti</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading font-bold text-xl text-accent mb-4">5. Disabilitare i Cookie</h2>
                <BodyText>
                  Puoi disabilitare i cookie modificando le impostazioni del tuo browser. 
                  Tuttavia, questo potrebbe influire sulla funzionalità del sito web.
                </BodyText>
              </div>

              <div>
                <h2 className="font-heading font-bold text-xl text-accent mb-4">6. Aggiornamenti</h2>
                <BodyText>
                  Questa Cookie Policy può essere aggiornata periodicamente. 
                  Ti consigliamo di controllarla regolarmente per rimanere informato 
                  sui nostri utilizzi dei cookie.
                </BodyText>
              </div>

              <div>
                <h2 className="font-heading font-bold text-xl text-accent mb-4">7. Contatti</h2>
                <BodyText>
                  Per domande sui cookie o sulla privacy, contattaci:
                </BodyText>
                <div className="mt-3 space-y-1 text-foreground">
                  <p>Email: schettino.f97@gmail.com</p>
                  <p>Telefono: 347 67 35 353</p>
                  <p>Indirizzo: <a href="https://maps.google.com/?q=Corso+Roma+5,+10024+Moncalieri+TO" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Corso Roma 5, 10024 Moncalieri (TO)</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CookiePolicy;