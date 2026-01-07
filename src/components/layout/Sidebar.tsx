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
  Home,
  PanelLeftClose,
  PanelLeft
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useSidebarContext } from "@/contexts/SidebarContext";

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const { collapsed, toggleCollapsed } = useSidebarContext();

  const isActive = (href: string) => location.pathname === href;
  const isChildActive = (item: NavItem) => {
    return item.children?.some(child => location.pathname.startsWith(child.href));
  };
  const isParentActive = (item: NavItem) => {
    if (isActive(item.href)) return true;
    if (location.pathname.startsWith(item.href) && item.href !== "/") return true;
    return isChildActive(item);
  };

  const isExpanded = (item: NavItem) => {
    if (!item.children) return false;
    return isParentActive(item);
  };

  const [manualExpanded, setManualExpanded] = useState<string[]>([]);
  
  const toggleExpand = (label: string) => {
    setManualExpanded(prev => 
      prev.includes(label) 
        ? prev.filter(l => l !== label)
        : [...prev, label]
    );
  };

  const shouldShowChildren = (item: NavItem) => {
    if (collapsed) return false;
    return isExpanded(item) || manualExpanded.includes(item.label);
  };

  const NavItemContent = ({ item }: { item: NavItem }) => {
    if (collapsed) {
      return (
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Link
              to={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "flex items-center justify-center p-2.5 rounded-lg transition-all",
                "hover:bg-sidebar-accent",
                isParentActive(item)
                  ? "text-primary bg-sidebar-accent"
                  : "text-sidebar-foreground"
              )}
            >
              {item.icon}
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right" className="font-medium">
            {item.label}
          </TooltipContent>
        </Tooltip>
      );
    }

    if (item.children) {
      return (
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
            {shouldShowChildren(item) 
              ? <ChevronDown className="w-4 h-4" />
              : <ChevronRight className="w-4 h-4" />
            }
          </button>
          {shouldShowChildren(item) && (
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
      );
    }

    return (
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
    );
  };

  return (
    <>
      {/* Mobile Header - fixo no topo */}
      <header className="fixed top-0 left-0 right-0 h-14 bg-sidebar border-b border-sidebar-border z-50 lg:hidden flex items-center justify-between px-4">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
        
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <Clock className="w-5 h-5 text-primary" />
          </div>
          <span className="font-display text-sm font-bold">CHRONO LORE</span>
        </Link>
        
        <ThemeToggle />
      </header>

      {/* Overlay para mobile */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar Desktop - colapsável */}
      <aside className={cn(
        "fixed left-0 top-0 h-full bg-sidebar border-r border-sidebar-border z-40",
        "hidden lg:flex lg:flex-col",
        "transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-72"
      )}>
        {/* Header da Sidebar Desktop */}
        <div className={cn(
          "border-b border-sidebar-border shrink-0",
          collapsed ? "p-2" : "p-4"
        )}>
          <div className={cn(
            "flex items-center",
            collapsed ? "justify-center" : "justify-between"
          )}>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleCollapsed}
              className={cn(
                "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent",
                collapsed ? "w-10 h-10 p-0" : "h-8 px-2 gap-2"
              )}
            >
              {collapsed ? (
                <PanelLeft className="w-4 h-4" />
              ) : (
                <>
                  <PanelLeftClose className="w-4 h-4" />
                  <span className="text-xs">Recolher</span>
                </>
              )}
            </Button>
            {!collapsed && <ThemeToggle />}
          </div>
          
          {/* Logo */}
          <Link to="/" className={cn("flex items-center gap-3 mt-3", collapsed && "justify-center")}>
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center glow-cyan shrink-0">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            {!collapsed && (
              <div>
                <h1 className="font-pixel text-xs text-primary leading-tight">CHRONO</h1>
                <h2 className="font-display text-sm font-bold text-foreground">LORE HUB</h2>
              </div>
            )}
          </Link>
        </div>

        {/* Navigation Desktop */}
        <nav className={cn(
          "flex-1 overflow-y-auto",
          collapsed ? "p-2" : "p-4"
        )}>
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavItemContent item={item} />
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer Desktop quando colapsado */}
        {collapsed && (
          <div className="p-2 border-t border-sidebar-border flex justify-center shrink-0">
            <ThemeToggle />
          </div>
        )}
      </aside>

      {/* Sidebar Mobile - drawer lateral */}
      <aside className={cn(
        "fixed left-0 top-14 h-[calc(100%-3.5rem)] w-72 bg-sidebar border-r border-sidebar-border z-40",
        "lg:hidden flex flex-col",
        "transition-transform duration-300 ease-in-out",
        mobileOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Navigation Mobile */}
        <nav className="flex-1 overflow-y-auto p-4">
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
                      {shouldShowChildren(item) || manualExpanded.includes(item.label)
                        ? <ChevronDown className="w-4 h-4" />
                        : <ChevronRight className="w-4 h-4" />
                      }
                    </button>
                    {(isExpanded(item) || manualExpanded.includes(item.label)) && (
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