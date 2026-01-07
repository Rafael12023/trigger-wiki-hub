import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Swords, Sparkles, Shield, Heart } from "lucide-react";

interface CharacterData {
  name: string;
  title: string;
  era: string;
  element: string;
  weapon: string;
  bio: string;
  story: string;
  stats: {
    hp: string;
    mp: string;
    power: string;
    magic: string;
    speed: string;
  };
  techs: {
    single: { name: string; mp: number; description: string }[];
    double: { name: string; partner: string; description: string }[];
    triple: { name: string; partners: string; description: string }[];
  };
  bestEquipment: {
    weapon: string;
    armor: string;
    accessory: string;
  };
  color: string;
  imageUrl: string;
}

const charactersData: Record<string, CharacterData> = {
  crono: {
    name: "Crono",
    title: "O Herói Silencioso",
    era: "1000 AD",
    element: "Raio (Lightning)",
    weapon: "Katana",
    bio: "Crono é um jovem espadachim de cabelos vermelhos espetados que vive com sua mãe na vila de Truce, no Reino de Guardia. Apesar de ser o protagonista, Crono nunca fala durante o jogo, deixando suas ações falarem por ele.",
    story: "A aventura de Crono começa no Festival do Milênio, onde ele encontra uma misteriosa garota chamada Marle. Quando ela desaparece através de um portal temporal criado pelo Telepod de Lucca, Crono não hesita em segui-la, iniciando uma jornada épica através do tempo. Sua coragem e determinação inspiram todos ao seu redor, e ele se torna o líder natural do grupo de heróis.",
    stats: {
      hp: "Alto",
      mp: "Médio",
      power: "Alto",
      magic: "Médio",
      speed: "Alto",
    },
    techs: {
      single: [
        { name: "Cyclone", mp: 2, description: "Ataque circular que atinge todos os inimigos próximos" },
        { name: "Slash", mp: 2, description: "Corte horizontal poderoso em um único alvo" },
        { name: "Lightning", mp: 2, description: "Invoca um raio para atingir um inimigo" },
        { name: "Spincut", mp: 4, description: "Salto giratório seguido de corte descendente" },
        { name: "Lightning 2", mp: 8, description: "Raio mais poderoso que atinge área" },
        { name: "Life", mp: 10, description: "Revive um aliado caído" },
        { name: "Confuse", mp: 12, description: "Ataques rápidos múltiplos em todos os inimigos" },
        { name: "Luminaire", mp: 20, description: "Técnica suprema de raio - devastadora" },
      ],
      double: [
        { name: "Aura Whirl", partner: "Marle", description: "Cura em área combinando aura e movimento" },
        { name: "Ice Sword", partner: "Marle", description: "Espada imbuída de gelo" },
        { name: "Fire Whirl", partner: "Lucca", description: "Tornado de fogo" },
        { name: "Fire Sword", partner: "Lucca", description: "Espada flamejante" },
        { name: "X Strike", partner: "Frog", description: "Ataque cruzado devastador" },
        { name: "Sword Stream", partner: "Frog", description: "Combo de espadas aquáticas" },
        { name: "Rocket Roll", partner: "Robo", description: "Robo arremessa Crono" },
        { name: "Max Cyclone", partner: "Robo", description: "Ciclone potencializado" },
        { name: "Drill Kick", partner: "Ayla", description: "Ataque combinado aéreo" },
        { name: "Volt Bite", partner: "Ayla", description: "Mordida elétrica" },
        { name: "Dark Bomb", partner: "Magus", description: "Explosão sombria" },
      ],
      triple: [
        { name: "Delta Force", partners: "Marle + Lucca", description: "Triângulo elemental devastador" },
        { name: "Lifeline", partners: "Marle + Robo", description: "Cura suprema em área" },
        { name: "Arc Impulse", partners: "Marle + Frog", description: "Ataque triplo coordenado" },
        { name: "Final Kick", partners: "Marle + Ayla", description: "Chute final combinado" },
        { name: "Delta Storm", partners: "Lucca + Robo", description: "Tempestade elemental" },
        { name: "Gatling Kick", partners: "Lucca + Ayla", description: "Rajada de chutes" },
        { name: "Triple Raid", partners: "Frog + Robo", description: "Investida tripla" },
        { name: "Twister", partners: "Robo + Ayla", description: "Tornado físico" },
      ],
    },
    bestEquipment: {
      weapon: "Rainbow (Arco-Íris) - A espada mais poderosa do jogo",
      armor: "Moon Armor - Defesa excepcional",
      accessory: "Gold Stud - Reduz custo de MP em 75%",
    },
    color: "text-chrono-cyan",
    imageUrl: "https://www.spriters-resource.com/resources/sheets/1/748.png",
  },
  marle: {
    name: "Marle",
    title: "Princesa de Guardia",
    era: "1000 AD",
    element: "Gelo (Ice)",
    weapon: "Crossbow",
    bio: "Marle é na verdade a Princesa Nadia do Reino de Guardia, que fugiu do castelo para aproveitar o Festival do Milênio. Ela é alegre, teimosa e tem um forte senso de justiça.",
    story: "Entediada com a vida no castelo, Nadia assume o nome 'Marle' e foge para o festival onde encontra Crono. Sua natureza aventureira a leva a testar o Telepod de Lucca, causando o acidente que inicia toda a aventura. Ao longo da jornada, ela amadurece e aceita suas responsabilidades como princesa.",
    stats: {
      hp: "Médio",
      mp: "Alto",
      power: "Baixo",
      magic: "Alto",
      speed: "Médio",
    },
    techs: {
      single: [
        { name: "Aura", mp: 1, description: "Cura um aliado" },
        { name: "Provoke", mp: 1, description: "Distrai inimigos, causando Caos" },
        { name: "Ice", mp: 2, description: "Ataque de gelo em um inimigo" },
        { name: "Cure", mp: 2, description: "Cura moderada em um aliado" },
        { name: "Haste", mp: 6, description: "Aumenta velocidade de um aliado" },
        { name: "Ice 2", mp: 8, description: "Gelo poderoso em área" },
        { name: "Cure 2", mp: 5, description: "Cura forte em um aliado" },
        { name: "Life 2", mp: 15, description: "Revive aliado com HP cheio" },
      ],
      double: [
        { name: "Aura Whirl", partner: "Crono", description: "Cura em área" },
        { name: "Ice Sword", partner: "Crono", description: "Espada de gelo" },
        { name: "Antipode", partner: "Lucca", description: "Fogo e gelo combinados" },
        { name: "Ice Water", partner: "Frog", description: "Combo de água e gelo" },
        { name: "Aura Beam", partner: "Robo", description: "Cura em linha" },
        { name: "Ice Tackle", partner: "Ayla", description: "Investida congelante" },
        { name: "Dark Eternal", partner: "Magus", description: "Combo sombrio gelado" },
      ],
      triple: [
        { name: "Delta Force", partners: "Crono + Lucca", description: "Triângulo elemental" },
        { name: "Lifeline", partners: "Crono + Robo", description: "Cura suprema" },
        { name: "Arc Impulse", partners: "Crono + Frog", description: "Ataque triplo" },
        { name: "Final Kick", partners: "Crono + Ayla", description: "Chute final" },
        { name: "Antipode 3", partners: "Lucca + Frog", description: "Combo elemental máximo" },
      ],
    },
    bestEquipment: {
      weapon: "Venus Bow - Crossbow com poder mágico",
      armor: "Prism Dress - Defesa e resistência mágica",
      accessory: "Prism Specs - Aumenta poder mágico significativamente",
    },
    color: "text-chrono-cyan",
    imageUrl: "https://www.spriters-resource.com/resources/sheets/1/749.png",
  },
  lucca: {
    name: "Lucca",
    title: "A Inventora Genial",
    era: "1000 AD",
    element: "Fogo (Fire)",
    weapon: "Pistola",
    bio: "Lucca é a melhor amiga de infância de Crono e uma inventora genial. Filha de Taban, outro inventor, ela cresceu cercada por máquinas e experimentos.",
    story: "A paixão de Lucca por ciência foi moldada por um trauma: quando criança, sua mãe ficou paralítica em um acidente com uma das máquinas de Taban. Esse evento a impulsionou a dominar a tecnologia. Sua invenção, o Telepod, acidentalmente cria o portal temporal que inicia a aventura. Durante a jornada, ela tem a chance de voltar ao passado e salvar sua mãe.",
    stats: {
      hp: "Médio",
      mp: "Alto",
      power: "Baixo",
      magic: "Muito Alto",
      speed: "Baixo",
    },
    techs: {
      single: [
        { name: "Flame Toss", mp: 1, description: "Lança uma bola de fogo" },
        { name: "Hypno Wave", mp: 1, description: "Coloca inimigos para dormir" },
        { name: "Fire", mp: 2, description: "Ataque de fogo" },
        { name: "Napalm", mp: 3, description: "Bomba incendiária em área" },
        { name: "Protect", mp: 6, description: "Aumenta defesa de um aliado" },
        { name: "Fire 2", mp: 8, description: "Fogo poderoso em área" },
        { name: "Mega Bomb", mp: 15, description: "Explosão massiva" },
        { name: "Flare", mp: 20, description: "Técnica suprema de fogo" },
      ],
      double: [
        { name: "Fire Whirl", partner: "Crono", description: "Tornado flamejante" },
        { name: "Fire Sword", partner: "Crono", description: "Espada de fogo" },
        { name: "Antipode", partner: "Marle", description: "Fogo e gelo" },
        { name: "Red Pin", partner: "Frog", description: "Combo fogo-água" },
        { name: "Fire Punch", partner: "Robo", description: "Soco incendiário" },
        { name: "Blaze Kick", partner: "Ayla", description: "Chute flamejante" },
        { name: "Dark Bomb", partner: "Magus", description: "Bomba sombria" },
      ],
      triple: [
        { name: "Delta Force", partners: "Crono + Marle", description: "Triângulo elemental" },
        { name: "Delta Storm", partners: "Crono + Robo", description: "Tempestade elemental" },
        { name: "Gatling Kick", partners: "Crono + Ayla", description: "Rajada de chutes" },
        { name: "Antipode 3", partners: "Marle + Frog", description: "Combo máximo" },
        { name: "Omega Flare", partners: "Robo + Magus", description: "Flare supremo" },
      ],
    },
    bestEquipment: {
      weapon: "Wondershot - Dano variável mas potencialmente devastador",
      armor: "Taban Vest - Feito por seu pai, resistência a fogo",
      accessory: "Sun Shades - Aumenta poder de ataque",
    },
    color: "text-chrono-red",
    imageUrl: "https://www.spriters-resource.com/resources/sheets/1/750.png",
  },
};

// Fallback for characters not yet detailed
const defaultCharacter: CharacterData = {
  name: "Personagem",
  title: "Título",
  era: "Era",
  element: "Elemento",
  weapon: "Arma",
  bio: "Biografia em desenvolvimento...",
  story: "História em desenvolvimento...",
  stats: { hp: "-", mp: "-", power: "-", magic: "-", speed: "-" },
  techs: { single: [], double: [], triple: [] },
  bestEquipment: { weapon: "-", armor: "-", accessory: "-" },
  color: "text-primary",
  imageUrl: "",
};

export default function CharacterPage() {
  const { slug } = useParams<{ slug: string }>();
  const character = slug ? charactersData[slug] || defaultCharacter : defaultCharacter;

  return (
    <Layout>
      <div className="px-6 py-12 max-w-5xl mx-auto">
        {/* Back Link */}
        <Link 
          to="/personagens"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para Personagens
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Image */}
          <div className="shrink-0">
            <div className="w-48 h-48 card-chrono overflow-hidden flex items-center justify-center bg-chrono-darker">
              <img 
                src={character.imageUrl} 
                alt={`Sprite de ${character.name}`}
                className="w-full h-full object-contain p-4"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            <p className="text-center text-muted-foreground text-xs mt-2">
              Sprite oficial de {character.name}
            </p>
          </div>

          {/* Info */}
          <div className="flex-1">
            <SectionHeader 
              title={character.name}
              subtitle={character.title}
            />
            
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="era-badge era-present">{character.era}</span>
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                {character.element}
              </span>
              <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                {character.weapon}
              </span>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {character.bio}
            </p>
          </div>
        </div>

        {/* Story */}
        <section className="mb-12">
          <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-chrono-red" />
            História do Personagem
          </h2>
          <div className="card-chrono p-6">
            <p className="text-muted-foreground leading-relaxed">
              {character.story}
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-12">
          <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-chrono-gold" />
            Atributos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(character.stats).map(([stat, value]) => (
              <div key={stat} className="card-chrono p-4 text-center">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {stat === 'hp' ? 'HP' : stat === 'mp' ? 'MP' : stat.charAt(0).toUpperCase() + stat.slice(1)}
                </div>
                <div className={`font-display font-bold ${character.color}`}>{value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Techs */}
        <section className="mb-12">
          <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-chrono-purple" />
            Técnicas (Techs)
          </h2>
          
          {/* Single Techs */}
          {character.techs.single.length > 0 && (
            <div className="mb-6">
              <h3 className="font-medium text-foreground mb-3">Técnicas Individuais</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {character.techs.single.map((tech) => (
                  <div key={tech.name} className="card-chrono p-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className={`font-medium ${character.color}`}>{tech.name}</span>
                      <span className="text-sm text-muted-foreground">{tech.mp} MP</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Double Techs */}
          {character.techs.double.length > 0 && (
            <div className="mb-6">
              <h3 className="font-medium text-foreground mb-3">Técnicas Duplas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {character.techs.double.map((tech) => (
                  <div key={tech.name} className="card-chrono p-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className={`font-medium ${character.color}`}>{tech.name}</span>
                      <span className="text-sm text-primary">+ {tech.partner}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Triple Techs */}
          {character.techs.triple.length > 0 && (
            <div>
              <h3 className="font-medium text-foreground mb-3">Técnicas Triplas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {character.techs.triple.map((tech) => (
                  <div key={tech.name} className="card-chrono p-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className={`font-medium ${character.color}`}>{tech.name}</span>
                      <span className="text-sm text-primary">+ {tech.partners}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Best Equipment */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Swords className="w-5 h-5 text-chrono-green" />
            Melhor Equipamento
          </h2>
          <div className="card-chrono p-6">
            <div className="space-y-4">
              <div>
                <span className="text-muted-foreground text-sm">Arma:</span>
                <p className={`font-medium ${character.color}`}>{character.bestEquipment.weapon}</p>
              </div>
              <div>
                <span className="text-muted-foreground text-sm">Armadura:</span>
                <p className={`font-medium ${character.color}`}>{character.bestEquipment.armor}</p>
              </div>
              <div>
                <span className="text-muted-foreground text-sm">Acessório:</span>
                <p className={`font-medium ${character.color}`}>{character.bestEquipment.accessory}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
