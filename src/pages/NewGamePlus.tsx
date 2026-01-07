import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { RefreshCw, Check, X, Lightbulb, Route } from "lucide-react";

const keptItems = [
  "Níveis de todos os personagens",
  "Todos os equipamentos (armas, armaduras, acessórios)",
  "Todos os itens consumíveis e Key Items (maioria)",
  "Todas as Techs aprendidas",
  "Gold (dinheiro)",
  "Tabs usados (Power, Magic, Speed)",
];

const notKeptItems = [
  "Progressão da história (recomeça do início)",
  "Clone de Crono (precisa refazer)",
  "Gate Key (reobtido automaticamente)",
  "Epoch (precisa reobtê-lo)",
  "Personagens (precisam ser recrutados)",
  "Acesso a eras (precisa desbloquear portais)",
];

const routes = [
  {
    name: "Rota dos Finais Rápidos",
    description: "Para jogadores que querem ver todos os finais rapidamente",
    steps: [
      "Inicie NG+ e vá direto ao Telepod (Feira)",
      "Interaja com o Telepod para enfrentar Lavos imediatamente",
      "Isso dá acesso ao Final dos Desenvolvedores",
      "Reinicie e progrida um pouco mais para cada final",
      "Use a lista de finais como guia de paradas",
    ],
  },
  {
    name: "Rota Completionist",
    description: "Para 100% de itens e side quests",
    steps: [
      "Reconstrua o Epoch o mais rápido possível",
      "Complete todas as Side Quests novamente (já são mais fáceis)",
      "Use o Black Omen em múltiplas eras para máximo loot",
      "Colete todos os Tabs restantes",
      "Derrote Lavos pelo Bucket para final normal",
    ],
  },
  {
    name: "Rota de Speedrun",
    description: "Para terminar o jogo o mais rápido possível",
    steps: [
      "Ignore todas as Side Quests",
      "Vá direto aos pontos-chave da história",
      "Com equipamentos de NG+, bosses são triviais",
      "Use o Black Omen direto para Lavos",
      "Tempo possível: menos de 2 horas",
    ],
  },
];

const tips = [
  "No NG+, você pode derrotar Lavos a QUALQUER momento usando o balde no End of Time ou o Telepod no início",
  "Equipamentos de final de jogo tornam o início extremamente fácil",
  "É a única forma de obter certos finais (os de desenvolvedores requerem NG+)",
  "Você pode farmar infinitamente no Black Omen em NG+ (já que pode fazer em múltiplas eras)",
  "Personagens mantêm suas Techs mesmo antes de serem recrutados",
  "Magus mantém equipamentos mesmo se você escolheu lutar contra ele na primeira run",
];

export default function NewGamePlus() {
  return (
    <Layout>
      <div className="px-6 py-12 max-w-6xl mx-auto">
        <SectionHeader 
          title="New Game+" 
          subtitle="Continue sua jornada mantendo todo o progresso de personagem"
          icon={<RefreshCw className="w-8 h-8" />}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* What's Kept */}
          <div className="card-chrono p-6">
            <h3 className="font-display font-bold text-chrono-green mb-4 flex items-center gap-2">
              <Check className="w-5 h-5" /> O Que é Mantido
            </h3>
            <ul className="space-y-2">
              {keptItems.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-foreground">
                  <Check className="w-4 h-4 text-chrono-green" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* What's Not Kept */}
          <div className="card-chrono p-6">
            <h3 className="font-display font-bold text-chrono-red mb-4 flex items-center gap-2">
              <X className="w-5 h-5" /> O Que NÃO é Mantido
            </h3>
            <ul className="space-y-2">
              {notKeptItems.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-foreground">
                  <X className="w-4 h-4 text-chrono-red" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Routes */}
        <h3 className="font-display font-bold text-2xl text-foreground mb-6 flex items-center gap-3">
          <Route className="w-6 h-6 text-primary" /> Rotas Recomendadas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {routes.map((route, i) => (
            <div key={i} className="card-chrono p-6">
              <h4 className="font-display font-bold text-chrono-cyan mb-2">{route.name}</h4>
              <p className="text-sm text-muted-foreground mb-4">{route.description}</p>
              <ol className="list-decimal list-inside space-y-1 text-sm text-foreground">
                {route.steps.map((step, j) => (
                  <li key={j}>{step}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div className="card-chrono p-6">
          <h3 className="font-display font-bold text-chrono-gold mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5" /> Dicas de NG+
          </h3>
          <ul className="space-y-3">
            {tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-foreground">
                <Lightbulb className="w-4 h-4 text-chrono-gold mt-1 flex-shrink-0" />
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* How to Start */}
        <div className="mt-12 p-6 bg-primary/10 border border-primary/30 rounded-lg">
          <h3 className="font-display font-bold text-primary mb-4">Como Iniciar New Game+</h3>
          <ol className="list-decimal list-inside space-y-2 text-foreground">
            <li>Complete o jogo uma vez (derrote Lavos e veja os créditos)</li>
            <li>Após os créditos, será perguntado se deseja salvar</li>
            <li>Salve o jogo no mesmo slot ou em um novo</li>
            <li>Carregue o save - ele terá uma marca indicando NG+</li>
            <li>O jogo começará do início com todos os seus itens e níveis</li>
          </ol>
        </div>
      </div>
    </Layout>
  );
}
