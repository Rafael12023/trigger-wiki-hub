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
  // Novos NPCs adicionados
  {
    id: "cronos_mom",
    name: "Mãe do Crono",
    role: "Mãe / Dona de Casa",
    era: "1000 AD",
    location: "Casa de Crono (Truce Village)",
    description: "A carinhosa mãe de Crono que o acorda atrasado no dia do Festival do Milênio. Cuida de sua casa e do gato da família. Sempre preocupada com o bem-estar do filho.",
    storyImportance: "Personagem que dá contexto familiar a Crono e aparece em vários finais do jogo.",
    relatedEvents: ["Início do jogo", "Cena de abertura", "Vários finais"]
  },
  {
    id: "taban",
    name: "Taban Ashtear",
    role: "Inventor / Pai de Lucca",
    era: "1000 AD",
    location: "Casa de Lucca (Truce Village)",
    description: "Pai de Lucca e inventivo brilhante. Ajuda Lucca em suas invenções, incluindo o Telepod. Também cria equipamentos especiais como o Taban Helm e Taban Vest.",
    storyImportance: "Co-criador do Telepod que inicia a viagem temporal. Forja equipamentos exclusivos para Lucca.",
    relatedEvents: ["Criação do Telepod", "Festival do Milênio", "Acidente de Lara"]
  },
  {
    id: "lara",
    name: "Lara Ashtear",
    role: "Mãe de Lucca",
    era: "1000 AD",
    location: "Casa de Lucca",
    description: "Mãe de Lucca que sofreu um acidente com uma máquina de Taban quando Lucca era criança, perdendo as pernas. Este trauma motivou Lucca a se tornar inventora.",
    storyImportance: "Sua história pode ser alterada através de viagem temporal - uma das subquests mais emocionais do jogo.",
    relatedEvents: ["Acidente com máquina", "Quest temporal de Lucca", "Salvamento opcional"]
  },
  {
    id: "spekkio",
    name: "Spekkio",
    role: "Mestre da Guerra / Deus da Magia",
    era: "End of Time",
    location: "End of Time (sala trancada)",
    description: "Uma entidade misteriosa que ensina magia aos heróis. Sua forma muda baseado no nível do grupo. Adora lutar e oferece recompensas por derrotá-lo.",
    storyImportance: "Ensina magia a todos os personagens humanos, desbloqueando suas habilidades mágicas.",
    relatedEvents: ["Aprendizado de magia", "Batalhas de teste", "Tabs como recompensa"]
  },
  {
    id: "chancellor_good",
    name: "Chanceler (Verdadeiro)",
    role: "Conselheiro Real",
    era: "600 AD / 1000 AD",
    location: "Guardia Castle",
    description: "O verdadeiro Chanceler de Guardia, frequentemente substituído por monstros Yakra disfarçados. Leal à família real quando não está preso em algum lugar.",
    storyImportance: "Sua substituição por impostores é central para várias crises no reino.",
    relatedEvents: ["Preso na Cathedral", "Substituído por Yakra", "Julgamento de Crono"]
  },
  {
    id: "fiona",
    name: "Fiona",
    role: "Guardiã da Floresta",
    era: "600 AD / 1000 AD",
    location: "Fiona's Villa",
    description: "Uma mulher determinada a restaurar a floresta destruída por monstros. Seu sonho só pode ser realizado com ajuda de heróis do tempo.",
    storyImportance: "Central para a sidequest de Fiona's Forest, que requer 400 anos de espera temporal.",
    relatedEvents: ["Derrotar Retinite", "Plantar a floresta", "Robo espera 400 anos"]
  },
  {
    id: "nu",
    name: "Nu",
    role: "Criatura Misteriosa",
    era: "Múltiplas Eras",
    location: "Várias",
    description: "Criaturas azuis enigmáticas encontradas em todas as eras. Parecem conectadas ao tecido do tempo. Em 2300 AD, um Nu contém a consciência de Belthasar.",
    storyImportance: "Servem como vendedores, guardiões de segredos e receptáculos de memória.",
    relatedEvents: ["Keeper's Dome", "Hunting Range", "End of Time"]
  },
  {
    id: "bekkler",
    name: "Norstein Bekkler",
    role: "Dono do Tent of Horrors",
    era: "1000 AD",
    location: "Leene Square (Festival)",
    description: "Um misterioso showman que comanda a Tent of Horrors no festival. Oferece o Clone de Crono como prêmio, item essencial para reviver Crono.",
    storyImportance: "Única fonte do Clone de Crono, absolutamente necessário para a melhor resolução da história.",
    relatedEvents: ["Festival do Milênio", "Clone de Crono", "Minigames"]
  },
  {
    id: "fritz",
    name: "Fritz",
    role: "Prisioneiro / Comerciante",
    era: "1000 AD",
    location: "Prisão de Guardia / Truce Market",
    description: "Um homem injustamente preso nas masmorras de Guardia. Se resgatado por Crono durante a fuga, abre uma loja especial com itens raros em agradecimento.",
    storyImportance: "Salvar Fritz desbloqueia acesso a itens especiais e afeta o julgamento.",
    relatedEvents: ["Fuga da prisão", "Resgate opcional", "Loja especial"]
  },
  {
    id: "gato",
    name: "Gato",
    role: "Robô de Combate Musical",
    era: "1000 AD",
    location: "Leene Square (Festival)",
    description: "Um robô cantante criado por Lucca para o festival. Canta sua própria música tema e oferece Silver Points quando derrotado. 'My name is Gato, I have metal joints...'",
    storyImportance: "Fonte de Silver Points ilimitados e uma das músicas mais memoráveis do jogo.",
    relatedEvents: ["Festival do Milênio", "Batalha por Silver Points", "Música tema"]
  },
  {
    id: "tata",
    name: "Tata",
    role: "Falso Herói",
    era: "600 AD",
    location: "Porre Village",
    description: "Um jovem garoto que encontrou a Hero Medal e foi confundido com o lendário herói destinado a empunhar a Masamune. Eventualmente admite não ser o herói.",
    storyImportance: "Sua falsa identidade como herói leva o grupo a buscar o verdadeiro dono da Hero Medal.",
    relatedEvents: ["Hero Medal", "Busca pelo herói", "Revelação de Frog"]
  },
  {
    id: "king_guardia_xxxiii",
    name: "Rei Guardia XXXIII",
    role: "Rei de Guardia",
    era: "600 AD",
    location: "Guardia Castle",
    description: "O rei de Guardia em 600 AD, lutando contra as forças de Magus. Pai do Rei em 1000 AD. Ancestral distante de Marle.",
    storyImportance: "Representa a resistência humana contra os Mystics na guerra de 600 AD.",
    relatedEvents: ["Guerra contra Magus", "Sequestro da Rainha Leene", "Ponte de Zenan"]
  },
  {
    id: "masa_mune_spirits",
    name: "Masa & Mune",
    role: "Espíritos da Masamune",
    era: "600 AD / 12000 BC",
    location: "Denadoro Mountains",
    description: "Os espíritos gêmeos que habitam a lendária espada Masamune. Criados por Melchior para proteger a lâmina. Podem se fundir em uma forma poderosa.",
    storyImportance: "Guardiões da Masamune. Derrotá-los prova a dignidade do herói.",
    relatedEvents: ["Teste do herói", "Fusão em boss", "Restauração da Masamune"]
  },
  {
    id: "doreen",
    name: "Doreen",
    role: "Irmã de Masa e Mune",
    era: "End of Time",
    location: "End of Time (após certos eventos)",
    description: "A irmã mais misteriosa de Masa e Mune. Aparece apenas em condições especiais e está conectada ao poder da Masamune.",
    storyImportance: "Relacionada ao upgrade final da Masamune em versões DS/Steam.",
    relatedEvents: ["Masamune II", "Lost Sanctum (DS)"]
  },
  {
    id: "alfador",
    name: "Alfador",
    role: "Gato de Janus",
    era: "12000 BC",
    location: "Zeal Palace",
    description: "O gato roxo de estimação de Janus. Extremamente leal ao jovem príncipe. Reconhece Magus como Janus mesmo depois de crescido.",
    storyImportance: "Simboliza a humanidade que Janus/Magus ainda possui.",
    relatedEvents: ["Companhia de Janus", "Reconhece Magus"]
  },
  {
    id: "ozzie_viii",
    name: "Ozzie VIII",
    role: "Prefeito de Medina",
    era: "1000 AD",
    location: "Medina Village",
    description: "Descendente do general Ozzie. Em linhas temporais não alteradas, os Mystics de Medina ainda odeiam humanos por causa dele.",
    storyImportance: "Representa como o legado de Magus afeta 1000 AD.",
    relatedEvents: ["Medina Village hostil", "Legado Mystic"]
  },
  {
    id: "atropos",
    name: "Atropos XR",
    role: "Robô / 'Namorada' de Robo",
    era: "2300 AD",
    location: "Geno Dome",
    description: "Uma robô da mesma série que Robo, com quem ele tinha um relacionamento. Reprogramada pela Mother Brain para destruí-lo, resultando em um duelo trágico.",
    storyImportance: "Sua batalha solo contra Robo é um dos momentos mais emocionais do jogo.",
    relatedEvents: ["Geno Dome", "Duelo com Robo", "Ribbon como lembrança"]
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