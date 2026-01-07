import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  variant?: "default" | "highlight";
}

export function FeatureCard({ title, description, icon, href, variant = "default" }: FeatureCardProps) {
  return (
    <Link to={href} className="block group">
      <div className={cn(
        "card-chrono p-6 h-full transition-all duration-300",
        "hover:border-primary/50 hover:shadow-[0_0_30px_hsl(185_80%_50%/0.1)]",
        variant === "highlight" && "border-primary/30 bg-primary/5"
      )}>
        <div className={cn(
          "w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300",
          "bg-primary/10 text-primary",
          "group-hover:bg-primary/20 group-hover:scale-110"
        )}>
          {icon}
        </div>
        <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm">
          {description}
        </p>
      </div>
    </Link>
  );
}
