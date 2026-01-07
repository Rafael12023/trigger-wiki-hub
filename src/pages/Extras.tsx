import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Gift, Book, CheckSquare, Sparkles, Music } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const glossary = [
  { term: "Gate", definition: "Portal temporal natural ou artificial que conecta diferentes eras." },
  { term: "Epoch", definition: "A máquina do tempo (Wings of Time) construída por Belthasar." },
  { term: "Lavos", definition: "Parasita cósmico que ameaça destruir o mundo em 1999 AD." },
  { term: "Mammon Machine", definition: "Dispositivo de Zeal que extrai energia de Lavos." },
  { term: "Masamune", definition: "Espada lendária forjada por Melchior, habitada por Masa e Mune." },
  { term: "Mystics", definition: "Raça de criaturas mágicas lideradas por Magus em 600 AD." },
  { term: "Reptites", definition: "Raça de répteis inteligentes que dominavam a Terra em 65M BC." },
  { term: "Zeal", definition: "Reino mágico flutuante em 12.000 BC, destruído ao abusar do poder de Lavos." },
  { term: "Entity", definition: "Força misteriosa (possivelmente o planeta) que criou os portais temporais." },
  { term: "Chrono Trigger", definition: "Artefato especial usado para reviver Crono após sua morte." },
  { term: "Black Omen", definition: "Fortaleza flutuante criada pela Rainha Zeal após a queda do Ocean Palace." },
  { term: "Tech", definition: "Habilidades especiais de cada personagem, aprendidas com TP." },
  { term: "Double/Triple Tech", definition: "Técnicas combinadas entre 2 ou 3 personagens." },
  { term: "ATB", definition: "Active Time Battle - sistema de combate onde tempo flui em batalha." },
  { term: "NG+", definition: "New Game Plus - modo que permite recomeçar mantendo níveis e itens." },
];

const checklist = [
  { category: "Personagens", items: ["Recrutar Crono", "Recrutar Marle", "Recrutar Lucca", "Recrutar Frog", "Recrutar Robo", "Recrutar Ayla", "Recrutar Magus (opcional)"] },
  { category: "Armas Ultimate", items: ["Rainbow (Crono)", "Venus Bow (Marle)", "WonderShot (Lucca)", "Masamune II (Frog)", "Crisis Arm (Robo)", "BronzeFist (Ayla)", "DoomSickle (Magus)"] },
  { category: "Side Quests", items: ["Sun Stone Quest", "Rainbow Shell Quest", "Northern Ruins (Frog)", "Geno Dome (Robo)", "Fiona's Forest", "Ozzie's Fort", "Black Omen"] },
  { category: "Finais", items: ["Ver final normal", "Ver 3+ finais em NG+", "Ver final dos desenvolvedores", "Ver todos os 14 finais"] },
  { category: "Bosses Opcionais", items: ["Son of Sun", "Rust Tyrano", "Mother Brain", "Retinite", "Yakra XIII"] },
];

const easterEggs = [
  {
    title: "O Gato de Crono",
    description: "Se você tentar sair de casa no início sem falar com sua mãe, ela reclama. Se fizer isso várias vezes, diálogos diferentes aparecem.",
    location: "Casa de Crono, 1000 AD"
  },
  {
    title: "Julgamento Justo",
    description: "No julgamento, cada ação no Millennial Fair afeta o veredito: comer o almoço da menina, empurrar Marle, tentar vender o pingente - tudo é lembrado!",
    location: "Guardia Castle, 1000 AD"
  },
  {
    title: "Dança de Robo",
    description: "Se Robo estiver no grupo durante cenas de festa, ele faz uma dança robótica hilária.",
    location: "Várias celebrações"
  },
  {
    title: "Segredo do Nu",
    description: "Os Nus misteriosos aparecem em todas as eras. Um Nu especial no Hunting Range pode dar dicas sobre o jogo se falares com ele várias vezes.",
    location: "Hunting Range, 65M BC"
  },
  {
    title: "A Soda do Robo",
    description: "Há uma máquina de refrigerante no futuro. Se usá-la com Robo, ele tem uma reação especial.",
    location: "Proto Dome, 2300 AD"
  },
  {
    title: "Alfador Eterno",
    description: "O gato roxo de Janus (Alfador) aparece em Zeal. Se você retornar com Magus, Alfador o reconhece - uma cena emocional.",
    location: "Zeal Palace, 12000 BC"
  },
  {
    title: "Crono Não Fala",
    description: "Crono é um protagonista silencioso - ele nunca fala. Isso é referenciado no final onde ele 'finalmente' pode falar... mas ainda não diz nada.",
    location: "Qualquer momento"
  },
];

const curiosidades = [
  "Chrono Trigger foi criado pelo 'Dream Team': Hironobu Sakaguchi (Final Fantasy), Yuji Horii (Dragon Quest) e Akira Toriyama (Dragon Ball).",
  "A trilha sonora foi composta por Yasunori Mitsuda, que adoeceu durante a produção. Nobuo Uematsu (FF) completou algumas faixas.",
  "O nome 'Lavos' vem do espanhol 'La Voz' (A Voz) combinado com o grego 'Vos' (Grande).",
  "Cada personagem foi desenhado por Akira Toriyama, o que explica as semelhanças com Dragon Ball.",
  "O jogo foi lançado originalmente em 1995 e consistentemente aparece em listas de 'melhores jogos de todos os tempos'.",
  "Magus era originalmente planejado para ser mais vilão, mas se tornou um anti-herói popular.",
  "A música 'Corridors of Time' (tema de Zeal) é uma das mais amadas de qualquer RPG.",
  "O sistema de combate sem transições (inimigos visíveis no mapa) era revolucionário para a época.",
  "Chrono Trigger permite múltiplos finais desde 1995, muito antes de isso ser comum em games.",
];

export default function Extras() {
  return (
    <Layout>
      <div className="px-6 py-12 max-w-6xl mx-auto">
        <SectionHeader 
          title="Extras" 
          subtitle="Glossário, checklist, easter eggs e curiosidades"
          icon={<Gift className="w-8 h-8" />}
        />

        <Tabs defaultValue="glossary" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="glossary">Glossário</TabsTrigger>
            <TabsTrigger value="checklist">Checklist 100%</TabsTrigger>
            <TabsTrigger value="easter">Easter Eggs</TabsTrigger>
            <TabsTrigger value="curiosidades">Curiosidades</TabsTrigger>
          </TabsList>

          <TabsContent value="glossary">
            <div className="card-chrono p-6">
              <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <Book className="w-5 h-5 text-primary" /> Glossário de Termos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {glossary.map((item, i) => (
                  <div key={i} className="p-3 bg-chrono-darker rounded-lg">
                    <h4 className="font-bold text-chrono-cyan">{item.term}</h4>
                    <p className="text-sm text-muted-foreground">{item.definition}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="checklist">
            <div className="space-y-6">
              {checklist.map((category, i) => (
                <div key={i} className="card-chrono p-6">
                  <h3 className="font-display font-bold text-chrono-gold mb-4 flex items-center gap-2">
                    <CheckSquare className="w-5 h-5" /> {category.category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {category.items.map((item, j) => (
                      <label key={j} className="flex items-center gap-2 text-foreground cursor-pointer hover:text-primary transition-colors">
                        <input type="checkbox" className="w-4 h-4 accent-primary" />
                        {item}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="easter">
            <div className="space-y-4">
              {easterEggs.map((egg, i) => (
                <div key={i} className="card-chrono p-6">
                  <h3 className="font-display font-bold text-chrono-purple mb-2 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" /> {egg.title}
                  </h3>
                  <p className="text-foreground mb-2">{egg.description}</p>
                  <p className="text-sm text-muted-foreground">
                    📍 {egg.location}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="curiosidades">
            <div className="card-chrono p-6">
              <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <Music className="w-5 h-5 text-chrono-gold" /> Curiosidades
              </h3>
              <ul className="space-y-4">
                {curiosidades.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground">
                    <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
