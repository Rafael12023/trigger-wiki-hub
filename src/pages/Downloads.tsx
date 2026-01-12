import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Download, HardDrive, AlertTriangle, Gamepad2, Monitor, Smartphone, Wrench, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
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
  coverImage: string;
}

// ROMs disponíveis para download
// Para adicionar uma nova ROM:
// 1. Coloque o arquivo na pasta public/roms/
// 2. Coloque a imagem da capa na pasta public/images/covers/
// 3. Adicione um novo objeto neste array com os dados da ROM
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
    coverImage: "/images/covers/chrono-trigger-snes.jpg",
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
    coverImage: "/images/covers/chrono-trigger-hack.jpg",
  },
];

export default function Downloads() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const handleDownload = (rom: RomFile) => {
    // Abre o link de download
    window.open(rom.downloadUrl, '_blank');
  };

  const handleImageClick = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
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
              <CardContent className="p-4">
                <div className="flex gap-4">
                  {/* Capa do Jogo */}
                  <button 
                    onClick={() => handleImageClick(rom.coverImage, `Capa de ${rom.title}`)}
                    className="w-24 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-muted border border-border cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all"
                  >
                    <img 
                      src={rom.coverImage} 
                      alt={`Capa de ${rom.title}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.svg';
                      }}
                    />
                  </button>
                  
                  {/* Conteúdo */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-md bg-primary/20 text-primary">
                          {rom.platformIcon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{rom.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>{rom.platform}</span>
                            <Badge variant="secondary" className="text-xs">
                              {rom.region}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline" className="flex-shrink-0 flex items-center gap-1 text-xs">
                        <HardDrive className="w-3 h-3" />
                        {rom.fileSize}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {rom.description}
                    </p>
                    <div className="flex items-center justify-between gap-2">
                      <code className="text-xs bg-muted px-2 py-1 rounded truncate">
                        {rom.fileName}
                      </code>
                      <Button size="sm" onClick={() => handleDownload(rom)} className="gap-1.5 flex-shrink-0">
                        <Download className="w-4 h-4" />
                        Download
                      </Button>
                    </div>
                  </div>
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
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    {/* Capa do Hack */}
                    <button 
                      onClick={() => handleImageClick(rom.coverImage, `Capa de ${rom.title}`)}
                      className="w-24 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-muted border border-border cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all"
                    >
                      <img 
                        src={rom.coverImage} 
                        alt={`Capa de ${rom.title}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                      />
                    </button>
                    
                    {/* Conteúdo */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-md bg-orange-500/20 text-orange-500">
                            {rom.platformIcon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{rom.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span>{rom.platform}</span>
                              <Badge variant="secondary" className="text-xs bg-orange-500/20 text-orange-500">
                                Hack
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <Badge variant="outline" className="flex-shrink-0 flex items-center gap-1 text-xs">
                          <HardDrive className="w-3 h-3" />
                          {rom.fileSize}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {rom.description}
                      </p>
                      <div className="flex items-center justify-between gap-2">
                        <code className="text-xs bg-muted px-2 py-1 rounded truncate">
                          {rom.fileName}
                        </code>
                        <Button size="sm" onClick={() => handleDownload(rom)} variant="outline" className="gap-1.5 flex-shrink-0">
                          <Download className="w-4 h-4" />
                          Download
                        </Button>
                      </div>
                    </div>
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

      {/* Modal de visualização de imagem */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-2xl p-2 bg-background/95 backdrop-blur-sm">
          <DialogTitle className="sr-only">{selectedImage?.alt || "Visualização da imagem"}</DialogTitle>
          <div className="relative">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-1 -right-1 z-10 p-1.5 rounded-full bg-background border border-border hover:bg-muted transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <img 
              src={selectedImage?.src} 
              alt={selectedImage?.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              onError={(e) => {
                e.currentTarget.src = '/placeholder.svg';
              }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
