import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Users, Sparkles, ArrowRight } from "lucide-react";

export default function HistoriaResumo() {
  return (
    <Layout>
      <div className="space-y-8">
        <SectionHeader
          title="Resumo da História"
          subtitle="Uma visão geral de Chrono Trigger sem spoilers importantes"
        />

        {/* Introduction */}
        <Card className="bg-card/50 border-primary/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-display font-bold text-primary mb-4">O Início de uma Aventura Épica</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Chrono Trigger começa no ano 1000 d.C., durante a Feira do Milênio no Reino de Guardia. 
              O jovem Crono acorda tarde e vai para a feira, onde sua amiga de infância Lucca está 
              apresentando uma nova invenção: um teletransportador.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Durante a demonstração, algo inesperado acontece quando uma misteriosa garota chamada Marle 
              usa o dispositivo. Seu pingente reage com a máquina, abrindo um portal no tempo. Crono, 
              sem hesitar, segue Marle através do portal, dando início a uma jornada que atravessará 
              milhões de anos.
            </p>
          </CardContent>
        </Card>

        {/* Key Elements */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-card/50 border-border">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">Viagem no Tempo</h3>
              <p className="text-muted-foreground text-sm">
                Explore diferentes eras, desde a pré-história até o futuro apocalíptico, 
                cada uma com seus próprios desafios e personagens únicos.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">Heróis de Todas as Eras</h3>
              <p className="text-muted-foreground text-sm">
                Reúna um grupo diverso de aliados, cada um de uma época diferente, 
                unidos por um objetivo comum: salvar o futuro.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">Múltiplos Finais</h3>
              <p className="text-muted-foreground text-sm">
                Suas escolhas importam! O jogo possui mais de 10 finais diferentes, 
                baseados em quando e como você completa certas missões.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* The Eras */}
        <Card className="bg-card/50 border-border">
          <CardContent className="p-6">
            <h2 className="text-2xl font-display font-bold text-primary mb-6">As Eras que Você Visitará</h2>
            <div className="space-y-4">
              {[
                { era: "65.000.000 a.C.", name: "Era Pré-Histórica", desc: "Um mundo primitivo dominado por dinossauros e humanos tribais." },
                { era: "12.000 a.C.", name: "Era da Magia", desc: "O auge do Reino de Zeal, uma civilização flutuante movida a magia." },
                { era: "600 d.C.", name: "Era Medieval", desc: "Tempos de cavaleiros, magia e a guerra contra o exército de Magus." },
                { era: "1000 d.C.", name: "Era Presente", desc: "O tempo de Crono, com a pacífica Feira do Milênio." },
                { era: "2300 d.C.", name: "Era do Futuro", desc: "Um futuro devastado que esconde o segredo da destruição do mundo." },
                { era: "???", name: "Fim dos Tempos", desc: "Um lugar fora do tempo, onde todos os caminhos se cruzam." },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <span className="font-mono text-sm text-primary whitespace-nowrap min-w-[120px]">{item.era}</span>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-display font-bold mb-2">Pronto para os Spoilers?</h3>
            <p className="text-muted-foreground mb-4">
              Se você já jogou ou não se importa com spoilers, veja a história completa!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild>
                <Link to="/historia/completa">
                  História Completa <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/historia/linha-do-tempo">
                  Ver Linha do Tempo
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
