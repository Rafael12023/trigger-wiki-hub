import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Download, HardDrive, AlertTriangle, Gamepad2, Monitor, Smartphone, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface RomFile {
  id: string;
  title: string;
  platform: string;
  platformIcon: React.ReactNode;
  region: string;
  fileSize: string;
  fileName: string;
  downloadUrl: string;
  description: string;
}

// ROMs disponíveis para download
// Para adicionar uma nova ROM:
// 1. Coloque o arquivo na pasta public/roms/
// 2. Adicione um novo objeto neste array com os dados da ROM
const romFiles: RomFile[] = [
  {
    id: "snes-pt-br",
    title: "Chrono Trigger (Português BR)",
    platform: "Super Nintendo",
    platformIcon: <Gamepad2 className="w-5 h-5" />,
    region: "PT-BR",
    fileSize: "4.097 MB",
    fileName: "Chrono Trigger (BR).smc",
    downloadUrl: "/roms/Chrono Trigger (BR).smc",
    description: "Versão americana original do SNES Traduzida em PTBR. A versão mais popular e recomendada para primeira jogada.",
  },
];

// ROM Hacks disponíveis para download
const hackFiles: RomFile[] = [
  {
    id: "HackbyGabriel",
    title: "Chrono Trigger (HackbyGabriel)",
    platform: "Super Nintendo",
    platformIcon: <Gamepad2 className="w-5 h-5" />,
    region: "USA",
    fileSize: "6.144 MB",
    fileName: "Chrono Trigger (HackbyGabriel).smc",
    downloadUrl: "/roms/Chrono Trigger (HackbyGabriel).smc",
    description: "Versão modificada com a dificuldade aumentada, itens novos e magias trocadas. (Nem o proprio criador conseguiu derrotar a ultima evolução do Lavos)",
  },
];

export default function Downloads() {
  const handleDownload = (rom: RomFile) => {
    // Abre o link de download
    window.open(rom.downloadUrl, '_blank');
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          title="Downloads"
          subtitle="Faça o download das ROMs de Chrono Trigger para jogar em emuladores"
        />

        {/* Aviso Legal */}
        <Card className="mb-8 border-yellow-500/50 bg-yellow-500/10">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-yellow-500">
              <AlertTriangle className="w-5 h-5" />
              Aviso Legal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              As ROMs disponibilizadas aqui são para fins educacionais e de preservação. 
              Certifique-se de que você possui uma cópia original do jogo antes de baixar. 
              O download de ROMs pode ser ilegal em sua região se você não possuir o jogo original.
            </p>
          </CardContent>
        </Card>

        {/* Lista de ROMs */}
        <div className="grid gap-4">
          {romFiles.map((rom) => (
            <Card key={rom.id} className="hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/20 text-primary">
                      {rom.platformIcon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{rom.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <span>{rom.platform}</span>
                        <Badge variant="secondary" className="text-xs">
                          {rom.region}
                        </Badge>
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <HardDrive className="w-3 h-3" />
                    {rom.fileSize}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {rom.description}
                </p>
                <div className="flex items-center justify-between">
                  <code className="text-xs bg-muted px-2 py-1 rounded">
                    {rom.fileName}
                  </code>
                  <Button onClick={() => handleDownload(rom)} className="gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Seção de ROM Hacks */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
            <Wrench className="w-6 h-6 text-primary" />
            ROM Hacks
          </h2>
          <p className="text-muted-foreground mb-6">
            Modificações criadas por fãs com novas histórias, personagens e mecânicas.
          </p>
          <div className="grid gap-4">
            {hackFiles.map((rom) => (
              <Card key={rom.id} className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-orange-500/20 text-orange-500">
                        {rom.platformIcon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{rom.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-1">
                          <span>{rom.platform}</span>
                          <Badge variant="secondary" className="text-xs bg-orange-500/20 text-orange-500">
                            Hack
                          </Badge>
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <HardDrive className="w-3 h-3" />
                      {rom.fileSize}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {rom.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <code className="text-xs bg-muted px-2 py-1 rounded">
                      {rom.fileName}
                    </code>
                    <Button onClick={() => handleDownload(rom)} variant="outline" className="gap-2">
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Instruções */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-primary" />
              Como Jogar
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Emuladores Recomendados:</h4>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc">
                <li><strong>SNES:</strong> SNES9x, ZSNES, bsnes, RetroArch</li>
                <li><strong>Nintendo DS:</strong> DeSmuME, melonDS, RetroArch</li>
                <li><strong>Android:</strong> Lemuroid, DraStic (DS), Snes9x EX+ (SNES)</li>
                <li><strong>iOS:</strong> Delta, Provenance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Passos:</h4>
              <ol className="text-sm text-muted-foreground space-y-1 ml-4 list-decimal">
                <li>Baixe um emulador compatível com a plataforma</li>
                <li>Faça o download da ROM desejada</li>
                <li>Abra o emulador e carregue o arquivo da ROM</li>
                <li>Aproveite a aventura!</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
