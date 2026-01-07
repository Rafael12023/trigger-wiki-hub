import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { BookOpen, HelpCircle, Check, X, Link as LinkIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Lore() {
  return (
    <Layout>
      <div className="px-6 py-12 max-w-6xl mx-auto">
        <SectionHeader 
          title="Lore & Teorias" 
          subtitle="Mistérios, explicações e especulações sobre o universo de Chrono"
          icon={<BookOpen className="w-8 h-8" />}
        />

        <Tabs defaultValue="lavos" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="lavos">Lavos</TabsTrigger>
            <TabsTrigger value="schala">Schala</TabsTrigger>
            <TabsTrigger value="entity">A Entity</TabsTrigger>
            <TabsTrigger value="cross">Chrono Cross</TabsTrigger>
          </TabsList>

          <TabsContent value="lavos">
            <div className="space-y-6">
              <div className="card-chrono p-6">
                <h3 className="font-display font-bold text-xl text-chrono-red mb-4">O Que é Lavos?</h3>
                <p className="text-foreground mb-4">
                  Lavos é um parasita cósmico que viaja pelo espaço, caindo em planetas para absorver DNA e energia
                  ao longo de milhões de anos antes de destruí-los e seguir para o próximo.
                </p>
                <h4 className="font-bold text-chrono-gold mb-2">Cronologia de Lavos</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><span className="text-chrono-cyan">65M BC:</span> Lavos cai na Terra, extinguindo os dinossauros e Reptites</li>
                  <li><span className="text-chrono-cyan">12000 BC:</span> Zeal descobre Lavos e tenta usar seu poder</li>
                  <li><span className="text-chrono-cyan">1999 AD:</span> "Day of Lavos" - Lavos emerge e destrói a civilização</li>
                  <li><span className="text-chrono-cyan">????:</span> Spawn de Lavos deixam a Terra para outros planetas</li>
                </ul>
              </div>

              <div className="card-chrono p-6">
                <h3 className="font-display font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-chrono-purple" /> Teorias sobre Lavos
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-chrono-darker rounded-lg">
                    <h4 className="font-bold text-chrono-purple mb-2">Lavos é consciente?</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="text-chrono-green flex items-center gap-1"><Check className="w-4 h-4"/> Canônico:</span>
                      Lavos demonstra inteligência ao manipular eventos e criar a Mammon Machine.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="text-chrono-gold flex items-center gap-1"><HelpCircle className="w-4 h-4"/> Especulação:</span>
                      Alguns acreditam que Lavos é apenas instinto, não verdadeira consciência.
                    </p>
                  </div>

                  <div className="p-4 bg-chrono-darker rounded-lg">
                    <h4 className="font-bold text-chrono-purple mb-2">De onde Lavos veio?</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="text-chrono-red flex items-center gap-1"><X className="w-4 h-4"/> Nunca explicado:</span>
                      A origem de Lavos é intencionalmente misteriosa.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="text-chrono-gold flex items-center gap-1"><HelpCircle className="w-4 h-4"/> Especulação:</span>
                      Pode ser de outra dimensão, ou parte de um ciclo infinito de parasitas cósmicos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="schala">
            <div className="space-y-6">
              <div className="card-chrono p-6">
                <h3 className="font-display font-bold text-xl text-chrono-purple mb-4">O Destino de Schala</h3>
                <p className="text-foreground mb-4">
                  Schala, a princesa bondosa de Zeal, tem um dos destinos mais trágicos e debatidos da série.
                  O jogo original deixa seu destino ambíguo.
                </p>
                
                <h4 className="font-bold text-chrono-gold mb-2">O Que Sabemos (Canônico)</h4>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• Foi forçada a canalizar energia de Lavos contra sua vontade</li>
                  <li>• Salvou Magus, Crono e aliados durante o colapso do Ocean Palace</li>
                  <li>• Desapareceu após o incidente do Ocean Palace</li>
                  <li>• No DS, é mostrada fundida com Lavos como "Dream Devourer"</li>
                </ul>

                <h4 className="font-bold text-chrono-cyan mb-2">Conexão com Chrono Cross</h4>
                <p className="text-muted-foreground">
                  Em Chrono Cross, Schala se funde com Lavos para criar o Time Devourer.
                  Parte de sua alma se separa e renasce como Kid, a protagonista feminina de Cross.
                </p>
              </div>

              <div className="card-chrono p-6">
                <h3 className="font-display font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-chrono-purple" /> Teorias sobre Schala
                </h3>
                <div className="p-4 bg-chrono-darker rounded-lg">
                  <h4 className="font-bold text-chrono-purple mb-2">Marle é descendente de Schala?</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    <span className="text-chrono-gold flex items-center gap-1"><HelpCircle className="w-4 h-4"/> Especulação popular:</span>
                    O pingente de Marle é idêntico ao de Schala. A família real pode descender dela.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Isso explicaria por que Marle pode usar o pingente e tem poderes mágicos latentes.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="entity">
            <div className="space-y-6">
              <div className="card-chrono p-6">
                <h3 className="font-display font-bold text-xl text-chrono-cyan mb-4">A "Entity" Misteriosa</h3>
                <p className="text-foreground mb-4">
                  Durante a cena de acampamento na floresta de Fiona, o grupo discute quem ou o que criou os portais temporais.
                  Lucca sugere que é o próprio planeta - uma "Entity" - chamando-os para salvar o futuro.
                </p>

                <div className="p-4 bg-chrono-cyan/10 border border-chrono-cyan/30 rounded-lg mb-4">
                  <p className="italic text-foreground">
                    "Alguém ou algo queria que nós víssemos tudo isso... A Entity... o planeta... está tendo um
                    sonho, um sonho de seu passado."
                  </p>
                  <p className="text-right text-sm text-muted-foreground mt-2">- Lucca</p>
                </div>

                <h4 className="font-bold text-chrono-gold mb-2">Interpretações</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><span className="text-chrono-green">Terra como ser vivo:</span> O planeta tem consciência e quer sobreviver</li>
                  <li><span className="text-chrono-purple">Força superior:</span> Algo além da compreensão manipula o tempo</li>
                  <li><span className="text-chrono-cyan">Meta-narrativa:</span> Representa os jogadores e desenvolvedores</li>
                </ul>
              </div>

              <div className="card-chrono p-6">
                <h3 className="font-display font-bold text-lg text-foreground mb-4">Por que isso importa?</h3>
                <p className="text-muted-foreground">
                  A Entity nunca é confirmada ou negada. Essa ambiguidade é intencional - Chrono Trigger deixa
                  espaço para interpretação filosófica sobre destino, livre-arbítrio e a natureza do tempo.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="cross">
            <div className="space-y-6">
              <div className="card-chrono p-6">
                <h3 className="font-display font-bold text-xl text-chrono-gold mb-4">
                  Chrono Trigger & Chrono Cross
                </h3>
                <p className="text-foreground mb-4">
                  Chrono Cross (1999) é a sequência de Chrono Trigger, mas conta uma história bem diferente
                  com conexões sutis ao original.
                </p>

                <h4 className="font-bold text-chrono-cyan mb-2 flex items-center gap-2">
                  <LinkIcon className="w-4 h-4" /> Conexões Confirmadas
                </h4>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• Schala se fundiu com Lavos após os eventos de CT</li>
                  <li>• Kid é um "clone" de Schala ou fragmento de sua alma</li>
                  <li>• O Reino de Guardia foi destruído (chocante para fãs de CT)</li>
                  <li>• Lucca aparece em flashbacks e foi morta por Lynx</li>
                  <li>• O Frozen Flame é um fragmento de Lavos</li>
                  <li>• FATE é baseado em tecnologia do futuro de 2300 AD</li>
                </ul>

                <div className="p-4 bg-chrono-red/10 border border-chrono-red/30 rounded-lg">
                  <h4 className="font-bold text-chrono-red mb-2">Aviso de Spoilers</h4>
                  <p className="text-sm text-muted-foreground">
                    Chrono Cross revela que o futuro brilhante salvo em CT eventualmente levou a novos problemas.
                    Isso dividiu a comunidade - alguns acham profundo, outros acham que "desfaz" o final feliz de CT.
                  </p>
                </div>
              </div>

              <div className="card-chrono p-6">
                <h3 className="font-display font-bold text-lg text-foreground mb-4">Radical Dreamers</h3>
                <p className="text-muted-foreground">
                  Radical Dreamers (1996) é um visual novel para Satellaview que serve como uma "proto-sequência"
                  de Chrono Trigger. Introduziu Kid e Serge antes de Chrono Cross. Hoje está disponível
                  na coletânea "Chrono Cross: The Radical Dreamers Edition".
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
