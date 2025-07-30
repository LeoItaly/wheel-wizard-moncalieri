import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { openWhatsApp } from "../../lib/utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => openWhatsApp()}
        className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 hover:scale-110 group"
        aria-label="Contattaci su WhatsApp"
      >
        <FontAwesomeIcon icon={['fab', 'whatsapp']} className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Invia foto e misure
        </span>
      </button>
    </div>
  );
};

export default Layout;