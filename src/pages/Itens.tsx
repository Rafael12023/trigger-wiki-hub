import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { weapons, armors, accessories, consumables } from "@/data/items";
import { Backpack, Search, Sword, Shield, Gem, FlaskConical } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Itens() {
  const [search, setSearch] = useState("");

  const filterBySearch = <T extends { name: string; description: string }>(items: T[]) =>
    items.filter(item => 
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <Layout>
      <div className="px-6 py-12 max-w-6xl mx-auto">
        <SectionHeader 
          title="Itens & Equipamentos" 
          subtitle="Arsenal completo de Chrono Trigger"
          icon={<Backpack className="w-8 h-8" />}
        />
        
        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar item..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-chrono-darker border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <Tabs defaultValue="weapons" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="weapons" className="flex items-center gap-1">
              <Sword className="w-4 h-4" /> Armas
            </TabsTrigger>
            <TabsTrigger value="armors" className="flex items-center gap-1">
              <Shield className="w-4 h-4" /> Armaduras
            </TabsTrigger>
            <TabsTrigger value="accessories" className="flex items-center gap-1">
              <Gem className="w-4 h-4" /> Acessórios
            </TabsTrigger>
            <TabsTrigger value="consumables" className="flex items-center gap-1">
              <FlaskConical className="w-4 h-4" /> Consumíveis
            </TabsTrigger>
          </TabsList>
          
          {/* Weapons */}
          <TabsContent value="weapons">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pb-3 text-muted-foreground font-medium">Nome</th>
                    <th className="pb-3 text-muted-foreground font-medium text-center">ATK</th>
                    <th className="pb-3 text-muted-foreground font-medium">Usuário</th>
                    <th className="pb-3 text-muted-foreground font-medium">Efeito</th>
                    <th className="pb-3 text-muted-foreground font-medium">Local</th>
                  </tr>
                </thead>
                <tbody>
                  {filterBySearch(weapons).map(weapon => (
                    <tr key={weapon.id} className="border-b border-border/50 hover:bg-muted/20">
                      <td className="py-3 font-medium text-foreground">{weapon.name}</td>
                      <td className="py-3 text-center text-chrono-red">{weapon.attack || "Especial"}</td>
                      <td className="py-3 text-chrono-cyan">{weapon.usedBy.join(", ")}</td>
                      <td className="py-3 text-chrono-gold">{weapon.effect || "-"}</td>
                      <td className="py-3 text-muted-foreground">{weapon.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Best weapons highlight */}
            <div className="mt-8 p-6 card-chrono border-chrono-gold/30">
              <h3 className="font-display font-bold text-chrono-gold mb-4">Melhores Armas por Personagem</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                <div className="p-3 bg-chrono-darker rounded-lg">
                  <span className="text-chrono-cyan font-medium">Crono:</span>
                  <span className="text-foreground ml-2">Rainbow</span>
                  <p className="text-muted-foreground text-xs mt-1">70% chance de crítico</p>
                </div>
                <div className="p-3 bg-chrono-darker rounded-lg">
                  <span className="text-chrono-cyan font-medium">Marle:</span>
                  <span className="text-foreground ml-2">Venus Bow</span>
                  <p className="text-muted-foreground text-xs mt-1">777 de dano fixo</p>
                </div>
                <div className="p-3 bg-chrono-darker rounded-lg">
                  <span className="text-chrono-red font-medium">Lucca:</span>
                  <span className="text-foreground ml-2">Wondershot</span>
                  <p className="text-muted-foreground text-xs mt-1">Dano aleatório 1x-3x</p>
                </div>
                <div className="p-3 bg-chrono-darker rounded-lg">
                  <span className="text-chrono-green font-medium">Frog:</span>
                  <span className="text-foreground ml-2">Masamune II</span>
                  <p className="text-muted-foreground text-xs mt-1">+Hero Medal = crítico 75%</p>
                </div>
                <div className="p-3 bg-chrono-darker rounded-lg">
                  <span className="text-chrono-gold font-medium">Robo:</span>
                  <span className="text-foreground ml-2">Crisis Arm</span>
                  <p className="text-muted-foreground text-xs mt-1">Dano HP-based</p>
                </div>
                <div className="p-3 bg-chrono-darker rounded-lg">
                  <span className="text-amber-400 font-medium">Ayla:</span>
                  <span className="text-foreground ml-2">Bronze Fist</span>
                  <p className="text-muted-foreground text-xs mt-1">Level 96+ = 9999 crítico</p>
                </div>
                <div className="p-3 bg-chrono-darker rounded-lg">
                  <span className="text-chrono-purple font-medium">Magus:</span>
                  <span className="text-foreground ml-2">Doom Sickle</span>
                  <p className="text-muted-foreground text-xs mt-1">Dano +MP gasto</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Armors */}
          <TabsContent value="armors">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pb-3 text-muted-foreground font-medium">Nome</th>
                    <th className="pb-3 text-muted-foreground font-medium text-center">DEF</th>
                    <th className="pb-3 text-muted-foreground font-medium">Efeito</th>
                    <th className="pb-3 text-muted-foreground font-medium">Local</th>
                  </tr>
                </thead>
                <tbody>
                  {filterBySearch(armors).map(armor => (
                    <tr key={armor.id} className="border-b border-border/50 hover:bg-muted/20">
                      <td className="py-3 font-medium text-foreground">{armor.name}</td>
                      <td className="py-3 text-center text-chrono-green">{armor.defense}</td>
                      <td className="py-3 text-chrono-gold">{armor.effect || "-"}</td>
                      <td className="py-3 text-muted-foreground">{armor.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 p-6 card-chrono border-chrono-green/30">
              <h3 className="font-display font-bold text-chrono-green mb-4">Melhores Armaduras</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="p-3 bg-chrono-darker rounded-lg">
                  <span className="text-primary font-medium">Moon Armor</span>
                  <span className="text-muted-foreground ml-2">(DEF 85)</span>
                  <p className="text-muted-foreground text-xs mt-1">Melhor armadura geral para homens</p>
                </div>
                <div className="p-3 bg-chrono-darker rounded-lg">
                  <span className="text-primary font-medium">Prism Dress</span>
                  <span className="text-muted-foreground ml-2">(DEF 99)</span>
                  <p className="text-muted-foreground text-xs mt-1">Melhor para mulheres + reduz dano mágico</p>
                </div>
                <div className="p-3 bg-chrono-darker rounded-lg">
                  <span className="text-primary font-medium">Taban Suit</span>
                  <span className="text-muted-foreground ml-2">(DEF 79)</span>
                  <p className="text-muted-foreground text-xs mt-1">Exclusivo Lucca - Speed +3</p>
                </div>
                <div className="p-3 bg-chrono-darker rounded-lg">
                  <span className="text-primary font-medium">Gloom Cape</span>
                  <span className="text-muted-foreground ml-2">(DEF 84)</span>
                  <p className="text-muted-foreground text-xs mt-1">Exclusivo Magus - Absorve Shadow</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Accessories */}
          <TabsContent value="accessories">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filterBySearch(accessories).map(acc => (
                <div key={acc.id} className="card-chrono p-4">
                  <h4 className="font-medium text-foreground">{acc.name}</h4>
                  <p className="text-chrono-purple text-sm mt-1">{acc.effect}</p>
                  <p className="text-muted-foreground text-xs mt-2">{acc.location}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 card-chrono border-chrono-purple/30">
              <h3 className="font-display font-bold text-chrono-purple mb-4">Acessórios Essenciais</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="p-3 bg-chrono-darker rounded-lg">
                  <span className="text-primary font-medium">Gold Stud</span>
                  <p className="text-muted-foreground text-xs mt-1">Reduz MP em 75% - ESSENCIAL para magos</p>
                </div>
                <div className="p-3 bg-chrono-darker rounded-lg">
                  <span className="text-primary font-medium">Prism Specs</span>
                  <p className="text-muted-foreground text-xs mt-1">+50% dano mágico - perfeito para Lucca/Magus</p>
                </div>
                <div className="p-3 bg-chrono-darker rounded-lg">
                  <span className="text-primary font-medium">Sun Shades</span>
                  <p className="text-muted-foreground text-xs mt-1">+25% dano físico - ótimo para Crono/Ayla</p>
                </div>
                <div className="p-3 bg-chrono-darker rounded-lg">
                  <span className="text-primary font-medium">Hero Medal</span>
                  <p className="text-muted-foreground text-xs mt-1">Exclusivo Frog - Crítico +50% com Masamune</p>
                </div>
                <div className="p-3 bg-chrono-darker rounded-lg">
                  <span className="text-primary font-medium">Green Dream</span>
                  <p className="text-muted-foreground text-xs mt-1">Auto-revive uma vez por batalha</p>
                </div>
                <div className="p-3 bg-chrono-darker rounded-lg">
                  <span className="text-primary font-medium">Gold Earring</span>
                  <p className="text-muted-foreground text-xs mt-1">HP Máximo +50% - muito útil para tanks</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Consumables */}
          <TabsContent value="consumables">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pb-3 text-muted-foreground font-medium">Nome</th>
                    <th className="pb-3 text-muted-foreground font-medium">Efeito</th>
                    <th className="pb-3 text-muted-foreground font-medium text-right">Compra</th>
                    <th className="pb-3 text-muted-foreground font-medium text-right">Venda</th>
                  </tr>
                </thead>
                <tbody>
                  {filterBySearch(consumables).map(item => (
                    <tr key={item.id} className="border-b border-border/50 hover:bg-muted/20">
                      <td className="py-3 font-medium text-foreground">{item.name}</td>
                      <td className="py-3 text-chrono-cyan">{item.effect}</td>
                      <td className="py-3 text-right text-chrono-gold">
                        {item.buyPrice ? `${item.buyPrice}G` : "-"}
                      </td>
                      <td className="py-3 text-right text-muted-foreground">
                        {item.sellPrice ? `${item.sellPrice}G` : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 p-6 card-chrono border-primary/30">
              <h3 className="font-display font-bold text-primary mb-4">Tabs de Status</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Tabs são itens raros que aumentam permanentemente os stats de um personagem. 
                Use-os estrategicamente!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="p-3 bg-chrono-red/10 rounded-lg border border-chrono-red/30">
                  <span className="text-chrono-red font-medium">Power Tab</span>
                  <p className="text-muted-foreground text-xs mt-1">Aumenta Power permanentemente</p>
                </div>
                <div className="p-3 bg-chrono-cyan/10 rounded-lg border border-chrono-cyan/30">
                  <span className="text-chrono-cyan font-medium">Magic Tab</span>
                  <p className="text-muted-foreground text-xs mt-1">Aumenta Magic permanentemente</p>
                </div>
                <div className="p-3 bg-chrono-gold/10 rounded-lg border border-chrono-gold/30">
                  <span className="text-chrono-gold font-medium">Speed Tab</span>
                  <p className="text-muted-foreground text-xs mt-1">Aumenta Speed permanentemente</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
