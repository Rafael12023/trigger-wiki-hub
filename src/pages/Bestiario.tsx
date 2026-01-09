import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { enemies, bosses, type Enemy } from "@/data/enemies";
import { Skull, Search, Shield, Coins, Star, Heart, Target, Swords } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const eras = ["Todas", "1000 AD", "600 AD", "65M BC", "2300 AD", "12000 BC"];

function EnemyCard({ enemy }: { enemy: Enemy }) {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div 
      className={`card-chrono p-4 cursor-pointer transition-all ${expanded ? 'ring-2 ring-primary' : ''}`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex gap-4 items-start">
        {/* Image */}
        {enemy.image && (
          <div className={`flex-shrink-0 rounded-lg overflow-hidden bg-chrono-darker border border-border ${enemy.isBoss ? 'w-20 h-20' : 'w-24 h-24'}`}>
            <img 
              src={enemy.image} 
              alt={enemy.name}
              className="w-full h-full object-contain p-1"
            />
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          <h3 className={`font-medium ${enemy.isBoss ? 'text-chrono-red' : 'text-foreground'}`}>
            {enemy.name}
            {enemy.isBoss && <span className="ml-2 text-xs bg-chrono-red/20 px-2 py-0.5 rounded">BOSS</span>}
          </h3>
          <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{enemy.description}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-2 mt-3 text-xs">
        <div className="text-center">
          <Heart className="w-3 h-3 mx-auto text-chrono-red mb-1" />
          <span className="text-muted-foreground">{enemy.hp}</span>
        </div>
        <div className="text-center">
          <Star className="w-3 h-3 mx-auto text-chrono-gold mb-1" />
          <span className="text-muted-foreground">{enemy.exp} XP</span>
        </div>
        <div className="text-center">
          <Coins className="w-3 h-3 mx-auto text-yellow-500 mb-1" />
          <span className="text-muted-foreground">{enemy.gold}G</span>
        </div>
        <div className="text-center">
          <Target className="w-3 h-3 mx-auto text-chrono-cyan mb-1" />
          <span className="text-muted-foreground">{enemy.era}</span>
        </div>
      </div>
      
      {expanded && (
        <div className="mt-4 pt-4 border-t border-border space-y-2 text-sm">
          <p><span className="text-muted-foreground">Local:</span> {enemy.location}</p>
          {enemy.weakness && (
            <p><span className="text-muted-foreground">Fraqueza:</span> <span className="text-chrono-cyan">{enemy.weakness}</span></p>
          )}
          {enemy.drops && enemy.drops.length > 0 && (
            <p><span className="text-muted-foreground">Drops:</span> {enemy.drops.join(", ")}</p>
          )}
          {enemy.charmsItem && (
            <p><span className="text-muted-foreground">Charm:</span> <span className="text-chrono-purple">{enemy.charmsItem}</span></p>
          )}
          {enemy.strategy && (
            <div className="mt-3 p-3 bg-chrono-darker rounded-lg">
              <p className="text-chrono-gold font-medium mb-1 flex items-center gap-2">
                <Swords className="w-4 h-4" /> Estratégia
              </p>
              <p className="text-muted-foreground">{enemy.strategy}</p>
            </div>
          )}
          {enemy.recommendedLevel && (
            <p><span className="text-muted-foreground">Nível Recomendado:</span> <span className="text-chrono-green">{enemy.recommendedLevel}+</span></p>
          )}
        </div>
      )}
    </div>
  );
}

export default function Bestiario() {
  const [search, setSearch] = useState("");
  const [selectedEra, setSelectedEra] = useState("Todas");
  
  const filterBySearch = (enemy: Enemy) => 
    enemy.name.toLowerCase().includes(search.toLowerCase()) ||
    enemy.description.toLowerCase().includes(search.toLowerCase());
    
  const filterByEra = (enemy: Enemy) => 
    selectedEra === "Todas" || enemy.era === selectedEra;
  
  const filteredEnemies = enemies.filter(e => filterBySearch(e) && filterByEra(e));
  const filteredBosses = bosses.filter(e => filterBySearch(e) && filterByEra(e));

  return (
    <Layout>
      <div className="px-6 py-12 max-w-6xl mx-auto">
        <SectionHeader 
          title="Bestiário" 
          subtitle="Todos os inimigos e bosses de Chrono Trigger"
          icon={<Skull className="w-8 h-8" />}
        />
        
        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar inimigo..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-chrono-darker border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {eras.map(era => (
              <button
                key={era}
                onClick={() => setSelectedEra(era)}
                className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                  selectedEra === era 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {era}
              </button>
            ))}
          </div>
        </div>

        <Tabs defaultValue="bosses" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="bosses">Bosses ({filteredBosses.length})</TabsTrigger>
            <TabsTrigger value="enemies">Inimigos Comuns ({filteredEnemies.length})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="bosses">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredBosses.map(boss => (
                <EnemyCard key={boss.id} enemy={boss} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="enemies">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredEnemies.map(enemy => (
                <EnemyCard key={enemy.id} enemy={enemy} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Legend */}
        <div className="mt-12 p-6 card-chrono">
          <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" /> Legenda de Fraquezas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="text-muted-foreground">Raio (Lightning)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-orange-500"></span>
              <span className="text-muted-foreground">Fogo (Fire)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
              <span className="text-muted-foreground">Água/Gelo (Water/Ice)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-purple-500"></span>
              <span className="text-muted-foreground">Sombra (Shadow)</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
