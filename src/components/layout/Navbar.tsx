import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const services = [
    { name: "Saldatura Cerchi in Lega", path: "/servizi/saldatura-cerchi-in-lega" },
    { name: "Tornitura Molatura Cerchi", path: "/servizi/tornitura-molatura-cerchi" },
    { name: "Verniciatura Cerchi in Lega", path: "/servizi/verniciatura-cerchi-in-lega" },
    { name: "Diamantatura Cerchi in Lega", path: "/servizi/diamantatura-cerchi-in-lega" }
  ];

  return (
    <nav className="bg-card shadow-card sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-heading font-bold text-lg">OS</span>
            </div>
            <div>
              <div className="font-heading font-bold text-lg text-accent">Officina Schettino</div>
              <div className="text-xs text-muted-foreground">Riparazione Cerchi in Lega</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-body font-medium transition-colors ${
                isActive("/") ? "text-accent" : "text-foreground hover:text-accent"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className={`font-body font-medium flex items-center space-x-1 transition-colors ${
                  location.pathname.startsWith("/servizi") ? "text-accent" : "text-foreground hover:text-accent"
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>Servizi</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-popover border border-border rounded-lg shadow-card transition-all duration-200 ${
                  isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="py-2">
                  <Link
                    to="/servizi"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                  >
                    Tutti i Servizi
                  </Link>
                  <div className="border-t border-border my-2"></div>
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/contatti"
              className={`font-body font-medium transition-colors ${
                isActive("/contatti") ? "text-accent" : "text-foreground hover:text-accent"
              }`}
            >
              Contatti
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="py-4 space-y-2">
              <Link
                to="/"
                className={`block py-2 font-body font-medium transition-colors ${
                  isActive("/") ? "text-accent" : "text-foreground hover:text-accent"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <div>
                <Link
                  to="/servizi"
                  className={`block py-2 font-body font-medium transition-colors ${
                    location.pathname.startsWith("/servizi") ? "text-accent" : "text-foreground hover:text-accent"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Servizi
                </Link>
                <div className="pl-4 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block py-1 text-sm text-muted-foreground hover:text-accent transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/contatti"
                className={`block py-2 font-body font-medium transition-colors ${
                  isActive("/contatti") ? "text-accent" : "text-foreground hover:text-accent"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contatti
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;