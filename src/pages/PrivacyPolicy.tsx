import Layout from "../components/layout/Layout";
import SectionTitle from "../components/ui/SectionTitle";
import BodyText from "../components/ui/BodyText";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            <div className="text-center">
              <SectionTitle className="mb-6">
                Privacy Policy
              </SectionTitle>
              <BodyText>
                Ultima modifica: {new Date().toLocaleDateString('it-IT')}
              </BodyText>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-card space-y-6">
              <div>
                <h3 className="font-heading font-bold text-xl text-accent mb-4">1. Informazioni Generali</h3>
                <BodyText>
                  Officina Schettino, con sede in Corso Roma 5, 10024 Moncalieri (TO), 
                  rispetta la privacy dei propri clienti e si impegna a proteggere i dati personali 
                  in conformità al Regolamento Generale sulla Protezione dei Dati (GDPR).
                </BodyText>
              </div>

              <div>
                <h3 className="font-heading font-bold text-xl text-accent mb-4">2. Dati Raccolti</h3>
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
                <h3 className="font-heading font-bold text-xl text-accent mb-4">3. Finalità del Trattamento</h3>
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
                <h3 className="font-heading font-bold text-xl text-accent mb-4">4. Base Giuridica</h3>
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
                <h3 className="font-heading font-bold text-xl text-accent mb-4">5. Diritti dell'Interessato</h3>
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
                <h3 className="font-heading font-bold text-xl text-accent mb-4">6. Contatti</h3>
                <BodyText>
                  Per esercitare i tuoi diritti o per domande sulla privacy, contattaci:
                </BodyText>
                <div className="mt-3 space-y-1 text-foreground">
                  <p>Email: privacy@officinaschettino.it</p>
                  <p>Telefono: 347 67 35 353</p>
                  <p>Indirizzo: Corso Roma 5, 10024 Moncalieri (TO)</p>
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