import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Clock, 
  Users, 
  Scroll, 
  Map, 
  Swords, 
  Sparkles, 
  Skull,
  Backpack,
  Star,
  GitBranch,
  RefreshCw,
  Gamepad2,
  BookOpen,
  Gift,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Home
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "Início", href: "/", icon: <Home className="w-5 h-5" /> },
  { 
    label: "História", 
    href: "/historia", 
    icon: <Scroll className="w-5 h-5" />,
    children: [
      { label: "Resumo (Sem Spoilers)", href: "/historia/resumo" },
      { label: "História Completa", href: "/historia/completa" },
      { label: "Linha do Tempo", href: "/historia/linha-do-tempo" },
    ]
  },
  { 
    label: "Personagens", 
    href: "/personagens", 
    icon: <Users className="w-5 h-5" />,
    children: [
      { label: "Crono", href: "/personagens/crono" },
      { label: "Marle", href: "/personagens/marle" },
      { label: "Lucca", href: "/personagens/lucca" },
      { label: "Frog", href: "/personagens/frog" },
      { label: "Robo", href: "/personagens/robo" },
      { label: "Ayla", href: "/personagens/ayla" },
      { label: "Magus", href: "/personagens/magus" },
    ]
  },
  { label: "NPCs", href: "/npcs", icon: <Users className="w-5 h-5" /> },
  { label: "Walkthrough", href: "/walkthrough", icon: <Map className="w-5 h-5" /> },
  { label: "Mapas & Locais", href: "/mapas", icon: <Map className="w-5 h-5" /> },
  { label: "Sistema de Combate", href: "/combate", icon: <Swords className="w-5 h-5" /> },
  { label: "Técnicas", href: "/tecnicas", icon: <Sparkles className="w-5 h-5" /> },
  { label: "Inimigos & Bosses", href: "/inimigos", icon: <Skull className="w-5 h-5" /> },
  { label: "Itens & Equipamentos", href: "/itens", icon: <Backpack className="w-5 h-5" /> },
  { label: "Side Quests", href: "/sidequests", icon: <Star className="w-5 h-5" /> },
  { label: "Finais", href: "/finais", icon: <GitBranch className="w-5 h-5" /> },
  { label: "New Game+", href: "/newgameplus", icon: <RefreshCw className="w-5 h-5" /> },
  { label: "Versões", href: "/versoes", icon: <Gamepad2 className="w-5 h-5" /> },
  { label: "Lore & Teorias", href: "/lore", icon: <BookOpen className="w-5 h-5" /> },
  { label: "Extras", href: "/extras", icon: <Gift className="w-5 h-5" /> },
];

export function Sidebar() {
  const location = useLocation();
  const [expanded, setExpanded] = useState<string[]>([]);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleExpand = (label: string) => {
    setExpanded(prev => 
      prev.includes(label) 
        ? prev.filter(l => l !== label)
        : [...prev, label]
    );
  };

  const isActive = (href: string) => location.pathname === href;
  const isParentActive = (item: NavItem) => {
    if (isActive(item.href)) return true;
    return item.children?.some(child => isActive(child.href));
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg bg-card border border-border"
      >
        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 h-full w-72 bg-sidebar border-r border-sidebar-border z-40",
        "transform transition-transform duration-300 ease-in-out",
        "lg:translate-x-0",
        mobileOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Logo */}
        <div className="p-6 border-b border-sidebar-border">
          <Link to="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center glow-cyan">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="font-pixel text-xs text-primary leading-tight">CHRONO</h1>
              <h2 className="font-display text-sm font-bold text-foreground">LORE HUB</h2>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="p-4 h-[calc(100%-88px)] overflow-y-auto">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleExpand(item.label)}
                      className={cn(
                        "w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                        "hover:bg-sidebar-accent",
                        isParentActive(item) 
                          ? "text-primary bg-sidebar-accent" 
                          : "text-sidebar-foreground"
                      )}
                    >
                      <span className="flex items-center gap-3">
                        {item.icon}
                        {item.label}
                      </span>
                      {expanded.includes(item.label) 
                        ? <ChevronDown className="w-4 h-4" />
                        : <ChevronRight className="w-4 h-4" />
                      }
                    </button>
                    {expanded.includes(item.label) && (
                      <ul className="mt-1 ml-8 space-y-1">
                        {item.children.map(child => (
                          <li key={child.href}>
                            <Link
                              to={child.href}
                              onClick={() => setMobileOpen(false)}
                              className={cn(
                                "block px-3 py-2 rounded-lg text-sm transition-all",
                                "hover:bg-sidebar-accent",
                                isActive(child.href)
                                  ? "text-primary bg-sidebar-accent"
                                  : "text-muted-foreground"
                              )}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                      "hover:bg-sidebar-accent",
                      isActive(item.href)
                        ? "text-primary bg-sidebar-accent"
                        : "text-sidebar-foreground"
                    )}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
