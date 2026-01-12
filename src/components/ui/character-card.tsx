import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface CharacterCardProps {
  name: string;
  title: string;
  era: string;
  description: string;
  imageUrl: string;
  href: string;
  color: "cyan" | "purple" | "gold" | "red" | "green" | "orange";
}

const colorClasses = {
  cyan: "border-chrono-cyan/30 hover:border-chrono-cyan/60 hover:shadow-[0_0_30px_hsl(185_80%_50%/0.2)]",
  purple: "border-chrono-purple/30 hover:border-chrono-purple/60 hover:shadow-[0_0_30px_hsl(270_60%_45%/0.2)]",
  gold: "border-chrono-gold/30 hover:border-chrono-gold/60 hover:shadow-[0_0_30px_hsl(45_90%_55%/0.2)]",
  red: "border-chrono-red/30 hover:border-chrono-red/60 hover:shadow-[0_0_30px_hsl(0_72%_51%/0.2)]",
  green: "border-chrono-green/30 hover:border-chrono-green/60 hover:shadow-[0_0_30px_hsl(150_60%_45%/0.2)]",
  orange: "border-chrono-orange/30 hover:border-chrono-orange/60 hover:shadow-[0_0_30px_hsl(25_95%_55%/0.2)]",
};

const accentClasses = {
  cyan: "text-chrono-cyan",
  purple: "text-chrono-purple",
  gold: "text-chrono-gold",
  red: "text-chrono-red",
  green: "text-chrono-green",
  orange: "text-chrono-orange",
};

export function CharacterCard({ name, title, era, description, imageUrl, href, color }: CharacterCardProps) {
  const [isImageOpen, setIsImageOpen] = useState(false);

  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsImageOpen(true);
  };

  return (
    <>
      <Link to={href} className="block group">
        <div className={cn(
          "card-chrono border-2 overflow-hidden transition-all duration-300",
          colorClasses[color]
        )}>
          {/* Image container */}
          <div className="relative aspect-square bg-chrono-darker overflow-hidden">
            <button
              onClick={handleImageClick}
              className="w-full h-full cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all"
            >
              <img 
                src={imageUrl} 
                alt={name}
                className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                style={{ imageRendering: "pixelated" }}
              />
            </button>
            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60 pointer-events-none" />
            
            {/* Era badge */}
            <span className={cn(
              "absolute top-3 right-3 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider",
              "bg-background/80 backdrop-blur-sm pointer-events-none",
              accentClasses[color]
            )}>
              {era}
            </span>
          </div>

          {/* Content */}
          <div className="p-4">
            <h3 className={cn("font-display text-xl font-bold mb-1", accentClasses[color])}>
              {name}
            </h3>
            <p className="text-muted-foreground text-sm mb-2">{title}</p>
            <p className="text-foreground/80 text-sm line-clamp-2">{description}</p>
          </div>
        </div>
      </Link>

      {/* Image Lightbox Dialog */}
      <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
        <DialogContent className="max-w-3xl p-2 bg-background/95 backdrop-blur-sm">
          <DialogTitle className="sr-only">{name}</DialogTitle>
          <div className="relative">
            <button 
              onClick={() => setIsImageOpen(false)}
              className="absolute -top-1 -right-1 z-10 p-1.5 rounded-full bg-background border border-border hover:bg-muted transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <img 
              src={imageUrl} 
              alt={name}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              style={{ imageRendering: 'pixelated' }}
              onError={(e) => {
                e.currentTarget.src = '/placeholder.svg';
              }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
