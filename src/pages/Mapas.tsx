import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Map, MapPin, Swords, Gift, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Location {
  name: string;
  type: "dungeon" | "town" | "overworld" | "special";
  description: string;
  enemies?: string[];
  bosses?: string[];
  items?: string[];
  npcs?: string[];
  notes?: string;
}

interface Era {
  name: string;
  year: string;
  color: string;
  locations: Location[];
}

const eras: Era[] = [
  {
    name: "Pré-História",
    year: "65.000.000 BC",
    color: "era-prehistoric",
    locations: [
      {
        name: "Ioka Village",
        type: "town",
        description: "Aldeia dos humanos liderada por Ayla. Centro de comércio e festas.",
        npcs: ["Ayla", "Kino", "Chefe da Aldeia"],
        items: ["Petals (troca)", "Horns (troca)", "Fangs (troca)"],
      },
      {
        name: "Laruba Village",
        type: "town",
        description: "Segunda aldeia humana, mais pacífica. Eventualmente destruída pelos Reptites.",
        npcs: ["Aldeões Laruba"],
        notes: "Lar de várias crianças e idosos. Queimada pelos Reptites.",
      },
      {
        name: "Hunting Range",
        type: "overworld",
        description: "Área de caça para obter materiais de troca.",
        enemies: ["Runner", "Kilwala", "Nu (raro)"],
        items: ["Petals", "Horns", "Fangs", "Feathers"],
        notes: "Use o Trading Post em Ioka para trocar materiais por equipamentos.",
      },
      {
        name: "Forest Maze",
        type: "dungeon",
        description: "Floresta confusa onde o Gate Key foi perdido.",
        enemies: ["Evilweevil", "Croaker"],
        bosses: ["Nizbel (primeiro encontro)"],
        notes: "Labirinto com caminhos repetitivos. Siga as pegadas.",
      },
      {
        name: "Reptite Lair",
        type: "dungeon",
        description: "Covil dos Reptites onde Kino e outros são mantidos presos.",
        enemies: ["Reptite Green", "Reptite Purple", "Megasaur"],
        bosses: ["Nizbel"],
        items: ["Mid Ether", "Ruby Vest"],
      },
      {
        name: "Tyrano Lair",
        type: "dungeon",
        description: "Fortaleza de Azala e lar do Black Tyrano. Última defesa Reptite.",
        enemies: ["Reptite Purple", "Volcano", "Cave Ape"],
        bosses: ["Nizbel II", "Azala & Black Tyrano"],
        items: ["CeraTopper", "Taban Helm", "Full Ether"],
        notes: "Momento crucial - Lavos cai após esta batalha.",
      },
      {
        name: "Dactyl Nest",
        type: "special",
        description: "Lar dos Dactyls (pterodáctilos) usados como transporte.",
        notes: "Ayla pode chamar Dactyls aqui para voar ao Tyrano Lair.",
      },
    ],
  },
  {
    name: "Antiguidade",
    year: "12.000 BC",
    color: "era-antiquity",
    locations: [
      {
        name: "Zeal Palace",
        type: "special",
        description: "Palácio flutuante do Reino de Zeal. Centro do poder mágico.",
        npcs: ["Rainha Zeal", "Schala", "Janus", "Dalton"],
        items: ["Magic Tab", "Speed Tab"],
        notes: "Muitos livros com lore importante. Visite antes do Ocean Palace!",
      },
      {
        name: "Kajar",
        type: "town",
        description: "Cidade mágica onde vivem os estudiosos de Zeal.",
        npcs: ["Mages", "Nu (loja escondida)"],
        items: ["Black Vest (Nu)", "Mop (Lucca special)"],
      },
      {
        name: "Enhasa",
        type: "town",
        description: "Cidade dos sonhos, habitante dormem a maior parte do tempo.",
        npcs: ["Dreamers", "Nu"],
        items: ["Magic Tab", "Speed Tab"],
        notes: "Abra os livros na ordem certa para itens secretos.",
      },
      {
        name: "Terra Cave",
        type: "dungeon",
        description: "Caverna que conecta o mundo terrestre ao Mar de Zeal.",
        enemies: ["Scouter", "Red Scout"],
        items: ["Lode Vest"],
      },
      {
        name: "Mt. Woe",
        type: "dungeon",
        description: "Montanha flutuante onde Melchior está preso. Sustentada por magia.",
        enemies: ["Stone Imp", "Bantam Imp", "Gargoyle"],
        bosses: ["Giga Gaia"],
        items: ["Lode Helm", "Barrier Sphere", "Full Ether"],
        notes: "A montanha CAI após derrotar Giga Gaia.",
      },
      {
        name: "Ocean Palace",
        type: "dungeon",
        description: "Palácio submarino onde Zeal tenta absorver o poder de Lavos. EVENTO CRÍTICO.",
        enemies: ["Lasher", "Thrash", "Mage"],
        bosses: ["Golem Twins", "Dalton", "Queen Zeal", "LAVOS"],
        items: ["Aeon Helm", "Kaiser Arm"],
        notes: "CRONO MORRE AQUI! Evento fixo, necessário para a história.",
      },
      {
        name: "Last Village",
        type: "town",
        description: "Vila dos sobreviventes da queda de Zeal. Na superfície congelada.",
        npcs: ["Sobreviventes", "Elder"],
        notes: "Ponto de salvamento após o Ocean Palace. Acesso ao Black Omen.",
      },
      {
        name: "North Cape",
        type: "special",
        description: "Promontório onde você pode confrontar ou recrutar Magus.",
        bosses: ["Magus (opcional)"],
        notes: "Escolha: lutar e matar Magus, ou recrutá-lo para encontrar Schala.",
      },
      {
        name: "Black Omen",
        type: "dungeon",
        description: "Fortaleza flutuante da Rainha Zeal. Acesso a Lavos. Disponível em múltiplas eras.",
        enemies: ["Panel", "Goon", "Synchrite", "Blob"],
        bosses: ["Mega Mutant", "Giga Mutant", "Terra Mutant", "Queen Zeal (monstruosa)", "Mammon Machine"],
        items: ["Power Seal", "Magic Seal", "Haste Helm", "ZodiacCape"],
        notes: "PODE SER FEITO 3 VEZES (12000BC, 600AD, 1000AD) para mais loot!",
      },
    ],
  },
  {
    name: "Idade Média",
    year: "600 AD",
    color: "era-middle",
    locations: [
      {
        name: "Guardia Castle",
        type: "town",
        description: "Castelo de Guardia sob ataque dos Mystics. Rainha foi sequestrada.",
        npcs: ["Rei Guardia XXI", "Rainha Leene (falsa→real)", "Soldados"],
        notes: "Eventos iniciais do jogo. Frog é introduzido aqui.",
      },
      {
        name: "Cathedral",
        type: "dungeon",
        description: "Catedral tomada por monstros disfarçados. Yakra se esconde aqui.",
        enemies: ["Diablos", "Naga-ette", "Gnasher", "Hench"],
        bosses: ["Yakra"],
        items: ["Revive", "Steel Saber", "Mid Ether"],
        notes: "Use o órgão para revelar a entrada secreta.",
      },
      {
        name: "Zenan Bridge",
        type: "special",
        description: "Ponte estratégica entre Guardia e Truce. Batalha importante.",
        enemies: ["Deceased", "Skeleton", "Grimalkin"],
        bosses: ["Zombor"],
        notes: "Traga a ração do chef do castelo para os soldados.",
      },
      {
        name: "Denadoro Mountains",
        type: "dungeon",
        description: "Montanhas onde a Masamune está escondida. Lar de Masa & Mune.",
        enemies: ["Ogan", "Free Lancer", "Goblin", "Bellbird"],
        bosses: ["Masa & Mune"],
        items: ["MirageHand", "Mid Ether", "Gold Helm"],
        notes: "A espada está quebrada. Melchior pode consertá-la.",
      },
      {
        name: "Magus Castle",
        type: "dungeon",
        description: "Fortaleza do temido Magus. Enfrente seus generais antes do líder.",
        enemies: ["Vamp", "Sorcerer", "OutLaw"],
        bosses: ["Slash", "Flea", "Ozzie", "MAGUS"],
        items: ["Dark Mail", "Mist Robe", "DemonEdge"],
        notes: "Slash→Flea→Ozzie→Magus. Prepare-se bem!",
      },
      {
        name: "Northern Ruins",
        type: "dungeon",
        description: "Ruínas antigas com o túmulo de Cyrus. Side quest de Frog.",
        enemies: ["Ghosts", "Fallen"],
        items: ["Masamune II (upgrade)", "Valor Crest"],
        notes: "Alterne entre 600AD e 1000AD para consertar e limpar.",
      },
      {
        name: "Ozzie's Fort",
        type: "dungeon",
        description: "Novo esconderijo de Ozzie após a derrota de Magus.",
        bosses: ["Super Slash", "Flea Plus", "Great Ozzie"],
        items: ["Ozzie Pants", "Dash Ring", "Slasher 2"],
        notes: "Derrotados de forma cômica por um gato.",
      },
      {
        name: "Giant's Claw",
        type: "dungeon",
        description: "Local onde o Tyrano Lair caiu. Rainbow Shell está aqui (Side Quest).",
        enemies: ["Fossils", "Lizardactyl"],
        bosses: ["Rust Tyrano"],
        items: ["Rainbow Shell"],
        notes: "Siga as pistas de Toma após visitar seu túmulo.",
      },
    ],
  },
  {
    name: "Presente",
    year: "1000 AD",
    color: "era-present",
    locations: [
      {
        name: "Guardia Castle",
        type: "town",
        description: "Castelo de Guardia no presente. Lar de Marle.",
        npcs: ["Rei Guardia XXXIII", "Marle/Princesa Nadia", "Chanceler"],
        notes: "Julgamento de Crono ocorre aqui. Conspiração do Rainbow Shell.",
      },
      {
        name: "Millennial Fair",
        type: "special",
        description: "Feira dos Mil Anos. Onde tudo começa!",
        npcs: ["Lucca", "Taban", "Gato"],
        items: ["Pendant (Marle)"],
        notes: "Suas ações aqui afetam o julgamento! Seja honesto.",
      },
      {
        name: "Truce Village",
        type: "town",
        description: "Vila de Crono. Casa dele, mercado, café.",
        npcs: ["Mãe de Crono", "Fritz", "Elaine"],
        items: ["Poções básicas na loja"],
      },
      {
        name: "Guardia Forest",
        type: "overworld",
        description: "Floresta que conecta Truce ao Castelo. Portal para 600AD.",
        enemies: ["Blue Imp", "Green Imp", "Roly", "Poly"],
        notes: "Portal no canto noroeste.",
      },
      {
        name: "Porre",
        type: "town",
        description: "Cidade portuária ao sul de Truce.",
        npcs: ["Mayor", "Snail Shop Owner"],
        items: ["Jerky (importante para Sun Stone quest)"],
      },
      {
        name: "Medina",
        type: "town",
        description: "Vila dos Mystics. Hostis no início, amigáveis após derrotar Magus.",
        npcs: ["Mystics", "Melchior"],
        notes: "Loja de Melchior vende equipamentos únicos.",
      },
      {
        name: "Heckran Cave",
        type: "dungeon",
        description: "Caverna com atalho entre Medina e Truce.",
        enemies: ["Hench", "Cave Bat"],
        bosses: ["Heckran"],
        items: ["Ether", "Mid Potion"],
      },
      {
        name: "Sun Keep",
        type: "special",
        description: "Local para carregar a Moon Stone até virar Sun Stone.",
        notes: "Deixe a pedra em 65M BC, pegue em 2300 AD.",
      },
    ],
  },
  {
    name: "Futuro",
    year: "2300 AD",
    color: "era-future",
    locations: [
      {
        name: "Trann Dome",
        type: "town",
        description: "Domo de sobreviventes. Primeiro lugar que você chega no futuro.",
        npcs: ["Sobreviventes famintos", "Rata"],
        notes: "Atmosfera sombria. Sem comida, sem esperança.",
      },
      {
        name: "Arris Dome",
        type: "dungeon",
        description: "Domo onde você descobre o Day of Lavos. Doan vive aqui.",
        enemies: ["Shadows", "Bugs"],
        bosses: ["Guardian"],
        npcs: ["Doan"],
        items: ["Seed (important)"],
        notes: "O computador revela que Lavos destruiu o mundo em 1999.",
      },
      {
        name: "Site 32 / Lab 32",
        type: "special",
        description: "Área de corrida contra Johnny.",
        npcs: ["Johnny"],
        notes: "Ganhe a corrida para a Bike Key.",
      },
      {
        name: "Proto Dome",
        type: "dungeon",
        description: "Local onde Robo é encontrado e reativado.",
        enemies: ["Version 2.0", "Debugger"],
        npcs: ["Robo (R-66Y)"],
        items: ["Robo's Parts"],
      },
      {
        name: "Factory",
        type: "dungeon",
        description: "Fábrica de robôs onde Robo é atacado por seus 'irmãos'.",
        enemies: ["Proto 2", "Proto 3", "Acid", "Alkaline"],
        items: ["Robin Bow", "Titan Vest"],
        notes: "Robo é espancado aqui. Lucca o repara.",
      },
      {
        name: "Sewer Access",
        type: "dungeon",
        description: "Esgotos que conectam domos. Alternativa ao Site 32.",
        enemies: ["Rat", "Nereid"],
        bosses: ["Krawlie"],
        notes: "Labirinto confuso. Atalho se souber o caminho.",
      },
      {
        name: "Keeper's Dome",
        type: "special",
        description: "Local onde Belthasar deixou o Epoch. Nu guarda os conhecimentos.",
        npcs: ["Nu (Belthasar)"],
        items: ["Epoch (Wings of Time)"],
        notes: "Obtenha o Epoch aqui para viajar no tempo livremente!",
      },
      {
        name: "Death Peak",
        type: "dungeon",
        description: "Montanha gelada onde Crono pode ser revivido.",
        enemies: ["Krakker", "Macabre"],
        bosses: ["Lavos Spawn x3"],
        items: ["Memory Cap", "Giga Arm"],
        notes: "Use Chrono Trigger (ovo) e o Clone para reviver Crono.",
      },
      {
        name: "Geno Dome",
        type: "dungeon",
        description: "Domo da Mother Brain. Side Quest de Robo.",
        enemies: ["Version 4", "Debuggest", "Proto 4"],
        bosses: ["Atropos XR", "Mother Brain"],
        items: ["Crisis Arm", "Terra Arm"],
        notes: "Robo deve estar no grupo. Confronto emocional.",
      },
      {
        name: "Sun Palace",
        type: "dungeon",
        description: "Palácio do Sol onde o Son of Sun guarda a Moon Stone.",
        bosses: ["Son of Sun"],
        items: ["Moon Stone"],
        notes: "Não ataque o centro! Ataque as chamas orbitantes.",
      },
    ],
  },
  {
    name: "Fim dos Tempos",
    year: "End of Time",
    color: "era-end-of-time",
    locations: [
      {
        name: "End of Time",
        type: "special",
        description: "Ponto de convergência de todas as eras. Hub central do jogo.",
        npcs: ["Gaspar (Old Man)", "Spekkio"],
        notes: "Troque membros do grupo aqui. Aprenda magia com Spekkio.",
      },
      {
        name: "Spekkio's Room",
        type: "special",
        description: "Sala onde Spekkio ensina magia. Elemento baseado no personagem.",
        npcs: ["Spekkio (God of War)"],
        notes: "Ande em círculos 3 vezes e fale com Spekkio para aprender magia.",
      },
      {
        name: "Bucket Portal",
        type: "special",
        description: "Portal para 1999 AD onde Lavos pode ser enfrentado diretamente.",
        notes: "Acesso ao boss final a qualquer momento após certos eventos.",
      },
    ],
  },
];

export default function Mapas() {
  return (
    <Layout>
      <div className="px-6 py-12 max-w-6xl mx-auto">
        <SectionHeader 
          title="Mapas & Locais" 
          subtitle="Guia completo de todas as áreas em cada era"
          icon={<Map className="w-8 h-8" />}
        />

        <Tabs defaultValue="65mbc" className="w-full">
          <TabsList className="flex flex-wrap justify-start gap-2 mb-8 h-auto">
            <TabsTrigger value="65mbc" className="era-prehistoric">65M BC</TabsTrigger>
            <TabsTrigger value="12kbc" className="era-antiquity">12.000 BC</TabsTrigger>
            <TabsTrigger value="600ad" className="era-middle">600 AD</TabsTrigger>
            <TabsTrigger value="1000ad" className="era-present">1000 AD</TabsTrigger>
            <TabsTrigger value="2300ad" className="era-future">2300 AD</TabsTrigger>
            <TabsTrigger value="eot" className="era-end-of-time">End of Time</TabsTrigger>
          </TabsList>

          {eras.map((era, eraIndex) => (
            <TabsContent 
              key={era.year} 
              value={["65mbc", "12kbc", "600ad", "1000ad", "2300ad", "eot"][eraIndex]}
            >
              <div className="mb-6">
                <h3 className="font-display font-bold text-2xl text-foreground">
                  {era.name} <span className="text-primary">({era.year})</span>
                </h3>
              </div>

              <div className="space-y-4">
                {era.locations.map((location, i) => (
                  <div key={i} className="card-chrono p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <MapPin className={`w-5 h-5 ${
                        location.type === "dungeon" ? "text-chrono-red" :
                        location.type === "town" ? "text-chrono-green" :
                        location.type === "special" ? "text-chrono-gold" :
                        "text-primary"
                      }`} />
                      <h4 className="font-display font-bold text-lg text-foreground">{location.name}</h4>
                      <span className={`px-2 py-0.5 text-xs rounded ${
                        location.type === "dungeon" ? "bg-chrono-red/20 text-chrono-red" :
                        location.type === "town" ? "bg-chrono-green/20 text-chrono-green" :
                        location.type === "special" ? "bg-chrono-gold/20 text-chrono-gold" :
                        "bg-primary/20 text-primary"
                      }`}>
                        {location.type === "dungeon" ? "Dungeon" :
                         location.type === "town" ? "Cidade" :
                         location.type === "special" ? "Especial" : "Mundo"}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-4">{location.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      {location.enemies && location.enemies.length > 0 && (
                        <div>
                          <h5 className="font-bold text-chrono-red mb-1 flex items-center gap-1">
                            <Swords className="w-4 h-4" /> Inimigos
                          </h5>
                          <p className="text-muted-foreground">{location.enemies.join(", ")}</p>
                        </div>
                      )}

                      {location.bosses && location.bosses.length > 0 && (
                        <div>
                          <h5 className="font-bold text-chrono-purple mb-1 flex items-center gap-1">
                            <Swords className="w-4 h-4" /> Bosses
                          </h5>
                          <p className="text-muted-foreground">{location.bosses.join(", ")}</p>
                        </div>
                      )}

                      {location.items && location.items.length > 0 && (
                        <div>
                          <h5 className="font-bold text-chrono-gold mb-1 flex items-center gap-1">
                            <Gift className="w-4 h-4" /> Itens
                          </h5>
                          <p className="text-muted-foreground">{location.items.join(", ")}</p>
                        </div>
                      )}

                      {location.npcs && location.npcs.length > 0 && (
                        <div>
                          <h5 className="font-bold text-chrono-cyan mb-1 flex items-center gap-1">
                            <Users className="w-4 h-4" /> NPCs
                          </h5>
                          <p className="text-muted-foreground">{location.npcs.join(", ")}</p>
                        </div>
                      )}
                    </div>

                    {location.notes && (
                      <p className="mt-4 text-sm text-chrono-gold border-l-2 border-chrono-gold pl-3">
                        💡 {location.notes}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Layout>
  );
}
