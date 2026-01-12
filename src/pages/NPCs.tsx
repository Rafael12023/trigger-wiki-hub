import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { ImageLightbox } from "@/components/ui/image-lightbox";
import { Users, MapPin, Clock } from "lucide-react";

interface NPC {
  id: string;
  name: string;
  role: string;
  era: string;
  location: string;
  description: string;
  storyImportance: string;
  relatedEvents: string[];
  image?: string;
}

const npcs: NPC[] = [
  {
    id: "schala",
    name: "Schala",
    role: "Princesa de Zeal",
    era: "12000 BC",
    location: "Zeal Palace, Ocean Palace",
    description: "A bondosa princesa do Reino de Zeal e irmã mais velha de Janus (Magus). Possui poderes mágicos imensos, mas os usa apenas para o bem. Está aprisionada à vontade de sua mãe corrompida.",
    storyImportance: "Personagem central no arco de Zeal. Seu destino é um mistério que conecta Chrono Trigger a Chrono Cross.",
    relatedEvents: ["Queda de Zeal", "Invocação de Lavos no Ocean Palace", "Salvamento de Crono"],
    image: "/images/npcs/schala.png"
  },
  {
    id: "queen_zeal",
    name: "Rainha Zeal",
    role: "Rainha do Reino de Zeal",
    era: "12000 BC",
    location: "Zeal Palace, Black Omen",
    description: "Antes uma governante sábia, foi corrompida pela obsessão em obter o poder de Lavos. Sacrifica tudo - incluindo seus filhos - em busca de imortalidade.",
    storyImportance: "Antagonista principal do arco de 12000 BC. Representa os perigos da ambição desmedida.",
    relatedEvents: ["Construção do Ocean Palace", "Mammon Machine", "Criação do Black Omen"],
    image: "/images/npcs/queen-zeal.png"
  },
  {
    id: "gaspar",
    name: "Gaspar (Guru do Tempo)",
    role: "Guru do Tempo",
    era: "End of Time",
    location: "End of Time",
    description: "Um dos três Gurus de Zeal. Quando a Mammon Machine foi ativada, foi arremessado para o Fim dos Tempos, onde agora guia os viajantes temporais.",
    storyImportance: "Fornece orientação crucial ao grupo, incluindo a estratégia para derrotar Lavos e o uso do Chrono Trigger.",
    relatedEvents: ["Construção do Chrono Trigger", "Reviver Crono", "Orientação sobre Gates"],
    image: "/images/npcs/gaspar.png"
  },
  {
    id: "melchior",
    name: "Melchior (Guru da Vida)",
    role: "Guru da Vida / Ferreiro",
    era: "1000 AD (originalmente 12000 BC)",
    location: "Medina Village, Mt. Woe",
    description: "O maior ferreiro de todos os tempos. Criador da Masamune e outras armas lendárias. Exilado para 1000 AD após o desastre de Zeal.",
    storyImportance: "Cria equipamentos cruciais como a Masamune restaurada e o Rainbow Sword.",
    relatedEvents: ["Restauração da Masamune", "Criação do Rainbow", "Libertação de Mt. Woe"],
    image: "/images/npcs/melchior.png"
  },
  {
    id: "belthasar",
    name: "Belthasar (Guru da Razão)",
    role: "Guru da Razão / Cientista",
    era: "2300 AD (originalmente 12000 BC)",
    location: "Keeper's Dome",
    description: "O mais brilhante cientista de Zeal. Enviado para o futuro devastado, onde construiu o Epoch antes de morrer. Seu conhecimento vive em um Nu.",
    storyImportance: "Criador do Epoch, a máquina do tempo que permite viagem temporal livre.",
    relatedEvents: ["Construção do Epoch", "Wings of Time", "Keeper's Dome"],
    image: "/images/npcs/belthasar.png"
  },
  {
    id: "dalton",
    name: "Dalton",
    role: "General de Zeal",
    era: "12000 BC",
    location: "Zeal Palace, Blackbird",
    description: "Arrogante general das forças de Zeal. Após a queda do reino, tenta assumir o poder e rouba o Epoch temporariamente.",
    storyImportance: "Antagonista secundário que fornece momentos de tensão e comédia involuntária.",
    relatedEvents: ["Captura do grupo no Blackbird", "Modificação do Epoch", "Golem Boss"],
    image: "/images/npcs/dalton.png"
  },
  {
    id: "azala",
    name: "Azala",
    role: "Líder dos Reptites",
    era: "65M BC",
    location: "Tyrano Lair",
    description: "A astuta e determinada líder da raça Reptite. Luta pela sobrevivência de seu povo contra os humanos e prevê corretamente o impacto de Lavos.",
    storyImportance: "Antagonista trágica que representa o conflito entre espécies pela sobrevivência.",
    relatedEvents: ["Guerra Humanos vs Reptites", "Batalha no Tyrano Lair", "Queda de Lavos"],
    image: "/images/npcs/azala.png"
  },
  {
    id: "kino",
    name: "Kino",
    role: "Guerreiro Ioka",
    era: "65M BC",
    location: "Ioka Village",
    description: "Companheiro leal de Ayla e futuro líder da tribo Ioka. Inicialmente ciumento de Crono, mas prova ser corajoso e dedicado.",
    storyImportance: "Interesse romântico de Ayla e ancestral distante de Marle.",
    relatedEvents: ["Roubo do Gate Key", "Resgate na Reptite Lair", "Casamento com Ayla"],
    image: "/images/npcs/kino.png"
  },
  {
    id: "janus",
    name: "Janus (Jovem)",
    role: "Príncipe de Zeal",
    era: "12000 BC",
    location: "Zeal Palace",
    description: "O príncipe solitário de Zeal, irmão de Schala. Possui poderes proféticos e uma conexão com seu gato Alfador. Se tornará Magus no futuro.",
    storyImportance: "Sua transformação em Magus é central para a história de 600 AD.",
    relatedEvents: ["Profecia sobre Lavos", "Separação de Schala", "Envio para 600 AD"],
    image: "/images/npcs/janus.png"
  },
  {
    id: "toma",
    name: "Toma Levine",
    role: "Explorador/Aventureiro",
    era: "600 AD / 1000 AD",
    location: "Várias tavernas",
    description: "Um aventureiro que busca o Rainbow Shell. Pede a Crono que derrame uma bebida em seu túmulo se ele falhar - o que leva a uma side quest importante.",
    storyImportance: "Conecta 600 AD a 1000 AD através de sua busca pelo Rainbow Shell.",
    relatedEvents: ["Busca pelo Rainbow Shell", "Túmulo de Toma", "Giant's Claw"],
    image: "/images/npcs/toma.png"
  },
  {
    id: "king_guardia_xxi",
    name: "Rei Guardia XXI",
    role: "Rei de Guardia",
    era: "1000 AD",
    location: "Guardia Castle",
    description: "Pai de Marle e atual rei de Guardia. Superprotetor com sua filha após a morte da rainha. Eventualmente reconcilia-se com Marle.",
    storyImportance: "Representa o conflito familiar de Marle e é alvo de uma conspiração no Rainbow Shell trial.",
    relatedEvents: ["Julgamento de Crono", "Reconciliação com Marle", "Conspiração de Yakra XIII"],
    image: "/images/npcs/king-guardia.png"
  },
  {
    id: "cyrus",
    name: "Cyrus",
    role: "Cavaleiro Lendário",
    era: "600 AD",
    location: "Northern Ruins (como fantasma)",
    description: "O maior cavaleiro de Guardia e melhor amigo de Glenn (Frog). Morto por Magus ao tentar recuperar a Masamune.",
    storyImportance: "Sua morte transformou Glenn em Frog e motiva sua jornada de vingança.",
    relatedEvents: ["Morte nas mãos de Magus", "Busca pela Masamune", "Northern Ruins"],
    image: "/images/npcs/cyrus.png"
  },
  {
    id: "queen_leene",
    name: "Rainha Leene",
    role: "Rainha de Guardia",
    era: "600 AD",
    location: "Guardia Castle",
    description: "Rainha bondosa de 600 AD e ancestral de Marle. Seu sequestro por Yakra inicia os eventos da viagem temporal.",
    storyImportance: "Sua conexão com Marle causa o paradoxo temporal inicial.",
    relatedEvents: ["Sequestro por Yakra", "Confusão com Marle", "Resgate na Cathedral"],
    image: "/images/npcs/queen-leene.png"
  },
  {
    id: "doan",
    name: "Doan",
    role: "Líder dos Sobreviventes",
    era: "2300 AD",
    location: "Arris Dome",
    description: "Líder dos poucos sobreviventes humanos no futuro devastado. Descendente de Marle. Fornece a motivação final para derrotar Lavos.",
    storyImportance: "Representa o que está em jogo - o futuro da humanidade.",
    relatedEvents: ["Descoberta do Day of Lavos", "Sementes no Domo", "Esperança para o futuro"],
    image: "/images/npcs/doan.png"
  },
  {
    id: "johnny",
    name: "Johnny",
    role: "Corredor de Moto",
    era: "2300 AD",
    location: "Lab 32",
    description: "Um robô motociclista que desafia Crono para uma corrida no Site 32. Um dos poucos elementos 'leves' do futuro sombrio.",
    storyImportance: "Mini-game de corrida e alívio cômico no arco do futuro.",
    relatedEvents: ["Corrida no Lab 32", "Bike Key"],
    image: "/images/npcs/johnny.png"
  },
];

export default function NPCs() {
  return (
    <Layout>
      <div className="px-6 py-12 max-w-6xl mx-auto">
        <SectionHeader 
          title="NPCs Importantes" 
          subtitle="Personagens que moldam a história de Chrono Trigger"
          icon={<Users className="w-8 h-8" />}
        />

        <div className="grid grid-cols-1 gap-6">
          {npcs.map((npc) => (
            <div key={npc.id} className="card-chrono p-6 flex flex-col md:flex-row gap-6">
              {/* Image */}
              <div className="w-full md:w-48 h-48 flex-shrink-0">
                <div className="w-full h-full bg-chrono-darker rounded-lg flex items-center justify-center overflow-hidden border border-border">
                  {npc.image ? (
                    <ImageLightbox
                      src={npc.image}
                      alt={npc.name}
                      containerClassName="w-full h-full"
                      className="w-full h-full object-contain p-4"
                      pixelated
                    />
                  ) : (
                    <Users className="w-16 h-16 text-muted-foreground/30" />
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-display font-bold text-xl text-foreground">{npc.name}</h3>
                  <span className="text-sm text-chrono-purple">{npc.role}</span>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-primary" />
                    {npc.era}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-chrono-gold" />
                    {npc.location}
                  </span>
                </div>

                <p className="text-foreground mb-3">{npc.description}</p>
                
                <p className="text-sm text-muted-foreground mb-3">
                  <span className="text-chrono-gold">Importância:</span> {npc.storyImportance}
                </p>

                <div className="flex flex-wrap gap-2">
                  {npc.relatedEvents.map((event, i) => (
                    <span key={i} className="px-2 py-1 bg-muted text-xs rounded-full text-muted-foreground">
                      {event}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}