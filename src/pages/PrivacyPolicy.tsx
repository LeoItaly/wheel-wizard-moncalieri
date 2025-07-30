import Layout from "../components/layout/Layout";
import SEOHead from "../components/layout/SEOHead";
import Breadcrumb from "../components/ui/breadcrumb";
import SectionTitle from "../components/ui/SectionTitle";
import BodyText from "../components/ui/BodyText";

const PrivacyPolicy = () => {
  const breadcrumbItems = [
    { name: "Privacy Policy", url: "/privacy-policy" }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Privacy Policy | Officina Schettino"
        description="Privacy Policy di Officina Schettino. Informazioni sul trattamento dei dati personali per riparazioni cerchi in lega a Moncalieri."
        canonical="/privacy-policy"
        breadcrumbs={breadcrumbItems}
      />
      
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground leading-tight mb-6">
                Privacy Policy
              </h1>
              <BodyText>
                Ultima modifica: {new Date().toLocaleDateString('it-IT')}
              </BodyText>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-card space-y-6">
              <div>
                <h2 className="font-heading font-bold text-xl text-accent mb-4">1. Informazioni Generali</h2>
                <BodyText>
                  Officina Schettino, con sede in <a href="https://maps.google.com/?q=Corso+Roma+5,+10024+Moncalieri+TO" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Corso Roma 5, 10024 Moncalieri (TO)</a>, 
                  rispetta la privacy dei propri clienti e si impegna a proteggere i dati personali 
                  in conformità al Regolamento Generale sulla Protezione dei Dati (GDPR).
                </BodyText>
              </div>

              <div>
                <h2 className="font-heading font-bold text-xl text-accent mb-4">2. Dati Raccolti</h2>
                <BodyText>
                  Raccogliamo i seguenti tipi di dati personali:
                </BodyText>
                <ul className="list-disc list-inside mt-3 space-y-2 text-foreground">
                  <li>Dati di contatto (nome, telefono, email)</li>
                  <li>Informazioni sui veicoli per la riparazione</li>
                  <li>Dati di navigazione del sito web</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading font-bold text-xl text-accent mb-4">3. Finalità del Trattamento</h2>
                <BodyText>
                  I dati vengono utilizzati per:
                </BodyText>
                <ul className="list-disc list-inside mt-3 space-y-2 text-foreground">
                  <li>Fornire servizi di riparazione cerchi</li>
                  <li>Gestire preventivi e comunicazioni</li>
                  <li>Migliorare i nostri servizi</li>
                  <li>Adempimenti legali</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading font-bold text-xl text-accent mb-4">4. Base Giuridica</h2>
                <BodyText>
                  Il trattamento dei dati si basa su:
                </BodyText>
                <ul className="list-disc list-inside mt-3 space-y-2 text-foreground">
                  <li>Consenso esplicito dell'interessato</li>
                  <li>Esecuzione di contratti</li>
                  <li>Legittimo interesse</li>
                  <li>Adempimento di obblighi legali</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading font-bold text-xl text-accent mb-4">5. Diritti dell'Interessato</h2>
                <BodyText>
                  Hai il diritto di:
                </BodyText>
                <ul className="list-disc list-inside mt-3 space-y-2 text-foreground">
                  <li>Accedere ai tuoi dati personali</li>
                  <li>Rettificare dati inesatti</li>
                  <li>Cancellare i dati (diritto all'oblio)</li>
                  <li>Limitare il trattamento</li>
                  <li>Portabilità dei dati</li>
                  <li>Opporti al trattamento</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading font-bold text-xl text-accent mb-4">6. Contatti</h2>
                <BodyText>
                  Per esercitare i tuoi diritti o per domande sulla privacy, contattaci:
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

export default PrivacyPolicy;