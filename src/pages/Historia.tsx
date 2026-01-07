import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Link } from "react-router-dom";
import { Scroll, Clock, AlertTriangle, BookOpen } from "lucide-react";

export default function HistoriaPage() {
  return (
    <Layout>
      <div className="px-6 py-12 max-w-5xl mx-auto">
        <SectionHeader 
          title="História de Chrono Trigger"
          subtitle="Uma épica jornada através do tempo"
          icon={<Scroll className="w-5 h-5" />}
        />

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Link 
            to="/historia/resumo"
            className="card-chrono p-6 hover:border-primary/50 transition-all group"
          >
            <BookOpen className="w-8 h-8 text-chrono-green mb-3" />
            <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
              Resumo (Sem Spoilers)
            </h3>
            <p className="text-muted-foreground text-sm mt-2">
              Visão geral da história sem revelar detalhes importantes
            </p>
          </Link>

          <Link 
            to="/historia/completa"
            className="card-chrono p-6 hover:border-primary/50 transition-all group"
          >
            <AlertTriangle className="w-8 h-8 text-chrono-red mb-3" />
            <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
              História Completa
            </h3>
            <p className="text-muted-foreground text-sm mt-2">
              Narrativa detalhada com todos os spoilers
            </p>
          </Link>

          <Link 
            to="/historia/linha-do-tempo"
            className="card-chrono p-6 hover:border-primary/50 transition-all group"
          >
            <Clock className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
              Linha do Tempo
            </h3>
            <p className="text-muted-foreground text-sm mt-2">
              Todas as eras e eventos cronológicos
            </p>
          </Link>
        </div>

        {/* Spoiler-Free Summary */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 rounded-full bg-chrono-green/20 text-chrono-green text-sm font-medium">
              Sem Spoilers
            </span>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="font-display text-2xl text-foreground mb-4">Visão Geral</h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Em <strong className="text-foreground">Chrono Trigger</strong>, você assume o papel de <strong className="text-chrono-cyan">Crono</strong>, 
              um jovem espadachim que vive no Reino de Guardia no ano 1000 AD. Durante o Festival do Milênio, 
              uma celebração de mil anos de paz, ele encontra uma misteriosa garota chamada <strong className="text-chrono-cyan">Marle</strong>.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Quando sua amiga <strong className="text-chrono-red">Lucca</strong> demonstra sua última invenção — 
              uma máquina de teletransporte — um acidente cria um portal temporal que transporta Marle para o passado. 
              Crono decide segui-la, e assim começa uma aventura épica através de diferentes eras da história.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Ao longo da jornada, você descobrirá que uma entidade cósmica chamada <strong className="text-chrono-purple">Lavos</strong> ameaça 
              destruir o mundo. Sua missão será viajar pelo tempo, reunir aliados de diferentes épocas, 
              e encontrar uma maneira de impedir a catástrofe que devastará o futuro.
            </p>

            <div className="card-chrono p-6 mt-8">
              <h3 className="font-display text-lg font-bold text-foreground mb-3">As Eras que Você Explorará</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-era-prehistoric"></span>
                  <strong className="text-foreground">65.000.000 BC</strong> — Era Pré-Histórica, onde humanos lutam contra reptilianos
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-era-antiquity"></span>
                  <strong className="text-foreground">12.000 BC</strong> — A Antiguidade, com o misterioso Reino de Zeal
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-era-middle"></span>
                  <strong className="text-foreground">600 AD</strong> — Idade Média, em plena guerra contra os Mystics
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-era-present"></span>
                  <strong className="text-foreground">1000 AD</strong> — O Presente, onde sua aventura começa
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-era-future"></span>
                  <strong className="text-foreground">2300 AD</strong> — O Futuro devastado, um lembrete do que está em jogo
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-era-endOfTime"></span>
                  <strong className="text-foreground">Fim dos Tempos</strong> — O hub dimensional entre as eras
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Themes */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-foreground mb-6">Temas Centrais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-chrono p-6">
              <h3 className="font-display font-bold text-primary mb-2">Consequências das Escolhas</h3>
              <p className="text-muted-foreground text-sm">
                O jogo explora como decisões no passado afetam o futuro. Suas ações durante a aventura 
                podem mudar significativamente o destino do mundo e dos personagens.
              </p>
            </div>
            <div className="card-chrono p-6">
              <h3 className="font-display font-bold text-chrono-purple mb-2">Amizade Através do Tempo</h3>
              <p className="text-muted-foreground text-sm">
                Heróis de eras completamente diferentes se unem por um objetivo comum. O laço entre 
                eles transcende o próprio tempo.
              </p>
            </div>
            <div className="card-chrono p-6">
              <h3 className="font-display font-bold text-chrono-gold mb-2">Redenção e Sacrifício</h3>
              <p className="text-muted-foreground text-sm">
                Vários personagens enfrentam seus demônios internos e buscam redenção por erros do passado. 
                Alguns fazem sacrifícios que mudam tudo.
              </p>
            </div>
            <div className="card-chrono p-6">
              <h3 className="font-display font-bold text-chrono-green mb-2">Esperança vs Destino</h3>
              <p className="text-muted-foreground text-sm">
                O futuro está escrito? Ou podemos mudá-lo? Chrono Trigger questiona se somos prisioneiros 
                do destino ou se temos o poder de reescrever a história.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="card-chrono p-8 text-center">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            Pronto para os Spoilers?
          </h2>
          <p className="text-muted-foreground mb-6">
            Se você já jogou ou quer conhecer todos os detalhes da história, explore a narrativa completa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/historia/completa"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-chrono-red text-white font-display font-bold transition-all hover:scale-105"
            >
              <AlertTriangle className="w-5 h-5" />
              Ver História Completa
            </Link>
            <Link 
              to="/walkthrough"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-display font-bold transition-all hover:scale-105"
            >
              Ir para o Walkthrough
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
