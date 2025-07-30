import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/assets/Logo.webp" 
                alt="Officina Schettino Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <div className="font-heading font-bold text-lg text-accent">Officina Schettino</div>
                <div className="text-xs text-muted-foreground">Riparazione Cerchi in Lega</div>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Riparazione professionale cerchi in lega a Moncalieri. Saldatura, tornitura, verniciatura e diamantatura.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Link Rapidi</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/servizi" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Servizi
                </Link>
              </li>
              <li>
                <Link to="/contatti" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Contatti
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Contatti</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a 
                href="https://maps.google.com/?q=Corso+Roma+5,+10024+Moncalieri+TO"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <p>Corso Roma 5, 10024 Moncalieri (TO)</p>
              </a>
              <a 
                href="tel:+393476735353"
                className="text-accent font-medium hover:text-accent/80 transition-colors"
              >
                347 67 35 353
              </a>
              <div className="text-xs">
                <p>Lun-Ven: 8:30-12:30 / 14:00-18:30</p>
                <p>Sabato: su appuntamento</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Officina Schettino. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;