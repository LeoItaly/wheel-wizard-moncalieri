import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { useScrollToTop } from "./hooks/use-scroll-to-top";
import Index from "./pages/Index";
import Servizi from "./pages/Servizi";
import Contatti from "./pages/Contatti";
import SaldaturaCerchi from "./pages/servizi/SaldaturaCerchi";
import TornituraRisaMolatura from "./pages/servizi/TornituraRisaMolatura";
import VerniciaturaCerchi from "./pages/servizi/VerniciaturaCerchi";
import DiamantaturaCerchi from "./pages/servizi/DiamantaturaCerchi";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";

// Add FontAwesome brands icons to the library
library.add(fab);

const queryClient = new QueryClient();

const AppRoutes = () => {
  useScrollToTop();
  
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/servizi" element={<Servizi />} />
      <Route path="/servizi/saldatura-cerchi-in-lega" element={<SaldaturaCerchi />} />
      <Route path="/servizi/tornitura-molatura-cerchi" element={<TornituraRisaMolatura />} />
      <Route path="/servizi/verniciatura-cerchi-in-lega" element={<VerniciaturaCerchi />} />
      <Route path="/servizi/diamantatura-cerchi-in-lega" element={<DiamantaturaCerchi />} />
      <Route path="/contatti" element={<Contatti />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
