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

  // Auto-expand based on current route
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
        "fixed left-0 top-0 h-full bg-sidebar border-r border-sidebar-border z-40",
        "transform transition-all duration-300 ease-in-out",
        "lg:translate-x-0",
        mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        collapsed ? "w-16" : "w-72"
      )}>
        {/* Logo */}
        <div className={cn(
          "border-b border-sidebar-border",
          collapsed ? "p-3" : "p-6"
        )}>
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
              <div className={cn(
                "rounded-lg bg-primary/20 flex items-center justify-center glow-cyan",
                collapsed ? "w-10 h-10" : "w-10 h-10"
              )}>
                <Clock className="w-6 h-6 text-primary" />
              </div>
              {!collapsed && (
                <div>
                  <h1 className="font-pixel text-xs text-primary leading-tight">CHRONO</h1>
                  <h2 className="font-display text-sm font-bold text-foreground">LORE HUB</h2>
                </div>
              )}
            </Link>
            {!collapsed && <ThemeToggle />}
          </div>
        </div>

        {/* Navigation */}
        <nav className={cn(
          "h-[calc(100%-140px)] overflow-y-auto",
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

        {/* Collapse Button */}
        <div className={cn(
          "absolute bottom-0 left-0 right-0 border-t border-sidebar-border",
          collapsed ? "p-2" : "p-4"
        )}>
          <div className={cn(
            "flex items-center",
            collapsed ? "justify-center" : "justify-between"
          )}>
            {collapsed && <ThemeToggle />}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleCollapsed}
              className="text-muted-foreground hover:text-foreground"
            >
              {collapsed ? (
                <PanelLeft className="w-5 h-5" />
              ) : (
                <PanelLeftClose className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}
