import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MARKETING_CONFIG } from '../../config/marketing';
import { useActor } from '../../hooks/useActor';
import { checkRateLimit } from '../../lib/rateLimit';
import { getGeneratedAssetUrl } from '../../lib/assetUrl';
import ImageWithFallback from '../common/ImageWithFallback';
import { Loader2 } from 'lucide-react';

export default function HeroSection() {
  const { actor } = useActor();
  const [isChecking, setIsChecking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleWhatsAppClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsChecking(true);
    setError(null);

    const result = await checkRateLimit(actor, 'whatsapp');

    if (result.allowed) {
      // Open WhatsApp in new tab
      window.open(MARKETING_CONFIG.whatsapp.link, '_blank', 'noopener,noreferrer');
      setIsChecking(false);
    } else {
      // Show error message
      setError(result.error || 'Unable to proceed. Please try again later.');
      setIsChecking(false);
      // Clear error after 5 seconds
      setTimeout(() => setError(null), 5000);
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={getGeneratedAssetUrl('hero-wheat-field.dim_1920x1080.webp')}
          alt="Golden wheat field"
          className="w-full h-full object-cover"
          loading="eager"
          fallbackClassName="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
          MagadhPrime
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3">
          Premium Quality Wheat Flour
        </p>
        <p className="text-lg md:text-xl mb-6 text-gray-200">
          Powered by MAGADH FLOUR MILL
        </p>
        <p className="text-base md:text-lg max-w-3xl mx-auto mb-8 leading-relaxed text-gray-100">
          Processed with advanced milling technology to deliver purity, nutrition, and consistency.
        </p>
        <div className="flex flex-col items-center gap-3">
          <Button
            onClick={handleWhatsAppClick}
            disabled={isChecking}
            size="lg"
            className="bg-whatsapp hover:bg-whatsapp-dark text-white text-lg px-8 py-6 h-auto shadow-lg"
          >
            {isChecking ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Checking...
              </>
            ) : (
              '➡️ Order on WhatsApp'
            )}
          </Button>
          {error && (
            <div className="bg-destructive/90 text-white px-4 py-2 rounded-lg text-sm max-w-md">
              {error}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
