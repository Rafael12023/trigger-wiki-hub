import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Star, CheckCircle, Gift, Clock, MapPin } from "lucide-react";
import { useState } from "react";

interface SideQuest {
  id: string;
  name: string;
  character: string;
  era: string;
  location: string;
  requirement: string;
  steps: string[];
  rewards: string[];
  difficulty: "Fácil" | "Médio" | "Difícil";
  missable: boolean;
}

const sideQuests: SideQuest[] = [
  {
    id: "sunstone",
    name: "O Sol Perdido (Sun Stone)",
    character: "Lucca",
    era: "65M BC → 2300 AD",
    location: "Sun Keep (múltiplas eras)",
    requirement: "Após obter Epoch com asas",
    steps: [
      "Vá ao Sun Palace em 2300 AD e derrote Son of Sun para obter Moon Stone",
      "Leve a Moon Stone ao Sun Keep em 65M BC e deixe-a carregando",
      "Viaje para 1000 AD - a pedra foi roubada! Vá à casa do prefeito em Porre",
      "Viaje para 600 AD e dê um Jerky para a mulher na mesma casa (muda o futuro)",
      "Volte a 1000 AD e o prefeito devolverá a pedra voluntariamente",
      "Pegue a Sun Stone em 2300 AD no Sun Keep",
      "Leve para Lucca criar o WonderShot e Sun Shades"
    ],
    rewards: ["WonderShot (arma de Lucca)", "Sun Shades (acessório)", "Prism Dress (com Rainbow Shell)"],
    difficulty: "Médio",
    missable: false
  },
  {
    id: "rainbow_shell",
    name: "O Rainbow Shell",
    character: "Marle",
    era: "600 AD → 1000 AD",
    location: "Giant's Claw, Guardia Castle",
    requirement: "Visite o túmulo de Toma em 1000 AD após derramá-lo em 600 AD",
    steps: [
      "Em 600 AD, encontre Toma no café de Dorino. Ele dará uma bebida",
      "Se Toma falhar, derrame a bebida em seu túmulo em 1000 AD (West Cape)",
      "O fantasma de Toma revela a localização do Rainbow Shell: Giant's Claw",
      "Vá ao Giant's Claw em 600 AD (local onde Tyrano Lair estava)",
      "Derrote Rust Tyrano e obtenha o Rainbow Shell",
      "O shell é guardado no castelo por 400 anos",
      "Em 1000 AD, Marle descobre uma conspiração contra o rei",
      "Chegue ao julgamento a tempo e prove a inocência do rei com o shell"
    ],
    rewards: ["Prism Dress ou Prism Helmet", "Rainbow (espada de Crono)", "Reconciliação de Marle e seu pai"],
    difficulty: "Médio",
    missable: false
  },
  {
    id: "frog_sidequest",
    name: "As Ruínas do Norte",
    character: "Frog",
    era: "600 AD → 1000 AD",
    location: "Northern Ruins",
    requirement: "Ter Frog no grupo e Masamune",
    steps: [
      "Visite as Northern Ruins em 600 AD - estão destruídas e cheias de fantasmas",
      "Vá a 1000 AD e pague o carpinteiro para consertar as ruínas",
      "Volte a 600 AD - mais áreas acessíveis mas espíritos agressivos",
      "Alterne entre as eras, consertando e limpando os fantasmas",
      "Encontre o fantasma de Cyrus no túmulo mais profundo",
      "Com Frog no grupo, assista à cena entre Frog e Cyrus",
      "A alma de Cyrus descansa e a Masamune é aprimorada"
    ],
    rewards: ["Masamune aprimorada (muito mais forte)", "Resolução do arco de Frog", "Acesso a itens nas ruínas"],
    difficulty: "Médio",
    missable: false
  },
  {
    id: "robo_sidequest",
    name: "Geno Dome",
    character: "Robo",
    era: "2300 AD",
    location: "Geno Dome",
    requirement: "Ter Robo no grupo",
    steps: [
      "Localize Geno Dome no mapa de 2300 AD",
      "Robo deve estar no grupo para entrar",
      "Navegue pelos quebra-cabeças do domo",
      "Encontre Atropos XR - a 'irmã' de Robo",
      "Sobreviva à batalha forçada entre Robo e Atropos",
      "Derrote Mother Brain e os Displays",
      "Robo confronta suas origens e propósito"
    ],
    rewards: ["Crisis Arm (melhor arma de Robo)", "Atropos Ribbon (acessório)", "Resolução do arco de Robo"],
    difficulty: "Difícil",
    missable: false
  },
  {
    id: "forest_sidequest",
    name: "A Floresta de Fiona",
    character: "Robo",
    era: "600 AD → 1000 AD",
    location: "Fiona's Villa",
    requirement: "Derrotar Retinite no Sunken Desert",
    steps: [
      "Visite a Vila de Fiona em 600 AD - ela quer restaurar a floresta",
      "Vá ao Sunken Desert e derrote Retinite",
      "Obtenha a semente de Fiona",
      "Robo se oferece para plantar e cuidar da floresta por 400 anos",
      "Viaje para 1000 AD - uma floresta enorme cresceu!",
      "Encontre Robo no santuário (muito danificado após séculos)",
      "Noite de acampamento com cena importante sobre a 'Entity'"
    ],
    rewards: ["Green Dream (acessório de auto-revive única)", "Fiona Shrine com itens", "Lore sobre a Entity"],
    difficulty: "Médio",
    missable: false
  },
  {
    id: "ozzie_fort",
    name: "Ozzie's Fort",
    character: "Magus (opcional)",
    era: "600 AD",
    location: "Ozzie's Fort",
    requirement: "Após derrotar Magus (pode recrutá-lo)",
    steps: [
      "Com Magus derrotado ou recrutado, seu castelo anterior fica acessível",
      "Ozzie, Slash e Flea fugiram para um novo forte",
      "Localize Ozzie's Fort no mapa de 600 AD",
      "Navegue pelas armadilhas do forte (muitas são cômicas)",
      "Derrote Flea Plus, Super Slash e Great Ozzie",
      "Batalha final contra os três juntos",
      "Ozzie é derrotado de forma humilhante por um gato"
    ],
    rewards: ["Dash Ring (acessório de velocidade)", "Ozzie Pants, Flea Vest, Slasher 2", "Satisfação de derrotar os Mystics de vez"],
    difficulty: "Médio",
    missable: false
  },
  {
    id: "black_omen",
    name: "Black Omen",
    character: "Todos",
    era: "12000 BC / 600 AD / 1000 AD",
    location: "Black Omen (flutuando)",
    requirement: "Após eventos do Ocean Palace",
    steps: [
      "O Black Omen aparece em múltiplas eras (12000 BC em diante)",
      "Pode ser completado em cada era para mais recompensas",
      "Comece pela era mais antiga (12000 BC) para máximo benefício",
      "Navegue pelos andares do Omen enfrentando inimigos fortes",
      "Derrote Mega Mutant, Giga Mutant, Terra Mutant",
      "Enfrente Mammon Machine",
      "Batalha final contra Queen Zeal (forma monstruosa)",
      "Lavos pode ser enfrentado diretamente do Omen"
    ],
    rewards: ["Power Seal, Magic Seal", "Múltiplos Tabs", "Haste Helm, ZodiacCape", "MegaElixirs e muito XP"],
    difficulty: "Difícil",
    missable: false
  },
  {
    id: "jerky_quest",
    name: "O Jerky do Prefeito",
    character: "Qualquer",
    era: "600 AD → 1000 AD",
    location: "Porre",
    requirement: "Parte da quest do Sun Stone",
    steps: [
      "Em 600 AD, compre Jerky em Porre (item caro)",
      "Dê o Jerky para a mulher na Elder's House de graça",
      "Ela ficará tão grata que ensinará generosidade à família",
      "Em 1000 AD, o descendente (prefeito) será generoso também",
      "Ele devolverá a Sun Stone sem pedir nada"
    ],
    rewards: ["Sun Stone (recuperada)", "Demonstração de como pequenas ações mudam o futuro"],
    difficulty: "Fácil",
    missable: false
  },
];

export default function SideQuests() {
  const [expandedQuest, setExpandedQuest] = useState<string | null>(null);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Fácil": return "text-chrono-green";
      case "Médio": return "text-chrono-gold";
      case "Difícil": return "text-chrono-red";
      default: return "text-muted-foreground";
    }
  };

  return (
    <Layout>
      <div className="px-6 py-12 max-w-6xl mx-auto">
        <SectionHeader 
          title="Side Quests" 
          subtitle="Missões opcionais que expandem a história e fornecem recompensas poderosas"
          icon={<Star className="w-8 h-8" />}
        />

        <div className="mb-8 p-4 bg-chrono-purple/10 border border-chrono-purple/30 rounded-lg">
          <p className="text-muted-foreground">
            <span className="text-chrono-purple font-bold">Dica:</span> As Side Quests ficam disponíveis após os eventos do Ocean Palace.
            Cada uma desenvolve um personagem e oferece equipamentos únicos. Recomenda-se completá-las antes de enfrentar Lavos.
          </p>
        </div>

        <div className="space-y-4">
          {sideQuests.map((quest) => (
            <div 
              key={quest.id} 
              className={`card-chrono overflow-hidden transition-all ${
                expandedQuest === quest.id ? 'ring-2 ring-primary' : ''
              }`}
            >
              <button
                onClick={() => setExpandedQuest(expandedQuest === quest.id ? null : quest.id)}
                className="w-full p-6 text-left"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground flex items-center gap-2">
                      <Star className="w-5 h-5 text-chrono-gold" />
                      {quest.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Personagem: <span className="text-primary">{quest.character}</span>
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" /> {quest.era}
                    </span>
                    <span className={`font-bold ${getDifficultyColor(quest.difficulty)}`}>
                      {quest.difficulty}
                    </span>
                  </div>
                </div>
              </button>

              {expandedQuest === quest.id && (
                <div className="px-6 pb-6 space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Local: {quest.location}</span>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    <span className="text-chrono-gold">Requisito:</span> {quest.requirement}
                  </p>

                  <div>
                    <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-chrono-green" /> Passo a Passo
                    </h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                      {quest.steps.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                  </div>

                  <div className="p-4 bg-chrono-darker rounded-lg">
                    <h4 className="font-bold text-chrono-gold mb-2 flex items-center gap-2">
                      <Gift className="w-4 h-4" /> Recompensas
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-foreground">
                      {quest.rewards.map((reward, i) => (
                        <li key={i}>{reward}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
