import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Gamepad2, Check, X, Star, AlertTriangle } from "lucide-react";

interface GameVersion {
  id: string;
  name: string;
  platform: string;
  year: number;
  region: string;
  pros: string[];
  cons: string[];
  exclusiveContent: string[];
  rating: number;
  recommended: boolean;
  notes: string;
}

const versions: GameVersion[] = [
  {
    id: "snes",
    name: "Chrono Trigger (Original)",
    platform: "Super Nintendo (SNES)",
    year: 1995,
    region: "Japão, América do Norte",
    pros: [
      "Versão original e clássica",
      "Sem loading times",
      "Tradução histórica de Ted Woolsey",
      "A experiência que definiu o gênero",
    ],
    cons: [
      "Mais difícil de obter legalmente",
      "Sem conteúdo extra das versões posteriores",
      "Alguns bugs menores não corrigidos",
    ],
    exclusiveContent: [],
    rating: 5,
    recommended: true,
    notes: "A versão que iniciou tudo. Experiência pura e original.",
  },
  {
    id: "ps1",
    name: "Final Fantasy Chronicles",
    platform: "PlayStation 1",
    year: 1999,
    region: "Japão (1999), América do Norte (2001)",
    pros: [
      "Anime cutscenes adicionadas (por Akira Toriyama)",
      "Extras: Galeria de arte, banco de dados",
      "Mais acessível que o cartucho SNES",
    ],
    cons: [
      "Loading times significativos (2-5 segundos por batalha)",
      "Loading em menus e transições",
      "Pode quebrar a imersão",
    ],
    exclusiveContent: [
      "10 cutscenes animadas",
      "Galeria de arte conceitual",
      "Banco de dados de monstros",
    ],
    rating: 3,
    recommended: false,
    notes: "As cutscenes são bonitas, mas os loadings arruínam o ritmo.",
  },
  {
    id: "ds",
    name: "Chrono Trigger DS",
    platform: "Nintendo DS",
    year: 2008,
    region: "Mundial",
    pros: [
      "Tradução revisada e melhorada",
      "Sem loading times",
      "Duas telas (mapa na tela inferior)",
      "Conteúdo exclusivo",
      "Portátil",
    ],
    cons: [
      "Tela pequena pode cansar",
      "Áudio comprimido (menor qualidade)",
      "Dungeon extra é controversa",
    ],
    exclusiveContent: [
      "Dimensional Vortex (3 dungeons extras)",
      "Lost Sanctum (side quest extra)",
      "Arena of Ages (mini-game)",
      "Novo final conectando a Chrono Cross",
      "Novo boss: Dream Devourer",
    ],
    rating: 5,
    recommended: true,
    notes: "Considerada por muitos a versão definitiva. Conteúdo extra expande a lore.",
  },
  {
    id: "mobile",
    name: "Chrono Trigger Mobile",
    platform: "iOS / Android",
    year: 2011,
    region: "Mundial",
    pros: [
      "Portátil moderno",
      "Inclui conteúdo do DS",
      "Atualizações de qualidade de vida",
    ],
    cons: [
      "Controles touch podem ser imprecisos",
      "Interface redesenhada (controversa)",
      "Gráficos 'filtrados' (borrados)",
      "Preço alto para mobile",
    ],
    exclusiveContent: [
      "Todo conteúdo do DS",
    ],
    rating: 3,
    recommended: false,
    notes: "Funcional, mas os controles touch não são ideais para RPG.",
  },
  {
    id: "pc",
    name: "Chrono Trigger PC (Steam)",
    platform: "PC (Steam)",
    year: 2018,
    region: "Mundial",
    pros: [
      "Todo conteúdo do DS",
      "Resoluções modernas suportadas",
      "Múltiplos patches melhoraram muito",
      "Achievements",
      "Fácil de obter",
    ],
    cons: [
      "Lançamento inicial foi desastroso",
      "Alguns ainda preferem gráficos originais",
      "Requer patches da comunidade para experiência ideal",
    ],
    exclusiveContent: [
      "Todo conteúdo do DS",
      "Opção de gráficos originais vs. atualizados",
      "Suporte a controles modernos",
    ],
    rating: 4,
    recommended: true,
    notes: "Após patches, tornou-se uma ótima opção. Pode usar mods da comunidade.",
  },
];

export default function Versoes() {
  return (
    <Layout>
      <div className="px-6 py-12 max-w-6xl mx-auto">
        <SectionHeader 
          title="Versões do Jogo" 
          subtitle="Comparativo entre todas as versões de Chrono Trigger"
          icon={<Gamepad2 className="w-8 h-8" />}
        />

        <div className="space-y-8">
          {versions.map((version) => (
            <div key={version.id} className="card-chrono p-6">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-display font-bold text-xl text-foreground">{version.name}</h3>
                    {version.recommended && (
                      <span className="px-2 py-0.5 bg-chrono-green/20 text-chrono-green text-xs rounded-full font-bold">
                        RECOMENDADO
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground">
                    {version.platform} • {version.year} • {version.region}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < version.rating ? "text-chrono-gold fill-chrono-gold" : "text-muted"}`}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-bold text-chrono-green mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" /> Prós
                  </h4>
                  <ul className="space-y-1 text-sm">
                    {version.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-foreground">
                        <Check className="w-4 h-4 text-chrono-green flex-shrink-0 mt-0.5" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-chrono-red mb-2 flex items-center gap-2">
                    <X className="w-4 h-4" /> Contras
                  </h4>
                  <ul className="space-y-1 text-sm">
                    {version.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-foreground">
                        <X className="w-4 h-4 text-chrono-red flex-shrink-0 mt-0.5" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {version.exclusiveContent.length > 0 && (
                <div className="p-4 bg-chrono-purple/10 rounded-lg mb-4">
                  <h4 className="font-bold text-chrono-purple mb-2">Conteúdo Exclusivo/Adicional</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-foreground">
                    {version.exclusiveContent.map((content, i) => (
                      <li key={i}>{content}</li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="text-sm text-muted-foreground flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-chrono-gold flex-shrink-0 mt-0.5" />
                <span><span className="text-chrono-gold">Nota:</span> {version.notes}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 card-chrono">
          <h3 className="font-display font-bold text-primary mb-4">Qual versão jogar?</h3>
          <div className="space-y-4 text-foreground">
            <p>
              <span className="text-chrono-cyan font-bold">Para primeira vez:</span> Versão DS ou PC (Steam) com patches.
              Oferecem a experiência completa com todo conteúdo extra.
            </p>
            <p>
              <span className="text-chrono-gold font-bold">Para puristas:</span> SNES original ou ROM com tradução de Woolsey.
              A experiência clássica sem alterações.
            </p>
            <p>
              <span className="text-chrono-red font-bold">Evitar:</span> Versão PS1 devido aos loading times excessivos.
              A versão mobile tem controles problemáticos.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
