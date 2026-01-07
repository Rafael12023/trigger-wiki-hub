import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Swords, Zap, Clock, Shield, Target } from "lucide-react";

export default function CombatePage() {
  return (
    <Layout>
      <div className="px-6 py-12 max-w-5xl mx-auto">
        <SectionHeader 
          title="Sistema de Combate"
          subtitle="Domine o Active Time Battle de Chrono Trigger"
          icon={<Swords className="w-5 h-5" />}
        />

        {/* ATB Explanation */}
        <section className="mb-12">
          <div className="card-chrono p-8">
            <h2 className="font-display text-xl font-bold text-primary mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              O Sistema ATB (Active Time Battle)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Chrono Trigger utiliza o sistema <strong className="text-foreground">Active Time Battle (ATB)</strong>, 
              introduzido em Final Fantasy IV. Diferente de RPGs de turno tradicional, o tempo não para 
              enquanto você escolhe ações - os inimigos continuam agindo!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg bg-muted/30">
                <h3 className="font-medium text-foreground mb-2">Barra de Tempo</h3>
                <p className="text-muted-foreground text-sm">
                  Cada personagem tem uma barra que enche gradualmente. Quando cheia, você pode 
                  escolher uma ação. A velocidade depende do atributo Speed do personagem.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/30">
                <h3 className="font-medium text-foreground mb-2">Posicionamento</h3>
                <p className="text-muted-foreground text-sm">
                  Inimigos se movem durante a batalha! Ataques em área podem atingir múltiplos 
                  inimigos dependendo de sua posição atual no campo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Battle Modes */}
        <section className="mb-12">
          <h2 className="font-display text-xl font-bold text-foreground mb-6">
            Modos de Batalha
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-chrono p-6 border-l-4 border-l-chrono-cyan">
              <h3 className="font-display font-bold text-chrono-cyan mb-2">Modo Active</h3>
              <p className="text-muted-foreground text-sm mb-4">
                O tempo <strong className="text-foreground">nunca para</strong>. Mesmo enquanto você 
                navega pelos menus, inimigos continuam carregando suas barras e atacando.
              </p>
              <div className="flex items-center gap-2 text-chrono-gold text-sm">
                <Zap className="w-4 h-4" />
                <span>Recomendado para jogadores experientes</span>
              </div>
            </div>
            <div className="card-chrono p-6 border-l-4 border-l-chrono-green">
              <h3 className="font-display font-bold text-chrono-green mb-2">Modo Wait</h3>
              <p className="text-muted-foreground text-sm mb-4">
                O tempo <strong className="text-foreground">para</strong> enquanto você navega pelos 
                menus de Tech e Item. Permite planejar suas ações com calma.
              </p>
              <div className="flex items-center gap-2 text-chrono-gold text-sm">
                <Shield className="w-4 h-4" />
                <span>Recomendado para iniciantes</span>
              </div>
            </div>
          </div>
        </section>

        {/* Actions */}
        <section className="mb-12">
          <h2 className="font-display text-xl font-bold text-foreground mb-6">
            Ações de Combate
          </h2>
          <div className="space-y-4">
            <div className="card-chrono p-6">
              <div className="flex items-center gap-3 mb-2">
                <Target className="w-5 h-5 text-chrono-red" />
                <h3 className="font-display font-bold text-foreground">Attack</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Ataque físico básico. Dano baseado no atributo Power e na arma equipada. 
                Não consome MP e é útil para conservar recursos.
              </p>
            </div>
            
            <div className="card-chrono p-6">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-5 h-5 text-chrono-purple" />
                <h3 className="font-display font-bold text-foreground">Tech</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Habilidades especiais que consomem MP. Incluem ataques elementais, curas e buffs. 
                Cada personagem tem techs únicas, além de combos com outros personagens.
              </p>
            </div>

            <div className="card-chrono p-6">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-5 h-5 text-chrono-gold" />
                <h3 className="font-display font-bold text-foreground">Item</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Use itens do inventário para curar HP/MP, curar status ou causar dano. 
                Alguns itens são consumíveis únicos, então use com sabedoria.
              </p>
            </div>
          </div>
        </section>

        {/* Combo Techs */}
        <section className="mb-12">
          <h2 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Zap className="w-5 h-5 text-chrono-purple" />
            Técnicas Combinadas
          </h2>
          <div className="card-chrono p-6">
            <p className="text-muted-foreground mb-6">
              Uma das mecânicas mais icônicas de Chrono Trigger! Quando dois ou mais personagens 
              têm suas barras cheias, podem executar <strong className="text-foreground">Dual Techs</strong> ou{" "}
              <strong className="text-foreground">Triple Techs</strong>.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-primary/10 text-center">
                <div className="font-pixel text-lg text-primary mb-2">SINGLE</div>
                <p className="text-muted-foreground text-sm">1 personagem</p>
              </div>
              <div className="p-4 rounded-lg bg-chrono-purple/20 text-center">
                <div className="font-pixel text-lg text-chrono-purple mb-2">DUAL</div>
                <p className="text-muted-foreground text-sm">2 personagens</p>
              </div>
              <div className="p-4 rounded-lg bg-chrono-gold/20 text-center">
                <div className="font-pixel text-lg text-chrono-gold mb-2">TRIPLE</div>
                <p className="text-muted-foreground text-sm">3 personagens</p>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-lg bg-muted/30">
              <h4 className="font-medium text-foreground mb-2">💡 Dica</h4>
              <p className="text-muted-foreground text-sm">
                Techs combinadas geralmente são mais eficientes em termos de dano por MP do que 
                usar techs individuais separadamente. Experimente diferentes combinações de personagens!
              </p>
            </div>
          </div>
        </section>

        {/* Strategic Tips */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground mb-6">
            Dicas Estratégicas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card-chrono p-4">
              <h4 className="font-medium text-chrono-cyan mb-2">Explorar Fraquezas</h4>
              <p className="text-muted-foreground text-sm">
                Cada inimigo tem fraquezas elementais. Use o elemento certo para dobrar o dano!
              </p>
            </div>
            <div className="card-chrono p-4">
              <h4 className="font-medium text-chrono-green mb-2">Gerenciar MP</h4>
              <p className="text-muted-foreground text-sm">
                Nem toda batalha precisa de techs. Conserve MP para chefes e situações difíceis.
              </p>
            </div>
            <div className="card-chrono p-4">
              <h4 className="font-medium text-chrono-gold mb-2">Posicionamento de Área</h4>
              <p className="text-muted-foreground text-sm">
                Espere inimigos se agruparem antes de usar ataques em área para maximizar dano.
              </p>
            </div>
            <div className="card-chrono p-4">
              <h4 className="font-medium text-chrono-purple mb-2">Curador Dedicado</h4>
              <p className="text-muted-foreground text-sm">
                Sempre tenha Marle ou Robo no grupo para cura. Frog também é ótimo para suporte.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
