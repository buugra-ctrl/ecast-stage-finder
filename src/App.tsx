import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Uyelikler from "./pages/Uyelikler";
import Hakkimizda from "./pages/Hakkimizda";
import Iletisim from "./pages/Iletisim";
import Haberler from "./pages/Haberler";
import CastDirektorleri from "./pages/uyelikler/CastDirektorleri";
import Oyuncular from "./pages/uyelikler/Oyuncular";
import Menajerler from "./pages/uyelikler/Menajerler";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/uyelikler" element={<Uyelikler />} />
          <Route path="/uyelikler/cast-direktorleri" element={<CastDirektorleri />} />
          <Route path="/uyelikler/oyuncular" element={<Oyuncular />} />
          <Route path="/uyelikler/menajerler" element={<Menajerler />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/iletisim" element={<Iletisim />} />
          <Route path="/haberler" element={<Haberler />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
