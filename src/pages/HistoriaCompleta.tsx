import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertTriangle } from "lucide-react";

const storyChapters = [
  {
    id: "chapter1",
    title: "Capítulo 1: A Feira do Milênio",
    era: "1000 d.C.",
    content: `A história começa quando Crono acorda atrasado no dia da Feira do Milênio, uma grande celebração no Reino de Guardia. Sua mãe o acorda e ele vai para a feira, onde encontra uma misteriosa garota chamada Marle após esbarrar nela.

Os dois passam o dia juntos na feira até chegarem ao estande de Lucca, amiga de infância de Crono. Lucca e seu pai Taban estão demonstrando uma nova invenção: o Telepod, um teletransportador.

Quando Marle se oferece para testar a máquina, seu pingente ancestral reage com o dispositivo, abrindo um portal dimensional. Marle desaparece através do portal, deixando seu pingente para trás. Sem hesitar, Crono pega o pingente e salta através do portal para resgatá-la.`
  },
  {
    id: "chapter2",
    title: "Capítulo 2: A Rainha Desaparecida",
    era: "600 d.C.",
    content: `Crono emerge no ano 600 d.C., em plena Era Medieval. Ele descobre que Marle foi confundida com a rainha Leene, ancestral dela que havia sido sequestrada. Com Marle no castelo sendo tratada como rainha, a busca pela verdadeira rainha foi interrompida.

Isso cria um paradoxo temporal: se a rainha Leene morrer, Marle nunca nascerá. Quando o paradoxo começa a se manifestar, Marle simplesmente desaparece diante dos olhos de Crono.

Crono encontra Lucca, que conseguiu replicar o portal e o seguiu. Juntos, eles descobrem que a verdadeira rainha está sendo mantida refém na Catedral por Yakra, um monstro disfarçado de chanceler. Após derrotar Yakra e salvar a rainha Leene, Marle reaparece e o grupo retorna ao presente.`
  },
  {
    id: "chapter3",
    title: "Capítulo 3: O Julgamento",
    era: "1000 d.C.",
    content: `De volta ao presente, Crono é preso sob a acusação de ter sequestrado a princesa (que é revelado ser a identidade real de Marle - Princesa Nadia de Guardia). Após um julgamento injusto, ele é condenado à morte.

Lucca invade a prisão para resgatá-lo, e durante a fuga eles descobrem que o Chanceler do reino é na verdade um descendente de Yakra, buscando vingança contra a família real.

Durante a fuga pelo castelo, o grupo acidentalmente ativa outro portal e é transportado para o ano 2300 d.C. - um futuro devastado e apocalíptico.`
  },
  {
    id: "chapter4",
    title: "Capítulo 4: O Futuro Devastado",
    era: "2300 d.C.",
    content: `O grupo emerge em um mundo em ruínas. A civilização humana foi praticamente exterminada, os poucos sobreviventes vivem em domos subterrâneos, sobrevivendo com rações sintéticas.

Explorando as ruínas, eles encontram Robo (R-66Y), um robô amigável que se junta ao grupo. Juntos, eles acessam os arquivos do supercomputador Prometheus, que revela a causa da devastação: em 1999 d.C., uma criatura alienígena chamada Lavos emergiu das profundezas da Terra e destruiu o mundo.

Esta revelação muda tudo. O grupo decide que não pode simplesmente aceitar este futuro. Eles precisam encontrar uma forma de derrotar Lavos e impedir o apocalipse. Encontram o Epoch, uma máquina do tempo construída pelo Guru do Tempo, que lhes permitirá viajar livremente entre as eras.`
  },
  {
    id: "chapter5",
    title: "Capítulo 5: A Guerra Contra Magus",
    era: "600 d.C.",
    content: `O grupo retorna à Era Medieval para investigar Magus, o poderoso feiticeiro que lidera um exército de monstros contra o reino de Guardia. Segundo as lendas, Magus teria invocado Lavos.

Eles encontram Frog (Glenn), um cavaleiro amaldiçoado por Magus e transformado em sapo. Frog se junta ao grupo, determinado a vingar seu mentor Cyrus e quebrar a maldição.

Após reunir a lendária espada Masamune, o grupo invade o castelo de Magus. Na batalha final, eles descobrem que Magus não criou Lavos - ele estava tentando invocá-lo do passado para destruí-lo. O ritual é interrompido, abrindo um portal que suga todos para 65.000.000 a.C.`
  },
  {
    id: "chapter6",
    title: "Capítulo 6: A Era Pré-Histórica",
    era: "65.000.000 a.C.",
    content: `Na pré-história, o grupo encontra Ayla, a líder guerreira da tribo Ioka. Ela é forte, corajosa e está em guerra constante contra os Reptites, uma raça de répteis inteligentes liderados por Azala.

Ayla se junta ao grupo na luta contra os Reptites. Durante o conflito, eles descobrem que Lavos é na verdade um parasita alienígena que caiu na Terra nesta era, formando uma cratera massiva que se tornaria a montanha Lavos.

A queda de Lavos causa uma era do gelo que extermina os dinossauros e os Reptites, permitindo que os humanos se tornem a espécie dominante. O grupo percebe que Lavos esteve drenando a energia do planeta por milhões de anos, preparando-se para emergir em 1999.`
  },
  {
    id: "chapter7",
    title: "Capítulo 7: O Reino de Zeal",
    era: "12.000 a.C.",
    content: `O grupo viaja para 12.000 a.C. e descobre Zeal, um reino flutuante habitado por humanos com poderes mágicos. A rainha Zeal governa com mão de ferro, obcecada em extrair poder de Lavos para alcançar a imortalidade.

Eles conhecem Schala, a filha bondosa da rainha, e seu irmão Janus. Também descobrem que os três Gurus - Gaspar (Tempo), Belthasar (Razão) e Melchior (Vida) - foram espalhados pelo tempo quando um experimento com Lavos deu errado.

Quando o grupo tenta impedir a rainha, ela convoca o poder de Lavos. Na batalha resultante, Crono se sacrifica para salvar seus amigos, sendo desintegrado pelo ataque de Lavos. O reino de Zeal colapsa no oceano, e os sobreviventes são espalhados pelo tempo.`
  },
  {
    id: "chapter8",
    title: "Capítulo 8: O Retorno de Crono",
    era: "Múltiplas Eras",
    content: `Devastados pela perda de Crono, o grupo não desiste. Eles descobrem que Gaspar, o Guru do Tempo, possui uma forma de salvá-lo: o Chrono Trigger, um artefato que pode manipular o tempo em momentos críticos.

Usando o Chrono Trigger, o grupo retorna ao exato momento da morte de Crono e o substitui por um boneco, resgatando-o antes do ataque fatal de Lavos.

Com Crono de volta, o grupo se reúne novamente. Magus, que foi transportado para sua própria infância (revelando que ele é Janus), pode se juntar ao grupo como aliado, unido pelo desejo de destruir Lavos e vingar sua irmã Schala.`
  },
  {
    id: "chapter9",
    title: "Capítulo 9: Preparação Final",
    era: "Múltiplas Eras",
    content: `Antes de enfrentar Lavos, o grupo embarca em várias missões opcionais (side quests) que resolvem pendências pessoais e os fortalecem:

- Frog pode fazer as pazes com o fantasma de Cyrus
- Robo descobre a verdade sobre sua criação
- Lucca tem a chance de salvar sua mãe do acidente que a deixou paralítica
- O grupo pode restaurar uma floresta devastada através do tempo
- A Rainbow Shell pode ser recuperada para criar equipamentos lendários

Cada missão não apenas fortalece os personagens, mas também demonstra o tema central do jogo: como nossas ações através do tempo podem mudar o destino.`
  },
  {
    id: "chapter10",
    title: "Capítulo 10: A Batalha Final",
    era: "1999 d.C. / Além do Tempo",
    content: `O grupo finalmente enfrenta Lavos. A criatura é incrivelmente poderosa, tendo absorvido o DNA e poderes de inúmeras espécies ao longo de milhões de anos.

A batalha ocorre em múltiplas fases. Primeiro, eles enfrentam a casca externa de Lavos, que pode imitar os poderes de todos os chefes que derrotaram. Depois, penetram no interior de Lavos, enfrentando seu núcleo verdadeiro.

Após uma batalha épica, Lavos é finalmente derrotado. O futuro é alterado - o apocalipse de 1999 nunca acontece. O mundo de 2300 d.C. se transforma em um lugar verde e próspero.

Os heróis retornam às suas respectivas eras, suas vidas mudadas para sempre pela aventura. Crono, Marle e Lucca observam os fogos de artifício da Feira do Milênio, sabendo que o futuro está seguro - graças à sua jornada através do tempo.`
  }
];

export default function HistoriaCompleta() {
  return (
    <Layout>
      <div className="space-y-8">
        <SectionHeader
          title="História Completa"
          subtitle="A narrativa completa de Chrono Trigger, capítulo por capítulo"
        />

        {/* Spoiler Warning */}
        <Card className="bg-destructive/10 border-destructive/30">
          <CardContent className="p-6 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-destructive mb-1">Aviso de Spoilers!</h3>
              <p className="text-muted-foreground">
                Esta página contém spoilers completos da história de Chrono Trigger. 
                Se você ainda não jogou, recomendamos ver o <a href="/historia/resumo" className="text-primary hover:underline">resumo sem spoilers</a> primeiro.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Story Chapters */}
        <Accordion type="single" collapsible className="space-y-4">
          {storyChapters.map((chapter) => (
            <AccordionItem 
              key={chapter.id} 
              value={chapter.id}
              className="bg-card/50 border border-border rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/30">
                <div className="flex items-center gap-4 text-left">
                  <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                    {chapter.era}
                  </span>
                  <span className="font-display font-bold">{chapter.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="prose prose-invert max-w-none">
                  {chapter.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Conclusion */}
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
          <CardContent className="p-6">
            <h3 className="text-xl font-display font-bold text-primary mb-4">O Legado de Chrono Trigger</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Chrono Trigger é considerado um dos maiores RPGs já criados, não apenas por sua jogabilidade 
              inovadora, mas principalmente por sua narrativa magistral que explora temas de amizade, 
              sacrifício, redenção e o poder de mudar o destino.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A história nos lembra que nossas ações, não importa quão pequenas, podem ter consequências 
              que ecoam através do tempo - e que juntos, podemos superar até mesmo os desafios mais impossíveis.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
