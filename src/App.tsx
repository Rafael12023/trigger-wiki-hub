import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Personagens from "./pages/Personagens";
import CharacterPage from "./pages/CharacterPage";
import Historia from "./pages/Historia";
import LinhaDoTempo from "./pages/LinhaDoTempo";
import Combate from "./pages/Combate";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/personagens" element={<Personagens />} />
          <Route path="/personagens/:slug" element={<CharacterPage />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/historia/linha-do-tempo" element={<LinhaDoTempo />} />
          <Route path="/combate" element={<Combate />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
