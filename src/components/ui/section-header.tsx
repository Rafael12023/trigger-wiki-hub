import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  className?: string;
}

export function SectionHeader({ title, subtitle, icon, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-8", className)}>
      <div className="flex items-center gap-3 mb-2">
        {icon && (
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
            {icon}
          </div>
        )}
        <h2 className="font-display text-2xl md:text-3xl font-bold text-gradient-chrono">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-muted-foreground text-lg ml-0 lg:ml-13">
          {subtitle}
        </p>
      )}
    </div>
  );
}
