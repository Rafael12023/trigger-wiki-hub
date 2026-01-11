import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Download, HardDrive, AlertTriangle, Gamepad2, Monitor, Smartphone } from "lucide-react";
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
    id: "snes-usa",
    title: "Chrono Trigger (USA)",
    platform: "Super Nintendo",
    platformIcon: <Gamepad2 className="w-5 h-5" />,
    region: "USA",
    fileSize: "4 MB",
    fileName: "chrono-trigger-usa.sfc",
    downloadUrl: "/roms/chrono-trigger-usa.sfc",
    description: "Versão americana original do SNES. A versão mais popular e recomendada para primeira jogada.",
  },
  {
    id: "snes-japan",
    title: "Chrono Trigger (Japan)",
    platform: "Super Nintendo",
    platformIcon: <Gamepad2 className="w-5 h-5" />,
    region: "Japan",
    fileSize: "4 MB",
    fileName: "chrono-trigger-japan.sfc",
    downloadUrl: "/roms/chrono-trigger-japan.sfc",
    description: "Versão japonesa original. Contém textos em japonês e algumas diferenças sutis.",
  },
  {
    id: "nds",
    title: "Chrono Trigger (DS)",
    platform: "Nintendo DS",
    platformIcon: <Monitor className="w-5 h-5" />,
    region: "USA",
    fileSize: "64 MB",
    fileName: "chrono-trigger-ds.nds",
    downloadUrl: "/roms/chrono-trigger-ds.nds",
    description: "Versão para Nintendo DS com conteúdo extra, novo final e dungeon exclusiva.",
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

        {/* Nota para o desenvolvedor */}
        <Card className="mt-8 border-primary/50 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-sm text-primary">📁 Nota para Desenvolvedor</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Para adicionar novas ROMs, coloque os arquivos na pasta <code className="bg-muted px-1 rounded">public/roms/</code> e 
              edite o array <code className="bg-muted px-1 rounded">romFiles</code> no arquivo <code className="bg-muted px-1 rounded">src/pages/Downloads.tsx</code>.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
