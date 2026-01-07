import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Personagens from "./pages/Personagens";
import CharacterPage from "./pages/CharacterPage";
import Historia from "./pages/Historia";
import LinhaDoTempo from "./pages/LinhaDoTempo";
import Combate from "./pages/Combate";
import Bestiario from "./pages/Bestiario";
import Itens from "./pages/Itens";
import Walkthrough from "./pages/Walkthrough";
import NPCs from "./pages/NPCs";
import SideQuests from "./pages/SideQuests";
import Finais from "./pages/Finais";
import NewGamePlus from "./pages/NewGamePlus";
import Versoes from "./pages/Versoes";
import Lore from "./pages/Lore";
import Extras from "./pages/Extras";
import Tecnicas from "./pages/Tecnicas";
import Mapas from "./pages/Mapas";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
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
            <Route path="/inimigos" element={<Bestiario />} />
            <Route path="/itens" element={<Itens />} />
            <Route path="/walkthrough" element={<Walkthrough />} />
            <Route path="/npcs" element={<NPCs />} />
            <Route path="/sidequests" element={<SideQuests />} />
            <Route path="/finais" element={<Finais />} />
            <Route path="/newgameplus" element={<NewGamePlus />} />
            <Route path="/versoes" element={<Versoes />} />
            <Route path="/lore" element={<Lore />} />
            <Route path="/extras" element={<Extras />} />
            <Route path="/tecnicas" element={<Tecnicas />} />
            <Route path="/mapas" element={<Mapas />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
