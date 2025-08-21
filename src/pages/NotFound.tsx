import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/layout/Layout";
import SEOHead from "../components/layout/SEOHead";
import CTAButton from "../components/ui/CTAButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <SEOHead 
        title="Pagina Non Trovata | Officina Schettino"
        description="Pagina non trovata. Torna alla home di Officina Schettino per riparazioni cerchi in lega a Moncalieri."
      />
      
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-md mx-auto px-6">
          <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Pagina Non Trovata
          </h2>
          <p className="text-muted-foreground mb-8">
            La pagina che stai cercando non esiste. Torna alla home per scoprire i nostri servizi di riparazione cerchi in lega.
          </p>
          <CTAButton to="/">
            Torna alla Home
          </CTAButton>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
