import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { GitBranch, Clock, Users, Star } from "lucide-react";

interface Ending {
  id: number;
  name: string;
  condition: string;
  description: string;
  characters: string;
  notableEvents: string[];
  difficulty: "Normal" | "NG+" | "Específico";
}

const endings: Ending[] = [
  {
    id: 1,
    name: "Beyond Time (Final Canônico)",
    condition: "Derrote Lavos normalmente após completar a história principal",
    description: "O final padrão e canônico. Crono e seus amigos derrotam Lavos, salvando o futuro. Cada personagem retorna à sua era, e há uma celebração no Millennial Fair. Dependendo de escolhas, Crono pode ir buscar sua mãe que entrou em um portal.",
    characters: "Todos disponíveis",
    notableEvents: ["Despedida de cada personagem", "Millennial Fair reconstruída", "Crono e Marle voam no Epoch"],
    difficulty: "Normal"
  },
  {
    id: 2,
    name: "Reunion (Desenvolvedor)",
    condition: "NG+: Derrote Lavos no Telepod no início do jogo",
    description: "Final dos desenvolvedores. O jogador encontra a equipe de desenvolvimento do jogo como personagens dentro do End of Time. Eles falam sobre o processo de criação do jogo.",
    characters: "Crono (sozinho)",
    notableEvents: ["Encontro com Toriyama, Sakaguchi, Mitsuda", "Quebra da quarta parede", "Easter egg humorístico"],
    difficulty: "NG+"
  },
  {
    id: 3,
    name: "The Dream Project",
    condition: "NG+: Derrote Lavos após retornar de 600 AD na primeira vez",
    description: "Outro final dos desenvolvedores, similar ao Reunion, mas com mais membros da equipe e diálogos diferentes.",
    characters: "Crono, Marle",
    notableEvents: ["Mais desenvolvedores", "Comentários sobre o desenvolvimento"],
    difficulty: "NG+"
  },
  {
    id: 4,
    name: "The Successor of Guardia",
    condition: "NG+: Derrote Lavos após obter Marle mas antes de ir ao fim dos tempos",
    description: "Frog impede o casamento de Marle porque declara seu amor. Cena cômica onde ele aparece como herói de 600 AD.",
    characters: "Crono, Marle",
    notableEvents: ["Frog interrompe casamento", "Guarda real confuso", "Final romântico alternativo"],
    difficulty: "NG+"
  },
  {
    id: 5,
    name: "Good Night",
    condition: "NG+: Derrote Lavos após salvar Leene mas antes de retornar ao presente",
    description: "Final simples mostrando Nu e um Frog dormindo, com créditos passando. Um final de 'boa noite'.",
    characters: "Crono, Marle, Lucca",
    notableEvents: ["Nu dorme", "Créditos estilo 'boa noite'"],
    difficulty: "NG+"
  },
  {
    id: 6,
    name: "The Legendary Hero",
    condition: "NG+: Derrote Lavos após retornar ao presente na primeira vez",
    description: "Robo se torna o herói legendário de 600 AD em vez de Frog. História alternativa cômica.",
    characters: "Crono, Marle, Lucca",
    notableEvents: ["Robo como herói medieval", "Estátua de Robo", "Reescrita da história"],
    difficulty: "NG+"
  },
  {
    id: 7,
    name: "The Unknown Past",
    condition: "NG+: Derrote Lavos após visitar o End of Time pela primeira vez",
    description: "Humanos pré-históricos evoluem de forma diferente, criando um futuro com Reptites como raça dominante.",
    characters: "Varia",
    notableEvents: ["Reptites evoluídos", "Humanos como animais", "Mundo alternativo"],
    difficulty: "NG+"
  },
  {
    id: 8,
    name: "People of the Times",
    condition: "NG+: Derrote Lavos após obter a Masamune mas antes de confrontar Magus",
    description: "Slideshow mostrando NPCs de diferentes eras. Um final focado nos personagens secundários.",
    characters: "Varia",
    notableEvents: ["Foco em NPCs", "Slideshow nostálgico"],
    difficulty: "NG+"
  },
  {
    id: 9,
    name: "The Oath",
    condition: "NG+: Derrote Lavos imediatamente após derrotar Magus (antes de Azala)",
    description: "Frog confronta Magus de forma diferente. O juramento de Frog é cumprido de forma alternativa.",
    characters: "Crono, Frog + outros",
    notableEvents: ["Confronto final Frog vs Magus", "Destino de Glenn"],
    difficulty: "NG+"
  },
  {
    id: 10,
    name: "Dino Age",
    condition: "NG+: Derrote Lavos depois de ver a batalha Gate Key mas antes de derrotar Azala",
    description: "Sem a queda de Lavos, os Reptites dominam. Um mundo de dinossauros evoluídos.",
    characters: "Varia",
    notableEvents: ["Reptites vencem", "Mundo jurássico moderno"],
    difficulty: "NG+"
  },
  {
    id: 11,
    name: "What The Prophet Seeks",
    condition: "NG+: Derrote Lavos após chegar a 12.000 BC mas antes do Ocean Palace",
    description: "O Profeta (Magus) e sua verdadeira busca são revelados de forma diferente.",
    characters: "Varia",
    notableEvents: ["Backstory de Magus", "Schala e Janus"],
    difficulty: "NG+"
  },
  {
    id: 12,
    name: "A Slide Show?",
    condition: "NG+: Derrote Lavos depois de Schala abrir a porta selada mas antes do Ocean Palace",
    description: "Final de slideshow com cenas dos personagens em situações cômicas e inusitadas.",
    characters: "Varia",
    notableEvents: ["Cenas cômicas", "Personagens em situações estranhas"],
    difficulty: "NG+"
  },
  {
    id: 13,
    name: "Memory Lane",
    condition: "NG+: Derrote Lavos após o incidente do Ocean Palace mas antes de ressuscitar Crono",
    description: "Montagem de memórias e momentos da jornada. Final melancólico sem Crono.",
    characters: "Todos menos Crono",
    notableEvents: ["Memórias da jornada", "Crono permanece morto"],
    difficulty: "Específico"
  },
  {
    id: 14,
    name: "Dream's Epilogue",
    condition: "Derrote Dream Devourer (apenas versão DS/PC)",
    description: "Final adicionado nas versões posteriores, conectando Chrono Trigger a Chrono Cross. Revela o destino de Schala.",
    characters: "Magus, Schala",
    notableEvents: ["Conexão com Chrono Cross", "Dream Devourer", "Schala/Kid"],
    difficulty: "Específico"
  },
];

export default function Finais() {
  return (
    <Layout>
      <div className="px-6 py-12 max-w-6xl mx-auto">
        <SectionHeader 
          title="Finais Alternativos" 
          subtitle="Chrono Trigger possui 14+ finais diferentes baseados em quando você derrota Lavos"
          icon={<GitBranch className="w-8 h-8" />}
        />

        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-chrono-cyan/10 border border-chrono-cyan/30 rounded-lg">
            <h3 className="font-bold text-chrono-cyan mb-1">Normal</h3>
            <p className="text-sm text-muted-foreground">Finais obtidos em uma partida normal</p>
          </div>
          <div className="p-4 bg-chrono-purple/10 border border-chrono-purple/30 rounded-lg">
            <h3 className="font-bold text-chrono-purple mb-1">New Game+</h3>
            <p className="text-sm text-muted-foreground">Requerem NG+ para acessar cedo</p>
          </div>
          <div className="p-4 bg-chrono-gold/10 border border-chrono-gold/30 rounded-lg">
            <h3 className="font-bold text-chrono-gold mb-1">Específico</h3>
            <p className="text-sm text-muted-foreground">Condições especiais ou versões específicas</p>
          </div>
        </div>

        <div className="space-y-4">
          {endings.map((ending) => (
            <div key={ending.id} className="card-chrono p-6">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                      {ending.id}
                    </span>
                    {ending.name}
                  </h3>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  ending.difficulty === "Normal" ? "bg-chrono-cyan/20 text-chrono-cyan" :
                  ending.difficulty === "NG+" ? "bg-chrono-purple/20 text-chrono-purple" :
                  "bg-chrono-gold/20 text-chrono-gold"
                }`}>
                  {ending.difficulty}
                </span>
              </div>

              <div className="space-y-3">
                <p className="text-sm flex items-start gap-2">
                  <Clock className="w-4 h-4 text-chrono-gold mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="text-chrono-gold">Condição:</span> {ending.condition}</span>
                </p>

                <p className="text-foreground">{ending.description}</p>

                <p className="text-sm flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground"><span className="text-primary">Personagens:</span> {ending.characters}</span>
                </p>

                <div className="flex flex-wrap gap-2">
                  {ending.notableEvents.map((event, i) => (
                    <span key={i} className="flex items-center gap-1 px-2 py-1 bg-muted text-xs rounded-full text-muted-foreground">
                      <Star className="w-3 h-3 text-chrono-gold" />
                      {event}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 card-chrono">
          <h3 className="font-display font-bold text-foreground mb-4">Como ver todos os finais?</h3>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Complete o jogo uma vez para desbloquear <span className="text-chrono-purple">New Game+</span></li>
            <li>Em NG+, você mantém níveis, equipamentos e itens</li>
            <li>Use o portal no início (Telepod) ou o Epoch para enfrentar Lavos em diferentes momentos</li>
            <li>Cada ponto da história desbloqueia um final diferente</li>
            <li>Alguns finais têm variações baseadas em quem está no grupo</li>
          </ol>
        </div>
      </div>
    </Layout>
  );
}
