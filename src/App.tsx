import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import Behandlinger from "./pages/Behandlinger";
import BehandlingDetail from "./pages/BehandlingDetail";
import Priser from "./pages/Priser";
import Kontakt from "./pages/Kontakt";
import FAQ from "./pages/FAQ";
import Privatlivspolitik from "./pages/Privatlivspolitik";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/behandlinger" element={<Behandlinger />} />
            <Route path="/behandlinger/:slug" element={<BehandlingDetail />} />
            <Route path="/priser" element={<Priser />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privatlivspolitik" element={<Privatlivspolitik />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
