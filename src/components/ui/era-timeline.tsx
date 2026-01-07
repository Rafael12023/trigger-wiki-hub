import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface Era {
  year: string;
  name: string;
  description: string;
  color: string;
  bgColor: string;
}

const eras: Era[] = [
  {
    year: "65.000.000 BC",
    name: "Era Pré-Histórica",
    description: "A era dos dinossauros e dos primeiros humanos. Ayla lidera o povo Ioka contra os Reptites.",
    color: "text-era-prehistoric",
    bgColor: "bg-era-prehistoric",
  },
  {
    year: "12.000 BC",
    name: "Antiguidade",
    description: "O Reino de Zeal flutua nos céus, alimentado pelo poder de Lavos. Uma era de magia e tragédia.",
    color: "text-era-antiquity",
    bgColor: "bg-era-antiquity",
  },
  {
    year: "600 AD",
    name: "Idade Média",
    description: "O Reino de Guardia enfrenta a ameaça de Magus e seu exército de Mystics.",
    color: "text-era-middle",
    bgColor: "bg-era-middle",
  },
  {
    year: "1000 AD",
    name: "Era Presente",
    description: "O ano em que a aventura começa. O Festival do Milênio e o encontro com Marle.",
    color: "text-era-present",
    bgColor: "bg-era-present",
  },
  {
    year: "2300 AD",
    name: "Era Futura",
    description: "Um mundo devastado pelo Dia de Lavos. Ruínas e sobreviventes lutam pela esperança.",
    color: "text-era-future",
    bgColor: "bg-era-future",
  },
  {
    year: "???",
    name: "Fim dos Tempos",
    description: "Um lugar fora do tempo. O hub dimensional onde os portais se conectam.",
    color: "text-era-endOfTime",
    bgColor: "bg-era-endOfTime",
  },
];

export function EraTimeline() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-chrono-purple to-chrono-gold" />

      <div className="space-y-8">
        {eras.map((era, index) => (
          <Link 
            key={era.year}
            to={`/historia/linha-do-tempo#${era.year.replace(/\s/g, '-')}`}
            className="block group"
          >
            <div className="flex items-start gap-6 relative">
              {/* Timeline dot */}
              <div className={cn(
                "w-16 h-16 rounded-full flex items-center justify-center shrink-0 z-10",
                "border-2 transition-all duration-300",
                era.bgColor,
                "group-hover:scale-110 group-hover:shadow-lg"
              )}>
                <span className="font-pixel text-[8px] text-white text-center leading-tight">
                  {era.year.split(' ')[0]}
                </span>
              </div>

              {/* Content */}
              <div className={cn(
                "flex-1 card-chrono p-4 transition-all duration-300",
                "group-hover:border-primary/50"
              )}>
                <div className="flex items-center gap-3 mb-2">
                  <span className={cn("font-pixel text-xs", era.color)}>{era.year}</span>
                </div>
                <h3 className={cn("font-display text-lg font-bold mb-1", era.color)}>
                  {era.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {era.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
