import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Clock } from "lucide-react";

interface TimelineEvent {
  year: string;
  era: string;
  title: string;
  description: string;
  importance: "major" | "minor";
  color: string;
}

const timelineEvents: TimelineEvent[] = [
  // 65M BC
  {
    year: "65.000.000 BC",
    era: "Era Pré-Histórica",
    title: "Lavos Cai na Terra",
    description: "Um parasita alienígena chamado Lavos cai do espaço, causando extinção em massa. Ele se enterra profundamente no planeta para absorver DNA e energia.",
    importance: "major",
    color: "bg-era-prehistoric",
  },
  {
    year: "65.000.000 BC",
    era: "Era Pré-Histórica",
    title: "Guerra Humanos vs Reptites",
    description: "O povo Ioka, liderado por Ayla, luta contra os Reptites, uma raça de répteis inteligentes que disputam o domínio da Terra.",
    importance: "major",
    color: "bg-era-prehistoric",
  },
  {
    year: "65.000.000 BC",
    era: "Era Pré-Histórica",
    title: "Queda de Azala",
    description: "Crono e seus aliados derrotam Azala, líder dos Reptites. A queda de Lavos causa a extinção dos dinossauros e Reptites.",
    importance: "major",
    color: "bg-era-prehistoric",
  },
  // 12000 BC
  {
    year: "12.000 BC",
    era: "Antiguidade",
    title: "Ascensão do Reino de Zeal",
    description: "Uma civilização mágica avançada flutua nos céus. A Rainha Zeal descobre Lavos e começa a drenar seu poder.",
    importance: "major",
    color: "bg-era-antiquity",
  },
  {
    year: "12.000 BC",
    era: "Antiguidade",
    title: "Construção do Mammon Machine",
    description: "Os Gurus de Zeal constroem uma máquina para drenar energia de Lavos. Schala é forçada a alimentá-la com seu poder.",
    importance: "major",
    color: "bg-era-antiquity",
  },
  {
    year: "12.000 BC",
    era: "Antiguidade",
    title: "Queda de Zeal",
    description: "A Rainha Zeal desperta Lavos. O reino flutuante cai. Os Gurus são dispersos pelo tempo. Janus (futuro Magus) é enviado para 600 AD.",
    importance: "major",
    color: "bg-era-antiquity",
  },
  // 600 AD
  {
    year: "600 AD",
    era: "Idade Média",
    title: "Guerra dos Mystics",
    description: "Magus lidera um exército de Mystics contra o Reino de Guardia. Seu verdadeiro objetivo é invocar Lavos para destruí-lo.",
    importance: "major",
    color: "bg-era-middle",
  },
  {
    year: "600 AD",
    era: "Idade Média",
    title: "Glenn se Torna Frog",
    description: "Magus mata Cyrus, o herói de Guardia, e transforma seu escudeiro Glenn em um sapo humanoid.",
    importance: "major",
    color: "bg-era-middle",
  },
  {
    year: "600 AD",
    era: "Idade Média",
    title: "Derrota de Magus",
    description: "Crono e seus aliados confrontam Magus em seu castelo. O ritual de invocação é interrompido, criando um portal temporal.",
    importance: "major",
    color: "bg-era-middle",
  },
  // 1000 AD
  {
    year: "1000 AD",
    era: "Era Presente",
    title: "Festival do Milênio",
    description: "O reino de Guardia celebra mil anos de paz. Crono encontra Marle no festival e conhece a invenção de Lucca.",
    importance: "major",
    color: "bg-era-present",
  },
  {
    year: "1000 AD",
    era: "Era Presente",
    title: "Acidente do Telepod",
    description: "O pingente de Marle reage com o Telepod de Lucca, criando um portal temporal que a envia para 600 AD.",
    importance: "major",
    color: "bg-era-present",
  },
  {
    year: "1000 AD",
    era: "Era Presente",
    title: "Julgamento de Crono",
    description: "Crono é preso e julgado pelo suposto sequestro da princesa. Lucca o resgata e eles fogem através do tempo.",
    importance: "major",
    color: "bg-era-present",
  },
  // 1999 AD
  {
    year: "1999 AD",
    era: "Dia de Lavos",
    title: "Dia de Lavos",
    description: "Lavos emerge da Terra e destrói a civilização. Este é o apocalipse que os heróis tentam prevenir.",
    importance: "major",
    color: "bg-era-future",
  },
  // 2300 AD
  {
    year: "2300 AD",
    era: "Era Futura",
    title: "Mundo Devastado",
    description: "Os heróis chegam ao futuro e testemunham as consequências do Dia de Lavos. Encontram Robo e descobrem gravações do apocalipse.",
    importance: "major",
    color: "bg-era-future",
  },
  {
    year: "2300 AD",
    era: "Era Futura",
    title: "Descoberta do Projeto Mother Brain",
    description: "No Domo Geno, os heróis enfrentam uma IA maligna que controla os robôs sobreviventes.",
    importance: "minor",
    color: "bg-era-future",
  },
];

export default function LinhaDoTempoPage() {
  return (
    <Layout>
      <div className="px-6 py-12 max-w-5xl mx-auto">
        <SectionHeader 
          title="Linha do Tempo Completa"
          subtitle="Todos os eventos importantes através das eras"
          icon={<Clock className="w-5 h-5" />}
        />

        <div className="mb-8 p-4 rounded-lg bg-chrono-red/10 border border-chrono-red/30">
          <p className="text-chrono-red text-sm font-medium flex items-center gap-2">
            ⚠️ ALERTA DE SPOILERS: Esta página contém detalhes importantes da história.
          </p>
        </div>

        {/* Era Navigation */}
        <div className="flex flex-wrap gap-2 mb-12">
          {[
            { name: "65M BC", color: "bg-era-prehistoric" },
            { name: "12000 BC", color: "bg-era-antiquity" },
            { name: "600 AD", color: "bg-era-middle" },
            { name: "1000 AD", color: "bg-era-present" },
            { name: "1999 AD", color: "bg-era-future" },
            { name: "2300 AD", color: "bg-era-future" },
          ].map((era) => (
            <a 
              key={era.name}
              href={`#${era.name.replace(/\s/g, '-')}`}
              className={`px-4 py-2 rounded-lg ${era.color} text-white text-sm font-medium hover:scale-105 transition-transform`}
            >
              {era.name}
            </a>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-era-prehistoric via-era-present to-era-future" />

          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div 
                key={`${event.year}-${index}`}
                id={event.year.replace(/\s/g, '-')}
                className="relative flex gap-6"
              >
                {/* Dot */}
                <div className={`w-12 h-12 rounded-full ${event.color} flex items-center justify-center shrink-0 z-10 border-4 border-background`}>
                  <Clock className="w-5 h-5 text-white" />
                </div>

                {/* Content */}
                <div className={`flex-1 card-chrono p-6 ${event.importance === 'major' ? 'border-l-4 border-l-primary' : ''}`}>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className={`era-badge ${event.color}`}>{event.year}</span>
                    <span className="text-muted-foreground text-sm">{event.era}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Paradox Section */}
        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            Paradoxos Temporais Explicados
          </h2>
          
          <div className="space-y-6">
            <div className="card-chrono p-6">
              <h3 className="font-display font-bold text-chrono-purple mb-2">
                O Paradoxo de Marle
              </h3>
              <p className="text-muted-foreground text-sm">
                Quando Marle viaja para 600 AD, ela é confundida com sua ancestral, a Rainha Leene. 
                Isso interrompe o resgate da rainha real, causando a não-existência temporária de Marle. 
                Crono resolve isso ajudando a resgatar a verdadeira rainha.
              </p>
            </div>

            <div className="card-chrono p-6">
              <h3 className="font-display font-bold text-chrono-cyan mb-2">
                A Morte de Crono
              </h3>
              <p className="text-muted-foreground text-sm">
                Crono é morto por Lavos no Ocean Palace. Os heróis usam um dispositivo chamado 
                Chrono Trigger (Clone de Tempo) para substituí-lo no momento exato de sua morte, 
                criando um loop fechado que salva sua vida.
              </p>
            </div>

            <div className="card-chrono p-6">
              <h3 className="font-display font-bold text-chrono-gold mb-2">
                Magus é Janus
              </h3>
              <p className="text-muted-foreground text-sm">
                Janus, o jovem príncipe de Zeal em 12.000 BC, é enviado para 600 AD durante a 
                queda do reino. Lá, ele cresce para se tornar Magus, o mago que tenta invocar 
                Lavos - não para servi-lo, mas para destruí-lo e vingar sua irmã Schala.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
