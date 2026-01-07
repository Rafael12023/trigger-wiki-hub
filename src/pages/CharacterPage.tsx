import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Swords, Sparkles, Shield, Heart } from "lucide-react";
import { charactersData, type CharacterData } from "@/data/characters";

const defaultCharacter: CharacterData = {
  name: "Personagem",
  title: "Título",
  era: "Era",
  element: "Elemento",
  weapon: "Arma",
  bio: "Biografia em desenvolvimento...",
  story: "História em desenvolvimento...",
  stats: { hp: "-", mp: "-", power: "-", magic: "-", speed: "-" },
  techs: { single: [], double: [], triple: [] },
  bestEquipment: { weapon: "-", armor: "-", accessory: "-" },
  color: "text-primary",
  imageUrl: "",
};

export default function CharacterPage() {
  const { slug } = useParams<{ slug: string }>();
  const character = slug ? charactersData[slug] || defaultCharacter : defaultCharacter;

  return (
    <Layout>
      <div className="px-6 py-12 max-w-5xl mx-auto">
        {/* Back Link */}
        <Link 
          to="/personagens"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para Personagens
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Image */}
          <div className="shrink-0">
            <div className="w-48 h-48 card-chrono overflow-hidden flex items-center justify-center bg-chrono-darker">
              <img 
                src={character.imageUrl} 
                alt={`Sprite de ${character.name}`}
                className="w-full h-full object-contain p-4"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            <p className="text-center text-muted-foreground text-xs mt-2">
              Sprite oficial de {character.name}
            </p>
          </div>

          {/* Info */}
          <div className="flex-1">
            <SectionHeader 
              title={character.name}
              subtitle={character.title}
            />
            
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="era-badge era-present">{character.era}</span>
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                {character.element}
              </span>
              <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                {character.weapon}
              </span>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {character.bio}
            </p>
          </div>
        </div>

        {/* Story */}
        <section className="mb-12">
          <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-chrono-red" />
            História do Personagem
          </h2>
          <div className="card-chrono p-6">
            <p className="text-muted-foreground leading-relaxed">
              {character.story}
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-12">
          <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-chrono-gold" />
            Atributos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(character.stats).map(([stat, value]) => (
              <div key={stat} className="card-chrono p-4 text-center">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {stat === 'hp' ? 'HP' : stat === 'mp' ? 'MP' : stat.charAt(0).toUpperCase() + stat.slice(1)}
                </div>
                <div className={`font-display font-bold ${character.color}`}>{value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Techs */}
        <section className="mb-12">
          <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-chrono-purple" />
            Técnicas (Techs)
          </h2>
          
          {/* Single Techs */}
          {character.techs.single.length > 0 && (
            <div className="mb-6">
              <h3 className="font-medium text-foreground mb-3">Técnicas Individuais</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {character.techs.single.map((tech) => (
                  <div key={tech.name} className="card-chrono p-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className={`font-medium ${character.color}`}>{tech.name}</span>
                      <span className="text-sm text-muted-foreground">{tech.mp} MP</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Double Techs */}
          {character.techs.double.length > 0 && (
            <div className="mb-6">
              <h3 className="font-medium text-foreground mb-3">Técnicas Duplas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {character.techs.double.map((tech) => (
                  <div key={tech.name} className="card-chrono p-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className={`font-medium ${character.color}`}>{tech.name}</span>
                      <span className="text-sm text-primary">+ {tech.partner}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Triple Techs */}
          {character.techs.triple.length > 0 && (
            <div>
              <h3 className="font-medium text-foreground mb-3">Técnicas Triplas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {character.techs.triple.map((tech) => (
                  <div key={tech.name} className="card-chrono p-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className={`font-medium ${character.color}`}>{tech.name}</span>
                      <span className="text-sm text-primary">+ {tech.partners}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Best Equipment */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Swords className="w-5 h-5 text-chrono-green" />
            Melhor Equipamento
          </h2>
          <div className="card-chrono p-6">
            <div className="space-y-4">
              <div>
                <span className="text-muted-foreground text-sm">Arma:</span>
                <p className={`font-medium ${character.color}`}>{character.bestEquipment.weapon}</p>
              </div>
              <div>
                <span className="text-muted-foreground text-sm">Armadura:</span>
                <p className={`font-medium ${character.color}`}>{character.bestEquipment.armor}</p>
              </div>
              <div>
                <span className="text-muted-foreground text-sm">Acessório:</span>
                <p className={`font-medium ${character.color}`}>{character.bestEquipment.accessory}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
