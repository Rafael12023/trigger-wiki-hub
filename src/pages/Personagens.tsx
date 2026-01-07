import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { CharacterCard } from "@/components/ui/character-card";
import { Users } from "lucide-react";

const characters = [
  {
    name: "Crono",
    title: "O Herói Silencioso",
    era: "1000 AD",
    description: "O protagonista silencioso de Chrono Trigger. Um jovem espadachim de cabelos vermelhos que vive com sua mãe em Truce. Sua vida muda para sempre quando encontra Marle no Festival do Milênio.",
    imageUrl: "https://www.spriters-resource.com/resources/sheets/1/748.png",
    href: "/personagens/crono",
    color: "cyan" as const,
  },
  {
    name: "Marle",
    title: "Princesa de Guardia",
    era: "1000 AD",
    description: "Nadia, a princesa rebelde do Reino de Guardia, que foge do castelo para aproveitar o festival. Mestre em crossbow e magia de gelo/cura.",
    imageUrl: "https://www.spriters-resource.com/resources/sheets/1/749.png",
    href: "/personagens/marle",
    color: "cyan" as const,
  },
  {
    name: "Lucca",
    title: "A Inventora Genial",
    era: "1000 AD",
    description: "A brilhante inventora e melhor amiga de Crono. Sua invenção, o Telepod, desencadeia toda a aventura temporal. Especialista em fogo e tecnologia.",
    imageUrl: "https://www.spriters-resource.com/resources/sheets/1/750.png",
    href: "/personagens/lucca",
    color: "red" as const,
  },
  {
    name: "Frog",
    title: "O Cavaleiro Amaldiçoado",
    era: "600 AD",
    description: "Antes conhecido como Glenn, um escudeiro transformado em sapo pelo próprio Magus. Agora porta a lendária espada Masamune na luta contra o mal.",
    imageUrl: "https://www.spriters-resource.com/resources/sheets/1/751.png",
    href: "/personagens/frog",
    color: "green" as const,
  },
  {
    name: "Robo",
    title: "O Autômato do Futuro",
    era: "2300 AD",
    description: "R-66Y, um robô de reparos encontrado no futuro devastado. Após ser consertado por Lucca, desenvolve consciência e lealdade ao grupo.",
    imageUrl: "https://www.spriters-resource.com/resources/sheets/1/752.png",
    href: "/personagens/robo",
    color: "gold" as const,
  },
  {
    name: "Ayla",
    title: "A Chefe Pré-Histórica",
    era: "65.000.000 BC",
    description: "A guerreira mais forte da era pré-histórica e líder do povo Ioka. Sem acesso à magia, compensa com força física devastadora.",
    imageUrl: "https://www.spriters-resource.com/resources/sheets/1/753.png",
    href: "/personagens/ayla",
    color: "orange" as const,
  },
  {
    name: "Magus",
    title: "O Mago das Sombras",
    era: "600 AD",
    description: "O temível feiticeiro que liderava os Mystics contra Guardia. Seu verdadeiro objetivo era invocar e destruir Lavos. Seu passado está ligado à Antiguidade.",
    imageUrl: "https://www.spriters-resource.com/resources/sheets/1/754.png",
    href: "/personagens/magus",
    color: "purple" as const,
  },
];

export default function PersonagensPage() {
  return (
    <Layout>
      <div className="px-6 py-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <SectionHeader 
            title="Personagens Jogáveis"
            subtitle="Os sete heróis que atravessam o tempo para salvar o mundo"
            icon={<Users className="w-5 h-5" />}
          />
          <p className="text-muted-foreground max-w-3xl mt-4">
            Em Chrono Trigger, você controla uma equipe de heróis de diferentes eras. Cada personagem 
            possui habilidades únicas, técnicas especiais e uma história profunda que se entrelaça 
            com a narrativa principal. Clique em cada personagem para ver detalhes completos.
          </p>
        </div>

        {/* Characters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {characters.map((char) => (
            <CharacterCard key={char.name} {...char} />
          ))}
        </div>

        {/* Stats Table */}
        <section className="mt-16">
          <h3 className="font-display text-xl font-bold text-foreground mb-6">
            Comparação de Atributos Base
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full card-chrono">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-display text-primary">Personagem</th>
                  <th className="text-center p-4 font-display text-foreground">HP</th>
                  <th className="text-center p-4 font-display text-foreground">MP</th>
                  <th className="text-center p-4 font-display text-foreground">Poder</th>
                  <th className="text-center p-4 font-display text-foreground">Magia</th>
                  <th className="text-center p-4 font-display text-foreground">Velocidade</th>
                  <th className="text-center p-4 font-display text-foreground">Elemento</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50 hover:bg-muted/50">
                  <td className="p-4 font-medium text-chrono-cyan">Crono</td>
                  <td className="text-center p-4">Alto</td>
                  <td className="text-center p-4">Médio</td>
                  <td className="text-center p-4">Alto</td>
                  <td className="text-center p-4">Médio</td>
                  <td className="text-center p-4">Alto</td>
                  <td className="text-center p-4">⚡ Raio</td>
                </tr>
                <tr className="border-b border-border/50 hover:bg-muted/50">
                  <td className="p-4 font-medium text-chrono-cyan">Marle</td>
                  <td className="text-center p-4">Médio</td>
                  <td className="text-center p-4">Alto</td>
                  <td className="text-center p-4">Baixo</td>
                  <td className="text-center p-4">Alto</td>
                  <td className="text-center p-4">Médio</td>
                  <td className="text-center p-4">❄️ Gelo</td>
                </tr>
                <tr className="border-b border-border/50 hover:bg-muted/50">
                  <td className="p-4 font-medium text-chrono-red">Lucca</td>
                  <td className="text-center p-4">Médio</td>
                  <td className="text-center p-4">Alto</td>
                  <td className="text-center p-4">Baixo</td>
                  <td className="text-center p-4">Muito Alto</td>
                  <td className="text-center p-4">Baixo</td>
                  <td className="text-center p-4">🔥 Fogo</td>
                </tr>
                <tr className="border-b border-border/50 hover:bg-muted/50">
                  <td className="p-4 font-medium text-chrono-green">Frog</td>
                  <td className="text-center p-4">Alto</td>
                  <td className="text-center p-4">Médio</td>
                  <td className="text-center p-4">Alto</td>
                  <td className="text-center p-4">Médio</td>
                  <td className="text-center p-4">Médio</td>
                  <td className="text-center p-4">💧 Água</td>
                </tr>
                <tr className="border-b border-border/50 hover:bg-muted/50">
                  <td className="p-4 font-medium text-chrono-gold">Robo</td>
                  <td className="text-center p-4">Muito Alto</td>
                  <td className="text-center p-4">Baixo</td>
                  <td className="text-center p-4">Muito Alto</td>
                  <td className="text-center p-4">Baixo</td>
                  <td className="text-center p-4">Baixo</td>
                  <td className="text-center p-4">⚙️ Shadow</td>
                </tr>
                <tr className="border-b border-border/50 hover:bg-muted/50">
                  <td className="p-4 font-medium text-chrono-orange">Ayla</td>
                  <td className="text-center p-4">Alto</td>
                  <td className="text-center p-4">Nenhum</td>
                  <td className="text-center p-4">Máximo</td>
                  <td className="text-center p-4">Nenhuma</td>
                  <td className="text-center p-4">Muito Alto</td>
                  <td className="text-center p-4">✊ Físico</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="p-4 font-medium text-chrono-purple">Magus</td>
                  <td className="text-center p-4">Médio</td>
                  <td className="text-center p-4">Muito Alto</td>
                  <td className="text-center p-4">Alto</td>
                  <td className="text-center p-4">Muito Alto</td>
                  <td className="text-center p-4">Médio</td>
                  <td className="text-center p-4">🌑 Shadow</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Element Guide */}
        <section className="mt-16 card-chrono p-8">
          <h3 className="font-display text-xl font-bold text-foreground mb-4">
            Guia de Elementos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h4 className="font-medium text-foreground">Raio (Lightning)</h4>
                <p className="text-muted-foreground text-sm">Usado por Crono. Efetivo contra inimigos aquáticos e mecânicos.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">❄️</span>
              <div>
                <h4 className="font-medium text-foreground">Gelo (Ice)</h4>
                <p className="text-muted-foreground text-sm">Usado por Marle. Efetivo contra inimigos de fogo.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔥</span>
              <div>
                <h4 className="font-medium text-foreground">Fogo (Fire)</h4>
                <p className="text-muted-foreground text-sm">Usado por Lucca. Efetivo contra inimigos de gelo e plantas.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">💧</span>
              <div>
                <h4 className="font-medium text-foreground">Água (Water)</h4>
                <p className="text-muted-foreground text-sm">Usado por Frog. Efetivo contra inimigos de fogo.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🌑</span>
              <div>
                <h4 className="font-medium text-foreground">Shadow</h4>
                <p className="text-muted-foreground text-sm">Usado por Magus e Robo. Poucos inimigos resistem.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✊</span>
              <div>
                <h4 className="font-medium text-foreground">Físico</h4>
                <p className="text-muted-foreground text-sm">Ayla usa apenas ataques físicos. Seu poder cresce com o nível.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
