import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface ImageLightboxProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  pixelated?: boolean;
}

export function ImageLightbox({ 
  src, 
  alt, 
  className = "", 
  containerClassName = "",
  pixelated = false 
}: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={`cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all overflow-hidden ${containerClassName}`}
      >
        <img 
          src={src} 
          alt={alt}
          className={className}
          style={pixelated ? { imageRendering: 'pixelated' } : undefined}
          onError={(e) => {
            e.currentTarget.src = '/placeholder.svg';
          }}
        />
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl p-2 bg-background/95 backdrop-blur-sm">
          <DialogTitle className="sr-only">{alt}</DialogTitle>
          <div className="relative">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute -top-1 -right-1 z-10 p-1.5 rounded-full bg-background border border-border hover:bg-muted transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <img 
              src={src} 
              alt={alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              style={pixelated ? { imageRendering: 'pixelated' } : undefined}
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
