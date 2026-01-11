import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { CharacterCard } from "@/components/ui/character-card";
import { EraTimeline } from "@/components/ui/era-timeline";
import { FeatureCard } from "@/components/ui/feature-card";
import { Link } from "react-router-dom";
import { 
  Clock, 
  Users, 
  Scroll, 
  Map, 
  Swords, 
  Sparkles, 
  Skull,
  Backpack,
  Star,
  ChevronRight
} from "lucide-react";
import heroPortal from "@/assets/hero-portal.jpg";

const characters = [
  {
    name: "Crono",
    title: "O Herói Silencioso",
    era: "1000 AD",
    description: "Um jovem espadachim que é arrastado para uma aventura através do tempo após encontrar Marle.",
    imageUrl: "/images/characters/crono.png",
    href: "/personagens/crono",
    color: "cyan" as const,
  },
  {
    name: "Marle",
    title: "Princesa de Guardia",
    era: "1000 AD",
    description: "A princesa rebelde do Reino de Guardia, mestre do gelo e usuária de magia de cura.",
    imageUrl: "/images/characters/marle.png",
    href: "/personagens/marle",
    color: "cyan" as const,
  },
  {
    name: "Lucca",
    title: "A Inventora Genial",
    era: "1000 AD",
    description: "Melhor amiga de Crono e gênia inventora. Sua paixão por ciência desencadeia toda a aventura.",
    imageUrl: "/images/characters/lucca.png",
    href: "/personagens/lucca",
    color: "red" as const,
  },
  {
    name: "Frog",
    title: "O Cavaleiro Amaldiçoado",
    era: "600 AD",
    description: "Antes conhecido como Glenn, foi transformado em sapo por Magus. Porta a lendária Masamune.",
    imageUrl: "/images/characters/frog.png",
    href: "/personagens/frog",
    color: "green" as const,
  },
  {
    name: "Robo",
    title: "O Robô do Futuro",
    era: "2300 AD",
    description: "Um robô de reparos R-66Y que ganha consciência e se junta ao grupo para salvar o mundo.",
    imageUrl: "/images/characters/robo.png",
    href: "/personagens/robo",
    color: "gold" as const,
  },
  {
    name: "Ayla",
    title: "A Chefe Pré-Histórica",
    era: "65M BC",
    description: "A guerreira mais forte de sua era, líder do povo Ioka. Luta apenas com a força bruta.",
    imageUrl: "/images/characters/ayla.png",
    href: "/personagens/ayla",
    color: "orange" as const,
  },
  {
    name: "Magus",
    title: "O Mago das Sombras",
    era: "600 AD",
    description: "O temível feiticeiro que buscava invocar Lavos. Seu passado esconde segredos profundos.",
    imageUrl: "/images/characters/magus.png",
    href: "/personagens/magus",
    color: "purple" as const,
  },
];

const features = [
  {
    title: "Walkthrough Completo",
    description: "Guia passo a passo por toda a história, com dicas de itens e segredos.",
    icon: <Map className="w-6 h-6" />,
    href: "/walkthrough",
  },
  {
    title: "Sistema de Combate",
    description: "Entenda o ATB, estratégias e como dominar as batalhas.",
    icon: <Swords className="w-6 h-6" />,
    href: "/combate",
  },
  {
    title: "Todas as Técnicas",
    description: "Lista completa de techs únicas, duplas e triplas.",
    icon: <Sparkles className="w-6 h-6" />,
    href: "/tecnicas",
  },
  {
    title: "Bestiário",
    description: "Todos os inimigos e bosses com stats e estratégias.",
    icon: <Skull className="w-6 h-6" />,
    href: "/inimigos",
  },
  {
    title: "Itens & Equipamentos",
    description: "Guia completo de armas, armaduras e acessórios.",
    icon: <Backpack className="w-6 h-6" />,
    href: "/itens",
  },
  {
    title: "Side Quests",
    description: "Todas as missões secundárias e suas recompensas.",
    icon: <Star className="w-6 h-6" />,
    href: "/sidequests",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src={heroPortal} 
            alt="Portal temporal de Chrono Trigger"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        </div>

        {/* Animated decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-chrono-purple/10 blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">O Guia Definitivo</span>
          </div>
          
          <h1 className="font-pixel text-2xl md:text-4xl lg:text-5xl text-primary mb-4 leading-relaxed">
            CHRONO LORE HUB
          </h1>
          
          <p className="font-display text-xl md:text-2xl lg:text-3xl text-foreground mb-4">
            Wiki Completa de Chrono Trigger
          </p>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Explore a história, personagens, segredos e estratégias do clássico RPG da Square. 
            Viaje através do tempo com nosso guia enciclopédico.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/historia"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-display font-bold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
            >
              <Scroll className="w-5 h-5" />
              Começar pela História
            </Link>
            <Link 
              to="/personagens"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-secondary text-secondary-foreground font-display font-bold text-lg transition-all hover:scale-105 hover:bg-secondary/80"
            >
              <Users className="w-5 h-5" />
              Ver Personagens
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-8 h-8 text-primary rotate-90" />
        </div>
      </section>

      {/* Main Content */}
      <div className="px-6 py-16 max-w-7xl mx-auto space-y-20">
        
        {/* Features Grid */}
        <section>
          <SectionHeader 
            title="Explore o Guia"
            subtitle="Tudo que você precisa para dominar Chrono Trigger"
            icon={<Map className="w-5 h-5" />}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </section>

        {/* Characters Section */}
        <section>
          <SectionHeader 
            title="Personagens Jogáveis"
            subtitle="Conheça os heróis que atravessam o tempo"
            icon={<Users className="w-5 h-5" />}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {characters.map((char) => (
              <CharacterCard key={char.name} {...char} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link 
              to="/personagens"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Ver todos os personagens
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Timeline Section */}
        <section>
          <SectionHeader 
            title="Linha do Tempo"
            subtitle="As eras que você irá explorar"
            icon={<Clock className="w-5 h-5" />}
          />
          <div className="max-w-2xl">
            <EraTimeline />
          </div>
          <div className="mt-8">
            <Link 
              to="/historia/linha-do-tempo"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Explorar linha do tempo completa
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="card-chrono p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-pixel text-2xl md:text-3xl text-primary mb-2">7</div>
              <div className="text-muted-foreground">Personagens</div>
            </div>
            <div>
              <div className="font-pixel text-2xl md:text-3xl text-chrono-purple mb-2">6</div>
              <div className="text-muted-foreground">Eras do Tempo</div>
            </div>
            <div>
              <div className="font-pixel text-2xl md:text-3xl text-chrono-gold mb-2">13</div>
              <div className="text-muted-foreground">Finais Diferentes</div>
            </div>
            <div>
              <div className="font-pixel text-2xl md:text-3xl text-chrono-green mb-2">50+</div>
              <div className="text-muted-foreground">Techs Únicas</div>
            </div>
          </div>
        </section>

        {/* About Game */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">
            Sobre Chrono Trigger
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Lançado em 1995 para o Super Nintendo, Chrono Trigger é considerado um dos melhores 
            RPGs já criados. Desenvolvido pelo "Dream Team" formado por Hironobu Sakaguchi 
            (Final Fantasy), Yuji Horii (Dragon Quest) e Akira Toriyama (Dragon Ball), 
            o jogo revolucionou o gênero com seu sistema de batalha inovador, múltiplos finais 
            e uma narrativa épica sobre viagem no tempo.
          </p>
          <Link 
            to="/versoes"
            className="text-primary hover:text-primary/80 font-medium"
          >
            Comparar versões do jogo →
          </Link>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-primary" />
            <span className="font-pixel text-xs text-primary">CHRONO TRIGGER HUB</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Um projeto de fãs. Chrono Trigger © Square Enix.
          </p>
        </div>
      </footer>
    </Layout>
  );
};

export default Index;
