import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { walkthrough, pointsOfNoReturn, missableItems } from "@/data/walkthrough";
import { Map, ChevronDown, ChevronRight, AlertTriangle, Package, Target, Lightbulb, Skull } from "lucide-react";

export default function Walkthrough() {
  const [expandedChapters, setExpandedChapters] = useState<string[]>(["chapter1"]);

  const toggleChapter = (id: string) => {
    setExpandedChapters(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const getEraBadgeClass = (era: string) => {
    if (era.includes("65")) return "era-prehistoric";
    if (era.includes("12000")) return "era-antiquity";
    if (era.includes("600")) return "era-middle";
    if (era.includes("1000")) return "era-present";
    if (era.includes("2300") || era.includes("1999")) return "era-future";
    return "era-endoftime";
  };

  return (
    <Layout>
      <div className="px-6 py-12 max-w-4xl mx-auto">
        <SectionHeader 
          title="Walkthrough Completo" 
          subtitle="Guia passo a passo de Chrono Trigger"
          icon={<Map className="w-8 h-8" />}
        />
        
        {/* Warning */}
        <div className="mb-8 p-4 bg-chrono-red/10 border border-chrono-red/30 rounded-lg flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-chrono-red shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium text-chrono-red">Aviso de Spoilers</h4>
            <p className="text-muted-foreground text-sm">
              Este walkthrough contém spoilers completos da história. Se você quer jogar sem spoilers, 
              use apenas as seções de objetivos e dicas.
            </p>
          </div>
        </div>

        {/* Chapters */}
        <div className="space-y-4 mb-12">
          {walkthrough.map((chapter, index) => (
            <div key={chapter.id} className="card-chrono overflow-hidden">
              <button
                onClick={() => toggleChapter(chapter.id)}
                className="w-full p-4 flex items-center justify-between hover:bg-muted/20 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-display font-bold text-sm">
                    {index + 1}
                  </span>
                  <div className="text-left">
                    <h3 className="font-display font-bold text-foreground">{chapter.title}</h3>
                    <span className={`era-badge ${getEraBadgeClass(chapter.era)}`}>{chapter.era}</span>
                  </div>
                </div>
                {expandedChapters.includes(chapter.id) 
                  ? <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  : <ChevronRight className="w-5 h-5 text-muted-foreground" />
                }
              </button>
              
              {expandedChapters.includes(chapter.id) && (
                <div className="px-4 pb-4 border-t border-border pt-4">
                  <p className="text-muted-foreground mb-4">{chapter.description}</p>
                  
                  {/* Objectives */}
                  <div className="mb-4">
                    <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4 text-chrono-cyan" /> Objetivos
                    </h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                      {chapter.objectives.map((obj, i) => (
                        <li key={i}>{obj}</li>
                      ))}
                    </ol>
                  </div>
                  
                  {/* Bosses */}
                  {chapter.bosses && chapter.bosses.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                        <Skull className="w-4 h-4 text-chrono-red" /> Bosses
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {chapter.bosses.map((boss, i) => (
                          <span key={i} className="px-2 py-1 bg-chrono-red/20 text-chrono-red text-sm rounded">
                            {boss}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Missables */}
                  {chapter.missables && chapter.missables.length > 0 && (
                    <div className="mb-4 p-3 bg-chrono-gold/10 border border-chrono-gold/30 rounded-lg">
                      <h4 className="font-medium text-chrono-gold mb-2 flex items-center gap-2">
                        <Package className="w-4 h-4" /> Itens Missáveis
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {chapter.missables.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Tips */}
                  {chapter.tips && chapter.tips.length > 0 && (
                    <div className="p-3 bg-primary/10 border border-primary/30 rounded-lg">
                      <h4 className="font-medium text-primary mb-2 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4" /> Dicas
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {chapter.tips.map((tip, i) => (
                          <li key={i}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Points of No Return */}
        <section className="mb-12">
          <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-chrono-red" />
            Pontos de Não-Retorno
          </h2>
          <div className="space-y-4">
            {pointsOfNoReturn.map((point, i) => (
              <div key={i} className="card-chrono p-4 border-chrono-red/30">
                <h4 className="font-medium text-chrono-red">{point.location}</h4>
                <p className="text-muted-foreground text-sm mt-1">{point.description}</p>
                <ul className="list-disc list-inside mt-2 text-sm text-muted-foreground">
                  {point.consequences.map((c, j) => (
                    <li key={j}>{c}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Missable Items */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Package className="w-5 h-5 text-chrono-gold" />
            Itens Missáveis Importantes
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="pb-3 text-muted-foreground font-medium">Item</th>
                  <th className="pb-3 text-muted-foreground font-medium">Local</th>
                  <th className="pb-3 text-muted-foreground font-medium">Requisito</th>
                  <th className="pb-3 text-muted-foreground font-medium">Importância</th>
                </tr>
              </thead>
              <tbody>
                {missableItems.map((item, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-3 font-medium text-chrono-gold">{item.item}</td>
                    <td className="py-3 text-muted-foreground">{item.location}</td>
                    <td className="py-3 text-muted-foreground">{item.requirement}</td>
                    <td className="py-3 text-chrono-cyan">{item.importance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </Layout>
  );
}
