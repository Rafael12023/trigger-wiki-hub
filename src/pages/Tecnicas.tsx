import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Sparkles, Zap, Flame, Snowflake, Sun, Moon, Skull } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Tech {
  name: string;
  mp: number;
  tp?: number;
  element?: string;
  description: string;
  target: string;
}

interface CharacterTechs {
  character: string;
  element: string;
  icon: React.ReactNode;
  color: string;
  singleTechs: Tech[];
}

const characterTechs: CharacterTechs[] = [
  {
    character: "Crono",
    element: "Raio",
    icon: <Zap className="w-5 h-5" />,
    color: "chrono-gold",
    singleTechs: [
      { name: "Cyclone", mp: 2, tp: 5, description: "Ataque circular que atinge inimigos próximos", target: "Círculo" },
      { name: "Slash", mp: 2, tp: 90, description: "Corte rápido em linha reta", target: "Linha" },
      { name: "Lightning", mp: 2, tp: 200, element: "Raio", description: "Raio que atinge um inimigo", target: "Um" },
      { name: "Cleave", mp: 4, tp: 400, description: "Ataque pesado em arco", target: "Arco frontal" },
      { name: "Lightning II", mp: 8, tp: 500, element: "Raio", description: "Raio poderoso que atinge área", target: "Todos" },
      { name: "Raise", mp: 10, tp: 600, description: "Revive um aliado com pouco HP", target: "Um aliado" },
      { name: "Frenzy", mp: 12, tp: 800, description: "Múltiplos ataques consecutivos", target: "Um" },
      { name: "Luminaire", mp: 20, tp: 1000, element: "Raio", description: "A técnica mais poderosa de Crono - devastação elétrica total", target: "Todos" },
    ]
  },
  {
    character: "Marle",
    element: "Gelo",
    icon: <Snowflake className="w-5 h-5" />,
    color: "chrono-cyan",
    singleTechs: [
      { name: "Aura", mp: 1, tp: 10, description: "Cura um aliado", target: "Um aliado" },
      { name: "Provoke", mp: 1, tp: 50, description: "Confunde inimigos, fazendo-os atacar uns aos outros", target: "Um" },
      { name: "Ice", mp: 2, tp: 150, element: "Gelo", description: "Bloco de gelo contra um inimigo", target: "Um" },
      { name: "Aura Whirl", mp: 3, tp: 200, description: "Cura moderada para todo o grupo", target: "Grupo" },
      { name: "Ice II", mp: 8, tp: 400, element: "Gelo", description: "Tempestade de gelo que atinge todos", target: "Todos" },
      { name: "Life 2", mp: 15, tp: 600, description: "Revive um aliado com HP cheio", target: "Um aliado" },
      { name: "Haste", mp: 6, tp: 800, description: "Aumenta velocidade de um aliado", target: "Um aliado" },
    ]
  },
  {
    character: "Lucca",
    element: "Fogo",
    icon: <Flame className="w-5 h-5" />,
    color: "chrono-orange",
    singleTechs: [
      { name: "Flame Toss", mp: 1, tp: 10, description: "Lança uma bola de fogo", target: "Um" },
      { name: "Hypnowave", mp: 1, tp: 60, element: "Sombra", description: "Tenta adormecer inimigos", target: "Todos" },
      { name: "Fire", mp: 2, tp: 150, element: "Fogo", description: "Explosão de fogo", target: "Um" },
      { name: "Napalm", mp: 3, tp: 250, element: "Fogo", description: "Bomba incendiária em área", target: "Círculo" },
      { name: "Protect", mp: 6, tp: 400, description: "Aumenta defesa de um aliado", target: "Um aliado" },
      { name: "Fire II", mp: 8, tp: 500, element: "Fogo", description: "Pilar de fogo poderoso", target: "Todos" },
      { name: "Megaton Bomb", mp: 15, tp: 700, element: "Fogo", description: "Explosão massiva", target: "Todos" },
      { name: "Flare", mp: 20, tp: 900, element: "Fogo", description: "A técnica mais poderosa de Lucca", target: "Todos" },
    ]
  },
  {
    character: "Frog",
    element: "Água",
    icon: <Snowflake className="w-5 h-5" />,
    color: "chrono-green",
    singleTechs: [
      { name: "Slurp", mp: 1, tp: 10, description: "Cura pequena para um aliado", target: "Um aliado" },
      { name: "Slurp Slash", mp: 2, tp: 100, description: "Ataque com língua + espada", target: "Um" },
      { name: "Water", mp: 2, tp: 150, element: "Água", description: "Bolha de água contra um inimigo", target: "Um" },
      { name: "Aerial Strike", mp: 4, tp: 250, description: "Ataque aéreo com Masamune", target: "Um" },
      { name: "Water II", mp: 8, tp: 400, element: "Água", description: "Tsunami que atinge todos", target: "Todos" },
      { name: "Slurp Kiss", mp: 1, tp: 600, description: "Cura status de um aliado", target: "Um aliado" },
      { name: "Frog Squash", mp: 15, tp: 800, description: "Dano baseado em HP perdido - quanto menos HP, mais dano", target: "Todos" },
    ]
  },
  {
    character: "Robo",
    element: "Sombra",
    icon: <Moon className="w-5 h-5" />,
    color: "chrono-red",
    singleTechs: [
      { name: "Rocket Punch", mp: 1, tp: 10, description: "Lança punho mecânico", target: "Um" },
      { name: "Cure Beam", mp: 2, tp: 100, description: "Laser de cura", target: "Um aliado" },
      { name: "Laser Spin", mp: 3, tp: 200, element: "Sombra", description: "Laser rotativo em área", target: "Todos" },
      { name: "Robo Tackle", mp: 4, tp: 300, description: "Investida corpo a corpo pesada", target: "Um" },
      { name: "Heal Beam", mp: 3, tp: 400, description: "Cura todo o grupo", target: "Grupo" },
      { name: "Uzzi Punch", mp: 12, tp: 600, description: "Série de socos rápidos", target: "Um" },
      { name: "Proximity Bomb", mp: 14, tp: 800, element: "Sombra", description: "Bomba que explode em área", target: "Círculo" },
      { name: "Electrocute", mp: 17, tp: 1000, element: "Sombra", description: "Eletrocução massiva", target: "Todos" },
    ]
  },
  {
    character: "Ayla",
    element: "Nenhum",
    icon: <Sun className="w-5 h-5" />,
    color: "chrono-gold",
    singleTechs: [
      { name: "Kiss", mp: 1, tp: 10, description: "Cura HP de um aliado", target: "Um aliado" },
      { name: "Roundillo Kick", mp: 2, tp: 100, description: "Chute circular", target: "Um" },
      { name: "Cat Attack", mp: 3, tp: 200, description: "Série de ataques felinos", target: "Um" },
      { name: "Boulder Toss", mp: 4, tp: 300, description: "Arremessa uma pedra gigante", target: "Um" },
      { name: "Charm", mp: 4, tp: 400, description: "Rouba um item do inimigo", target: "Um" },
      { name: "Tail Spin", mp: 10, tp: 600, description: "Ataque giratório com cauda", target: "Todos" },
      { name: "Dino Tail", mp: 15, tp: 800, description: "Ataque devastador - dano crítico se o HP do inimigo estiver baixo", target: "Todos" },
      { name: "Triple Kick", mp: 20, tp: 1000, description: "Três chutes poderosos consecutivos", target: "Um" },
    ]
  },
  {
    character: "Magus",
    element: "Sombra",
    icon: <Skull className="w-5 h-5" />,
    color: "chrono-purple",
    singleTechs: [
      { name: "Lightning II", mp: 8, element: "Raio", description: "Tempestade elétrica", target: "Todos" },
      { name: "Ice II", mp: 8, element: "Gelo", description: "Tempestade de gelo", target: "Todos" },
      { name: "Fire II", mp: 8, element: "Fogo", description: "Pilar de fogo", target: "Todos" },
      { name: "Dark Bomb", mp: 8, element: "Sombra", description: "Explosão de energia sombria", target: "Círculo" },
      { name: "Magic Wall", mp: 8, description: "Aumenta defesa mágica do grupo", target: "Grupo" },
      { name: "Dark Mist", mp: 10, element: "Sombra", description: "Névoa que enfraquece inimigos", target: "Todos" },
      { name: "Black Hole", mp: 15, element: "Sombra", description: "Pode eliminar inimigos instantaneamente", target: "Todos" },
      { name: "Dark Matter", mp: 20, element: "Sombra", description: "A técnica mais poderosa de Magus - devastação sombria", target: "Todos" },
    ]
  },
];

const doubleTechs = [
  { name: "Aura Whirl", characters: "Crono + Marle", mp: 5, description: "Ciclone curativo que restaura HP do grupo" },
  { name: "Ice Sword", characters: "Crono + Marle", mp: 4, element: "Gelo", description: "Espada congelante" },
  { name: "Fire Whirl", characters: "Crono + Lucca", mp: 3, element: "Fogo", description: "Ciclone flamejante" },
  { name: "Fire Sword", characters: "Crono + Lucca", mp: 4, element: "Fogo", description: "Espada em chamas" },
  { name: "Rocket Roll", characters: "Crono + Robo", mp: 3, description: "Robo lança Crono como projétil" },
  { name: "Max Cyclone", characters: "Crono + Robo", mp: 3, description: "Ciclone mecanizado devastador" },
  { name: "X-Strike", characters: "Crono + Frog", mp: 4, description: "Ataque em X sincronizado - uma das melhores double techs" },
  { name: "Spire", characters: "Crono + Frog", mp: 5, element: "Raio/Água", description: "Combinação de raio e água" },
  { name: "Drill Kick", characters: "Crono + Ayla", mp: 3, description: "Ataque perfurante sincronizado" },
  { name: "Volt Bite", characters: "Crono + Ayla", mp: 4, element: "Raio", description: "Mordida elétrica" },
  { name: "Antipode", characters: "Marle + Lucca", mp: 6, element: "Fogo/Gelo", description: "Fogo e gelo em um ataque paradoxal" },
  { name: "Antipode II", characters: "Marle + Lucca", mp: 10, element: "Fogo/Gelo", description: "Versão mais forte do Antipode" },
  { name: "Glacier Bomb", characters: "Marle + Lucca", mp: 12, element: "Fogo/Gelo", description: "Bomba congelante" },
  { name: "Ice Water", characters: "Marle + Frog", mp: 4, element: "Água/Gelo", description: "Combinação de água e gelo" },
  { name: "Double Cure", characters: "Marle + Frog", mp: 4, description: "Cura dupla para o grupo" },
  { name: "Twin Charm", characters: "Marle + Ayla", mp: 4, description: "Roubo de item garantido" },
  { name: "Blade Toss", characters: "Lucca + Robo", mp: 5, description: "Robo arremessa Lucca como projétil" },
  { name: "Fire Punch", characters: "Lucca + Robo", mp: 6, element: "Fogo", description: "Soco flamejante de Robo" },
  { name: "Bubble Snap", characters: "Frog + Ayla", mp: 4, element: "Água", description: "Bolha esmagadora" },
  { name: "Beast Toss", characters: "Robo + Ayla", mp: 4, description: "Robo arremessa Ayla nos inimigos" },
];

const tripleTechs = [
  { name: "Delta Force", characters: "Crono + Marle + Lucca", mp: 20, element: "Raio/Gelo/Fogo", description: "Os três elementos primários em um ataque devastador" },
  { name: "Arc Impulse", characters: "Crono + Marle + Frog", mp: 16, description: "Ataque triplo coordenado" },
  { name: "Final Kick", characters: "Crono + Marle + Ayla", mp: 15, description: "Chute final triplo" },
  { name: "Frost Arc", characters: "Crono + Frog + Marle", mp: 15, element: "Gelo/Raio", description: "Arco congelante elétrico" },
  { name: "Fire Zone", characters: "Crono + Lucca + Robo", mp: 16, element: "Fogo/Raio", description: "Zona de fogo e energia" },
  { name: "Omega Flare", characters: "Lucca + Robo + Magus", mp: 20, element: "Fogo/Sombra", description: "Flare aprimorado com energia sombria" },
  { name: "Spin Strike", characters: "Crono + Robo + Frog", mp: 16, description: "Ataque giratório triplo" },
  { name: "3D Attack", characters: "Crono + Robo + Ayla", mp: 15, description: "Ataque tridimensional" },
  { name: "Grand Dream", characters: "Crono + Marle + Frog", mp: 40, description: "A mais poderosa Triple Tech - requer Masamune aprimorada" },
  { name: "Dark Eternal", characters: "Magus + Marle + Lucca", mp: 25, element: "Sombra/Gelo/Fogo", description: "Elementos combinados com sombra" },
  { name: "Poyozo Dance", characters: "Marle + Lucca + Ayla", mp: 1, description: "Dança das meninas - efeito aleatório" },
  { name: "Gatling Kick", characters: "Lucca + Robo + Ayla", mp: 15, description: "Série de chutes e tiros" },
];


export default function Tecnicas() {
  return (
    <Layout>
      <div className="px-6 py-12 max-w-6xl mx-auto">
        <SectionHeader 
          title="Técnicas (Techs)" 
          subtitle="Todas as habilidades individuais, duplas e triplas de Chrono Trigger"
          icon={<Sparkles className="w-8 h-8" />}
        />

        <Tabs defaultValue="single" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="single">Single Techs</TabsTrigger>
            <TabsTrigger value="double">Double Techs</TabsTrigger>
            <TabsTrigger value="triple">Triple Techs</TabsTrigger>
          </TabsList>

          <TabsContent value="single">
            <div className="space-y-8">
              {characterTechs.map((char) => (
                <div key={char.character} className="card-chrono p-6">
                  <h3 className={`font-display font-bold text-xl text-${char.color} mb-4 flex items-center gap-2`}>
                    {char.icon} {char.character}
                    <span className="text-sm font-normal text-muted-foreground ml-2">Elemento: {char.element}</span>
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-2 px-3 text-muted-foreground">Tech</th>
                          <th className="text-center py-2 px-3 text-muted-foreground">MP</th>
                          <th className="text-center py-2 px-3 text-muted-foreground">TP</th>
                          <th className="text-left py-2 px-3 text-muted-foreground">Descrição</th>
                          <th className="text-center py-2 px-3 text-muted-foreground">Alvo</th>
                        </tr>
                      </thead>
                      <tbody>
                        {char.singleTechs.map((tech, i) => (
                          <tr key={i} className="border-b border-border/50 hover:bg-muted/30">
                            <td className="py-2 px-3 font-medium text-foreground">
                              {tech.name}
                              {tech.element && (
                                <span className="ml-2 text-xs text-primary">({tech.element})</span>
                              )}
                            </td>
                            <td className="text-center py-2 px-3 text-chrono-cyan">{tech.mp}</td>
                            <td className="text-center py-2 px-3 text-chrono-gold">{tech.tp || "—"}</td>
                            <td className="py-2 px-3 text-muted-foreground">{tech.description}</td>
                            <td className="text-center py-2 px-3 text-muted-foreground">{tech.target}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="double">
            <div className="card-chrono p-6">
              <h3 className="font-display font-bold text-foreground mb-2">Double Techs (Técnicas Duplas)</h3>
              <p className="text-muted-foreground mb-6">
                Combinações de dois personagens. Cada personagem precisa ter aprendido a Single Tech base.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-3 text-muted-foreground">Tech</th>
                      <th className="text-left py-2 px-3 text-muted-foreground">Personagens</th>
                      <th className="text-center py-2 px-3 text-muted-foreground">MP Total</th>
                      <th className="text-left py-2 px-3 text-muted-foreground">Descrição</th>
                    </tr>
                  </thead>
                  <tbody>
                    {doubleTechs.map((tech, i) => (
                      <tr key={i} className="border-b border-border/50 hover:bg-muted/30">
                        <td className="py-2 px-3 font-medium text-foreground">
                          {tech.name}
                          {tech.element && (
                            <span className="ml-2 text-xs text-primary">({tech.element})</span>
                          )}
                        </td>
                        <td className="py-2 px-3 text-chrono-cyan">{tech.characters}</td>
                        <td className="text-center py-2 px-3 text-chrono-gold">{tech.mp}</td>
                        <td className="py-2 px-3 text-muted-foreground">{tech.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="triple">
            <div className="card-chrono p-6">
              <h3 className="font-display font-bold text-foreground mb-2">Triple Techs (Técnicas Triplas)</h3>
              <p className="text-muted-foreground mb-6">
                As mais poderosas combinações, requerem três personagens. Algumas precisam de itens especiais (Rocks).
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-3 text-muted-foreground">Tech</th>
                      <th className="text-left py-2 px-3 text-muted-foreground">Personagens</th>
                      <th className="text-center py-2 px-3 text-muted-foreground">MP Total</th>
                      <th className="text-left py-2 px-3 text-muted-foreground">Descrição</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tripleTechs.map((tech, i) => (
                      <tr key={i} className="border-b border-border/50 hover:bg-muted/30">
                        <td className="py-2 px-3 font-medium text-foreground">
                          {tech.name}
                          {tech.element && (
                            <span className="ml-2 text-xs text-primary">({tech.element})</span>
                          )}
                        </td>
                        <td className="py-2 px-3 text-chrono-purple">{tech.characters}</td>
                        <td className="text-center py-2 px-3 text-chrono-gold">{tech.mp}</td>
                        <td className="py-2 px-3 text-muted-foreground">{tech.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
